import { Fragment, useCallback, useEffect } from "react";

export default function HeroVideoImage({imageRef}) {
  return (
    <div id="textArea" className="bg-hero-pattern mx-auto bg-top bg-no-repeat bg-contain h-full transition-all">
      <video
        ref={imageRef}
        className="w-full h-full transition-all"
        src={"/video/apple-video.mp4"}
        loop
        muted
        autoPlay
      />
    </div>
  );
}
