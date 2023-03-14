import classes from "./FeedItem.module.css";
import Link from "next/link";

export default function FeedItem({ id, image, title, price }) {
  return (
    <Link href="/detail" className={classes.item}>
      <img src={image} className={classes.image}></img>
      <div className={classes.textContainer}>
        <span className={classes.hoverText}>{title}</span>
        <span className={classes.hoverText}>{price}</span>
      </div>
    </Link>
  );
}
