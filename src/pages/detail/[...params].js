import { useRouter } from "next/router";
import classes from "./index.module.css";
import { BackButton, EditButton, DeleteButton } from "../../components/Button";
import HeartScore from "../../components/detail/HeartScore";
import ItemTags from "../../components/detail/ItemTag";
import Seo from "../../components/Seo";
import { useEffect, useState } from "react";
import { all } from "../../middlewares/index";
import { extractUser } from "../../lib/api-helpers";
import { findUserById } from "../../db/index";

export default function Detail() {
  const [itemData, setItemData] = useState({
    image: "",
    title: "",
    price: 0,
    tag: "",
    score: "",
    memo: "",
    url: "",
  });
  const router = useRouter();

  //경로에서 id 받아옴
  // const itemId = router.query.itemId;

  return (
    <div className={classes.container}>
      <Seo title={itemData.title} />
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
              <span className={classes.userText}>{itemData.title}</span>
            </div>
            <div>
              <span>Price. </span>
              <span className={classes.userText}>{itemData.price}</span>
            </div>
            <div>
              <span>Url. </span>
              <a className={classes.userText} href={itemData.url}>
                {itemData.url}
              </a>
            </div>
            <div>
              <span>Tag. </span>
              <ItemTags tagText={itemData.tag} />
            </div>
            <div>
              <span>Score. </span>
              <HeartScore rate={itemData.score} />
            </div>
            <div>
              <span>Memo. </span>
              <span className={classes.userText}>{itemData.memo}</span>
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

export async function getServerSideProps(context) {
  //**우선 현재 유저 정보를 받아와야 하고** => 이 부분이 중요한데... 현재 유저 정보를 어떻게 전달할까
  //파라미터를 2개 사용하는 것도 가능할 것 같다.
  //받아온 유저 정보를 이용해 유저 정보를 찾고,
  //찾은 유저 정보에서 Context로 받은 파라미터 itemId를 또 받아서 detail 아이템을 찾아야 함.
  return { props: { user } };
}
