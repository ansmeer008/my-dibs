import classes from "./HeartScore.module.css";
import { TbHeartFilled, TbHeart } from "react-icons/tb";

export default function HeartScore({ rate }) {
  return (
    <div className={classes.container}>
      {new Array(5).fill("heart").map((_, count) => {
        const heart = Number(rate);
        const checkedHeart = (heart) => {
          if (count + 1 > heart) return "dimmed";
          else return "filled";
        };

        const renderHeart = (color) => {
          switch (color) {
            case "dimmed":
              return <TbHeart className={classes.empty} />;
            default:
              return <TbHeartFilled className={classes.filled} />;
          }
        };
        return renderHeart(checkedHeart(heart));
      })}
    </div>
  );
}
