import { useRouter } from "next/router";
import classes from "./index.module.css";
import { BackButton, EditButton, DeleteButton } from "../../components/Button";

const DetailData = {
  id: "1",
  image:
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  title: "무난한 티셔츠",
  price: 18000,
  tag: "clothes",
  score: 4,
  memo: "그냥 여기저기 입기 좋은 무난한 티셔츠",
  url: "www.gwliee.com",
};

export default function Detail() {
  const router = useRouter();

  //경로에서 id 받아옴
  const itemId = router.query.itemId;

  return (
    <div className={classes.container}>
      <div className={classes.backButton}>
        <BackButton buttonHandler={() => router.push("/")} />
      </div>
      <div className={classes.itemContiner}>
        <div className={classes.itemContents}>
          <div className={classes.imgContainer}>
            <img
              className={classes.image}
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div className={classes.textContainer}>
            <div>
              <span>Name. </span>
              <span className={classes.userText}>{DetailData.title}</span>
            </div>
            <div>
              <span>Price. </span>
              <span className={classes.userText}>{DetailData.price}</span>
            </div>
            <div>
              <span>Url. </span>
              <a className={classes.userText} href={DetailData.url}>
                {DetailData.url}
              </a>
            </div>
            <div>
              <span>Tag. </span>
              <span className={classes.userText}>
                태그 컴포넌트로 교체 필요
              </span>
            </div>
            <div>
              <span>Score. </span>
              <span className={classes.userText}>
                스코어 컴포넌트로 교체 필요
              </span>
            </div>
            <div>
              <span>Memo. </span>
              <span className={classes.userText}>{DetailData.memo}</span>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
}
