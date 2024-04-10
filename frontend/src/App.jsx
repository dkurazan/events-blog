import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "events",
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
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
