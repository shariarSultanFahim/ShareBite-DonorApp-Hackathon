"use client";

import Image from "next/image";

export default function MoreThanFood() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-3 md:gap-6 lg:gap-10 text-center">
      <div className="space-y-3 md:space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold lg:text-left">
          More Than Meals
          <br />
          Give What Matters
        </h1>
        <p className="max-w-3xl text-slate-600 text-sm md:text-base lg:text-left">
          From groceries and clothing to medicines, personal care items, and
          everyday essentials, every donation you make becomes a source of hope
          and comfort for individuals and families in need.
        </p>
      </div>

      <Image
        src="/grocery.webp"
        className="rounded-2xl"
        alt="Grocery image"
        width={640}
        height={100}
      />
    </div>
  );
}
