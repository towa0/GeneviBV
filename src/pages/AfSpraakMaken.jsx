import React from "react";
import afSpraakBg from "../assets/aanemers-main-header.png";
import FormInput from "../components/FormInput";

const AfSpraakMaken = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[48vh] sm:-translate-y-[43vh] text-white text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Maak een afspraak
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-md mx-auto">
          Vul onderstaand formulier in en wij nemen contact met u op.
        </p>
      </div>
      <div className="absolute w-[80vw] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20vh]">
        <FormInput />
      </div>

      <img
        src={afSpraakBg}
        alt="afspraakpage bg"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AfSpraakMaken;
