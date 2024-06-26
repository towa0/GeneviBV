import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col lg:justify-end font-poppins">
      <div className="w-full bg-mainBlue border-t py-4">
        <div className="max-w-6xl mx-auto">
          <div className="justify-center flex-1 max-w-6xl px-4 py-2 mx-auto lg:py-0">
            <div className="flex justify-between py-4 -mx-3">
              <div className="w-full px-4 mb-7 md:w-1/2 lg:w-4/12 lg:mb-0">
                <a
                  href="#"
                  className="inline-block pb-2 text-lg font-bold text-white"
                >
                  Over Genevi BV
                </a>
                <div className="w-16 mb-4 border-b-2 border-mainBlue "></div>
                <p className="text-base font-normal leading-6 lg:w-64 text-white">
                  Welkom bij Genevi BV, uw partner voor totaalonderhoud en
                  renovaties. Ons ervaren team specialiseert zich in het leveren
                  van hoogwaardige diensten.
                </p>
              </div>
              <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-7 lg:mb-0">
                <h2 className="pb-2 text-lg font-bold text-white  ">
                  Snelle Links
                </h2>
                <div className="w-16 mb-4 border-b-2 border-mainBlue "></div>
                <ul className="text-white">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="inline-block text-base font-normal hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="inline-block text-base font-normal hover:underline"
                    >
                      Over Ons
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/offerte-aanvragen"
                      className="inline-block text-base font-normal hover:underline"
                    >
                      Offerte Aanvragen
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
                <h2 className="pb-2 text-lg font-bold text-white ">Info</h2>
                <div className="w-16 mb-4 border-b-2 border-mainBlue"></div>
                <p className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-white  bi bi-geo-alt "
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  </svg>
                  <span className="text-white">Naaldwijk, Zuid-Holland</span>
                </p>
                <p className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 text-white  bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                  </svg>
                  <span className="text-white">administratie@genevi.nl</span>
                </p>
                <p className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                  <span className="text-white ">+31 6 31 93 97 10</span>
                </p>
                <p className="flex items-center mb-4">
                  <span className="text-white">KvK: 93413912</span>
                </p>
                <p className="flex items-center mb-4">
                  <span className="text-white">Btw: NL866387195B01</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 ">
        <div className="flex flex-wrap items-center justify-between max-w-6xl gap-4 mx-auto">
          <div className="font-bold text-gray-600">
            {" "}
            © Copyright 2023 . All Rights Reserved
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/GeneviBV"
              className="mr-4 text-gray-600  hover:text-mainBlue"
            >
              <FaFacebook size={30} className="hover:text-mainBlue" />
            </a>
            <a
              href="www.linkedin.com/in/genevi-bv"
              className="mr-4 text-gray-600  hover:text-mainBlue"
            >
              <FaLinkedin size={30} className="hover:text-mainBlue" />
            </a>
            <a
              href="https://instragram.com/bvGenevii"
              className="mr-4 text-gray-600  hover:text-mainBlue"
            >
              <FaInstagram size={30} className="hover:text-mainBlue" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
