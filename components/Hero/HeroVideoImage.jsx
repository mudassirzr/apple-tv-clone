import { Fragment, useCallback, useEffect } from "react";

export default function HeroVideoImage({imageRef}) {
  return (
    <div className="bg-hero-pattern mx-auto bg-top bg-no-repeat bg-contain md:h-full transition-all">
      <video
        ref={imageRef}
        className="hidden md:block w-full h-full transition-all duration-500"
        src={"/video/apple-video.mp4"}
        loop
        muted
        autoPlay
      />
    </div>
  );
}
