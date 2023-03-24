import LoginForm from "../components/user/LoginForm";
import classes from "./login.module.css";
import Seo from "../components/Seo";
import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  return (
    <div className={classes.container}>
      <Seo title="Login" />
      <LoginForm loginData={loginData} setLoginData={setLoginData} />
    </div>
  );
}
