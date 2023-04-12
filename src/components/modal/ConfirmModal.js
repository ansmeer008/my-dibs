import { ConfirmButton, DeleteButton } from "../Button";
import classes from "./modal.module.css";

export default function ConfirmModal({ handler, text, setIsOpen }) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.view}>
        <span>{text}</span>
        <div className={classes.buttonContainer}>
          <ConfirmButton buttonHandler={handler} />
          <DeleteButton buttonHandler={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
