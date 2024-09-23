/* eslint-disable no-empty */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios';

const ShowProducts = () => {
  const [toggleStates, setToggleStates] = useState({});

  // state variable handling the data of all products
  const [allProducts,setAllProducts] = useState([])

  // This data will come from calling the API for fetching all the products
  const products = [
    { id: 1, title: 'Luxury Leather Sneakers', price: '$199.99' },
    { id: 2, title: 'Classic Running Shoes', price: '$149.99' },
    { id: 3, title: 'Casual Canvas Shoes', price: '$89.99' }
  ];

  // Calling the API fot fetching the product
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const result = await axios.get('https://luxura-api.vercel.app/api/products')
        console.log(result.data)
        setAllProducts(result.data)
        return result
      } catch (error) {
        console.log('Error Fetching Product' + error)
      }
    }
    fetchAllProducts()
  },[])

  const handleToggle = (productId) => {
    setToggleStates((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Luxura All Product</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left p-3">Product Title</th>
              <th className="text-left p-3">Price</th>
              <th className="p-3">Select</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-3">{product.title}</td>
                <td className="p-3">{product.price}</td>
                <td className="text-center p-3">
                  {/* Toggle Switch */}
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={toggleStates[product.id] || false}
                      onChange={() => handleToggle(product.id)}
                    />
                    <span className="relative w-12 h-6 bg-gray-300 rounded-full shadow-inner">
                      <span
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                          toggleStates[product.id] ? 'translate-x-6 bg-green-500' : ''
                        }`}
                      />
                    </span>
                  </label>
                </td>
                <td className="text-center p-3 space-x-4">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProducts;
