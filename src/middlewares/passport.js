import passport from "passport";
import bcrypt from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserById, findUserByUsername } from "../db/index";

//passportJS는 NodeJs에서 REST API 구현시 로그인을 쉽게 해주는 모듈

passport.serializeUser((user, done) => {
  done(null, user._id);
});

// passport#160
passport.deserializeUser((req, id, done) => {
  findUserById(req.db, id).then(
    (user) => done(null, user),
    (err) => done(err)
  );
});

passport.use(
  new LocalStrategy(
    { usernameField: "username", passReqToCallback: true },
    async (req, username, password, done) => {
      const user = await findUserByUsername(req.db, username);
      if (user && (await bcrypt.compare(password, user.password)))
        done(null, user);
      else done(null, false, { message: "username or password is incorrect" });
    }
  )
);

export default passport;
