import React from "react";

// import components
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Service from "../parts/HomePage/Service";
import Destinations from "../parts/HomePage/Destinations";
import Review from "../components/Review";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Destinations />
      <Review />
    </>
  );
}
