import classes from "./index.module.css";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return <div className={classes.container}></div>;
}
