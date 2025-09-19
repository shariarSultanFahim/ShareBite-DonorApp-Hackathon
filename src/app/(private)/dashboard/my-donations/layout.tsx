"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

interface MyDonationsLayoutProps {
  children: React.ReactNode;
}

export default function MyDonationsLayout({
  children,
}: MyDonationsLayoutProps) {
  const router = useRouter();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Donations</h1>
        {/* <Button
          type="primary"
          onClick={() => router.push("/dashboard/employee/create")}
        >
          Create
        </Button> */}
      </div>
      {children}
    </div>
  );
}
