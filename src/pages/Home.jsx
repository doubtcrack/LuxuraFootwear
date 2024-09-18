import React from 'react'
import Banner from '../components/Banner/Banner'
import Productcard from '../components/ProductCard/Productcard'
import img1 from '../components/ProductCard/2.png'
import img2 from '../components/ProductCard/2.png'
import img3 from '../components/ProductCard/2.png'
import img4 from '../components/ProductCard/2.png'

const dummyData = [
  {
    id:1,
    img: img1,
    title:'Luxura Classic Red High-Top Sneakers - Unisex Casual Canvas Shoes',
    desc:'Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.',
    reviews:'4.95 (4443 Reviews)',
    price:'$ 24',
    label1:'Trendy Footwear',
    label2:'Unisex Sneaker'
  },
  {
    id: 2,
    img: img2,
    title: 'Luxura Blue Mesh Running Shoes - Lightweight Sport Sneakers',
    desc: 'Achieve peak performance with Luxura’s Blue Mesh Running Shoes. Designed with breathable mesh and a cushioned sole, these lightweight sneakers are perfect for running and daily activities.',
    reviews: '4.88 (2987 Reviews)',
    price: '$ 29',
    label1: 'Sportswear',
    label2: 'Running Shoes'
  },
  {
    id: 3,
    img: img3,
    title: 'Luxura Black Leather Loafers - Premium Comfort Slip-On Shoes',
    desc: 'Luxura’s Black Leather Loafers bring elegance and comfort together. Featuring a sleek design with soft leather and a cushioned insole, these loafers are perfect for formal and casual wear.',
    reviews: '4.90 (3821 Reviews)',
    price: '$ 45',
    label1: 'Formal Footwear',
    label2: 'Leather Loafers'
  },
  {
    id: 4,
    img: img4,
    title: 'Luxura White Low-Top Sneakers - Minimalist Street Style',
    desc: 'Elevate your street style with Luxura’s White Low-Top Sneakers. These minimalist sneakers are designed for all-day wear with a durable sole and versatile look to match any outfit.',
    reviews: '4.93 (5120 Reviews)',
    price: '$ 35',
    label1: 'Casual Footwear',
    label2: 'Street Style Sneakers'
  }
]

const Home = () => {
  return (
    <>
      <div className="max-w-[1540px] w-full mx-auto">
        <Banner />
        <div className="my-5 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
        </div>

      </div>

    </>
  )
}

export default Home