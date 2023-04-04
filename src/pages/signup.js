import Seo from "../components/Seo";
import SignUpForm from "../components/user/SignUpForm";
import classes from "./login.module.css";

export default function Signup() {
  return (
    <div className={classes.container}>
      <Seo title="Sign up" />
      <SignUpForm />
    </div>
  );
}
