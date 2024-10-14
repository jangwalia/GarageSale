import React from "react";
import { product } from "../lib/types";
import EventCard from "./EventCard";

type EventListProps = {
  events: product[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <section className="grid md:grid-cols-3 mt-4 grid-cols-1 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
