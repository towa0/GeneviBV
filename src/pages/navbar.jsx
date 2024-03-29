import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import GeneviLogo from "../assets/GeneviLogo2.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-mainHover duration-200"
      : "font-bold hover:text-[#5299AB] duration-200";

  return (
    <nav
      id="navbar"
      className=" w-full h-auto py-2 sticky top-0 bg-[#e5e5e5] text-mainBlue shadow-lg"
    >
      <div className="sm:mx-10 flex items-center justify-between">
        <div className="flex items-center ">
          <NavLink to="/" className="flex items-center">
            <img
              src={GeneviLogo}
              alt="GeneviLogo"
              className="hidden lg:flex h-auto w-[9vw]"
            />
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center w-full justify-center space-x-10 ">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/afspraak" className={linkClass} onClick={closeMenu}>
            Afspraak Maken
          </NavLink>
          <NavLink
            to="/onze-diensten"
            className={linkClass}
            onClick={closeMenu}
          >
            Onze Diensten
          </NavLink>
          {/* <NavLink
            to="/"
            className="font-bold hover:text-[#5299AB] duration-200 "
            onClick={closeMenu}
          >
            Over ons
          </NavLink> */}
          <NavLink
            to="/offerte-aanvragen"
            className={linkClass}
            onClick={closeMenu}
          >
            Offerte Aanvragen
          </NavLink>
        </div>
        <NavLink to="/afspraak">
          <button className="hidden lg:flex border bg-[#23627C] rounded-xl py-4 p-6 text-white font-bold hover:bg-[#337794] duration-200">
            Contact
          </button>
        </NavLink>

        {/* mobile  */}
        <div className="lg:hidden w-full flex items-center justify-between">
          <NavLink to="/" className="flex items-center justify-start">
            <img
              src={GeneviLogo}
              alt="Genevi Logo"
              className="w-auto h-[40vh] max-h-16 ml-4"
            />
          </NavLink>
          <button className="focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? (
              <GrFormClose size={40} />
            ) : (
              <GiHamburgerMenu size={35} className="text-mainBlue mr-12" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 transform transition-transform ease-in duration-300">
          <div className="z-60 h-[100vh] pt-4 pl-4 space-y-8 bg-mainBlue text-white">
            <div className="flex justify-end">
              <button className=" focus:outline-none" onClick={toggleMenu}>
                <GrFormClose size={50} className="text-white mr-10 " />
              </button>
            </div>
            <NavLink
              to="/"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/afspraak"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Afspraak Maken
            </NavLink>
            <NavLink
              to="/onze-diensten"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Onze Diensten
            </NavLink>
            <NavLink
              to="/offerte-aanvragen"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Offerte Aanvragen
            </NavLink>
            <NavLink
              to="/afspraak"
              className="text-4xl font-bold duration-200 block"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
