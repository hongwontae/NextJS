import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

function EventsDetailPage() {
  const router = useRouter();

  const iden = router.query.eventId;
  const correctData = getEventById(iden);

  if (!correctData) {
    return <p>Not Found Page</p>;
  }

  return (
    <>
      <EventSummary title={correctData.title}></EventSummary>
      <EventLogistics
        date={correctData.date}
        address={correctData.location}
        image={correctData.image}
        imageAlt={correctData.title}
      ></EventLogistics>
      <EventContent>
        <p>{correctData.description}</p>
      </EventContent>
    </>
  );
}

export default EventsDetailPage;
