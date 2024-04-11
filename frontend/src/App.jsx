import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as eventDetailAction
} from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import ErrorPage from "./pages/Error";
import { action as eventManipulatorAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "events",
                element: <EventsRoot />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: eventManipulatorAction,
                    },
                    {
                        path: ":id",
                        loader: eventDetailLoader,
                        id: "event-page",
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: eventDetailAction
                            },
                            {
                                path: "edit",
                                element: <EditEvent />,
                                action: eventManipulatorAction
                            },
                        ],
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
