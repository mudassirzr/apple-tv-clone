"use client";
import Image from "next/image";
import Container from "../layout/Container";
import { Children, Fragment, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollSpy() {
  const { ref: tvAppRef, inView: tvAppInView } = useInView({
    threshold: 0,
  });
  const { ref: tvPlusRef, inView: tvPlusInView } = useInView({
    threshold: 0,
  });

  const { ref: insightRef, inView: insightInView } = useInView({
    threshold: 0.8,
  });
  const fitnessAppRef = useRef();
  const checkScrollPosition = (e) => {
    const top = fitnessAppRef?.current?.getBoundingClientRect()?.top;
    const bottom = displayRef?.current?.getBoundingClientRect()?.bottom;

    if (bottom >= top && bottom - top <= displayRef?.current.offsetHeight) {
      const newHeight = displayRef?.current.offsetHeight - (bottom - top);
      insightDisplayRef.current.style.setProperty(
        "height",
        `${Math.trunc(newHeight) - 4}px`
      );
    } else if (top > bottom && insightDisplayRef.current.style.height != 514) {
      insightDisplayRef.current.style.setProperty("height", `514px`);
    } else if (
      bottom - top > displayRef?.current.offsetHeight &&
      insightDisplayRef.current.style.height != 0
    ) {
      insightDisplayRef.current.style.setProperty("height", `${0}px`);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  const blocks = [
    {
      text: (
        <>
          <strong className="text-black">Apple&nbsp;TV&nbsp;app.</strong> Watch,
          rent, or buy your favorite shows and movies all in one expertly
          curated app. Enjoy critically acclaimed Apple&nbsp;Originals series
          and films from Apple&nbsp;TV+ as they were meant to be seen. Subscribe
          to just the channels you want. And there are no new apps, accounts, or
          passwords needed for up to six family&nbsp;members.
        </>
      ),
      ref: tvAppRef,
      image: {
        src: "/img/apple-tv-logo.png",
        height: 73,
        width: 120,
        alt: "Apple TV Logo",
      },
      mobileImage: {
        src: "/img/apple-tv-mobile.jpg",
        height: 240,
        width: 426,
        alt: "Apple TV Image",
      },
    },
    {
      text: (
        <>
          <strong className="text-black inline-block mt-10">Live TV.</strong>{" "}
          Apple&nbsp;TV&nbsp;4K is all you need to stream live TV from the
          world’s biggest and best networks, broadcasters, and pay TV providers.
          Watch sports from ESPN and MLB. Catch up with news from ABC, CNN, and
          Bloomberg. And kick back with shows on Hulu, YouTube&nbsp;TV, and
          Sling&nbsp;TV.
          <sup>
            <a href="#">3</a>
          </sup>
        </>
      ),
    },
    {
      text: (
        <>
          <strong className="text-black">Apple&nbsp;TV+.</strong>
          <br /> Watch series, feature films, kids’ entertainment, and more from
          the most creative minds in TV and movies — with new
          Apple&nbsp;Originals added every&nbsp;month.
          <sup>
            <a href="#">4</a>
          </sup>
        </>
      ),
      ref: tvPlusRef,
      image: {
        src: "/img/apple-tv-plus-logo.png",
        height: 46,
        width: 119,
        alt: "Apple TV Plus Logo",
      },
      mobileImage: {
        src: "/img/apple-tv-plus-mobile.jpg",
        height: 240,
        width: 426,
        alt: "Apple TV Plus",
      },
    },
    {
      text: (
        <>
          <span className="inline-block font-semibold text-xs px-2 py-1 mb-4 bg-[#feefe5] rounded-md text-[#b64400]">
            Coming this Fall
          </span>
          <br />
          <strong className="text-black">InSight.</strong> You can get
          information about Apple&nbsp;TV+ Original series and films as you
          watch them. Just bring up the media player controls to learn more
          about the actors on the screen and the music that’s playing. The
          details automatically update as the scene changes. And when you use
          iPhone as the Apple&nbsp;TV remote, InSight information appears in the
          palm of your&nbsp;hand.
          <br />
          <a className="inline-block mt-3" href="#">
            <span className="text-sm">
              Stream <em>Severance</em> on the Apple&nbsp;TV&nbsp;app
              with&nbsp;a&nbsp;subscription {">"}
            </span>
          </a>
        </>
      ),
      ref: insightRef,
      mobileImage: {
        src: "/img/apple-insight-mobile.jpg",
        height: 240,
        width: 426,
        alt: "Apple Insights",
      },
    },
  ];
  const singleBlocks = [
    {
      text: (
        <p className="text-[#afe9c4] blocks-text">
          <strong className="text-white">Apple&nbsp;Fitness+.</strong>
          Tap into the world’s largest library of 4K fitness and wellness
          content.
          <sup>
            <a href="#">4</a>
          </sup>{" "}
          From HIIT to Yoga, there’s something for everyone. Get custom workout
          and meditation plans automatically built for you. And supercharge your
          experience with real-time, personalized metrics from Apple&nbsp;Watch.
        </p>
      ),
      backgroundClass: "bg-appleGreen",
      ref: fitnessAppRef,
      image: {
        src: "/img/apple-fitness-app.png",
        height: 73,
        width: 120,
        alt: "Apple Fitness Logo",
      },
      mobileImage: {
        src: "/img/apple-fitness-mobile.jpg",
        height: 240,
        width: 426,
        alt: "Apple Fitness Logo",
      },
    },
  ];
  const displayRef = useRef();
  const insightDisplayRef = useRef();
  return (
    <section className="relative pb-28">
      <div className="absolute right-0 top-0 h-full">
        <div className="relative h-full">
          <div
            ref={displayRef}
            className="hidden md:block sticky right-0 top-[calc(50%-259px)]"
          >
            <div className="relative md:w-[500px] md:h-[290px] xl:w-[650px] xl:h-[374px] 2xl:w-[906px] 2xl:h-[518px] border-l-[6px] border-t-[6px] border-b-[6px] border-black">
              <video
                className={`absolute top-0 right-0 z-[6] transition-opacity duration-500 ${
                  !tvAppInView || tvPlusInView || insightInView
                    ? "opacity-0"
                    : "opacity-100"
                }`}
                loop
                muted
                autoPlay
                src="/video/apple-home.mp4"
                width={906}
                height={514}
              />
              <video
                className={`absolute top-0 right-0 z-[5] transition-opacity duration-500 ${
                  tvPlusInView && !insightInView ? "opacity-100" : "opacity-0"
                }`}
                loop
                muted
                autoPlay
                src="/video/apple-live.mp4"
                width={906}
                height={514}
              />
              <Image
                className={`absolute top-0 right-0 z-[4] transition-opacity duration-500 origin-bottom object-cover object-top max-h-full opacity-100
                }`}
                ref={insightDisplayRef}
                src="/img/apple-insight.jpg"
                alt="Apple Insights"
                width={906}
                height={514}
              />
              <video
                className={`absolute top-0 right-0 z-[3] transition-opacity duration-500`}
                loop
                muted
                autoPlay
                src="/video/apple-fitness.mp4"
                width={906}
                height={514}
              />
            </div>
          </div>
        </div>
      </div>
      <Container className="overflow-x-hidden">
        <div className="max-w-[320px]">
          {Children.toArray(
            blocks.map(({ text, image, mobileImage, ref }, i) => {
              return (
                <div
                  ref={ref}
                  className={`${
                    [0, 1].indexOf(i) == -1 ? "mt-48 md:mt-96" : ""
                  }`}
                >
                  {mobileImage ? (
                    <Image
                      className="mb-10 md:hidden block min-w-fit"
                      height={mobileImage?.height}
                      width={mobileImage?.width}
                      src={mobileImage?.src}
                      alt={mobileImage?.alt}
                    />
                  ) : null}
                  {image ? (
                    <Image
                      className="mb-10"
                      height={image?.height}
                      width={image?.width}
                      src={image?.src}
                      alt={image?.alt}
                    />
                  ) : null}
                  <p className="para-text block">{text}</p>
                </div>
              );
            })
          )}
        </div>
      </Container>
      <div>
        {Children.toArray(
          singleBlocks.map(
            ({ text, image, mobileImage, ref, backgroundClass = "" }, i) => {
              return (
                <div ref={ref} className={`w-full py-28 md:py-56 ${backgroundClass}`}>
                  <Container>
                    <div className="max-w-[320px]">
                      <div
                      //   className={`${[0, 1].indexOf(i) == -1 ? "mt-96" : ""}`}
                      >
                        {mobileImage ? (
                          <Image
                            className="mb-10 md:hidden block min-w-fit"
                            height={mobileImage?.height}
                            width={mobileImage?.width}
                            src={mobileImage?.src}
                            alt={mobileImage?.alt}
                          />
                        ) : null}
                        {image ? (
                          <Image
                            className="mb-10"
                            height={image?.height}
                            width={image?.width}
                            src={image?.src}
                            alt={image?.alt}
                          />
                        ) : null}
                        {text}
                      </div>
                    </div>
                  </Container>
                </div>
              );
            }
          )
        )}
      </div>
    </section>
  );
}
