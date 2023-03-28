import classes from "./Header.module.css";
import Link from "next/link";
import { TbHandFinger, TbLockOpen } from "react-icons/tb";
import Toggle from "./Toggle";
import { useCurrentUser } from "src/hooks";

export default function Header() {
  const [user, { mutate }] = useCurrentUser();
  async function handleLogout() {
    await fetch("/api/auth", {
      method: "DELETE",
    });
    mutate(null);
  }

  return (
    <header className={classes.header}>
      <Link href={user ? "/feed" : "/"}>
        <div className={classes.title}>
          <h1>My Dibs!</h1>
          <div className={classes.icon}>
            <TbHandFinger />
          </div>
        </div>
      </Link>
      <div className={classes.buttonContainer}>
        <div className={classes.logout} onClick={handleLogout}>
          {user ? <TbLockOpen /> : null}
        </div>
        <div className={classes.toggleContainer}>
          <Toggle />
        </div>
      </div>
    </header>
  );
}
