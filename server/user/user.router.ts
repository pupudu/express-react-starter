import { BaseRouter } from '@core/base.router';
import { UserService } from './user.service';
import { inject } from '@core/base.module';
import passport from 'passport';

export class UserRouter extends BaseRouter {
  service = inject(UserService);

  registerRoutes() {
    this.router.post('/signup', this.signupUser.bind(this));
    this.router.post(
      '/login',
      passport.authenticate('local', { failureRedirect: '/login2' }),
      function (req, res) {
        res.json('success');
      },
    );
    this.router.get('/isauthenticated', this.checkAuthenticated.bind(this));
  }

  async signupUser(req, res) {
    const { name, birthday, signinAs, email, password } = req.body;
    await this.service.saveUser({ name, birthday, signinAs, email, password });
    res.json({ msg: 'Signup Success!', status: 'success' });
  }
  async checkAuthenticated(req, res) {
    if (req.isAuthenticated()) {
      return res.json({ session: true });
    }
    return res.json({ session: false });
  }
}
