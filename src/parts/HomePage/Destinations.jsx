import React from "react";

// import destination data
import { destinationData } from "../../data";

// import destination card
import DestinationCard from "../../components/DestinationCard";

export default function Destinations() {
  return (
    <section className="destinations section transition-all duration-400 dark:bg-gray-900">
      <div className="destinations__container container grid gap-12">
        <div className="destinations__data text-center">
          <p className="destinations__subtitle section-subtitle">
            Best Destinations
          </p>
          <h1 className="destinations__title section-title">
            Explore the best places with us
          </h1>
        </div>

        <div className="destinations__group grid grid-cols-[.8fr] justify-center gap-8 xs:mx-auto xs:max-w-sm xs:grid-cols-1 lg:max-w-2xl lg:grid-cols-2 xl:max-w-5xl xl:grid-cols-3">
          {/* destination card */}
          {destinationData.map((item, index) => {
            return (
              <div key={index}>
                <DestinationCard
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
