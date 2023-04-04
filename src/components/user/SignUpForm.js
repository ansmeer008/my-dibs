import classes from "./sign.module.css";
import { ConfirmButton } from "../Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "src/hooks";

export default function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [confirmPassword, setConfirmPassword] = useState(false);
  const router = useRouter();
  const [user, { mutate }] = useCurrentUser();

  function inputHandler(e) {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  }

  function validateHandler() {
    if (signUpData.password === signUpData.passwordConfirm) {
      setConfirmPassword(true);
    } else {
      setConfirmPassword(false);
    }
  }

  function validation(value, type) {
    const usernameExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    const passwordExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

    switch (type) {
      case "username":
        return usernameExp.test(value);
      case "password":
        return passwordExp.test(value);
      default:
        return;
    }
  }

  async function submitHandler(e) {
    if (
      validation(signUpData.username, "username") &&
      validation(signUpData.password, "password") &&
      confirmPassword
    ) {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpData),
      });

      if (res.status === 201) {
        const userObj = await res.json();
        mutate(userObj);
        router.replace("/feed");
      } else {
        alert(await res.text());
      }
    }
  }

  useEffect(() => {
    validateHandler();
  }, [signUpData.password, signUpData.passwordConfirm]);

  return (
    <div className={classes.container}>
      <span>SignUp</span>
      <div className={classes.inputContainer}>
        <div>
          <label>Username</label>
          <input
            name="username"
            onChange={inputHandler}
            value={signUpData.username}
          ></input>
          <span
            className={
              validation(signUpData.username, "username")
                ? classes.validationText
                : undefined
            }
          >
            username should be english with number
          </span>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={inputHandler}
            value={signUpData.password}
          ></input>
          <span
            className={
              validation(signUpData.password, "password")
                ? classes.validationText
                : undefined
            }
          >
            minimum 8 character, only english with number available
          </span>
        </div>
        <div>
          <label>Password Confirm</label>
          <input
            name="passwordConfirm"
            type="password"
            onChange={inputHandler}
            value={signUpData.passwordConfirm}
          ></input>
          <span
            className={confirmPassword ? classes.validationText : undefined}
          >
            Password Confirm should match Password
          </span>
        </div>
      </div>
      <ConfirmButton buttonHandler={submitHandler} />
    </div>
  );
}
