import React, { useState } from 'react'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productImage: '',
    productTitle: '',
    productLabel1: '',
    productLabel2: '',
    productDescription: '',
    customerReviews: '',
    price: '',
    productURL:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Product Image:</label>
          <input
            type="file"
            name="productImage"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Product URL</label>
          <input
            type="number"
            name="price"
            value={formData.productURL}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product URL"
          />
        </div>

        {/* Product Title */}
        <div>
          <label className="block text-gray-700">Product Title:</label>
          <input
            type="text"
            name="productTitle"
            value={formData.productTitle}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product title"
          />
        </div>

        {/* Product Label 1 */}
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

        {/* Product Label 2 */}
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

        {/* Price */}
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
        {/* Product Slug (URL) */}

        {/* Product Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Product Description:</label>
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter product description"
          />
        </div>

        {/* Customer Reviews */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Customer Reviews:</label>
          <textarea
            name="customerReviews"
            value={formData.customerReviews}
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