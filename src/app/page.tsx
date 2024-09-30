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
          This is a simple web application to help you sell your items.
        </Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search items"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": {
                borderColor: "grey.400",
              },
              "&:hover fieldset": {
                borderColor: "grey.500",
              },
              "&.Mui-focused fieldset": {
                borderColor: "grey.600",
              },
            },
          }}
        />
      </Box>
    </Container>
  );
}
