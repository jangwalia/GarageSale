import React from "react";
import { Typography, TextField, Button } from "@mui/material";

export default function AuthForm() {
  return (
    <form className="flex flex-col gap-y-4">
      <section className="flex flex-col gap-y-2">
        <Typography variant="body2">Email</Typography>
        <TextField type="email" />
      </section>
      <section className="flex flex-col gap-y-2">
        <Typography variant="body2">Password</Typography>
        <TextField
          type="password
        "
        />
      </section>
      <Button variant="contained">Submit</Button>
    </form>
  );
}
