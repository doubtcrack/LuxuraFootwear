/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryForm() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', featured: false, status: 'Active', parentId: null });

  // Fetch categories from backend API
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/categories/all`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  // Handle new category creation
  const handleCreateCategory = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/categories/create`, newCategory);
      setNewCategory({ name: '', featured: false, status: 'Active', parentId: null });
      // Reload categories after creation
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/categories/all`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  // Update the state when input values change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow-lg">
        <h1 className="text-xl font-bold mb-4">Manage Categories</h1>
        <div className="flex mb-4">
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            value={newCategory.name}
            onChange={handleChange}
            className="p-2 border rounded mr-2 w-full"
          />
          <select
            name="status"
            value={newCategory.status}
            onChange={handleChange}
            className="p-2 border rounded mr-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="featured"
              checked={newCategory.featured}
              onChange={handleChange}
            />
            <span>Featured</span>
          </label>
          <button
            onClick={handleCreateCategory}
            className="bg-blue-500 text-white p-2 rounded ml-4"
          >
            Add Category
          </button>
        </div>

        {/* List categories */}
        <div className="bg-white rounded-lg shadow overflow-hidden border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.featured ? 'Yes' : 'No'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.productsCount || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryForm;
