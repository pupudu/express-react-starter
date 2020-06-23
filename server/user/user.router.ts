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
      passport.authenticate('local', { failureRedirect: '/login' }),
      function (req, res) {
        res.redirect('/');
      },
    );
  }

  async signupUser(req, res) {
    const { name, birthday, gender, email, password } = req.body;
    await this.service.saveUser({ name, birthday, gender, email, password });
    res.json({ msg: 'Signup Success!', status: 'success' });
  }
}
