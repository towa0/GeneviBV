import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto">
      {/* Display on small screens */}
      <div className="sm:hidden w-full mb-8">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Aannemersbedrijf Header"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center mb-16">
        <div className="text-center sm:text-left pr-8">
          <h1 className="text-3xl sm:text-7xl font-bold text-[#212121]">
            Welkom bij{" "}
            <span className="text-[#23627C] inline-block">Genevi.nl</span>
          </h1>
          <p className="text-md my-8 text-gray-500 sm:w-[25vw]">
            Jouw betrouwbare partner in{" "}
            <Link to="/">
              <span className="text-[#23627C] inline-block hover:underline cursor-pointer font-bold">
                bouwprojecten
              </span>
            </Link>
            . Van nieuwbouw tot renovaties, wij leveren hoogwaardige vakmanschap
            en service. Samen bouwen we aan je dromen en realiseren we duurzame
            oplossingen voor al jouw bouwbehoeften.
          </p>
          <Link to="form" smooth="true" offset={-70}>
            <button className="border bg-[#23627C] rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200">
              Vraag Offerte
            </button>
          </Link>
          <Link to="reviews" smooth="true" offset={-90}>
            <button className="border-2 border-[#23627C] ml-2 rounded-xl py-4 p-6 text-[#23627C] font-bold hover:bg-[#337794]/30 duration-200">
              Bekijk Reviews
            </button>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Aannemersbedrijf Header"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
