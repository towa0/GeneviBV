import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import GeneviLogo from "../assets/GeneviNavLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className=" w-full h-[8vh] sticky top-0 bg-[#23627C]/90 text-white"
    >
      <div className="sm:mx-10 flex items-center justify-between">
        <div className="flex items-center ">
          <Link to="/" className="flex items-center">
            <img
              src={GeneviLogo}
              alt="Genevi Logo"
              className="hidden lg:flex sm:h-[8vh] sm:w-[8vw] "
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-center space-x-10 ">
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Afspraak Maken
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Onze Diensten
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Onze Projecten
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Over ons
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Offerte Aanvragen
          </Link>
          <Link
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Klantenervaringen
          </Link>
        </div>
        <Link to="/aaa">
          <button className="hidden lg:flex border bg-[#23627C] rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200">
            Contact
          </button>
        </Link>

        {/* mobile stuff */}

        <div className="lg:hidden w-full flex items-center justify-between">
          <Link to="/" className="flex items-center justify-start">
            <img
              src={GeneviLogo}
              alt="Genevi Logo"
              className="w-auto h-[40vh] max-h-16 ml-4"
            />
          </Link>
          <button className="focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? (
              <GrFormClose size={40} />
            ) : (
              <GiHamburgerMenu size={35} className="text-white mr-12" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 transform transition-transform ease-in duration-300">
          <div className="z-60 h-[100vh] pt-4 pl-4 space-y-8 bg-[#23627C] text-white">
            <div className="flex justify-end">
              <button className=" focus:outline-none" onClick={toggleMenu}>
                <GrFormClose size={50} className="text-white mr-10 " />
              </button>
            </div>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Afspraak Maken
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Onze Diensten
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Onze Projecten
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Over ons
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Offerte Aanvragen
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Klantenervaringen
            </Link>
            <Link
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
