import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-8">
        Terms of Service
      </h2>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-teal-500">Introduction</h3>
        <p className="text-gray-700">
          By using our website and services, you agree to the following terms
          and conditions. If you do not agree to these terms, you should not use
          our services.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          Use of the Website
        </h3>
        <p className="text-gray-700">
          You are granted a limited, non-exclusive license to access and use the
          website for personal and non-commercial purposes.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">Prohibited Uses</h3>
        <p className="text-gray-700">
          You may not use the website for any illegal or unauthorized purpose.
          You are responsible for any content that you submit.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          Termination of Access
        </h3>
        <p className="text-gray-700">
          We reserve the right to suspend or terminate your access to the
          website at our discretion if you violate any of these terms.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          Limitation of Liability
        </h3>
        <p className="text-gray-700">
          We are not liable for any indirect, incidental, special, or
          consequential damages arising out of your use of the website or
          services.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          Changes to the Terms
        </h3>
        <p className="text-gray-700">
          We reserve the right to modify these terms at any time. Any changes
          will be posted on this page, and the date will be updated accordingly.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">Contact Us</h3>
        <p className="text-gray-700">
          If you have any questions about these terms, please{" "}
          <Link to="/contact" className="text-teal-600">
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
