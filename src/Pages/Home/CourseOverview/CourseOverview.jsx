import React from "react";
import Heading from "../../../0.components/Heading";

const courses = [
  {
    title: "IT Support",
    description:
      "Master troubleshooting, system administration, and user assistance for a career in IT support.",
    image: "https://i.ibb.co/nQZw9k7/backend.png", // Add your image file in the public folder
  },
  {
    title: "Swing Machine Operation",
    description:
      "Learn precise and efficient swing machine operation for manufacturing and construction.",
    image: "https://i.ibb.co/nQZw9k7/backend.png",
  },
  {
    title: "Electrical Installation and Maintenance",
    description:
      "Gain hands-on experience in wiring, circuit design, and troubleshooting for electrical services.",
    image: "https://i.ibb.co/nQZw9k7/backend.png",
  },
  {
    title: "Welding",
    description:
      "Acquire skills in various welding techniques and safety practices for metal joining.",
    image: "https://i.ibb.co/nQZw9k7/backend.png",
  },
  {
    title: "Apparel Screen Printing",
    description:
      "Explore screen printing for vibrant and durable apparel designs, perfect for customization.",
    image: "https://i.ibb.co/nQZw9k7/backend.png",
  },
];

const CourseOverview = () => {
  return (
    <div>
      <Heading heading={"Explore Our Course"}></Heading>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="max-w-md m-4 bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              className="object-cover h-40 mb-6 rounded-md shadow-md"
              src={`${course.image}`}
              alt={course.title}
            />
            <h2 className="text-2xl font-semibold mb-2 text-indigo-500">
              {course.title}
            </h2>
            <p className="text-gray-700">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[#cca44c] font-bold text-lg">
                ${course.price}
              </span>
              <button className="hover:bg-white hover:text-[#f46c24] bg-[#f46c24] text-white font-bold py-2 px-4 rounded-full">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOverview;
