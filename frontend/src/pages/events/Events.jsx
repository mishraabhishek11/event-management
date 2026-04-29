import EventsList from "../../components/EventsList";
import { redirect, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/AuthUtil";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = async () => {
  const token = getAuthToken();
  if ((token && token.length > 0 ? true : false) === false) {
    redirect("/auth");
  }

  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "failed to fetch data." }), {
      status: 500,
    });
  } else {
    return response;
  }
};
