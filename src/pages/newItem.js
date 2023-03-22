import classes from "./newItem.module.css";
import { BackButton, ConfirmButton } from "../components/Button";
import { TbCamera } from "react-icons/tb";
import { useRouter } from "next/router";
import { useState } from "react";
import ConfirmModal from "@/components/modal/ConfirmModal";

const DetailData = {
  image:
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  title: "무난한 티셔츠",
  price: 18000,
  tag: "clothes",
  score: 4,
  memo: "그냥 여기저기 입기 좋은 무난한 티셔츠",
  url: "www.gwliee.com",
};

//TODO : 더미 데이터 변경 필요
//TODO : 리다이렉션 추가 필요

export default function NewItem() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  async function confirmHandler() {
    const response = await fetch("/api/new-item", {
      method: "POST",
      body: JSON.stringify(DetailData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={classes.container}>
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
          <ConfirmButton buttonHandler={confirmHandler} />
        </div>
      </div>
      {isOpen ? <ConfirmModal handler={confirmHandler} /> : null}
    </div>
  );
}
