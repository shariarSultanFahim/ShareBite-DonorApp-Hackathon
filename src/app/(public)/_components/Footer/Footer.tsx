"use client";

import { Button } from "antd";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-[#EE217C] p-6 lg:p-20 rounded-t-3xl gap-3">
      <Image src="/logo-white.svg" alt="logo" width={202} height={100} />
      <div className="h-24 border-l border-gray-300 mx-4 hidden md:flex"></div>
      <div className=" flex flex-col items-center md:items-start gap-3 ">
        <h1 className="font-regular text-white text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
          Your Generosity, Their Smile <br />
          Make a Difference Today
        </h1>
        <Button
          size="large"
          shape="round"
          onClick={() => redirect("/login", RedirectType.push)}
        >
          Donate Now
        </Button>
          </div>
          
    </div>
  );
}
