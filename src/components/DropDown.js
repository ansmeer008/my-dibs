import classes from "./DropDown.module.css";

export default function DropDown() {
  return (
    <div className={classes.container}>
      <button>Recent</button>
      <button>Older</button>
    </div>
  );
}
