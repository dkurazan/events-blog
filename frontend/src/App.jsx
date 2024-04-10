import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
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
                    },
                    {
                        path: ":id",
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                            },
                            {
                                path: "edit",
                                element: <EditEvent />,
                            },
                        ],
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
