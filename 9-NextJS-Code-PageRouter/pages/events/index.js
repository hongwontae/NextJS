import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function EventsPage() {

  const router = useRouter();

  const event = getAllEvents();

  function findEventHandler(year, month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler}></EventSearch>
      <EventList items={event}></EventList>
    </>
  );
}

export default EventsPage;
