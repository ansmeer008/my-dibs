import { nanoid } from "nanoid";

//id로 유저 찾기
export async function findUserById(db, userId) {
  return db
    .collection("users")
    .findOne({
      _id: userId,
    })
    .then((user) => user || null);
}

//유저네임으로 유저 찾기
export async function findUserByUsername(db, username) {
  return db
    .collection("users")
    .findOne({
      username,
    })
    .then((user) => user || null);
}

//id 이용해 유저 업데이트하기
export async function updateUserById(db, id, update) {
  return db
    .collection("users")
    .findOneAndUpdate({ _id: id }, { $set: update }, { returnOriginal: false })
    .then(({ value }) => value);
}

//유저 새롭게 생성하기
export async function insertUser(db, { username, password }) {
  return db
    .collection("users")
    .insertOne({
      _id: nanoid(12),
      username,
      password,
      itemlist: [],
    })
    .then(({ insertedId }) => insertedId);
}
