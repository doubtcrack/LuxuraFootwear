// AddProduct.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddProduct = () => {
  const [imageFiles, setImageFiles] = useState([]);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Product title is required'),
    price: Yup.number().required('Price is required').positive().integer(),
    productLabels: Yup.string().required('Product labels are required'),
    description: Yup.string().required('Product description is required')
  });

  // Handle file change
  const handleFileChange = (e) => {
    setImageFiles(e.target.files);
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    // Append form data
    formData.append('title', values.title);
    formData.append('slug', values.slug || ''); // Optional field
    formData.append('price', values.price);
    formData.append('productLabels', values.productLabels);
    formData.append('description', values.description);

    // Append images
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append('images', imageFiles[i]);
    }

    try {
      const res = await axios.post(
        'http://localhost:8000/api/products',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(res.data);
      resetForm();
      setImageFiles([]); // Clear the file input after successful submission
    } catch (error) {
      console.error('Error adding product', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <Formik
        initialValues={{
          title: '',
          slug: '',
          price: '',
          productLabels: '',
          description: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-4">
            {/* Product Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Product Title
              </label>
              <Field
                name="title"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Slug */}
            <div>
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-gray-700"
              >
                Slug (Optional)
              </label>
              <Field
                name="slug"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <Field
                name="price"
                type="number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Product Labels */}
            <div>
              <label
                htmlFor="productLabels"
                className="block text-sm font-medium text-gray-700"
              >
                Product Labels
              </label>
              <Field
                name="productLabels"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="productLabels"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Field
                name="description"
                as="textarea"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700"
              >
                Product Images
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {imageFiles.length > 0 && (
                <div className="mt-2 text-sm text-green-500">
                  {imageFiles.length} image(s) selected
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Adding...' : 'Add Product'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
