import React from "react";
import { Link } from "react-router-dom";
import { offerItems } from "../data/data";

const OnzeDiensten = () => {
  return (
    <div className="py-8 h-auto max-w-7xl mx-auto">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mt-6 mb-10 text-[#212121]">
          Onze <span className="text-mainBlue">Diensten</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold mb-4 text-mainBlue">
                {item.title}
              </h1>
              <p className="text-[#212121] mb-4">{item.description}</p>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 w-full h-[20vh]">
          <h1 className="text-2xl mb-4">
            Klaar? Klik hier onder voor een gratis offerte
          </h1>
          <Link to="/offerte-aanvragen">
            <button className="border bg-mainBlue rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200">
              Vraag Offerte
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnzeDiensten;
