import classes from "./newItem.module.css";
import { BackButton, ConfirmButton } from "../components/Button";
import { TbCamera } from "react-icons/tb";
import { useRouter } from "next/router";
import { useState } from "react";
import ConfirmModal from "@/components/modal/ConfirmModal";
import Seo from "@/components/Seo";

//TODO: post 할 경우 두 개씩 생성되는 문제 고치기
//TODO: score 눌러서 입력할 수 있도록 바꾸기
//TODO: initial state가 뜨는 것 고치기
//TODO: 이미지 로더 구현

export default function NewItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState({
    image: "",
    title: "",
    price: 0,
    tag: "",
    score: 0,
    memo: "",
    url: "",
  });
  const router = useRouter();

  function inputHandler(e) {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  }

  async function confirmHandler() {
    const response = await fetch("/api/new-item", {
      method: "POST",
      body: JSON.stringify(itemData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setIsOpen((prev) => !prev);
    router.push("/feed");
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
            <TbCamera />
            <span>상품 이미지를 입력해주세요</span>
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
              <input
                name="score"
                onChange={inputHandler}
                value={itemData.score}
              ></input>
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
