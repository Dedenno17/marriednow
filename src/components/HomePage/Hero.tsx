"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

import heroImage1 from "../../../public/images/hero/hero-image-1.jpg";
import heroImage2 from "../../../public/images/hero/hero-image-2.jpg";
import heroImage3 from "../../../public/images/hero/hero-image-3.jpg";
import Button from "../UI/Button";

const Hero = () => {
  const router = useRouter();

  // MOTION CONTAINER
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  // MOTION CHILDREN
  const children = {
    hidden: { opacity: 0, scale: 0.7 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="w-[1200px] lg:px-10 xl:px-0 mx-auto h-[640px] flex ">
      {/* IMAGE */}
      <motion.div
        className="w-1/2 h-full lg:flex items-center justify-center hidden"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-[480px] h-[480px] relative">
          <motion.div
            className="absolute w-[420px] h-[280px] top-0 left-0 rounded-lg overflow-hidden shadow-lg"
            variants={children}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full relative">
              <Image
                src={heroImage1}
                alt="Hero Image 1"
                fill
                sizes="true"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute w-[180px] h-[280px] bottom-6 right-4 rounded-lg overflow-hidden shadow-lg"
            variants={children}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full relative">
              <Image
                src={heroImage2}
                alt="Hero Image 2"
                fill
                sizes="true"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute w-[280px] h-[180px] bottom-0 left-4 rounded-lg overflow-hidden shadow-lg"
            variants={children}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full relative">
              <Image
                src={heroImage3}
                alt="Hero Image 3"
                fill
                sizes="true"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* DESC */}
      <div className="h-full flex flex-col gap-6 justify-center items-center w-full px-10 lg:px-0 lg:items-start lg:w-1/2">
        <h1 className="text-[4.5rem] font-bold text-primaryBlack leading-[4.5rem] text-center lg:text-left">
          Website Undangan{" "}
          <span className="text-darkBlue">
            Pernikahan
            <TypewriterComponent
              options={{
                strings: ["Digital", "Online", "Menarik", "Unik", "Efisien"],
                autoStart: true,
                loop: true,
                cursor: "",
                delay: 200,
              }}
            />
          </span>
        </h1>
        <p className="text-xl text-primaryBlack text-center lg:text-left">
          Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda
          dengan dengan cara yang efektif dan efisien.
        </p>
        <Button
          type="button"
          variants="primary"
          onClick={() => router.push("/create")}
        >
          Buat Undangan
        </Button>
      </div>
    </section>
  );
};

export default Hero;
