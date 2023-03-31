import nc from "next-connect";
import { all } from "../../middlewares/index";
import { insertUser, findUserById, updateUserById } from "../../db/index";
import { extractUser } from "src/lib/api-helpers";

//next-connect 모듈은 nextjs에서 api라우팅을 쉽게 해주는 모듈
const handler = nc();

handler.use(all);

//handler를 이용해 get 요청 후 itemlist 데이터 받아오기
handler.get(async (req, res) => {
  const { username } = JSON.parse(req.user);
  const { itemlist } = await findUserByUsername(req.db, username);
  res.json({ itemlist });
});

//새로운 아이템 생성 => 새로운 아이템 생성도 일종의 user 데이터에 대한 Patch 요청이다.
handler.patch(async (req, res) => {
  const { id, itemid, image, title, price, tag, score, memo, url } = req.body;
  if (!id) {
    res.status(401).end();
    return;
  }

  let user = await findUserById(req.db, id);
  user = await updateUserById(req.db, id, {
    ...user,
    itemlist: [
      ...user.itemlist,
      { itemid, image, title, price, tag, score, memo, url },
    ],
  });

  res.json({ user: extractUser(user) });
});

//아이템 수정
handler.patch(async (req, res) => {});

//아이템 삭제
handler.delete((req, res) => {});

export default handler;
