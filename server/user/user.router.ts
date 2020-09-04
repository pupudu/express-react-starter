import { BaseRouter } from '@core/base.router';
import { UserService } from './user.service';
import { inject } from '@core/base.module';
import passport from 'passport';
import Stripe from 'stripe';
import { uuid } from 'uuidv4';

const stripe = new Stripe(
  'sk_test_51HGUvrDOqWcprKpuZu6vskBRg0M6PNsdvQMN0LUyIOuZi97hyNjmLyWfuKgDxiG6s3YKdgaM1a5G70KqIM1Txwpa00OWsn7Ja1',
  {
    apiVersion: '2020-03-02',
  },
);
export class UserRouter extends BaseRouter {
  service = inject(UserService);
  registerRoutes() {
    this.router.post('/checkout', async (req, res) => {
      console.log('Request:', req.body);
      let status;

      try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
          email: token.email,
          source: token.id,
        });
        const idempotencyKey = uuid();
        const charge = await stripe.charges.create(
          {
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            // eslint-disable-next-line @typescript-eslint/camelcase
            receipt_email: token.email,
            description: `Purchased the ${product.name}`,
            shipping: {
              name: token.card.name,
              address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                // eslint-disable-next-line @typescript-eslint/camelcase
                postal_code: token.card.address_zip,
              },
            },
          },
          {
            idempotencyKey,
          },
        );
        console.log('Charge:', { charge });
        status = 'success';
      } catch (error) {
        console.error('Error:', error);
        status = 'failure';
      }
      console.log(status);
      res.json(status);
    });
    this.router.post('/upload', (req: any, res) => {
      if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
      }
      const file = req.files.file;
      console.log(req);
      file.mv(`${__dirname}/../../public/uploads/${file.name}`, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.json({ filePath: `/uploads/${file.name}`, status: 'success' });
      });
    });
    this.router.post('/signup', this.signupUser.bind(this));
    this.router.post(
      '/login',
      passport.authenticate('local', { failureRedirect: '/signup' }),
      function (req, res) {
        res.json('success');
      },
    );
    this.router.get('/isauthenticated', this.checkAuthenticated.bind(this));
    this.router.get('/logout', function (req, res) {
      req.logout();
      res.json('success');
    });
    this.router.get('/get-user-information', this.getUserInformation.bind(this));
  }

  async signupUser(req, res) {
    const { name, birthday, signinAs, email, password, translateFrom, translateTo } = req.body;
    await this.service.saveUser({
      name,
      birthday,
      signinAs,
      email,
      password,
      translateFrom,
      translateTo,
    });
    res.json({ msg: 'Signup Success!', status: 'success' });
  }
  async checkAuthenticated(req, res) {
    if (req.isAuthenticated()) {
      return res.json({ session: true });
    }
    return res.json({ session: false });
  }
  async getUserInformation(req, res) {
    return res.json(await this.service.getUserInformation(req.session.passport.user));
  }
}
