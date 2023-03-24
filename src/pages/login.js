import LoginForm from "@/components/user/LoginForm";
import classes from "./login.module.css";
import Seo from "@/components/Seo";

export default function Login() {
  return (
    <div className={classes.container}>
      <Seo title="Login" />
      <LoginForm />
    </div>
  );
}
