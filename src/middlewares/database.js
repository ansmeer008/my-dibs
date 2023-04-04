import { MongoClient } from "mongodb";

//MongoClient를 통해 MongoDB를 초기화해서 req.db로 넘겨준다
//넘겨주기 전 DB의 Collection들이 createIndex가 되었는지 확인하고
//안 되었으면 createIndex를 해서 넘기는 로직 (createIndex를 한 이유는 쿼리 속도를 높이기 위해)

//global.mongo를 설정한 것은 Hot Reloading시 에러 방지를 위해 사용하는 방식

global.mongo = global.mongo || {};

let indexesCreated = false;
export async function createIndexes(db) {
  await Promise.all([
    db.collection("users").createIndex({ username: 1 }, { unique: true }),
  ]);
  indexesCreated = true;
}

export default async function database(req, res, next) {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await global.mongo.client.connect();
  }
  req.dbClient = global.mongo.client;
  req.db = global.mongo.client.db(process.env.DB_NAME);
  if (!indexesCreated) await createIndexes(req.db);
  return next();
}
