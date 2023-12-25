import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import beforeImage1 from "../assets/before_img_1.png";
import afterImage1 from "../assets/after_img_1.png";
import beforeImage2 from "../assets/before_img_2.png";
import afterImage2 from "../assets/after_img_2.png";

const BeforeAfterSection = () => {
  const [sliderIndex1, setSliderIndex1] = useState(0); // Add state for the first slider
  const [sliderIndex2, setSliderIndex2] = useState(0); // Add state for the second slider

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <BsArrowLeftCircleFill
        className={`${className} text-[#23627C] hover:text-[#23627C]/30`}
        style={{ ...style, display: "block", fontSize: 30 }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <BsArrowRightCircleFill
        className={`${className} text-[#23627C] hover:text-[#23627C]/30`}
        style={{ ...style, display: "block", fontSize: 30 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSliderIndex1(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const settings2 = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSliderIndex2(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#212121] md:text-5xl mb-8 text-center">
          Vóór <span className="text-[#23627C]">en Na de Transformatie</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
          <Slider {...settings} className="sm:w-[25vw] w-[50vw] mx-auto mb-10 sm:mb-0">
            <div className=" overflow-hidden">
              <img
                src={beforeImage1}
                alt="Before 1"
                className="sm:h-auto sm:max-w-[25vw] w-[50vw]"
              />
            </div>
            <div className=" overflow-hidden">
              <img
                src={afterImage1}
                alt="After 1"
                className="sm:h-auto sm:max-w-[25vw] w-[50vw]"
              />
            </div>
          </Slider>

          <Slider {...settings2} className="sm:w-[25vw] w-[50vw] mx-auto">
            <div className=" overflow-hidden">
              <img
                src={beforeImage2}
                alt="Before 2"
                className="sm:h-auto sm:max-w-[25vw] w-[50vw]"
              />
            </div>
            <div className=" overflow-hidden">
              <img
                src={afterImage2}
                alt="After 2"
                className="sm:h-auto sm:max-w-[25vw] w-[50vw]"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
