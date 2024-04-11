import EventItem from "../components/EventItem";
import { json, useRouteLoaderData, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

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

export async function action({ params }) {
    const id = params.id;

    const token = getAuthToken();

    const response = await fetch("http://localhost:8080/events/" + id, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    if (!response.ok) {
        return json({ message: "Event deletion failed" }, { status: 500 });
    } else {
        return redirect('/events');
    }
}