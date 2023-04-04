import classes from "./FeedItem.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeedItem({ id, image, title, price }) {
  return (
    <Link
      href={`/detail/${localStorage.getItem("userId")}/${id}`}
      className={classes.item}
    >
      <img
        src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        className={classes.image}
      ></img>
      <div className={classes.textContainer}>
        <span className={classes.hoverText}>{title}</span>
        <span className={classes.hoverText}>{price}</span>
      </div>
    </Link>
  );
}
