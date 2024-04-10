import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
    const data = useRouteLoaderData('event-page');

    return <EventForm event={data.event} />;
}
