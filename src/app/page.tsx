import { Typography, Box, Container } from "@mui/material";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

const popularLocations = [
  {
    name: "Surrey",
    url: "/events/surrey",
  },
  {
    name: "Delta",
    url: "/events/delta",
  },
];
export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          mt: 4,
        }}
      >
        <Typography variant="h4" align="center">
          Welcome to Garage Sale
        </Typography>
        <Typography variant="body1" align="center">
          This is a simple web application{" "}
          <span className="text-accent">to help you sell</span> your items.
        </Typography>
        <SearchForm />
        <section className="flex gap-x-4 justify-around w-full">
          <Typography variant="caption">Popular Location</Typography>
          <ul className="flex gap-x-4 text-sm text-white/60">
            {popularLocations.map((location, index) => (
              <li key={index}>
                <Link className="hover:text-white" href={location.url}>
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Box>
    </Container>
  );
}
