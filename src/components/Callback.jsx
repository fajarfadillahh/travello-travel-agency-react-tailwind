import React from "react";
import { Link } from "react-router-dom";

// import icons
import { RiArrowRightLine } from "react-icons/ri";

// import images
import CallbackImg from "../assets/images/callback-img.png";

export default function Callback() {
  return (
    <section className="callback section">
      <div className="callback__wrapper relative flex h-[640px] items-center">
        <img
          src={CallbackImg}
          alt="callback img"
          className="callback__img absolute top-0 left-0 h-full w-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30" />

        <div className="callback__container container">
          <div className="callback__data relative text-center xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <p className="callback__subtitle section-subtitle text-white">
              Let's talk
            </p>
            <h1 className="callback__title section-title text-white">
              Contact us if you're ready
            </h1>
            <p className="callback__text section-text pb-8 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              itaque eaque cumque libero dignissimos aut maiores odit commodi
              aspernatur expedita.
            </p>
            <Link to="/contact" className="callback__button button inline-flex">
              Contact us
              <RiArrowRightLine className="text-[1.3rem] text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
