import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-purple-600 text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center bg-opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-5xl font-bold mb-4">Book Your Perfect Stay</h1>
          <p className="text-xl mb-6">
            Explore top hotels with exclusive offers & stunning views. Book now
            and enjoy amazing discounts!
          </p>
          <Link
            to="/book"
            className="bg-teal-500 text-black py-3 px-8 text-lg rounded-full hover:bg-teal-400 transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🏨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Luxury Hotels</h3>
            <p className="text-gray-600">
              Stay at the best hotels with world-class amenities and comfort.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">💸</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">
              Enjoy unbeatable prices with amazing discounts and offers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Worldwide Locations</h3>
            <p className="text-gray-600">
              Book hotels in various destinations worldwide, from beaches to
              cities.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 mb-4">
              “The hotel was amazing, the service was outstanding, and the room
              was perfect! I will definitely book again!”
            </p>
            <p className="text-gray-600 font-semibold">John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 mb-4">
              “Best vacation ever! The booking process was easy and the hotel
              exceeded all our expectations!”
            </p>
            <p className="text-gray-600 font-semibold">Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 mb-4">
              “I loved my stay! The views were incredible, and the location was
              perfect for exploring the city.”
            </p>
            <p className="text-gray-600  font-semibold">Mark Wilson</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
