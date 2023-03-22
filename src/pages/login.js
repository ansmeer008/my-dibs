import LoginForm from "@/components/user/LoginForm";
import classes from "./login.module.css";

export default function Login() {
  return (
    <div className={classes.container}>
      <LoginForm />
    </div>
  );
}
