import { Fragment, useCallback, useEffect } from "react";

export default function HeroVideoImage() {
  const checkVideoPosition = useCallback((e) => {
    console.log(e);
  }, []);
  return (
    <div id="textArea" onScroll={checkVideoPosition}>
      <video
        className="w-full h-full"
        src={"/video/apple-video.mp4"}
        loop
        muted
        autoPlay
      />
      {/* <div className="h-[516px] w-[918px] bg-hero-pattern mx-auto bg-cover bg-center"></div> */}
    </div>
  );
}
