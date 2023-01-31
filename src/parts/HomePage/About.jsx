import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import AboutImg from "../../assets/images/about-img.png";

export default function About() {
  return (
    <section className="about section">
      <div className="about__container container grid gap-12">
        <div className="about__data">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title section-title">Explore world with us</h1>
          <p className="about__text section-text pb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            veniam nostrum numquam ipsa laboriosam eveniet voluptatum illo
            corrupti impedit ex sit.
          </p>
          <Link to="/" className="about__button button inline-flex">
            Get Started
            <RiArrowRightLine />
          </Link>
        </div>

        <img src={AboutImg} alt="about img" className="about__img" />
      </div>
    </section>
  );
}
