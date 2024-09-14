import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Banner1 from './banner-1.png'
import Banner2 from './banner-2.png'
import Banner3 from './banner-3.png'
import Banner4 from './banner-4.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Banner = () => {
  return (
    <>
      <div className="max-h-[500px] overflow-hidden relative">
        <Carousel
          swipeable={true}
          draggable={true}
          autoPlay={true}
          responsive={responsive}
          autoPlaySpeed={4000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          infinite={true}
          arrows={true}
          showDots={true}
        >
          <img src={Banner1} alt="" />
          <img src={Banner2} alt="" />
          <img src={Banner3} alt="" />
          <img src={Banner4} alt="" />
        </Carousel>
      </div>

    </>
  )
}

export default Banner