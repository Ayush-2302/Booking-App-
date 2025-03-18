import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-8">
        About Us
      </h2>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-teal-500">Our Mission</h3>
        <p className="text-gray-700">
          At Booking App, our mission is to provide a seamless and hassle-free
          experience for travelers around the world. We strive to make it easy
          for our users to book their perfect stay at the best prices, ensuring
          comfort, convenience, and reliability every time.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">Our Values</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Customer Focus: We prioritize the needs of our users and ensure that
            their booking experience is simple and effective.
          </li>
          <li>
            Integrity: We are committed to transparency, honesty, and delivering
            on our promises to our users.
          </li>
          <li>
            Innovation: We continually strive to improve our platform and offer
            innovative solutions that meet the ever-evolving needs of travelers.
          </li>
          <li>
            Excellence: We aim for the highest standards of quality in
            everything we do, from our customer service to the design of our
            platform.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500">Why Choose Us?</h3>
        <p className="text-gray-700">
          We understand that planning a trip can be stressful, which is why we
          focus on simplifying the process. Our platform offers:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>A wide variety of accommodation options.</li>
          <li>Secure and fast booking process.</li>
          <li>24/7 customer support to assist you with any queries.</li>
          <li>Exclusive deals and discounts on hotels, rooms, and more.</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500">Our Story</h3>
        <p className="text-gray-700">
          Booking App was founded with the goal of revolutionizing the way
          people book their stays. Our founders, a group of travel enthusiasts,
          realized that there was a gap in the market for a platform that
          combined ease of use with competitive pricing. With that vision in
          mind, Booking App was born. We are continuously working to improve the
          experience for both travelers and accommodation providers.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">Get in Touch</h3>
        <p className="text-gray-700">
          If you have any questions or need further information, feel free to{" "}
          <a href="/contact" className="text-teal-600">
            contact us
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
