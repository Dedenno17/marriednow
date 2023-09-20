"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Montserrat, Great_Vibes } from "next/font/google";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

// SET UP FONT
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
const greateVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

// GALLERY ARRAY
const arrayGallery: string[] = [
  "/images/simpleMinimalist/gallery-one-image.jpg",
  "/images/simpleMinimalist/gallery-two-image.jpg",
  "/images/simpleMinimalist/gallery-three-image.jpg",
  "/images/simpleMinimalist/gallery-four-image.jpg",
  "/images/simpleMinimalist/gallery-five-image.jpg",
  "/images/simpleMinimalist/gallery-six-image.jpg",
  "/images/simpleMinimalist/gallery-nine-image.jpg",
  "/images/simpleMinimalist/gallery-ten-image.jpg",
];

// FOTO COMPONENT
const FotoComponent: React.FC<{ img: string; alt: string }> = ({
  img,
  alt,
}) => {
  return (
    <div className="w-[480px] h-[320px] relative">
      <Image src={img} alt={alt} fill sizes="true" className="object-top" />
    </div>
  );
};

const SimpleMinimalistGallery = () => {
  return (
    <section className="w-full h-[1228px] bg-simpleMinimalist-gray relative">
      <div className="w-full h-full relative">
        <Image
          src={"/images/simpleMinimalist/hero-image.jpg"}
          alt="bg date"
          fill
          sizes="true"
          priority
          className="object-cover opacity-5"
        />
      </div>
      <div className="max-w-[1440px] left-1/2 -translate-x-1/2 top-0 bottom-0 py-8 flex flex-col gap-24 absolute">
        {/* DATE AND TIME */}
        <div className="w-full flex flex-col gap-14 items-center text-black/60">
          <div
            className="flex flex-col gap-2 max-w-[480px] text-sm"
            style={montserrat.style}
          >
            <div className="text-center">
              <p className="mb-2">Bismillahirrahmanirrahim.</p>
              <p className="mb-4">Assalamualaikum Warahmatullahi Wabarakatuh</p>
              <p className="mb-2">
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                menyelenggarakan acara pernikahan putra-putri kami
              </p>
              <p>yang Insya Allah akan dilaksanakan pada :</p>
            </div>
          </div>

          <div className="flex items-center w-[60%]">
            <div className="flex flex-col px-8 items-center">
              <h3 className="text-xl font-normal mb-6" style={montserrat.style}>
                AKAD NIKAH
              </h3>
              <span className="text-4xl" style={greateVibes.style}>
                Jumat, 1 September 2023
              </span>
              <span
                className="text-xs font-normal mb-6 mt-2"
                style={montserrat.style}
              >
                pukul 09:00 - selesai
              </span>
              <p
                className="text-center font-normal text-sm"
                style={montserrat.style}
              >
                THE TRIBRATA DARMAWANGSA, Jl. Darmawangsa III no. 2, RW. 1,
                Pulo, Kebayoran Baru Jakarta Selatan 12160
              </p>
            </div>
            <div className="flex flex-col px-8 items-center border-l-[1px] border-l-black/10">
              <h3 className="text-xl font-normal mb-6" style={montserrat.style}>
                RESEPSI
              </h3>
              <span className="text-4xl" style={greateVibes.style}>
                Sabtu, 2 September 2023
              </span>
              <span
                className="text-xs font-normal mb-6 mt-2"
                style={montserrat.style}
              >
                pukul 09:00 - selesai
              </span>
              <p
                className="text-center font-normal text-sm"
                style={montserrat.style}
              >
                THE TRIBRATA DARMAWANGSA, Jl. Darmawangsa III no. 2, RW. 1,
                Pulo, Kebayoran Baru Jakarta Selatan 12160
              </p>
            </div>
          </div>

          <div className="w-[40%] flex justify-center items-center mb-12">
            <button
              type="button"
              className="outline-none rounded-lg border-[1px] border-black/30 px-12 py-4 text-xs font-semibold cursor-pointer"
            >
              Simpan Ke Kalender
            </button>
          </div>

          <div className="w-[40%]">
            <ul className="w-full flex items-center gap-4">
              <li className="flex flex-col gap-2 items-center justify-center w-[25%] py-6 border-[1px] border-black/30 rounded-lg">
                <span style={greateVibes.style} className="text-4xl">
                  120
                </span>
                <span style={montserrat.style} className="text-sm">
                  Hari
                </span>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center w-[25%] py-6 border-[1px] border-black/30 rounded-lg">
                <span style={greateVibes.style} className="text-4xl">
                  10
                </span>
                <span style={montserrat.style} className="text-sm">
                  Jam
                </span>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center w-[25%] py-6 border-[1px] border-black/30 rounded-lg">
                <span style={greateVibes.style} className="text-4xl">
                  40
                </span>
                <span style={montserrat.style} className="text-sm">
                  Menit
                </span>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center w-[25%] py-6 border-[1px] border-black/30 rounded-lg">
                <span style={greateVibes.style} className="text-4xl">
                  4
                </span>
                <span style={montserrat.style} className="text-sm">
                  Detik
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* GALLERY */}
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          autoplay={{ disableOnInteraction: false }}
          loop={true}
          speed={1000}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className="w-full"
        >
          {arrayGallery.map((item: string, i: number) => (
            <SwiperSlide key={Math.random() + i + ""}>
              <FotoComponent img={item} alt={`brides foto ${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SimpleMinimalistGallery;
