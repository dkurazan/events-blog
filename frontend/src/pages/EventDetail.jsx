import EventItem from "../components/EventItem";
import { useParams } from "react-router-dom";

export default function EventDetailPage() {
    const params = useParams();

    return <h2>{params.id}</h2>;
}
