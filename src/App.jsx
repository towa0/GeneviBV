import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./pages/Footer";
import Navbar from "./pages/navbar";
import AfSpraakMaken from "./pages/AfSpraakMaken";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPages />} />
        <Route path="/afspraak" element={<AfSpraakMakenPage />} />
      </Routes>
    </Router>
  );
}

const ErrorPages = () => {
  return (
    <>
      <Navbar />
      <ErrorPage />
      <Footer />
    </>
  );
};

const AfSpraakMakenPage = () => {
  return (
    <>
      <Navbar />
      <AfSpraakMaken />
      <Footer />
    </>
  );
};

export default App;
