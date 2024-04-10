import EventItem from "../components/EventItem";
import { json, useRouteLoaderData } from "react-router-dom";

export default function EventDetailPage() {
    const data = useRouteLoaderData('event-page');

    return <EventItem event={data.event} />;
}

export async function loader({ params }) {
    const id = params.id;

    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        return json({ message: "Event loading failed" }, { status: 500 });
    } else {
        return response;
    }
}
