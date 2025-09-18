"use client";

import { Button } from "antd";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-6 text-center">
      <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold">
        Share a Bite, Share the Love
        <br />
        Feeding Hearts, Not Just Stomachs
      </h1>
      <p className="max-w-3xl text-slate-600 text-sm md:text-base">
        Every Extra Meal Can Be A Source Of Hope, Nourishment, And Joy For
        Someone In Need—By Sharing What You Have, Connecting With Your
        Community, And Taking Small Yet Meaningful Actions, Together We Can
        Create A World Where No One Goes Hungry And Every Bite Truly Counts.
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
