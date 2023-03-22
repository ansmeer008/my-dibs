import classes from "./index.module.css";
import { LoginButton, SignUpButton } from "@/components/Button";
import { useRouter } from "next/router";

export default function Start() {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.itemContainer}>
        <span>Find What You Want and Keep it!</span>
        <div className={classes.btnContainer}>
          <LoginButton buttonHandler={() => router.push("/login")} />
          <SignUpButton buttonHandler={() => router.push("/signup")} />
        </div>
      </div>
    </div>
  );
}
