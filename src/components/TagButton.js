import classes from "./TagButton.module.css";

export default function TagButton() {
  return (
    <div className={classes.container}>
      <button>All</button>
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
