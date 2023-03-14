import classes from "./Button.module.css";

function NewButton({ name, buttonHandelr }) {
  return (
    <button className={classes.new} onClick={buttonHandelr}>
      {name}
    </button>
  );
}

function FixButton({ buttonHandelr }) {
  return (
    <button className={classes.fix} onClick={buttonHandelr}>
      Fix
    </button>
  );
}

function DeleteButton({ buttonHandelr }) {
  return (
    <button className={classes.delete} onClick={buttonHandelr}>
      Delete
    </button>
  );
}

function BackButton({ buttonHandler }) {
  return (
    <button className={classes.back} onClick={buttonHandler}>{`<`}</button>
  );
}

export { NewButton, FixButton, DeleteButton, BackButton };
