import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ChoiceItem from "./ChoiceItem/ChoiceItem";


const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <ChoiceItem/>
      <ChoiceItem/>
      <ChoiceItem/>
    </Slider>
  );
}
export default SimpleSlider
