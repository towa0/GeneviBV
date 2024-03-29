import React from "react";
import FormInput from "../components/FormInput";

const Form = () => {
  return (
    <div
      id="form"
      className="flex flex-col items-center justify-center bg-mainBlue h-auto py-10"
    >
      <h1 className="flex p-4 sm:p-0 text-2xl sm:text-4xl font-bold text-white bg-mainBlue mb-10 pt-4 sm:w-1/4 text-center">
        Direct Een GRATIS Offerte Aanvragen Bij Genevi BV!
      </h1>
      <FormInput />
    </div>
  );
};

export default Form;
