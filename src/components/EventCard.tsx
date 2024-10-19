import { product } from "@/lib/types";
import React from "react";
import Image from "next/image";

type EventCardProps = {
  event: product;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="flex flex-col h-[300px] w-[300px] rounded-xl overflow-hidden bg-white/[30%]">
      <Image
        src={event.image || "/no-image.png"}
        alt={event.title}
        width={300}
        height={200}
        className="h-[60%] object-fit"
      />
      <p>{event.title}</p>
      <p>
        {event.address} ({event?.city})
      </p>
    </section>
  );
}
