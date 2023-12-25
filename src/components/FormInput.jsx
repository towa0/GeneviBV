import React from "react";
import { useForm } from "react-hook-form";

const FormInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 sm:p-8 rounded-md shadow-md w-full sm:w-1/2 lg:w-1/4"
    >
      <input
        type="text"
        placeholder="Naam"
        {...register("Naam", { required: true })}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md "
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true })}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md "
      />
      <input
        type="text"
        placeholder="Woonplaats"
        {...register("Woonplaats", {})}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md "
      />
      <input
        type="tel"
        placeholder="Telefoon nummer"
        {...register("Telefoon nummer", { required: true })}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md "
      />
      <select
        {...register("Waar gaat uw interesse naar uit?", { required: true })}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md "
      >
        <option value="" disabled selected>
          Waar gaat uw interesse naar uit?
        </option>
        <option value="Interieur / Architectuur">
          Interieur / Architectuur
        </option>
        <option value="Nieuwbouw">Nieuwbouw</option>
        <option value="Verbouwen">Verbouwen</option>
        <option value="Renovatie">Renovatie</option>
        <option value="Zakelijk bedrijfsobject">Zakelijk bedrijfsobject</option>
        <option value="Verduurzaming">Verduurzaming</option>
        <option value="Anders">Anders</option>
      </select>
      <textarea
        {...register("Opmerkingen")}
        placeholder="Uw bericht..."
        className="mb-4 p-2 w-full border border-gray-300 rounded-md "
      />
      <input
        type="submit"
        value="Verzenden"
        className="border bg-[#23627C] rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200 cursor-pointer"
      />
    </form>
  );
};

export default FormInput;
