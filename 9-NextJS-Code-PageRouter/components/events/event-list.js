import EventItem from "./event-item";
import classes from './event-list.module.css'

function EventList({ items }) {
  return (
    <>
      <ul className={classes.list}>
        {items.map((ele) => {
          return (
            <EventItem
              key={ele.id}
              id={ele.id}
              title={ele.title}
              date={ele.date}
              image={ele.image}
              location={ele.location}
            ></EventItem>
          );
        })}
      </ul>
    </>
  );
}

export default EventList;
