import classes from "./Button.module.css";

function NewButton({ name, buttonHandelr }) {
  return (
    <button className={classes.new} onClick={buttonHandelr}>
      {name}
    </button>
  );
}

function EditButton({ buttonHandelr }) {
  return (
    <button className={classes.edit} onClick={buttonHandelr}>
      Edit
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

function ConfirmButton({ buttonHandler }) {
  return (
    <button className={classes.confirm} onClick={buttonHandler}>
      Confirm
    </button>
  );
}

export { NewButton, EditButton, DeleteButton, BackButton, ConfirmButton };
