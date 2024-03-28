import './Carousel-slick.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from '../../Assets/carausel-img1.png'
import slide2 from '../../Assets/carausel-img2.png'
import slide3 from '../../Assets/carausel-img3.png'
function Carousel(){
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
return(
  <>
  <div className='slider'>
  <Slider {...settings}>
    <img src={slide1} />
    <img src={slide2} />
    <img src={slide3} />
    </Slider>
  </div>
  </>
)
}
export default Carousel;