import { useRouter } from "next/router";
import classes from "./index.module.css";
import { BackButton, EditButton, DeleteButton } from "../../components/Button";
import HeartScore from "../../components/detail/HeartScore";
import ItemTags from "../../components/detail/ItemTag";
import Seo from "../../components/Seo";
import { all } from "../../middlewares/index";
import { findItemDetail } from "../../db/index";
import ConfirmModal from "../../components/modal/ConfirmModal";
import { useState } from "react";

export default function Detail({ itemDetail }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [userId, itemId] = router.query.params;

  //TODO: 삭제 로직 완료 후 feed 이동 시 삭제된 item 보이는 현상 해결 필요(새로고침 시 사라짐)

  async function deleteHandler() {
    const response = await fetch("/api/items", {
      method: "DELETE",
      body: JSON.stringify({ id: userId, itemid: itemId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("this is deletedData" + data);
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={classes.container}>
      <Seo title={itemDetail.title} />
      <div className={classes.backButton}>
        <BackButton
          buttonHandler={() =>
            router.push(`/feed/${localStorage.getItem("userId")}`)
          }
        />
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
              <span className={classes.userText}>{itemDetail.title}</span>
            </div>
            <div>
              <span>Price. </span>
              <span className={classes.userText}>{itemDetail.price}</span>
            </div>
            <div>
              <span>Url. </span>
              <a className={classes.userText} href={itemDetail.url}>
                {itemDetail.url}
              </a>
            </div>
            <div>
              <span>Tag. </span>
              <ItemTags tagText={itemDetail.tag} />
            </div>
            <div>
              <span>Score. </span>
              <HeartScore rate={itemDetail.score} />
            </div>
            <div>
              <span>Memo. </span>
              <span className={classes.userText}>{itemDetail.memo}</span>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <EditButton buttonHandler={() => router.replace("/editItem")} />
          <DeleteButton buttonHandler={() => setIsOpen((prev) => !prev)} />
        </div>
      </div>
      {isOpen ? (
        <ConfirmModal
          text="삭제하시겠습니까?"
          setIsOpen={() => setIsOpen((prev) => !prev)}
          handler={() => {
            deleteHandler();
            router.replace(`/feed/${localStorage.getItem("userId")}`);
          }}
        />
      ) : null}
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.params);
  const [userId, itemId] = context.query.params;
  await all.run(context.req, context.res);
  const itemDetail = await findItemDetail(context.req.db, userId, itemId);
  if (!itemDetail) context.res.statusCode = 404;
  return { props: { itemDetail: itemDetail[0] } };
}
