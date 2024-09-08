"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Parallax } from "react-scroll-parallax";
// import xyz from '../../app/assets/video/apple-video.mp4'
import { useParallax } from "react-scroll-parallax";
import HeroText from "./HeroText";
import HeroVideoImage from "./HeroVideoImage";

export default function Hero() {
  const { ref } = useParallax({
    speed: -10,
    scale: [1.43, 0.55],
    translateY: [0, -18],
  });
  return (
    <div className="relative h-[2300px]">
      <div
        ref={ref}
        className="w-full -z-[1] sticky top-[96px] border-solid border-8 border-black h-svh overflow-y-hidden"
      >
        <div className="text-white absolute inset-0 bg-black bg-opacity-20 p-16 text-center flex items-end justify-center">
          <HeroText />
        </div>
        <div className="w-full z-[2]">
          <HeroVideoImage />
        </div>
      </div>
      <Parallax speed={-10} scale={[0.9, 0.55]} translateY={[0, 0]}>
        <Image className="block mx-auto" width={996} height={378} src="/img/hero-tv-box.png" />
      </Parallax>
    </div>
  );
}
