import classes from "./Header.module.css";
import Link from "next/link";
import { TbHandFinger, TbLockOpen } from "react-icons/tb";
import Toggle from "./Toggle";
import { useCurrentUser } from "src/hooks";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [user, { mutate }] = useCurrentUser();
  async function handleLogout() {
    const res = await fetch("/api/auth", {
      method: "DELETE",
    });
    if (res.status === 204) {
      mutate(null);
      router.replace("/");
    } else {
      console.log(await res.text());
    }
  }

  return (
    <header className={classes.header}>
      <Link href={user ? `/feed/${user._id}` : "/"}>
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
