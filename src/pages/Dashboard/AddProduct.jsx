/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    slug: 'title',
    title: 'Title',
    productLabel1: '',
    productLabel2: '',
    productLabels: ['label1', 'label2'],
    price: 20,
    description: '',
    reviews: '',
    images: ['https://contents.mediadecathlon.com/p1985522/2e55fd5a52b5304b959738d33fd1f053/p1985522.jpg','https://contents.mediadecathlon.com/p1985522/2e55fd5a52b5304b959738d33fd1f053/p1985522.jpg']
  });

  console.log(formData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image change separately
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files[0] // Store the selected file
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object to send image and text data
    const formDataToSend = new FormData();
    formDataToSend.append('images', formData.images);
    formDataToSend.append('slug', formData.slug);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('productLabel1', formData.productLabel1);
    formDataToSend.append('productLabel2', formData.productLabel2);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('reviews', formData.reviews);

    console.log(formData)
    try {
      // Send form data using axios POST
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/products`, formData, {
        headers: {
          'Content-Type': 'application/json' // Required for file uploads
        }
      });

      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        {/* Product Image */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Product Image:</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Other Input Fields */}
        <div>
          <label className="block text-gray-700">Product URL</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product URL"
          />
        </div>

        <div>
          <label className="block text-gray-700">Product Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product title"
          />
        </div>

        <div>
          <label className="block text-gray-700">Product Label 1:</label>
          <input
            type="text"
            name="productLabel1"
            value={formData.productLabel1}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product label 1"
          />
        </div>

        <div>
          <label className="block text-gray-700">Product Label 2:</label>
          <input
            type="text"
            name="productLabel2"
            value={formData.productLabel2}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product label 2"
          />
        </div>

        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product price"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Product Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter product description"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Customer Reviews:</label>
          <textarea
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            placeholder="Enter customer reviews"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct