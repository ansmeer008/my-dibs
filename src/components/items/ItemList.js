import FeedItem from "./FeedItem";
import classes from "./ItemList.module.css";

export default function ItemList({ items }) {
  return (
    <ul className={classes.list}>
      {items.length === 0 ? (
        <div className={classes.blankText}>
          <span>Add Some Items!</span>
        </div>
      ) : (
        items.map((item) => {
          return (
            <FeedItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })
      )}
    </ul>
  );
}
