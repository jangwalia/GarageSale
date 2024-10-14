import db from "@/db";

export async function getEvents(city: string) {
  try {
    let events;
    if (city === "all") {
      events = await db.query.events.findMany();
    } else {
      events = await db.query.events.findMany({
        where: (events, { eq }) => eq(events.city, city),
      });
    }

    return events || [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
