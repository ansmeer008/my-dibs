import classes from "./Header.module.css";
import Link from "next/link";
import { TbHandFinger } from "react-icons/tb";
import Toggle from "./Toggle";

export default function Header() {
  const isLogin = true;

  return (
    <header className={classes.header}>
      <Link href={isLogin ? "/feed" : "/"}>
        <div className={classes.title}>
          <h1>My Dibs!</h1>
          <div className={classes.icon}>
            <TbHandFinger />
          </div>
        </div>
      </Link>
      <div className={classes.toggleContainer}>
        <Toggle />
      </div>
    </header>
  );
}
