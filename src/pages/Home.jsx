import React from 'react'
import Banner from '../components/Banner/Banner'
import Productcard from '../components/ProductCard/Productcard'

const dummyData = [
  {
    id:1,
    img:'',
    title:'Luxura Classic Red High-Top Sneakers - Unisex Casual Canvas Shoes',
    desc:'Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.',
    reviews:'4.95 (4443 Reviews)',
    price:'$ 24',
    label1:'Trendy Footwear',
    label2:'Unisex Sneaker'
  },
  {
    id:2,
    img:'',
    title:'',
    desc:'',
    reviews:'4.95 (4443 Reviews)',
    price:'',
    label1:'Comfort Fit',
    label2:'Casual Vibes'
  },
  {
    id:3,
    img:'',
    title:'',
    desc:'',
    reviews:'4.95 (4443 Reviews)',
    price:'',
    label1:'Everyday Essential',
    label2:'Durable Sole'
  },
  {
    id:4,
    img:'',
    title:'',
    desc:'',
    reviews:'4.95 (4443 Reviews)',
    price:'',
    label1:'Lightweight',
    label2:'Street Style'
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