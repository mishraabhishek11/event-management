import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as EventsLoader } from "./pages/events/Events";
import EventDetailPage, {
  loader as EventDetailLoader,
  action as EventDeleteAction,
} from "./pages/events/EventDetail";
import NewEventPage from "./pages/events/NewEvent";
import EditEventPage from "./pages/events/EditEvent";
import RootLayout from "./pages/Root";
import RootEventsLayout from "./pages/events/RootEvents";
import ErrorPage from "./pages/Error";

import { action as updateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <RootEventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: EventDetailLoader,

            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: EventDeleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: updateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: updateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
