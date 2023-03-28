import nc from "next-connect";
import bcrypt from "bcryptjs";
import { all } from "../../middlewares/index.js";
import { extractUser } from "../../lib/api-helpers";
import { insertUser, findUserByUsername, findUserById } from "../../db/index";

const handler = nc();

handler.use(all);

//유저를 새롭게 생성한다.
handler.post(async (req, res) => {
  const { username, password } = req.body;

  //패스워드나 유저네임이 없을 때
  if (!password || !username) {
    res.status(400).send("Missing field(s)");
    return;
  }

  //username이 이미 사용되고 있을 때
  if (await findUserByUsername(req.db, username)) {
    res.status(403).send("The username has already been used.");
    return;
  }

  //패스워드 해쉬된 상태로 저장
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await insertUser(req.db, {
    password: hashedPassword,
    username,
  });

  //signup한 새로운 유저의 정보를 받아와 user 변수에 넣어주고
  const user = await findUserById(req.db, userId);

  //passportjs 모듈에서 제공하는 Login함수를 사용해 로그인
  //로그인 후 응답은 user 정보에서 extractUser를 이용해 패스워드 제거한 상태로 리턴
  req.login(user, (err) => {
    if (err) throw err;
    res.status(201).json({
      user: extractUser(req.user),
    });
  });
});

export default handler;
