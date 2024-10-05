import { Typography, Box, TextField, Container } from "@mui/material";

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
        <TextField
          autoFocus={false}
          color="primary"
          className="rounded-lg"
          fullWidth
          id="outlined-basic"
          placeholder="Search for items"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.9)", // Slightly brighter on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#a4f839", // Full white when focused
              },
            },
            "& .MuiInputBase-input": {
              color: "rgba(255, 255, 255, 0.9)", // Off-white color for the text
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)", // Off-white color for the label (if you add one)
            },
          }}
        />
      </Box>
    </Container>
  );
}
