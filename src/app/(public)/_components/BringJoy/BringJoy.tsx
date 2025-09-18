"use client";

import Image from "next/image";

export default function BringJoy() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-10 text-center">
      <div className="space-y-3 md:space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold lg:text-right">
          Spread Smiles
          <br />
          Create Change
        </h1>
        <p className="max-w-3xl text-slate-600 text-sm md:text-base lg:text-right">
          Your generosity can transform ordinary days into unforgettable smiles
          for people in need. Together, we can turn meals into moments of joy
          and hope for those who need it most.
        </p>
      </div>

      <Image src="/bringjoy.webp" className="rounded-2xl " alt="Hero image" width={640} height={100} />
    </div>
  );
}
