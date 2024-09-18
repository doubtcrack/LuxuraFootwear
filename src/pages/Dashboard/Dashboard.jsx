import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ShowProducts from './ShowProducts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('add-product');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white h-screen p-5">
        <h1 className="text-2xl font-bold mb-6">Menu</h1>
        <ul>
          <li
            className={`p-4 cursor-pointer ${activeTab === 'add-product' ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600`}
            onClick={() => setActiveTab('add-product')}
          >
            Add Product
          </li>
          <li
            className={`p-4 cursor-pointer ${activeTab === 'show-orders' ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600`}
            onClick={() => setActiveTab('show-product')}
          >
            Show All Products
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4  bg-gray-100">

        {activeTab === 'add-product' && (
          <div>
            <AddProduct/>
          </div>
        )}

        {activeTab === 'show-product' && (
          <div>
            <ShowProducts/>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
