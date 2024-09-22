/* eslint-disable react/jsx-key */
import React from 'react'
import Banner from '../components/Banner/Banner'
import Productcard from '../components/ProductCard/Productcard'
import img1 from '../components/ProductCard/2.png'
import img2 from '../components/ProductCard/2.png'
import img3 from '../components/ProductCard/2.png'
import img4 from '../components/ProductCard/2.png'
import shoes from '../assests/shoes.png'
import heels from '../assests/heels.png'
import slipper from '../assests/slippers.png'
import sandals from '../assests/sandals.png'
import crocs from '../assests/crocs.png'
import boots from '../assests/boots.png'
import loafer from '../assests/loafers.png'
// import Carousel from 'react-multi-carousel'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import OfferBanner from '../components/OffersBanner/OfferBanner'
import Categories from '../components/Categories/Categories'

const dummyData = [
  {
    id: 1,
    img: img1,
    title: 'Luxura Classic Red High-Top Sneakers - Unisex Casual Canvas Shoes',
    desc: 'Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.',
    reviews: '4.95 (4443 Reviews)',
    price: '$ 24',
    label1: 'Trendy',
    label2: 'Unisex'
  },
  {
    id: 2,
    img: img2,
    title: 'Luxura Blue Mesh Running Shoes - Lightweight Sport Sneakers',
    desc: 'Achieve peak performance with Luxura’s Blue Mesh Running Shoes. Designed with breathable mesh and a cushioned sole, these lightweight sneakers are perfect for running and daily activities.',
    reviews: '4.88 (2987 Reviews)',
    price: '$ 29',
    label1: 'Sportswear',
    label2: 'Running'
  },
  {
    id: 3,
    img: img3,
    title: 'Luxura Black Leather Loafers - Premium Comfort Slip-On Shoes',
    desc: 'Luxura’s Black Leather Loafers bring elegance and comfort together. Featuring a sleek design with soft leather and a cushioned insole, these loafers are perfect for formal and casual wear.',
    reviews: '4.90 (3821 Reviews)',
    price: '$ 45',
    label1: 'Formal',
    label2: 'Leather'
  },
  {
    id: 4,
    img: img4,
    title: 'Luxura White Low-Top Sneakers - Minimalist Street Style',
    desc: 'Elevate your street style with Luxura’s White Low-Top Sneakers. These minimalist sneakers are designed for all-day wear with a durable sole and versatile look to match any outfit.',
    reviews: '4.93 (5120 Reviews)',
    price: '$ 35',
    label1: 'Casual',
    label2: 'Street'
  },
  {
    id: 5,
    img: img4,
    title: 'Luxura White Low-Top Sneakers - Minimalist Street Style',
    desc: 'Elevate your street style with Luxura’s White Low-Top Sneakers. These minimalist sneakers are designed for all-day wear with a durable sole and versatile look to match any outfit.',
    reviews: '4.93 (5120 Reviews)',
    price: '$ 35',
    label1: 'Casual',
    label2: 'Street'
  },
  {
    id: 6,
    img: img4,
    title: 'Luxura White Low-Top Sneakers - Minimalist Street Style',
    desc: 'Elevate your street style with Luxura’s White Low-Top Sneakers. These minimalist sneakers are designed for all-day wear with a durable sole and versatile look to match any outfit.',
    reviews: '4.93 (5120 Reviews)',
    price: '$ 35',
    label1: 'Casual',
    label2: 'Street'
  },
  {
    id: 7,
    img: img4,
    title: 'Luxura White Low-Top Sneakers - Minimalist Street Style',
    desc: 'Elevate your street style with Luxura’s White Low-Top Sneakers. These minimalist sneakers are designed for all-day wear with a durable sole and versatile look to match any outfit.',
    reviews: '4.93 (5120 Reviews)',
    price: '$ 35',
    label1: 'Casual',
    label2: 'Street'
  }
]

