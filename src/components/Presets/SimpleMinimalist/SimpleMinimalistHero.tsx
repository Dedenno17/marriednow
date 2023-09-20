import React from "react";
import Image from "next/image";
import { Montserrat, Great_Vibes } from "next/font/google";

// SET UP FONT
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
const greateVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const SimpleMinimalistHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* IMAGE */}
      <div className="relative w-[120%] h-screen rounded-b-full overflow-hidden brightness-[.35] bg-simpleMinimalist-gray">
        <Image
          src={"/images/simpleMinimalist/hero-image.jpg"}
          alt="groom and bride"
          fill
          sizes="true"
          priority
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          {/* brides name */}
          <div
            className="flex flex-col items-center w-full relative mt-10"
            style={greateVibes.style}
          >
            <h1 className="text-simpleMinimalist-gray/70 text-[10rem] leading-[11rem]">
              Jonas
              <br />
              <span className="ml-44">Anna</span>
            </h1>
            <div className="absolute top-[120px] left-40 text-[3.5rem] text-simpleMinimalist-gray/50">
              and
            </div>
          </div>
          {/* quote */}
          <div className="w-[480px] p-8" style={montserrat.style}>
            <p className="text-center text-sm text-simpleMinimalist-white/70">
              {`"The man dreams of a perfect woman and the woman dreams of a
          perfect man and they dont know that Allah created them to
          perfect one another."`}
              <br />
              {"-Ahmad Al Shugairi"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleMinimalistHero;
