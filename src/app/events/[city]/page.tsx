import H1 from "@/components/H1";
import { getEvents } from "@/lib/utils";
type AllEventsPageProps = {
  params: {
    city: string;
  };
};
const AllEventsPage = async ({ params }: AllEventsPageProps) => {
  const { city } = params;
  const garageSalesData = await getEvents(city);
  const garageSales = garageSalesData || [];

  return (
    <main className="flex flex-col items-center">
      {city !== "all" ? (
        <H1>All Events in {city.charAt(0).toUpperCase() + city.slice(1)}</H1>
      ) : (
        <H1>All Events</H1>
      )}
    </main>
  );
};

export default AllEventsPage;
