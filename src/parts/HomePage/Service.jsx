import React from "react";

// import service data
import { serviceData } from "../../data";

export default function Service() {
  return (
    <section className="services pb-16">
      <div className="services__container container">
        <div className="services__group grid grid-cols-[.8fr] justify-center gap-8 xs:mx-auto xs:max-w-sm sm:max-w-md lg:max-w-2xl lg:grid-cols-2 2xl:max-w-5xl 2xl:grid-cols-3">
          {serviceData.slice(0, 3).map((item, index) => {
            return (
              <div
                key={index}
                className="services__card grid gap-6 rounded-lg border-2 border-gray-200 bg-white py-8 px-6 transition-all duration-400 hover:border-blue-600 hover:shadow-xl"
              >
                <img src={item.icons} alt="icon service" className="w-16" />

                <div className="services__data">
                  <h3 className="pb-2 font-serif text-[20px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium leading-[180%] text-gray-600">
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
