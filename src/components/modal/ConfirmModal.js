import { ConfirmButton, DeleteButton } from "../Button";
import classes from "./modal.module.css";

export default function ConfirmModal({ handler }) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.view}>
        <span>작성을 완료하시겠습니까?</span>
        <div className={classes.buttonContainer}>
          <ConfirmButton buttonHandler={handler} />
          <DeleteButton buttonHandelr={handler} />
        </div>
      </div>
    </div>
  );
}
