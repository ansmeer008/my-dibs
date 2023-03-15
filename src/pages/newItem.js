import classes from "./newItem.module.css";
import { BackButton, ConfirmButton } from "../components/Button";
import { TbCamera } from "react-icons/tb";
import { useRouter } from "next/router";

export default function NewItem() {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.backButton}>
        <BackButton buttonHandler={() => router.push("/")} />
      </div>
      <div className={classes.itemContiner}>
        <div className={classes.itemContents}>
          <div className={classes.imgContainer}>
            <TbCamera />
            <span>상품 이미지를 입력해주세요</span>
          </div>
          <div className={classes.textContainer}>
            <div>
              <label>Name. </label>
              <input></input>
            </div>
            <div>
              <label>Price. </label>
              <input></input>
            </div>
            <div>
              <label>Url. </label>
              <input></input>
            </div>
            <div>
              <label>Tag. </label>
              <input></input>
            </div>
            <div>
              <label>Score. </label>
              <input></input>
            </div>
            <div>
              <label>Memo. </label>
              <textarea></textarea>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <ConfirmButton />
        </div>
      </div>
    </div>
  );
}
