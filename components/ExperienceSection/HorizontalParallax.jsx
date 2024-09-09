import Image from "next/image";
import { Children } from "react";
import { Parallax } from "react-scroll-parallax";

export default function HorizontalParallax() {
  const images = [
    [
      { alt: "image", url: "/img/transformers.jpg" },
      { alt: "image", url: "/img/blue-beetle.jpg" },
      { alt: "image", url: "/img/usher.jpg" },
      { alt: "image", url: "/img/fitness.jpg" },
      { alt: "image", url: "/img/futurama.jpg" },
      { alt: "image", url: "/img/foundation.jpg" },
    ],
    [
      { alt: "image", url: "/img/jennifer.jpg" },
      { alt: "image", url: "/img/battles.jpg" },
      { alt: "image", url: "/img/morning-show.jpg" },
      { alt: "image", url: "/img/river-ice.jpg" },
      { alt: "image", url: "/img/subway-surfer.jpg" },
      { alt: "image", url: "/img/river-fitness.jpg" },
    ],
    [
      { alt: "image", url: "/img/river-fitness-01.jpg" },
      { alt: "image", url: "/img/hijack.jpg" },
      { alt: "image", url: "/img/hbo-original.jpg" },
      { alt: "image", url: "/img/stadale.jpg" },
      { alt: "image", url: "/img/ted-lasso.jpg" },
      { alt: "image", url: "/img/music.jpg" },
    ],
  ];
  return (
    <div className="w-full overflow-hidden">
      {images.map((row, index) => {
        return (
          <Parallax
            translateX={index % 2 == 0 ? [0, -12 - index*4] : [-10, 0]}
            className="flex my-3"
            key={index}
          >
            {Children.toArray(
              row.map((image) => {
                return (
                  <Image
                    className="mx-2 rounded-md"
                    width={345}
                    height={195}
                    src={image?.url}
                    alt={image?.alt}
                  />
                );
              })
            )}
          </Parallax>
        );
      })}
      {/* <Parallax translateX={[0, -10]} className="flex my-3">
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/transformers.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/blue-beetle.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/usher.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/fitness.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/futurama.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/foundation.jpg"
        />
      </Parallax>
      <Parallax translateX={[-10, 0]} className="flex my-3">
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/jennifer.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/battles.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/morning-show.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/river-ice.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/subway-surfer.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/river-fitness.jpg"
        />
      </Parallax>
      <Parallax translateX={[0, -12]} className="flex my-3">
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/river-fitness-01.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/hijack.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/hbo-original.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/stadale.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/ted-lasso.jpg"
        />
        <Image
          className="mx-2 rounded-md"
          width={345}
          height={195}
          src="/img/music.jpg"
        />
      </Parallax> */}
    </div>
  );
}
