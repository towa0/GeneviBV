import React from "react";
import {
  FaHammer,
  FaCogs,
  FaHeart,
  FaRegThumbsUp,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const WhyUsSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <h2 className="text-3xl sm:text-5xl font-bold text-[#212121] mb-14 text-center">
        Waarom <span className="text-[#23627C]">Genevi BV?</span>
      </h2>
      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-8 ">
        <div className="bg-white p-8 rounded-lg shadow-md sm:w-1/3 mx-auto sm:mr-auto md:ml-[14vw]">
          <h3 className="flex text-2xl font-bold text-[#23627C] mb-4 justify-center">
            <FaHammer className="mt-1 mr-2" />
            Ervaren Vakmanschap
          </h3>
          <p className="text-gray-500">
            Ons toegewijde team bestaat uit ervaren professionals met een
            diepgaande kennis van de bouwsector. Wij bieden vakmanschap van het
            hoogste niveau, gesteund door jarenlange expertise.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md sm:w-1/3 mx-auto sm:ml-auto md:mr-[14vw]">
          <h3 className="flex text-2xl font-bold text-[#23627C] mb-4 justify-center">
            <FaCogs className="mt-1 mr-2" />
            Breed Scala aan Diensten
          </h3>
          <p className="text-gray-500">
            Van schilderwerk tot vloerrenovaties, wij bieden een uitgebreid
            scala aan diensten. Of het nu gaat om historische panden, woningen,
            of bedrijfsruimtes, wij hebben de expertise om aan al uw behoeften
            te voldoen.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md sm:w-1/3 mx-auto sm:mr-auto md:ml-[14vw]">
          <h3 className="flex text-2xl font-bold text-[#23627C] mb-4 justify-center">
            <FaHeart className="mt-1 mr-2" />
            Persoonlijke Aandacht
          </h3>
          <p className="text-gray-500">
            Uw visie staat centraal. Onze klantgerichte benadering zorgt ervoor
            dat we uw wensen begrijpen en ons werk daarop afstemmen. Bij Genevi
            BV krijgt u de persoonlijke aandacht die uw project verdient.
          </p>
        </div>
        {/*  */}
        <div className="bg-white p-8 rounded-lg shadow-md sm:w-1/3 mx-auto sm:ml-auto md:mr-[14vw]">
          <h3 className="flex text-2xl font-bold text-[#23627C] mb-4 justify-center">
            <FaMagnifyingGlass className="mt-1 mr-2" />
            Diepgaande Expertise
          </h3>
          <p className="text-gray-500">
            Bij Genevi BV koesteren we een diepgaande expertise in de
            bouwsector. Ons team van ervaren professionals beschikt over
            uitgebreide kennis, wat resulteert in vakmanschap van het hoogste
            niveau. Met een solide achtergrond in de branche streven we ernaar
            om elk project met precisie en professionaliteit te voltooien.
          </p>
        </div>
        {/*  */}
        <div className="bg-white p-8 rounded-lg shadow-md sm:w-1/3 mx-auto sm:mr-auto md:ml-[14vw]">
          <h3 className="flex text-2xl font-bold text-[#23627C] mb-4 justify-center">
            <FaRegThumbsUp className="mt-1 mr-2" />
            Klantgerichte Benadering
          </h3>
          <p className="text-gray-500">
            Bij Genevi BV geloven we in een klantgerichte benadering waarin uw
            visie centraal staat. Door goed te luisteren naar uw wensen en
            eisen, stemmen we ons werk af op uw specifieke behoeften. Wij
            garanderen de persoonlijke aandacht die uw project verdient,
            waardoor we een duurzame relatie opbouwen die gebaseerd is op
            vertrouwen en tevredenheid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
