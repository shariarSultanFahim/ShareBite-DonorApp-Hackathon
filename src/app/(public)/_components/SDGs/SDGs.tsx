"use client";

import Image from "next/image";

export default function SDGs() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-6 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
        Driving Change <br /> Through Global Goals
      </h1>
      <p className="max-w-3xl text-slate-600 text-sm md:text-base">
        Every donation moves us closer to achieving the United Nations
        Sustainable Development Goals, creating a world that is fairer,
        healthier, and more sustainable.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 mt-6">
        <Image
          className=" mt-6 lg:mt-10"
          src="/sdg1.svg"
          alt="SDG 1"
          width={202}
          height={280}
        />
        <Image src="/sdg2.svg" alt="SDG 2" width={202} height={280} />
        <Image
          className=" lg:mt-10"
          src="/sdg3.svg"
          alt="SDG 3"
          width={202}
          height={280}
        />
        <Image
          className="-mt-6 lg:mt-0"
          src="/sdg4.svg"
          alt="SDG 4"
          width={202}
          height={280}
        />
      </div>
    </div>
  );
}
