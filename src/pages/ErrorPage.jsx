import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen bg-gray-200 font-poppins">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
          <div className="justify-center">
            <div className="flex flex-wrap items-center ">
              <div className="w-full px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7">
                <div className="text-center lg:text-left">
                  <h1 className="inline-block mb-8 font-semibold text-[#212121] text-7xl lg:text-9xl ">
                    Oeps!
                  </h1>
                  <h2 className="mb-8 text-2xl font-semibold text-gray-700 lg:text-4xl ">
                    404 Page not found
                  </h2>
                  <p className="mb-8 text-xl text-gray-700 ">
                    Sorry! Deze pagina heeft pootjes gekregen
                  </p>
                  <div className="flex flex-wrap items-center justify-start">
                    <a
                      href="/"
                      className="w-full px-8 py-4 mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-mainBlue rounded-xl lg:w-auto hover:bg-mainHover lg:mb-0 lg:mr-4 md:w-full "
                    >
                      Home
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
                <img
                  src="https://i.postimg.cc/dt0HXw8J/pexels-mikhail-nilov-7534104.jpg"
                  alt=""
                  className="relative inset-0 object-cover w-full h-2/4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
