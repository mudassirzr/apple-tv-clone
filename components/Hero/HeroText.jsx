import Image from "next/image";
import { useRef } from "react";

export default function HeroText({headlineRef, textColor='text-white'}) {
  return (
    <div
      className={`mb-4 mt-10 md:my-10 flex items-center flex-col justify-end ${textColor}`}
      ref={headlineRef}
    >
      <Image
        className="hidden md:block mb-7 mx-auto"
        width={159}
        height={47}
        src="/img/hero-tv-4k.png"
      />
      <Image
        className="md:hidden mb-3 mx-auto"
        width={101}
        height={31}
        src="/img/apple-tv-4k-dark.png"
      />
      <h1 className="font-semibold leading-tight md:font-extrabold text-4xl px-20 md:px-0 md:text-7.5xl md:mb-10 md:leading-[1.05]">
        The Ultimate <br /> TV experience is calling.
      </h1>
      <span className="hidden md:block text-xl">LEGO© STAR Wars™ Castaways</span>
    </div>
  );
}
