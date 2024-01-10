import React from "react";
import Heading from "../../../0.components/Heading";

const testimonials = [
  {
    quote:
      "I loved the course! The instructors were knowledgeable, and the hands-on projects were very engaging.",
    name: "John Doe",
    role: "Web Developer",
    image: "https://i.ibb.co/mSHCxqx/6.jpg", // Replace with actual image URL
  },
  {
    quote:
      "The content is well-structured, and the practical exercises helped me apply what I learned in real-world scenarios.",
    name: "Jane Smith",
    role: "Data Scientist",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    quote:
      "Exceptional instructors and a supportive community. I highly recommend these courses for anyone looking to upskill.",
    name: "Alex Johnson",
    role: "UX Designer",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <Heading heading={"Hear from Our Amazing Students"}></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <p className="text-[#040409] text-lg mb-6">{`"${testimonial.quote}"`}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-4 border-[#cca44c]"
                />
                <div className="text-left">
                  <p className="text-2xl font-semibold text-[#cca44c] mb-2">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
