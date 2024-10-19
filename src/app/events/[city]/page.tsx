import H1 from "@/components/H1";
import { getEvents } from "@/lib/utils";
import { product } from "@/lib/types";
import EventList from "@/components/EventList";
type AllEventsPageProps = {
  params: {
    city: string;
  };
};
const AllEventsPage = async ({ params }: AllEventsPageProps) => {
  const { city } = params;
  const garageSalesData = await getEvents(city);
  const garageSales = garageSalesData as product[];

  return (
    <main className="flex flex-col items-center">
      {city !== "all" ? (
        <H1>All Events in {city.charAt(0).toUpperCase() + city.slice(1)}</H1>
      ) : (
        <H1>All Products</H1>
      )}
      <EventList events={garageSales} />
    </main>
  );
};

export default AllEventsPage;
