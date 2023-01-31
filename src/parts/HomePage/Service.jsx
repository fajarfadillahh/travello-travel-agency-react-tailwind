import React from "react";

// import service data
import { serviceData } from "../../data";

export default function Service() {
  return (
    <section className="services pb-16">
      <div className="services__container container">
        <div className="services__group grid grid-cols-[.8fr] justify-center gap-6">
          {serviceData.map((item, index) => {
            return (
              <div
                className="services__card grid gap-6 rounded-lg border border-gray-200 bg-white py-8 px-6 transition-all duration-400 hover:border-blue-600 hover:shadow-lg"
                key={index}
              >
                <img src={item.icons} alt="icon service" className="w-16" />

                <div className="services__data">
                  <h3 className="pb-2 font-serif text-[20px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[180%] text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
