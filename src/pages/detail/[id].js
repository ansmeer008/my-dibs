import { useRouter } from "next/router";
import classes from "./index.module.css";
import { BackButton, EditButton, DeleteButton } from "../../components/Button";
import HeartScore from "@/components/detail/HeartScore";
import ItemTags from "@/components/detail/ItemTag";
import { MongoClient, ObjectId } from "mongodb";
import Seo from "@/components/Seo";

export default function Detail(props) {
  const router = useRouter();

  //경로에서 id 받아옴
  // const itemId = router.query.itemId;

  return (
    <div className={classes.container}>
      <Seo title={props.itemData.title} />
      <div className={classes.backButton}>
        <BackButton buttonHandler={() => router.push("/feed")} />
      </div>
      <div className={classes.itemContiner}>
        <div className={classes.itemContents}>
          <div className={classes.imgContainer}>
            <img
              className={classes.image}
              src="https://cdn-icons-png.flaticon.com/512/778/778167.png?w=996&t=st=1679578980~exp=1679579580~hmac=0ffb2e17cddf2cba8feb0f50852ea0f1be79d55cfb7b480d4fdd3ff19b84f3e7"
            />
          </div>
          <div className={classes.textContainer}>
            <div>
              <span>Name. </span>
              <span className={classes.userText}>{props.itemData.title}</span>
            </div>
            <div>
              <span>Price. </span>
              <span className={classes.userText}>{props.itemData.price}</span>
            </div>
            <div>
              <span>Url. </span>
              <a className={classes.userText} href={props.itemData.url}>
                {props.itemData.url}
              </a>
            </div>
            <div>
              <span>Tag. </span>
              <ItemTags tagText={props.itemData.tag} />
            </div>
            <div>
              <span>Score. </span>
              <HeartScore rate={props.itemData.score} />
            </div>
            <div>
              <span>Memo. </span>
              <span className={classes.userText}>{props.itemData.memo}</span>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <EditButton buttonHandelr={() => router.replace("/editItem")} />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ansmeer008:muGcOF9tH71qrB0e@cluster0.rmwt3pc.mongodb.net/items?retryWrites=true&w=majority"
  );
  const db = client.db();
  const itemsCollection = db.collection("items");

  const items = await itemsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: items.map((item) => ({ params: { id: item._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const itemId = context.params.id;

  const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
  const db = client.db();
  const itemsCollection = db.collection("items");

  const selectedItem = await itemsCollection.findOne({
    _id: new ObjectId(itemId),
  });

  client.close();

  return {
    props: {
      itemData: {
        id: selectedItem._id.toHexString(),
        title: selectedItem.title,
        tag: selectedItem.tag,
        prcie: selectedItem.price,
        score: selectedItem.score,
        url: selectedItem.url,
        image: selectedItem.image,
      },
    },
  };
}
