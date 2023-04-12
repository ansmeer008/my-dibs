import classes from "./Button.module.css";

function NewButton({ buttonHandler }) {
  return (
    <button className={classes.new} onClick={buttonHandler}>
      New
    </button>
  );
}

function EditButton({ buttonHandler }) {
  return (
    <button className={classes.edit} onClick={buttonHandler}>
      Edit
    </button>
  );
}

function DeleteButton({ buttonHandler }) {
  return (
    <button className={classes.delete} onClick={buttonHandler}>
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

function LoginButton({ buttonHandler }) {
  return (
    <button className={classes.login} onClick={buttonHandler}>
      Login
    </button>
  );
}

function SignUpButton({ buttonHandler }) {
  return (
    <button className={classes.signup} onClick={buttonHandler}>
      Signup
    </button>
  );
}

export {
  NewButton,
  EditButton,
  DeleteButton,
  BackButton,
  ConfirmButton,
  LoginButton,
  SignUpButton,
};
