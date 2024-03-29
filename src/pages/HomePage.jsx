import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Overons from "./Overons";
import BeforeAfterSection from "./BeforeAfter";
import Form from "./Form";
import Tesimonials from "./Tesimonials";
import WhyUsSection from "./WhyUsSection";
import Footer from "./Footer";
import AfSpraakMaken from "./AfSpraakMaken";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Overons />
      <BeforeAfterSection />
      <Form />
      <Tesimonials />
      <WhyUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
