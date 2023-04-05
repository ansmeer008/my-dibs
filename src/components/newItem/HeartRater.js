import { TbHeartFilled, TbHeart } from "react-icons/tb";
import classes from "./HeartRater.module.css";
import { useState, useEffect } from "react";

export default function HeartRater({ name, heartscore, setHeartScore }) {
  const getEditInitial = (rate) => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return result;
  };

  const initialData =
    heartscore[name] !== 0
      ? getEditInitial(heartscore[name])
      : [false, false, false, false, false];

  const [clicked, setClicked] = useState(initialData);

  const starArr = [0, 1, 2, 3, 4];

  const handleHeartClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const getStarRate = (name) => {
    let score = clicked.filter(Boolean).length;
    setHeartScore({
      ...heartscore,
      [name]: score,
    });
  };

  useEffect(() => {
    getStarRate(name);
  }, [clicked]);

  return (
    <div>
      {starArr.map((el, idx) => {
        return clicked[el] ? (
          <TbHeartFilled
            className={classes.heart}
            role="button"
            key={idx}
            onClick={() => handleHeartClick(el)}
          />
        ) : (
          <TbHeart
            className={classes.heart}
            role="button"
            key={idx}
            onClick={() => {
              handleHeartClick(el);
            }}
          />
        );
      })}
    </div>
  );
}
