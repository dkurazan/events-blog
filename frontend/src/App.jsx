import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as eventDetailAction,
} from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import ErrorPage from "./pages/Error";
import { action as eventManipulatorAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
    action as authAction,
} from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader, checkAuthLoader } from "./util/auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        id: 'root',
        loader: tokenLoader,
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
                        loader: checkAuthLoader,
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
                                action: eventDetailAction,
                            },
                            {
                                path: "edit",
                                element: <EditEvent />,
                                loader: checkAuthLoader,
                                action: eventManipulatorAction,
                            },
                        ],
                    },
                ],
            },
            {
                path: "newsletter",
                element: <NewsletterPage />,
                action: newsletterAction,
            },
            {
                path: "auth",
                element: <AuthenticationPage />,
                action: authAction,
            },
            {
                path: 'logout',
                action: logoutAction
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
