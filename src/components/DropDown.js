import classes from "./DropDown.module.css";

export default function DropDown() {
  return (
    <div className={classes.container}>
      <div>Recent</div>
      <div>Older</div>
    </div>
  );
}
