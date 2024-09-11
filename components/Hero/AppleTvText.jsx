export default function AppleTvText({ textRef }) {
  return (
    <p
      ref={textRef}
      className="text-lg text-left px-16 md:text-4xl text-[#86868b] font-semibold md:text-center mx:px-32 md:mt-24 transition-all"
    >
      Apple&nbsp;TV&nbsp;4K unites your favorite Apple services with all your
      streaming apps in our best-ever picture and sound quality — thanks to the
      blazing‑fast A15&nbsp;Bionic chip. Enjoy a FaceTime experience on TV
      <sup>
        <a>1</a>
      </sup>
      that brings your friends and family into your living room — and onto the
      biggest screen in your home. And with seamless interaction with all your
      devices and smart home accessories,
      <sup>
        <a>2</a>
      </sup>
      it’s everything you love about Apple — at its cinematic best.
      <br />
      <br />
      <span>Starting at $129</span>
    </p>
  );
}
