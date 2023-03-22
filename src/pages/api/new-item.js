import { MongoClient } from "mongodb";

// 이 파일의 Url : /api/new-item
//위 url로 요청이 보내지면 아래 함수가 trigger 됨
//if문 때문에 only POST 요청일 때만 trigger된다

async function postNewItem(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ansmeer008:muGcOF9tH71qrB0e@cluster0.rmwt3pc.mongodb.net/items?retryWrites=true&w=majority"
    );
    const db = client.db();
    const itemsCollection = db.collection("items");
    const result = await itemsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "item inserted!" });
  }
}

export default postNewItem;
