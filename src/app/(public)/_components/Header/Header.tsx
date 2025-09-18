"use client";

import { Button } from "antd";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between ">
      <Image src="/Logo.svg" alt="logo" width={202} height={100} />
      <Button
        type="primary"
        size="large"
        shape="round"
        onClick={() => redirect("/login", RedirectType.push)}
      >
        Login
      </Button>
    </div>
  );
}
