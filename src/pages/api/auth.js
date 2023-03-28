import nc from "next-connect";
import { all } from "../../middlewares/index";
import passport from "../../middlewares/passport";
import { extractUser } from "../../lib/api-helpers";

const handler = nc();

handler.use(all);

//로그인
handler.post(passport.authenticate("local"), (req, res) => {
  res.json({ user: extractUser(req.user) });
});

//로그아웃
handler.delete((req, res) => {
  req.logout();
  res.status(204).end();
});

export default handler;
