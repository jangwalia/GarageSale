import { Typography } from "@mui/material";

type h1Props = {
  children: React.ReactNode;
};

export default function H1({ children }: h1Props) {
  return (
    <Typography variant="h4" align="center">
      {children}
    </Typography>
  );
}
