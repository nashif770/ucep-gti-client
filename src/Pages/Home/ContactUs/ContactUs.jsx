import React from "react";
import Heading from "../../../0.components/Heading";

const ContactUs = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto text-center">
        <Heading heading={"Get in Touch with Us"}></Heading>
        <p className="text-gray-700 mb-6">
          Feel free to reach out to us for any inquiries or information.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg inline-block transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="text-3xl font-semibold text-black mb-4">
            Contact Details:
          </p>
          <div className="flex flex-col space-y-4">
            <div className="text-lg font-medium text-gray-800">
              <span className="text-black">Phone Number:</span> +1 (555)
              123-4567
            </div>
            <div className="text-lg font-medium text-gray-800">
              <span className="text-black">Email:</span> info@example.com
            </div>
            <div className="text-lg font-medium text-gray-800">
              <span className="text-black">Address:</span> 123 Main Street,
              Cityville
            </div>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>
    </div>
  );
};

export default ContactUs;
