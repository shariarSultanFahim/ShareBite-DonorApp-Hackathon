"use client";

import { Button } from "antd";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-6 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
        Share a Bite
        <br />
      Share the Love
      </h1>
      <p className="max-w-3xl text-slate-600 text-sm md:text-base">
        Every extra meal can bring hope, nourishment, and joy. By sharing, connecting with your community, and taking small meaningful actions, we can help ensure no one goes hungry and every bite counts.
      </p>
      <Button
        type="primary"
        size="large"
        shape="round"
        onClick={() => redirect("/login", RedirectType.push)}
      >
        Share a Meal
      </Button>

      <Image src="/hero.png" alt="Hero image" width={648} height={502} />
    </div>
  );
}
