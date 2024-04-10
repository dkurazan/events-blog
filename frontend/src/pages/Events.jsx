import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
    {
        id: "e1",
        title: "Event 1",
        description: "Description of event 1. This is an event you must visit.",
    },
    {
        id: "e2",
        title: "Event 2",
        description: "Description of event 2. This is an event you must visit.",
    },
    {
        id: "e3",
        title: "Event 3",
        description: "Description of event 3. This is an event you must visit.",
    },
    {
        id: "e4",
        title: "Event 4",
        description: "Description of event 4. This is an event you must visit.",
    },
    {
        id: "e5",
        title: "Event 5",
        description: "Description of event 5. This is an event you must visit.",
    },
];

export default function EventsPage() {
    return <EventsList events={DUMMY_EVENTS} />;
}
