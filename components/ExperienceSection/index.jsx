"use client";
import Container from "../layout/Container";
import HorizontalParallax from "./HorizontalParallax";

export default function ExperienceSection() {
  return (
    <section className="pt-44 pb-28 bg-white relative z-0">
      <Container>
        <span className="text-2xl font-semibold text-center block mb-2">
          Experience
        </span>
        <h2 className="text-7xl leading-tight font-semibold text-center mb-5">
          {" "}
          Channeling the best of TV. <br /> And the best of Apple.
        </h2>
        <p className="para-text text-center px-32">
          Discover award-winning Apple&nbsp;Originals series and films — with
          other favorites on Disney+, Prime&nbsp;Video, Netflix, Max, ESPN,
          <sup>
            <a>3</a>
          </sup>{" "}
          and more. Experience world‑class workouts, superfun games, and
          exciting ways to enjoy hit music you’ll find only from Apple. And
          explore thousands of other top apps in the App&nbsp;Store. There’s
          more on Apple&nbsp;TV&nbsp;4K than just&nbsp;TV.
        </p>
      </Container>
      <HorizontalParallax />
    </section>
  );
}
