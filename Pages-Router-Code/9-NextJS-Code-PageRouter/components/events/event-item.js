import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/Buttons";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem({ title, image, date, location, id }) {
  const humanReadableData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <>
      <li className={classes.item}>
        <img src={"/" + image} alt={title}></img>
        <div className={classes.content}>
          <div className={classes.summary}>
            <div>
              <h2>{title}</h2>
            </div>
            <div className={classes.date}>
              <DateIcon></DateIcon>
              <time>{humanReadableData}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon></AddressIcon>
              <address>{formattedAddress}</address>
            </div>
          </div>

          <div className={classes.actions}>
            <Button link={exploreLink}>
              <sapn>Explore Event</sapn>
              <span className={classes.icon}>
                <ArrowRightIcon></ArrowRightIcon>
              </span>
            </Button>
          </div>
        </div>
      </li>
    </>
  );
}

export default EventItem;
