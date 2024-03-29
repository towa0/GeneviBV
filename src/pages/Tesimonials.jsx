import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "../data/data";

const Tesimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prev) => prev + 3);
  };
  return (
    <section id="reviews" className="flex items-center mt-8">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="mb-4 text-2xl sm:text-5xl font-bold text-mainBlue">
            Klantervaringen
          </h1>
          <p className="max-w-xl mx-auto text-gray-500">
            Ontdek wat onze klanten over ons te zeggen hebben! Lees enkele van
            hun positieve ervaringen en ontdek waarom ze voor Genevi hebben
            gekozen. We kijken ernaar uit om ook met u samen te werken!
          </p>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
              <div
                key={testimonial.id}
                className="mb-8 rounded shadow-lg bg-white cursor-pointer hover:scale-105 duration-200"
              >
                <div className="relative z-20 p-8">
                  <div className="flex items-center mb-5 gap-x-4">
                    <div className="relative w-24 h-24 rounded-full">
                      {/* Testimonial Image */}
                      <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-mainBlue rounded-full">
                        <RiDoubleQuotesL className="bg-transparent" size={20} />
                      </span>
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={testimonial.image}
                        alt={`testimonial-user-${testimonial.id}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="info">
                      {/* Testimonial Author and Rating */}
                      <h2 className="text-lg font-bold text-black">
                        {testimonial.name}
                      </h2>
                      <span className="flex mt-2 text-orange-500 gap-x-0.5">
                        {Array.from(
                          { length: testimonial.rating },
                          (_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          )
                        )}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Load More Button */}
        {visibleTestimonials < testimonials.length && (
          <button
            className="border bg-mainBlue rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200"
            onClick={loadMoreTestimonials}
          >
            Toon Meer
          </button>
        )}
      </div>
    </section>
  );
};

export default Tesimonials;
