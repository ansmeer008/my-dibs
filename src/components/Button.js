import classes from "./Button.module.css";

function NewButton({ name, buttonHandelr }) {
  return (
    <button className={classes.new} onClick={buttonHandelr}>
      {name}
    </button>
  );
}

function FixButton({ name, buttonHandelr }) {
  return (
    <button className={classes.fix} onClick={buttonHandelr}>
      {name}
    </button>
  );
}

function DeleteButton({ name, buttonHandelr }) {
  return (
    <button className={classes.delete} onClick={buttonHandelr}>
      {name}
    </button>
  );
}

export { NewButton, FixButton, DeleteButton };
