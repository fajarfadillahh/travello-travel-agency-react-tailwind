import React from "react";

// import components
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Service from "../parts/HomePage/Service";
import Destinations from "../parts/HomePage/Destinations";
import Review from "../components/Review";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Destinations />
      <Review />
      <Callback />
      <Footer />
      <ScrollToTop />
    </>
  );
}
