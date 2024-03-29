import React, { useEffect, useRef } from "react";
import {
  BsFillFileEarmarkFill,
  BsFillPersonFill,
  BsHourglassSplit,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Overons = () => {
  const sectionRef = useRef(null);
  const projectCountRef = useRef(null);
  const recommendationsRef = useRef(null);
  const experienceYearsRef = useRef(null);
  const customerSatisfactionRef = useRef(null);

  useEffect(() => {
    const animateNumber = (ref, endValue, suffix = "") => {
      const controller = {
        val: 0,
      };
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        onEnter: () =>
          gsap.to(controller, {
            val: endValue,
            roundProps: "val",
            onUpdate: () => {
              ref.current.innerText = controller.val + suffix;
            },
            duration: 1.5,
          }),
        once: true, // Trigger this animation once per page load
      });
    };

    animateNumber(projectCountRef, 712);
    animateNumber(recommendationsRef, 490);
    animateNumber(experienceYearsRef, 11, "+");
    animateNumber(customerSatisfactionRef, 100, "%");
  }, []);
  return (
    <section ref={sectionRef} className="py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:pr-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-mainBlue">
                <span className="text-sm text-[#212121] uppercase ">
                  Wie zijn wij?
                </span>
                <h1 className="mt-2 text-3xl font-bold text-mainBlue md:text-5xl ">
                  Over ons
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500">
                Welkom bij Genevi BV, uw toegewijde partner voor totaalonderhoud
                en renovaties. Bij Genevi BV geloven we dat uw gebouw een
                waardevol bezit is dat de zorg en aandacht verdient om de
                levensduur te verlengen en het naar nieuwe hoogten te tillen.
                <a
                  href="/onze-diensten"
                  className="underline text-mainBlue pl-1 cursor-pointer"
                >
                  onze diensten
                </a>
              </p>
              <div className="flex flex-wrap items-center ">
                <div className="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4  sm:mb-4 sm:w-1/2 md:w-1/2 lg:mb-6 ">
                  <div className="p-6 bg-white rounded-lg cursor-pointer">
                    <BsFillFileEarmarkFill
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p
                      ref={projectCountRef}
                      className="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white "
                    >
                      0
                    </p>
                    <h2 className="text-sm text-[#212121] bg-white">
                      Projecten
                    </h2>
                  </div>
                </div>
                <div className="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4 sm:mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white rounded-lg cursor-pointer">
                    <BsFillPersonFill
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p
                      ref={recommendationsRef}
                      className="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white "
                    >
                      0
                    </p>
                    <h2 className="text-sm text-[#212121] bg-white">
                      Aanbevelingen
                    </h2>
                  </div>
                </div>
                <div className="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4 sm:mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white rounded-lg cursor-pointer">
                    <BsHourglassSplit
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p
                      ref={experienceYearsRef}
                      className="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white"
                    >
                      0
                    </p>
                    <h2 className="text-sm text-[#212121] bg-white ">
                      Jaar Ervaring
                    </h2>
                  </div>
                </div>
                <div className="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4 sm:mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6  bg-white rounded-lg cursor-pointer">
                    <BsFillHandThumbsUpFill
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p
                      ref={customerSatisfactionRef}
                      className="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white"
                    >
                      0
                    </p>
                    <h2 className="text-sm text-[#212121] bg-white">
                      Klanttevredenheid
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:pl-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us Image"
              className=" object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overons;
