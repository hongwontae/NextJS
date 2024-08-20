import { getFeaturedEvents } from "@/helpers/api-utils";
import EventList from "../components/events/event-list";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Event Home Page</title>
        <meta name="description" content="This is First page"></meta>
      </Head>
      <div>
        <EventList items={props.featuredEvents} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { featuredEvents },
  };
}

export default HomePage;
