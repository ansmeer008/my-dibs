import classes from "./newItem.module.css";
import { BackButton, ConfirmButton } from "../components/Button";
import { TbCamera } from "react-icons/tb";
import { useRouter } from "next/router";
import { useState } from "react";
import ConfirmModal from "../components/modal/ConfirmModal";
import Seo from "../components/Seo";
import { useCurrentUser } from "src/hooks";
import { nanoid } from "nanoid";
import HeartRater from "src/components/newItem/HeartRater";
import { TbPencil } from "react-icons/tb";

//TODO: post 할 경우 두 개씩 생성되는 문제 고치기
//TODO: initial state가 뜨는 것 고치기
//TODO: 이미지 로더 구현

export default function NewItem() {
  const [user] = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);
  //사용자에게 미리보기를 제공하기 위한 Img 상태
  const [imgFile, setImgFile] = useState({});
  const [itemData, setItemData] = useState({
    id: user._id,
    image: "",
    title: "",
    price: 0,
    tag: "",
    score: 0,
    memo: "",
    url: "",
  });
  const router = useRouter();

  const changeHandler = (e) => {
    if (e.target.files[0].size >= 5 * 1024 * 1024) {
      alert("파일의 크기는 최대 5MB입니다.");
      return;
    }
    if (e.target.files) {
      setImgFile(e.target.files[0]);
      saveHandler(e.target.files[0]);
    }
  };

  const saveHandler = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgFile(reader.result);
    };
  };

  function inputHandler(e) {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  }

  async function confirmHandler() {
    const response = await fetch("/api/items", {
      method: "PATCH",
      body: JSON.stringify({ ...itemData, itemid: nanoid(6) }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setIsOpen((prev) => !prev);
    router.replace(`/feed/${localStorage.getItem("userId")}`);
  }

  return (
    <div className={classes.container}>
      <Seo title="New Item" />
      <div className={classes.backButton}>
        <BackButton buttonHandler={() => router.push("/feed")} />
      </div>
      <div className={classes.itemContiner}>
        <div className={classes.itemContents}>
          <div className={classes.imgContainer}>
            {Object.keys(imgFile).length !== 0 ? (
              <img src={imgFile} alt="item-img" />
            ) : (
              <TbCamera />
            )}
            <div className={classes.imgLoader}>
              <label htmlFor="file">
                <TbPencil />
              </label>
              <input
                className={classes.imgInput}
                type="file"
                id="file"
                accept="image/jpg, image/jpeg, image/png"
                multiple={false}
                onChange={changeHandler}
              ></input>
            </div>
          </div>
          <div className={classes.textContainer}>
            <div>
              <label>Name. </label>
              <input
                name="title"
                onChange={inputHandler}
                value={itemData.title}
              ></input>
            </div>
            <div>
              <label>Price. </label>
              <input
                name="price"
                onChange={inputHandler}
                value={itemData.price}
              ></input>
            </div>
            <div>
              <label>Url. </label>
              <input
                name="url"
                onChange={inputHandler}
                value={itemData.url}
              ></input>
            </div>
            <div>
              <label>Tag. </label>
              <input
                name="tag"
                onChange={inputHandler}
                value={itemData.tag}
              ></input>
            </div>
            <div>
              <label>Score. </label>
              <HeartRater
                name="score"
                heartscore={itemData}
                setHeartScore={setItemData}
              />
            </div>
            <div>
              <label>Memo. </label>
              <textarea
                name="memo"
                onChange={inputHandler}
                value={itemData.memo}
              ></textarea>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <ConfirmButton buttonHandler={confirmHandler} />
        </div>
      </div>
      {isOpen ? <ConfirmModal handler={confirmHandler} /> : null}
    </div>
  );
}
