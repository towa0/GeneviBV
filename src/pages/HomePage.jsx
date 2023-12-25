import React from "react";
import Navbar from "./navbar";
import LandingPage from "./landingPage";
import Overons from "./Overons";
import BeforeAfterSection from "./BeforeAfter";
import Form from "./Form";
import Tesimonials from "./Tesimonials";
import WhyUsSection from "./WhyUsSection";
import Footer from "./Footer";

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