const Category = [
  {
    id: 1,
    img: shoes, // Add the image path
    title: 'Sneakers',
    slug: '/sneakers'
  },
  {
    id: 2,
    img: boots,
    title: 'Boots',
    slug: '/boots'
  },
  {
    id: 3,
    img: loafer,
    title: 'Loafers',
    slug: '/loafers'
  },
  {
    id: 4,
    img: sandals,
    title: 'Sandals',
    slug: '/sandals'
  },
  {
    id: 5,
    img: heels,
    title: 'Heels',
    slug: '/heels'
  },
  {
    id: 6,
    img: slipper,
    title: 'Slippers',
    slug: '/slippers'
  },
  {
    id: 7,
    img: crocs,
    title: 'Crocs',
    slug: '/crocs'
  }
];

// Product carousel responsive

const Home = () => {
  return (
    <>
      <div className="max-w-[1540px] w-full mx-auto mt-[60px] lg:mt-[80px]">
        {/* Only show category tab on mobile */}
        <div className=" flex overflow-scroll lg:hidden no-scrollbar gap-6 p-2">
          {Category.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Image in a rounded circle */}
              <div style={{ border: '1px solid #bcbaba' }} className="rounded-full shadow-lg p-1 overflow-hidden w-10 h-10 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title below the circle */}
              <p className="mt-2 text-center text-[12px] lg:text-base font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <Banner />
        <h1 className=" text-center mt-4 text-[22px] font-semibold sm:text-[32px]">Top Rated Sneakers</h1>
        <p className="text-center text-[10px] sm:text-[20px] text-[#585757]">Get upto 20% Off on Mens Casual Sneakers</p>
        {/* Grid layout for showing product cards */}
        {/* <div className="my-5 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {
            dummyData.map((item,index) => {
              return <Productcard
                key={index}
                productImage={item.img}
                productLabel1={item.label1}
                productLabel2={item.label2}
                productTitle={item.title}
                productDescription={item.desc}
                productReviews={item.reviews}
                productPrice={item.price}
              />
            })
          }
        </div> */}

        {/* Home Page carousel */}
        {/* <div className="my-5">
          <Carousel
            swipeable={true}
            draggable={true}
            autoPlay={false}
            centerMode={true}
            responsive={responsiveHome}
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            infinite={true}
            arrows={true}
            showDots={false}
          >
            {
              dummyData.map((item,index) => {
                return <Productcard
                  key={index}
                  productImage={item.img}
                  productLabel1={item.label1}
                  productLabel2={item.label2}
                  productTitle={item.title}
                  productDescription={item.desc}
                  productReviews={item.reviews}
                  productPrice={item.price}
                />
              })
            }
          </Carousel>
        </div> */}

        {/* New Slider here */}
        <div className="w-full mx-auto p-4">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            speed={1000}
            className="mySwiper"
            loop={false} // Make sure loop is disabled
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
            {dummyData.map((item, index) => (
              <SwiperSlide key={index}>
                <Productcard
                  productImage={item.img}
                  productLabel1={item.label1}
                  productLabel2={item.label2}
                  productTitle={item.title}
                  productDescription={item.desc}
                  productReviews={item.reviews}
                  productPrice={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full mx-auto p-4 my-5">
          <h1 className="text-center font-semibold text-[22px] md:text-[32px]">Grab Month end Sale</h1>
          <p className="text-center text-[10px] sm:text-[20px] text-[#585757]">Get big discounts on month end sneaker sale</p>
          <OfferBanner />
        </div>

        <div className="w-full mx-auto p-4 my-5">
          <h1 className="text-center font-semibold text-[22px] md:text-[32px]">Shop New Launches</h1>
          <p className="text-center text-[10px] sm:text-[20px] text-[#585757]">Grab the newly launch sneakers</p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            speed={1000}
            className="mySwiper"
            loop={false} // Make sure loop is disabled
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
            {dummyData.map((item, index) => (
              <SwiperSlide key={index}>
                <Productcard
                  productImage={item.img}
                  productLabel1={item.label1}
                  productLabel2={item.label2}
                  productTitle={item.title}
                  productDescription={item.desc}
                  productReviews={item.reviews}
                  productPrice={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* this is only seen in dekstop */}
        <div className=" hidden md:block">
          <div className="w-full mx-auto p-4 my-5">
            <h1 className="text-center font-semibold text-[22px] md:text-[32px]">Shop by Categories</h1>
            <p className="text-center text-[10px] sm:text-[20px] text-[#585757]">Shop your Favourite sneakers with categories</p>
            <Categories />
          </div>
        </div>

      </div>

    </>
  )
}

export default Home