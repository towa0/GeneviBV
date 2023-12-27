import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./pages/Footer";
import Navbar from "./pages/navbar";
import AfSpraakMaken from "./pages/AfSpraakMaken";
import OnzeDiensten from "./pages/OnzeDiensten";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPages />} />
        <Route path="/afspraak" element={<AfSpraakMakenPage />} />
        <Route path="/onze-diensten" element={<OnzeDienstenPage />} />
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
  const navigate = useNavigate();

  // Scroll to the top when the component is mounted
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <AfSpraakMaken />
      <Footer />
    </>
  );
};

// for scroll
const OnzeDienstenPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <OnzeDiensten />
      <Footer />
    </>
  );
};

export default App;
