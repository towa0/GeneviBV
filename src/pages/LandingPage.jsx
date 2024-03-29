import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { gsap } from "gsap";

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".landing-header",
      { opacity: 0, x: -20 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".landing-paragraph",
      { opacity: 0, x: -20 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".landing-button",
      { opacity: 0, x: -20 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".landing-image",
      { opacity: 0, x: 30 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  // fix
  return (
    <section className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto">
      <div className="sm:hidden w-full mb-8">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Aannemersbedrijf Header"
          className="landing-image w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center mb-16">
        <div className="text-center sm:text-left pr-8">
          <h1 className="text-3xl sm:text-7xl font-bold text-[#212121] landing-header">
            Welkom bij{" "}
            <span className="text-mainBlue inline-block">Genevi.nl</span>
          </h1>
          <p className="text-md my-8 text-gray-500 sm:w-[25vw] landing-paragraph">
            Jouw betrouwbare partner in{" "}
            <Link to="/">
              <span className="text-mainBlue inline-block font-bold">
                bouwprojecten
              </span>
            </Link>
            . Van nieuwbouw tot renovaties, wij leveren hoogwaardige vakmanschap
            en service. Samen bouwen we aan je dromen en realiseren we duurzame
            oplossingen voor al jouw bouwbehoeften.
          </p>
          <Link to="form" smooth="true" offset={-70}>
            <button className="landing-button border bg-mainBlue rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200">
              Vraag Offerte
            </button>
          </Link>
          <Link to="reviews" smooth="true" offset={-90}>
            <button className="landing-button border-2 border-mainBlue ml-2 rounded-xl py-4 p-6 text-mainBlue font-bold hover:bg-[#337794]/30 duration-200">
              Bekijk Reviews
            </button>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Aannemersbedrijf Header"
            className="landing-image w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
