import React from "react";
import './Carousel-slick.css'
import Slider from "react-slick";
import slider1 from '../../Assets/carausel-img1.jpg'
import slider2 from '../../Assets/carausel-img2.jpg'
import slider3 from '../../Assets/carausel-img3.jpg'

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slider1} />
        </div>
        <div>
        <img src={slider2} />
        </div>
        <div>
        <img src={slider3} />
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
