import passportLocal from 'passport-local';
import passport from 'passport';
import { BaseModule, inject } from '@core/base.module';
import bcrypt from 'bcryptjs';
import { UserService } from './user/user.service';

export class PassportService extends BaseModule {
  //local Stratergy
  LocalStrategy = passportLocal.Strategy;
  service = inject(UserService);

  setup() {
    passport.use(
      new this.LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        const user = await this.service.getUser(email);
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'password incorrect!' });
          }
        });
      }),
    );
    passport.serializeUser((user: any, done) => {
      done(null, user.email);
    });
    passport.deserializeUser(async (email, done) => {
      const user = await this.service.getUser(email);
      done(null, user);
    });
  }
}
