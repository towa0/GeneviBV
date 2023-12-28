import React from "react";
import { Link } from "react-router-dom";

const OnzeDiensten = () => {
  return (
    <div className="py-8 h-auto max-w-7xl mx-auto">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mt-6 mb-10 text-[#212121]">
          Onze <span className="text-[#23627C]">Diensten</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Schilderwerken */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#23627C]">
              Schilderwerken
            </h2>
            <p className="text-[#212121] mb-4">
              Ons deskundige team staat klaar om zowel interieurs als exterieurs
              nieuw leven in te blazen met hoogwaardig schilderwerk.
            </p>
            <img
              src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="schilderFoto"
              className="rounded-lg"
            />
          </div>

          {/* Timmerwerk */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#23627C]">
              Timmerwerk
            </h2>
            <p className="text-[#212121] mb-4">
              Van kleine reparaties tot op maat gemaakte meubelstukken, ons
              timmerwerk brengt vakmanschap en precisie naar elke ruimte.
            </p>
            <img
              src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Timmerman Foto"
              className="rounded-lg"
            />
          </div>

          {/* Loodgieterswerk */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#23627C]">
              Loodgieterswerk
            </h2>
            <p className="text-[#212121] mb-4">
              Voor het oplossen van lekkages, installeren van nieuwe
              sanitairvoorzieningen of het renoveren van badkamers staan wij
              paraat.
            </p>
            <img
              src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Loodgieter Foto"
              className="rounded-lg"
            />
          </div>

          {/* Electricain */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#23627C]">
              Elektra Werk
            </h2>
            <p className="text-[#212121] mb-4">
              Moderne elektrische voorzieningen zijn essentieel voor comfort en
              efficiëntie. Wij bieden deskundig elektrawerk, van het upgraden
              van bedrading tot het installeren van innovatieve
              verlichtingssystemen.
            </p>
            <img
              src="https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Elektra Foto"
              className="rounded-lg"
            />
          </div>

          {/*Vloer- en Plafondrenovaties */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#23627C]">
              Vloer- en Plafondrenovaties
            </h2>
            <p className="text-[#212121] mb-4">
              Transformeer uw leefruimte met onze vloer- en
              plafondrenovatieservices. Wij bieden diverse materialen en
              ontwerpen om de perfecte ambiance te creëren die past bij uw stijl
              en behoeften.
            </p>
            <img
              src="https://images.pexels.com/photos/5716303/pexels-photo-5716303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Vloer- en Plafondrenovaties Foto"
              className="rounded-lg"
            />
          </div>

          {/*Persoonlijke Klantgerichtheid */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-[#23627C]">
              Persoonlijke Klantgerichtheid
            </h2>
            <p className="text-[#212121] mb-4">
              Bij Genevi BV staat de klant centraal. We luisteren naar uw wensen
              en zorgen ervoor dat elk aspect van ons werk voldoet aan uw
              verwachtingen. Uw tevredenheid is onze hoogste prioriteit.
            </p>
            <img
              src="https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Persoonlijke Klantgerichtheid Foto"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10 w-full h-[20vh]">
          <h1 className="text-2xl mb-4">
            Klaar? Klik hier onder voor een gratis offerte
          </h1>
          <Link to="/offerte-aanvragen">
            <button className="border bg-[#23627C] rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200">
              Vraag Offerte
            </button>
          </Link>
        </div>

        {/* <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#212121]">
            Persoonlijke Klantgerichtheid
          </h2>
          <p className="text-[#212121] mb-4">
            Bij Genevi BV staat de klant centraal. We luisteren naar uw wensen
            en zorgen ervoor dat elk aspect van ons werk voldoet aan uw
            verwachtingen.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default OnzeDiensten;
