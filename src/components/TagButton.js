import classes from "./TagButton.module.css";

export default function TagButton() {
  return (
    <div className={classes.container}>
      <button className={classes.buttons}>Clothes </button>
      <button className={classes.buttons}>Books </button>
      <button className={classes.buttons}>Acc </button>
      <button className={classes.buttons}>Home </button>
      <button className={classes.buttons}>Electronics </button>
      <button className={classes.buttons}>Culture </button>
      <button className={classes.buttons}>Etc.</button>
    </div>
  );
}
