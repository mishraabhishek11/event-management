import React from "react";
import { useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  const event = data.event;
  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "failed to fetch data." }), {
      status: 500,
    });
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "failed to delete." }), {
      status: 500,
    });
  }

  return redirect("/events");
};
