import React from "react";
import H1 from "@/components/H1";
import AuthForm from "@/components/AuthForm";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function signIn() {
  return (
    <main className="flex flex-col gap-y-6 ">
      <H1>Sign In</H1>
      <AuthForm />
      <Typography variant="caption">
        Not Registered Yet ?
        <Link href="/SignUp">
          <Typography variant="caption" color="primary">
            Sign Up
          </Typography>
        </Link>
      </Typography>
    </main>
  );
}
