"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import HeroText from "./HeroText";
import HeroVideoImage from "./HeroVideoImage";
export default function Hero() {
  const textRef = useRef();
  const headlineRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef();
  const wrapperRef = useRef
  const { ref } = useParallax({
    speed: -5,
    scale: [1.43, 0.55],
    translateY: [0, -18],
    onProgressChange: (progress) => {
      if (ref.current) {
        // set progress to CSS variable
        const pg = progress * 100;
        if (pg > 95) {
          textRef.current.style.setProperty("opacity", progress.toFixed(1));
        } else {
          if (progress * 100 > 71) {
            imageRef.current.style.setProperty("opacity", 0);
            buttonRef.current.classList.add('hidden')
            buttonRef.current.classList.remove('fixed')
          } else {
            imageRef.current.style.setProperty("opacity", 1);
            buttonRef.current.classList.add('fixed')
            buttonRef.current.classList.remove('hidden')
          }
          textRef.current.style.setProperty("opacity", 0);
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
    <section className="relative h-[3200px] bg-[#f5f5f7] z-0 -mb-[500px]">
      <div
        id="parallax-hero"
        className="w-full sticky top-[96px]"
        ref={ref}
      >
        <div className="relative w-full border-solid border-8 border-black h-svh overflow-y-hidden">
          <div className="text-white absolute inset-0 bg-black bg-opacity-20 p-16 text-center flex items-end justify-center">
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
        {/* <Container> */}
        <p
          ref={textRef}
          id="parallax-text"
          className="text-4xl text-[#86868b] font-semibold text-center px-32 mt-24 transition-all"
        >
          Apple&nbsp;TV&nbsp;4K unites your favorite Apple services with all
          your streaming apps in our best-ever picture and sound quality —
          thanks to the blazing‑fast A15&nbsp;Bionic chip. Enjoy a FaceTime
          experience on TV
          <sup>
            <a>1</a>
          </sup>
          that brings your friends and family into your living room — and onto
          the biggest screen in your home. And with seamless interaction with
          all your devices and smart home accessories,
          <sup>
            <a>2</a>
          </sup>
          it’s everything you love about Apple — at its cinematic best.
          <br />
          <br />
          <span>Starting at $129</span>
        </p>
      </div>
      <button
        ref={buttonRef}
        onClick={pausePlayVideo}
        className="pause-icon bg-white fixed bottom-8 right-8 h-11 w-11 rounded-full flex items-center justify-center bg-opacity-80 backdrop-blur-lg backdrop-saturate-[180%]"
      ></button>
      <div className="h-[1100px]" />
    </section>
  );
}
