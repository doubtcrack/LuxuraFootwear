import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddProduct = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [productLabels, setProductLabels] = useState([]);
  const inputRef = useRef();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Product title is required'),
    price: Yup.number().required('Price is required').positive().integer(),
    description: Yup.string().required('Product description is required'),
    category: Yup.string().required('Category is required')
  });

  // Handle label input and split by space
  const handleLabelKeyDown = (e) => {
    if (e.key === ' ' && e.target.value.trim()) {
      const label = e.target.value.trim();
      setProductLabels([...productLabels, label]);
      inputRef.current.value = '';
    }
  };

  // Remove a label
  const removeLabel = (index) => {
    setProductLabels(productLabels.filter((_, i) => i !== index));
  };

  const removeImage = (index) => {
    setImageFiles(imageFiles.filter((_, i) => i !== index));
  };

  // Handle image drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImageFiles([...imageFiles, ...files]);
  };

  // Handle file change
  const handleFileChange = (e) => {
    setImageFiles([...imageFiles, ...e.target.files])
    console.log(e.target.files)
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    // Append form data
    formData.append('title', values.title);
    formData.append('slug', values.slug || ''); // Optional field
    formData.append('price', values.price);
    formData.append('productLabels', productLabels.join(','));
    formData.append('description', values.description);
    formData.append('category', values.category);

    // Append images
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append('images', imageFiles[i]);
    }

    try {
      // eslint-disable-next-line no-undef
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/products`,formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(res.data);
      resetForm();
      setImageFiles([]);
      setProductLabels([]);
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
          description: '',
          category: ''
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
              <input
                type="text"
                ref={inputRef}
                onKeyDown={handleLabelKeyDown}
                placeholder="Type and press space to add labels"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="flex flex-wrap mt-2">
                {productLabels.map((label, index) => (
                  <div key={index} className="flex items-center bg-indigo-500 text-white px-2 py-1 rounded-full mr-2 mb-2">
                    {label}
                    <button type="button" className="ml-2 text-white" onClick={() => removeLabel(index)}>×</button>
                  </div>
                ))}
              </div>
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

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
              <Field as="select" name="category" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Category</option>
                <option value="electronics">Casual Shoes</option>
                <option value="fashion">Fashion Shoes</option>
                <option value="home">Sneakers</option>
                <option value="beauty">Party Shoes</option>
              </Field>
              <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Image Upload */}
            <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="mt-4 p-4 border-2 border-dashed rounded-md border-gray-300 hover:border-indigo-500">
              <label htmlFor="images" className="block text-lg font-medium text-gray-700">Product Images</label>
              <input type="file" name="images" multiple onChange={handleFileChange} className="mt-2 block w-full text-sm" />
              <div className="flex flex-wrap mt-2">
                {Array.from(imageFiles).map((file, index) => (
                  <div key={index} className="relative w-24 h-24 mr-2 mb-2">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-md shadow-md"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
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
