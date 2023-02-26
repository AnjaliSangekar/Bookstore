import React from 'react';
import './banner.css';
import Carousel from 'react-bootstrap/Carousel';


export const Banner = () => {

  return (
    <div>

      <Carousel className='banner'>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/bookstore-ad-banner-template_23-2148741823.jpg?w=2000"
            alt="First slide"
          />
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/flat-world-book-day-horizontal-banner_23-2149327026.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://bookbrush.com/wp-content/uploads/Dean-Koontz-Banner.png"
            alt="Third slide"
          />
        </Carousel.Item>
      
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.janegreen.com/wp-content/uploads/2019/05/TheFriendsWeKeep-banner.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.hollywoodreporter.com/wp-content/uploads/2021/12/RightsAvailable_2021-12.jpg?w=1296"
            alt="Fifth slide"
          />
        </Carousel.Item>

      </Carousel>

    </div>

  )

};

// export default Banner;