import React from "react";
import H1 from "@/components/H1";
import AuthForm from "@/components/AuthForm";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex flex-col gap-y-6">
      <H1>Sign Up</H1>
      <AuthForm />
      <Typography variant="caption">
        Already Registered ?
        <Link href="/SignIn">
          <Typography variant="caption" color="primary">
            Sign In
          </Typography>
        </Link>
      </Typography>
    </main>
  );
}
