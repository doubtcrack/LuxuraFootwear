/* eslint-disable indent */
import React from 'react'
import img1 from './Black Green Grunge Custom Shoes Medium Banner.png'
import img2 from './Pink White Bold Shoes Product Promotion Landscape Banner.png'
import img3 from './Shoes sale (Banner (Landscape)).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Offersdata = [
  {
    id:1,
    image:img1,
    redirectTo:'/'
  },
  {
    id:2,
    image:img2,
    redirectTo:'/'
  },
  {
    id:3,
    image:img3,
    redirectTo:'/'
  },
  {
    id:4,
    image:img1,
    redirectTo:'/'
  },
  {
    id:5,
    image:img2,
    redirectTo:'/'
  },
  {
    id:6,
    image:img3,
    redirectTo:'/'
  }
]

const OfferBanner = () => {
  return (
    <>
      <div className="max-w-[1540px] mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          speed={1000}
          className="mySwiper"
          loop={false}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 7
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            667: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 4
            }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            stopOnLastSlide: true // Autoplay stops at the last slide
          }}
        >
        {
            Offersdata.map((item,index) => (
                <SwiperSlide key={index}>
                  <Link to={item.redirectTo}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                  </Link>

                </SwiperSlide>
            ))
        }
        </Swiper>
      </div>
    </>
  )
}

export default OfferBanner