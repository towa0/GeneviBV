import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // const response = await fetch('http://localhost:3001/api/submit-form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      const submitUrl =
        "https://genevibackend-production.up.railway.app/api/submit-form";
      // console.log("Submitting form to:", submitUrl);
      const response = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // console.log("Form submitted successfully");
        setSubmissionSuccess(true);
        reset();
      } else {
        // console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      {submissionSuccess ? (
        <p className="text-green-500 flex justify-center text-xl font-bold">
          Formulier succesvol ingediend!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 z-40 sm:p-8 rounded-md shadow-md w-full sm:w-1/2 lg:w-1/3 sm:mx-auto"
        >
          {errors.Naam && <p className="text-red-500">Vul een naam in</p>}
          <input
            type="text"
            placeholder="Naam"
            {...register("Naam", { required: true })}
            className="mb-4 p-2 w-full border border-gray-300 rounded-md "
          />

          {errors.Email && (
            <p className="text-red-500">Vul een geldig e-mailadres in</p>
          )}
          <input
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className="mb-4 p-2 w-full border border-gray-300 rounded-md "
          />
          {errors["Telefoon nummer"] && (
            <p className="text-red-500">Vul een geldig telefoonnummer </p>
          )}
          <input
            type="tel"
            placeholder="Telefoon nummer"
            {...register("Telefoon nummer", {
              required: true,
              pattern: /^(\+\d{1,2}\s?)?(\(\d{1,4}\))?[0-9\-.\s]{6,}$/i,
            })}
            className="mb-4 p-2 w-full border border-gray-300 rounded-md "
          />

          <input
            type="text"
            placeholder="Woonplaats"
            {...register("Woonplaats", { required: true })}
            className="mb-4 p-2 w-full border border-gray-300 rounded-md "
          />

<select
  {...register("Waar gaat uw interesse naar uit?", {
    required: true,
  })}
  defaultValue=""  // Set the default value to the empty option's value
  className="mb-4 p-2 w-full border border-gray-300 rounded-md"
>
  {/* This option acts as a placeholder and is not selectable once another option is chosen */}
  <option value="" disabled>
    Waar gaat uw interesse naar uit?
  </option>
  <option value="Interieur / Architectuur">Interieur / Architectuur</option>
  <option value="Nieuwbouw">Nieuwbouw</option>
  <option value="Verbouwen">Verbouwen</option>
  <option value="Renovatie">Renovatie</option>
  <option value="Zakelijk bedrijfsobject">Zakelijk bedrijfsobject</option>
  <option value="Verduurzaming">Verduurzaming</option>
  <option value="Anders">Anders</option>
</select>

          <textarea
            {...register("Opmerkingen", { required: true })}
            placeholder="Uw bericht..."
            className="mb-4 p-2 w-full border border-gray-300 rounded-md"
          />
          <input type="text" name="honeypot" style={{ display: "none" }} />
          <input
            type="submit"
            value="Verzenden"
            disabled={isSubmitting}
            className={`border rounded-xl py-4 p-6 text-white font-bold duration-200 cursor-pointer ${
              isSubmitting ? "bg-gray-500" : "bg-mainBlue hover:bg-mainHover"
            }`}
          />
        </form>
      )}
    </div>
  );
};

export default FormInput;
