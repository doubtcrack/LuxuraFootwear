import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Banner1 from './banner-1.png'
import Banner2 from './banner-2.png'
import Banner3 from './banner-3.png'
import Banner4 from './banner-4.png'

// Temprory data for banner
const bannerData = [
  {
    id:1,
    img: Banner1,
    link:''
  },
  {
    id:2,
    img: Banner2,
    link:''
  },
  {
    id:3,
    img: Banner3,
    link:''
  },
  {
    id:4,
    img: Banner4,
    link:''
  }
]

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
          {
            bannerData.map((item,index) => {
              return <img key={index} src={item.img} alt=""/>
            })
          }
        </Carousel>
      </div>

    </>
  )
}

export default Banner