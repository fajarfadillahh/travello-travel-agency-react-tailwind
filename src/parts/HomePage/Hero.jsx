import React from "react";
import { Link } from "react-router-dom";

// import images
import HeroImg from "../../assets/images/hero-img.png";

export default function Hero() {
  return (
    <section className="hero pb-16">
      <div className="hero__wrapper relative flex h-[90vh] items-center bg-pink-200">
        {/* hero img */}
        <img
          src={HeroImg}
          alt="hero img"
          className="hero__img absolute top-0 left-0 h-full w-full object-cover object-[60%]"
        />

        {/* hero overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30" />

        <div className="hero__container container relative">
          {/* hero data */}
          <div className="hero__data xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl">
            <h1 className="hero__title section-title text-white xs:text-[42px] sm:text-[48px] 2xl:text-[64px]">
              Explore new places <br />
              with Travello
            </h1>
            <p className="hero__text section-text pb-8 text-white xs:max-w-md xl:max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolore laboriosam necessitatibus eius perspiciatis debitis neque
              amet consectetur adipisicing elit.
            </p>
            <Link to="/" className="hero__button button inline-flex">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
