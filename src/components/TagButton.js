import classes from "./TagButton.module.css";

export default function TagButton({ data }) {
  //클릭한 버튼의 이름을... 홈 페이지에 전달해서, map을 돌릴 때 filter로 돌려야 한다...
  //클릭을 했을 때 서버에서 이미 filter한 데이터를 주면 좋겠지만,,, 가능하지 않을 수도 있으므로.,

  return (
    <div className={classes.container}>
      <button>Clothes </button>
      <button>Books </button>
      <button>Acc </button>
      <button>Home </button>
      <button>Electronics </button>
      <button>Culture </button>
      <button>Etc.</button>
    </div>
  );
}
