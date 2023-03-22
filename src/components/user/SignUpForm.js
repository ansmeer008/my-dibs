import classes from "./sign.module.css";
import { ConfirmButton } from "../Button";

export default function SignUpForm() {
  return (
    <div className={classes.container}>
      <span>SignUp</span>
      <div className={classes.inputContainer}>
        <div>
          <label>Username</label>
          <input></input>
          <span>only english and number available</span>
        </div>
        <div>
          <label>Password</label>
          <input></input>
          <span>minimum 8 character</span>
        </div>
        <div>
          <label>Password Confirm</label>
          <input></input>
          <span>Password Confirm should match Password</span>
        </div>
      </div>
      <ConfirmButton />
    </div>
  );
}
