"use client";
import { Button } from "antd";
import { redirect, RedirectType } from "next/navigation";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <p>This is the main entry point of the application.</p>
      <Button
        type="primary"
        onClick={() => redirect("/login", RedirectType.push)}
      >
        Login
      </Button>
    </div>
  );
}
