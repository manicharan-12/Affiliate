import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ResponsiveCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024, // screen width 1024px and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // screen width 768px and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, // screen width 480px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ padding: '20px', overflow:"hidden" }}>
      <h2> Responsive Carousel </h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/300x200" alt="1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt=" 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt=" 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt=" 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt=" 5" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300x200" alt=" 6" />
        </div>
      </Slider>
    </div>
  );
};

export default ResponsiveCarousel;
