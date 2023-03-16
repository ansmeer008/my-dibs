import classes from "./ItemTag.module.css";

export default function ItemTags({ tagText }) {
  return <div className={classes.tag}>{tagText}</div>;
}
