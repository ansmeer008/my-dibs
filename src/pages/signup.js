import Seo from "../components/Seo";
import SignUpForm from "../components/user/SignUpForm";
import { useState } from "react";
import classes from "./login.module.css";

export default function Signup() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <div className={classes.container}>
      <Seo title="Sign up" />
      <SignUpForm signUpData={signUpData} setSignUpData={setSignUpData} />
    </div>
  );
}
