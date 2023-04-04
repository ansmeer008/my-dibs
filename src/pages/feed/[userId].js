import ItemList from "../../components/items/ItemList";
import { NewButton } from "../../components/Button";
import TagButton from "../../components/TagButton";
import classes from "../feed.module.css";
import { TbFilter } from "react-icons/tb";
import { useRouter } from "next/router";
import DropDown from "../../components/DropDown";
import { useState } from "react";
import { useCurrentUser } from "src/hooks";
import { all } from "../../middlewares/index";
import { extractUser } from "../../lib/api-helpers";
import { findUserById } from "../../db/index";

export default function Home({ itemlist }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [user] = useCurrentUser();
  const router = useRouter();

  function filterHandler() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <NewButton buttonHandelr={() => router.push("/newItem")} />
        <TagButton />
        <div className={classes.filterContainer}>
          <TbFilter className={classes.filterIcon} onClick={filterHandler} />
          {isOpen ? <DropDown /> : null}
        </div>
      </div>
      <ItemList items={itemlist} />
    </div>
  );
}

export async function getServerSideProps(context) {
  await all.run(context.req, context.res);
  const user = extractUser(
    await findUserById(context.req.db, context.params.userId)
  );
  if (!user) context.res.statusCode = 404;
  return { props: { itemlist: user.itemlist } };
}

// const DummyData = [
//   {
//     id: "1",
//     image:
//       "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     title: "무난한 티셔츠",
//     price: 18000,
//     tag: "clothes",
//     score: 4,
//     memo: "그냥 여기저기 입기 좋은 무난한 티셔츠",
//     url: "",
//   },
//   {
//     id: "2",
//     image:
//       "https://images.unsplash.com/photo-1627335443921-b915cfcfb4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2xhbWR1bmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//     title: "슬램덩크 오리지널판",
//     price: 200000,
//     tag: "books",
//     score: 5,
//     memo: "영화 보고나서 꼭 사야겠다고 생각했던 슬램덩크 만화책...",
//     url: "",
//   },
//   {
//     id: "3",
//     image:
//       "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "고양이 양초",
//     price: 3000,
//     tag: "home",
//     score: 3,
//     memo: "고양이가 움직이는 게 귀엽당",
//     url: "",
//   },
//   {
//     id: "4",
//     image:
//       "https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhbmtldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "체크 블랭킷",
//     price: 40000,
//     tag: "home",
//     score: 2,
//     memo: "소파에 놓고 싶다 이쁨",
//     url: "",
//   },
//   {
//     id: "5",
//     image:
//       "https://images.unsplash.com/photo-1623261488876-d8aa2f64ab74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlciUyMG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     title: "별 펜던트 목걸이",
//     price: 30000,
//     tag: "acc",
//     score: 3,
//     memo: "무난한 목걸이 ",
//     url: "",
//   },
//   {
//     id: "6",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
//   {
//     id: "7",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
//   {
//     id: "8",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
//   {
//     id: "9",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
//   {
//     id: "10",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
//   {
//     id: "11",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
//   {
//     id: "12",
//     image:
//       "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     title: "에어팟 프로",
//     price: 240000,
//     tag: "electronics",
//     score: 2,
//     memo: "커널형이라 좀 그럼;;",
//     url: "",
//   },
// ];
