import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import { getAuthToken } from "../util/AuthUtil";

function EventForm({ method, event }) {
  const data = useActionData();

  const navigate = useNavigate();

  const navigation = useNavigation();
  const isSubmitting = navigation.isSubmitting;

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors ? (
        <ul>
          {Object.values(data.errors).map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>
      ) : null}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting.." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const action = async ({ request, params }) => {
  const token = getAuthToken();

  if ((token && token.length > 0 ? true : false) === false) {
    return redirect("/auth");
  }
  const method = request.method;
  const id = params.id;
  const data = await request.formData();

  const event = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch(
    `http://localhost:8080/events${method === "PATCH" ? "/" + id : ""}`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(event),
    },
  );

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "failed to fetch data." }), {
      status: 500,
    });
  }

  return redirect("/events");
};
