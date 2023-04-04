import session from "express-session";
import MongoStore from "connect-mongo";

//express-session과 connect-mongo를 이용해 세션을 구현하는 방식
//세션 구현 시 mongoStore를 함께 넘겨주고 있음

export default function sessionMiddleware(req, res, next) {
  const mongoStore = MongoStore.create({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
  })(req, res, next);
}
