import React from "react";
import { whyUsItems } from "../data/data";

const WhyUsSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 h-auto">
      <h2 className="text-3xl sm:text-5xl font-bold text-[#212121] mb-14 text-center">
        Waarom <span className="text-mainBlue">Genevi BV?</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyUsItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 rounded-xl p-8 shadow-lg flex flex-col justify-between" // Added flex styles for content spacing
          >
            <h3 className="text-xl font-bold text-mainBlue mb-4 flex items-center justify-center">
              {React.createElement(item.icon, {
                className: "text-mainBlue text-2xl mr-3",
              })}{" "}
              {item.title}
            </h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
