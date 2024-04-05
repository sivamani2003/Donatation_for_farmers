import React from 'react';
import Header from '../Compoents/Header';
import Footer from '../Compoents/Footer';

const Donate_register = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="flex justify-center items-center">
          <div className="w-full lg:w-1/3 md:w-1/2">
            <h2 className="text-red-500 text-3xl mb-1 ml-24 font-medium title-font">Register for Help</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-900">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-900">Amount</label>
              <input type="number" id="email" name="email" className="w-full bg-white rounded border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-900">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div className="relative mb-4">
              <label htmlFor="image" className="leading-7 text-sm text-gray-900">Upload Image</label>
              <input type="file" id="image" name="image" className="w-full bg-white rounded border border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg ml-40">Button</button>
            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
    
  );
};

export default Donate_register;
