import nc from "next-connect";
import { all } from "../../../middlewares/index";

//next-connect 모듈은 nextjs에서 api라우팅을 쉽게 해주는 모듈
const handler = nc();

handler.use(all);

//handler를 이용해 get 요청 후 password 부분만 제거한 데이터 제공
handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  const { password, ...u } = req.user;
  res.json({ user: u });
});

export default handler;
