import React from "react";
import {
  BsFillFileEarmarkFill,
  BsFillPersonFill,
  BsHourglassSplit,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import landingPageImage from "../assets/aanemers-main-header.png";

const Overons = () => {
  return (
    <section class="py-10 lg:py-20 max-w-7xl mx-auto">
      <div class="max-w-6xl py-4 mx-auto lg:py-6 md:pr-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div class="lg:max-w-md">
              <div class="px-4 pl-4 mb-6 border-l-4 border-[#23627C]">
                <span class="text-sm text-[#212121] uppercase ">
                  Wie zijn wij?
                </span>
                <h1 class="mt-2 text-3xl font-bold text-[#23627C] md:text-5xl ">
                  Over ons
                </h1>
              </div>
              <p class="px-4 mb-10 text-base leading-7 text-gray-500">
                Welkom bij Genevi BV, uw toegewijde partner voor totaalonderhoud
                en renovaties. Bij Genevi BV geloven we dat uw gebouw een
                waardevol bezit is dat de zorg en aandacht verdient om de
                levensduur te verlengen en het naar nieuwe hoogten te tillen.
              </p>
              <div class="flex flex-wrap items-center ">
                <div class="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4  sm:mb-4 sm:w-1/2 md:w-1/2 lg:mb-6 ">
                  <div class="p-6 bg-white rounded-lg cursor-pointer">
                    <BsFillFileEarmarkFill
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p class="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white ">
                      712
                    </p>
                    <h2 class="text-sm text-[#212121] bg-white">Projecten</h2>
                  </div>
                </div>
                <div class="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4 sm:mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white rounded-lg cursor-pointer">
                    <BsFillPersonFill
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p class="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white ">
                      490
                    </p>
                    <h2 class="text-sm text-[#212121] bg-white">
                      Aanbevelingen
                    </h2>
                  </div>
                </div>
                <div class="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4 sm:mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6 bg-white rounded-lg cursor-pointer">
                    <BsHourglassSplit
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p class="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white">
                      11+
                    </p>
                    <h2 class="text-sm text-[#212121] bg-white ">
                      Jaar Ervaring
                    </h2>
                  </div>
                </div>
                <div class="w-[45vw] h-[22vh] sm:h-auto py-4 px-1 sm:px-4 sm:mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div class="p-6  bg-white rounded-lg cursor-pointer">
                    <BsFillHandThumbsUpFill
                      size={45}
                      className="bg-white text-[#5299AB]"
                    />
                    <p class="mt-4 mb-2 text-3xl font-bold text-[#212121] bg-white">
                      100%
                    </p>
                    <h2 class="text-sm text-[#212121] bg-white">
                      Klanttevredenheid
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full sm:pl-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us Image"
              class=" object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overons;
