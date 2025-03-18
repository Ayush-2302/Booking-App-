import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h2 className="text-3xl font-semibold text-center text-teal-600 mb-8">
        Privacy Policy
      </h2>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-teal-500">Introduction</h3>
        <p className="text-gray-700">
          Your privacy is important to us. This privacy policy outlines the
          types of personal information that is received and collected by our
          website and how it is used.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          Information We Collect
        </h3>
        <p className="text-gray-700">
          We collect personal information when you visit our website, such as
          your name, email address, and other contact details when you submit a
          form or sign up for our services.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          How We Use Your Information
        </h3>
        <p className="text-gray-700">
          The information we collect is used to provide better services, improve
          user experience, and respond to inquiries.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">Data Security</h3>
        <p className="text-gray-700">
          We take appropriate measures to secure your personal information.
          However, please remember that no method of electronic transmission is
          100% secure.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">
          Changes to This Policy
        </h3>
        <p className="text-gray-700">
          We may update this privacy policy from time to time. All changes will
          be posted on this page with an updated date.
        </p>

        <h3 className="text-xl font-semibold text-teal-500">Contact Us</h3>
        <p className="text-gray-700">
          If you have any questions regarding our privacy policy, feel free to{" "}
          <Link to="/contact" className="text-teal-600">
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
