import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  // visible scroll state
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-6 inline-flex cursor-pointer bg-blue-600 p-3 text-[1.3rem] text-white transition-all duration-400 hover:bg-blue-700 2xl:right-10 ${
        visible ? "bottom-12" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
}
