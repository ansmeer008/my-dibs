import { ConfirmButton } from "../Button";
import classes from "./sign.module.css";

export default function LoginForm() {
  return (
    <div className={classes.container}>
      <span>Login</span>
      <div className={classes.inputContainer}>
        <div>
          <label>Username</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
      </div>
      <ConfirmButton />
    </div>
  );
}
