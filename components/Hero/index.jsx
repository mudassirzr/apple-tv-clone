"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import HeroText from "./HeroText";
import HeroVideoImage from "./HeroVideoImage";
import AppleTvText from "./AppleTvText";
export default function Hero() {
  const textRef = useRef();
  const headlineRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef()
  const { ref } = useParallax({
    speed: -5,
    scale: [1.43, 0.55],
    translateY: [0, -18],
    onProgressChange: (progress) => {
      if (ref.current) {
        // set progress to CSS variable
        const pg = progress * 100;
        if (pg > 95) {
          textRef?.current?.style?.setProperty("opacity", progress.toFixed(1));
        } else {
          if (progress * 100 > 71) {
            imageRef.current.style.setProperty("opacity", 0);
            buttonRef.current.classList.add("hidden");
            buttonRef.current.classList.remove("md:flex");
          } else {
            imageRef.current.style.setProperty("opacity", 1);
            buttonRef.current.classList.add("md:flex");
            buttonRef.current.classList.remove("hidden");
          }
          textRef?.current?.style?.setProperty("opacity", 0);
        }
        if (pg > 40) {
          headlineRef?.current?.style.setProperty("display", "none");
        } else if (headlineRef?.current?.style?.display == "none") {
          headlineRef?.current?.style.setProperty("display", "block");
        }
      }
    },
  });
  const pausePlayVideo = useCallback(() => {
    if (imageRef.current.paused) {
      imageRef.current.play();
      buttonRef.current.classList.add("pause-icon");
      buttonRef.current.classList.remove("play-icon");
    } else {
      imageRef.current.pause();
      buttonRef.current.classList.add("play-icon");
      buttonRef.current.classList.remove("pause-icon");
    }
  }, [imageRef, buttonRef]);
  return (
    <section className="relative md:h-[3200px] bg-[#f5f5f7] z-0 md:-mb-[500px]">
      <div
        id="parallax-hero"
        className="w-full sticky top-[96px] hidden md:block"
        ref={ref}
      >
        <div className="relative w-full border-solid border-8 border-black h-svh overflow-y-hidden">
          <div className="hidden text-white absolute inset-0 bg-black bg-opacity-20 p-16 text-center md:flex md:items-end md:justify-center">
            <HeroText headlineRef={headlineRef} />
          </div>
          <div className="w-full z-[2]">
            <HeroVideoImage imageRef={imageRef} />
          </div>
        </div>
        <Image
          className="block mx-auto w-[500px] h-auto mt-14"
          width={996}
          height={378}
          src="/img/hero-tv-box.png"
        />
        <AppleTvText textRef={textRef} />
      </div>
      <div className="md:hidden flex flex-col text-center items-center justify-center overflow-hidden pb-16 mt-8">
        <Image
          className="max-w-[670px] border-[6px] border-solid border-black"
          width={670}
          height={377}
          src="/img/hero-img.png"
        />
        <HeroText headlineRef={null} textColor="text-black" />
        <AppleTvText textRef={null} />
      </div>
      <button
        ref={buttonRef}
        onClick={pausePlayVideo}
        className="pause-icon bg-white bottom-8 right-8 h-11 w-11 rounded-full hidden fixed md:flex md:items-center md:justify-center bg-opacity-80 backdrop-blur-lg backdrop-saturate-[180%]"
      ></button>
      <div className="md:h-[1100px]" />
    </section>
  );
}
