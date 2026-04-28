import EventsList from "../../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "failed to fetch data." }), {
      status: 500,
    });
  } else {
    return response;
  }
};
