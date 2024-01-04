import React from "react";

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
    <div className="bg-gradient-to-b from-purple-500 to-indigo-700 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <p className="text-gray-800 text-lg mb-4">{`"${testimonial.quote}"`}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold text-purple-500 mb-1">
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
