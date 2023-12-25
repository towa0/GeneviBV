import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Tesimonials = () => {
  return (
    <section className="flex items-center mt-8">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="mb-4 text-2xl sm:text-5xl font-bold text-[#23627C]">
            {" "}
            Klantervaringen{" "}
          </h1>
          <p className="max-w-xl mx-auto text-gray-500">
            {" "}
            Ontdek wat onze klanten over ons te zeggen hebben! Lees enkele van
            hun positieve ervaringen en ontdek waarom ze voor Genevi hebben
            gekozen. We kijken ernaar uit om ook met u samen te werken!
          </p>
        </div>
        <div className="flex ">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {/* Testimonial 1 */}
            <div className="mb-8 rounded shadow-lg bg-white cursor-pointer hover:scale-105 duration-200">
              <div className="relative z-20 p-8">
                <div className="flex items-center mb-5 gap-x-4">
                  <div className="relative w-24 h-24 rounded-full">
                    <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-[#23627C] rounded-full ">
                      <RiDoubleQuotesL className="bg-transparent" size={20} />
                    </span>
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://i.stack.imgur.com/dr5qp.jpg"
                      alt="testimonial-user-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="info">
                    <h2 className="text-lg font-bold text-black ">
                      Peter Vermeer
                    </h2>

                    <span className="flex mt-2 text-orange-500 gap-x-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ">
                  Genevi heeft mijn huisrenovatie tot in de puntjes verzorgd.
                  Vakmanschap, betrouwbaarheid en een vriendelijke aanpak. Ze
                  leverden zelfs eerder op dan verwacht. Vijf sterren!
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="mb-8 rounded shadow-lg bg-white cursor-pointer hover:scale-105 duration-200">
              <div className="relative z-20 p-8">
                <div className="flex items-center mb-5 gap-x-4">
                  <div className="relative w-24 h-24 rounded-full">
                    <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-[#23627C] rounded-full ">
                      <RiDoubleQuotesL className="bg-transparent" size={20} />
                    </span>
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="testimonial-user-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="info">
                    <h2 className="text-lg font-bold text-black ">
                      Annelies Jansen
                    </h2>

                    <span className="flex mt-2 text-orange-500 gap-x-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ">
                  Ik ben zeer tevreden met het werk van Aannemersbedrijf Genevi.
                  Ze hebben mijn badkamer prachtig gerenoveerd en alles verliep
                  soepel. Goede communicatie en een topresultaat. Vier sterren!
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="mb-8  rounded shadow-lg-lg bg-white cursor-pointer hover:scale-105 duration-200">
              <div className="relative z-20 p-8">
                <div className="flex items-center mb-5 gap-x-4">
                  <div className="relative w-24 h-24 rounded-full">
                    <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-[#23627C] rounded-full ">
                      <RiDoubleQuotesL className="bg-transparent" size={20} />
                    </span>
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="testimonial-user-3"
                      loading="lazy"
                    />
                  </div>
                  <div className="info">
                    <h2 className="text-lg font-bold text-black ">
                      Theo de Vries
                    </h2>

                    <span className="flex mt-2 text-orange-500 gap-x-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ">
                  Genevi heeft ons geholpen met een uitbreiding van onze woning.
                  Het team was professioneel en vriendelijk, en het project werd
                  binnen het afgesproken budget afgerond. Vier sterren!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tesimonials;
