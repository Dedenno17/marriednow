"use client";

import React from "react";
import { Great_Vibes, Montserrat } from "next/font/google";
import Image from "next/image";

// SET UP FONT
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
const greateVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const SimpleMinimalistMap = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-[1440px] flex flex-col mx-auto py-20 gap-12">
        {/* AKAD */}
        <div className="w-full flex h-[480px] gap-20">
          <div className="w-1/2 h-full flex justify-center items-center relative rounded-2xl overflow-hidden">
            <Image
              src={"/images/simpleMinimalist/Google-Maps-dummy.jpg"}
              alt="map akad"
              fill
              sizes="true"
              priority
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center pl-40 gap-8">
            <h3 className="text-4xl text-black/60" style={greateVibes.style}>
              AKAD
            </h3>
            <p
              className="text-sm font-thin text-black/40 w-[70%]"
              style={montserrat.style}
            >
              THE TRIBRATA DARMAWANGSA, Jl. Darmawangsa III no. 2, RW. 1, Pulo,
              Kebayoran Baru Jakarta Selatan 12160
            </p>
            <button
              type="button"
              className="w-40 outline-none rounded-lg border-[1px] border-black/30 px-8 py-4 text-xs font-semibold cursor-pointer text-black/60"
            >
              Buka Maps
            </button>
          </div>
        </div>

        {/* RESEPSI */}
        <div className="w-full flex h-[480px]">
          <div className="w-1/2 flex flex-col justify-center pl-40 gap-8">
            <h3 className="text-4xl text-black/60" style={greateVibes.style}>
              RESEPSI
            </h3>
            <p
              className="text-sm font-thin text-black/40 w-[70%]"
              style={montserrat.style}
            >
              THE TRIBRATA DARMAWANGSA, Jl. Darmawangsa III no. 2, RW. 1, Pulo,
              Kebayoran Baru Jakarta Selatan 12160
            </p>
            <button
              type="button"
              className="w-40 outline-none rounded-lg border-[1px] border-black/30 px-8 py-4 text-xs font-semibold cursor-pointer text-black/60"
            >
              Buka Maps
            </button>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center relative rounded-2xl overflow-hidden">
            <Image
              src={"/images/simpleMinimalist/Google-Maps-dummy.jpg"}
              alt="map akad"
              fill
              sizes="true"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleMinimalistMap;
