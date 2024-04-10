import EventForm from "../components/EventForm";
import { json } from "react-router-dom";

export default function NewEventPage() {
    return <EventForm />;
}

export async function action({ request }) {
    const data = await request.formData();

    const reqData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description"),
    };

    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
    });

    if (!response.ok) {
        throw json(
            { message: "Posting new event failed!" },
            {
                status: 500,
            }
        );
    } else {
        return response;
    }
}
