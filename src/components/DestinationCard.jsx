import React from "react";

export default function DestinationCard({ image, title, text }) {
  return (
    <div className="group relative h-[400px] overflow-hidden">
      <img
        src={image}
        alt="destination img"
        className="h-full w-full object-cover object-center transition-all duration-400 group-hover:scale-110"
      />

      {/* card overlay */}
      <div className="absolute bottom-0 left-0 h-[70%] w-full bg-gradient-to-t from-gray-900/70 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6 text-center">
        <h3 className="pb-2 font-serif text-[20px] font-semibold text-white">
          {title}
        </h3>
        <p className="text-[14px] leading-[180%] text-white">{text}</p>
      </div>
    </div>
  );
}
