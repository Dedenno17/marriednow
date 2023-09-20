import Image from "next/image";
import React from "react";

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

const SimpleMinimalistBrides = () => {
  return (
    <section className="w-full min-h-screen pt-56">
      <div className="w-full mx-auto h-screen flex items-center justify-center gap-52">
        {/* BRIDE */}
        <div className="w-[25%] h-[90%] relative">
          <div className="w-full h-[60%] relative rounded-[50px] overflow-hidden">
            <Image
              src={"/images/simpleMinimalist/bride-image.jpg"}
              alt="The bride"
              sizes="true"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="w-full h-[40%] flex flex-col justify-center items-center gap-2 relative">
            <h2
              className="text-4xl text-simpleMinimalist-black"
              style={greateVibes.style}
            >
              Joanna Pamela Anderson
            </h2>
            <span
              style={montserrat.style}
              className="font-bold text-xs text-simpleMinimalist-black"
            >
              Putri dari :
            </span>
            <p
              style={montserrat.style}
              className="text-sm text-simpleMinimalist-black"
            >
              George Anderson
            </p>
            <p
              style={montserrat.style}
              className="text-sm text-simpleMinimalist-black"
            >
              Catherine Anderson
            </p>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] text-[7rem] flex items-center justify-center text-black/5"
              style={greateVibes.style}
            >
              The Bride
            </div>
          </div>

          <div className="absolute top-3 left-5 w-full h-[60%] rounded-[50px] bg-transparent border-[1px] border-white" />
        </div>

        {/* GROOM */}
        <div className="w-[25%] h-[90%] relative">
          <div className="w-full h-[60%] relative rounded-[50px] overflow-hidden">
            <Image
              src={"/images/simpleMinimalist/groom-image.jpg"}
              alt="The bride"
              sizes="true"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="w-full h-[40%] flex flex-col justify-center items-center gap-2 relative">
            <h2
              className="text-4xl text-simpleMinimalist-black"
              style={greateVibes.style}
            >
              Jonas Daniel Taylor
            </h2>
            <span
              style={montserrat.style}
              className="font-bold text-xs text-simpleMinimalist-black"
            >
              Putra dari :
            </span>
            <p
              style={montserrat.style}
              className="text-sm text-simpleMinimalist-black"
            >
              Adam Taylor
            </p>
            <p
              style={montserrat.style}
              className="text-sm text-simpleMinimalist-black"
            >
              Brenda Taylor
            </p>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] text-[7rem] flex items-center justify-center text-black/5"
              style={greateVibes.style}
            >
              The Groom
            </div>
          </div>

          <div className="absolute top-3 left-5 w-full h-[60%] rounded-[50px] bg-transparent border-[1px] border-white" />
        </div>
      </div>
    </section>
  );
};

export default SimpleMinimalistBrides;
