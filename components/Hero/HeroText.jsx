import Image from "next/image";
import { useRef } from "react";

export default function HeroText({headlineRef}) {
  return (
    <div
      className={`flex items-center flex-col justify-end`}
      ref={headlineRef}
    >
      <Image
        className="mb-7 mx-auto"
        width={159}
        height={47}
        src="/img/hero-tv-4k.png"
      />
      <h1 className="font-extrabold text-7.5xl mb-10 leading-[1.05]">
        The Ultimate <br /> TV experience is calling.
      </h1>
      <span className="text-xl">LEGO© STAR Wars™ Castaways</span>
    </div>
  );
}
