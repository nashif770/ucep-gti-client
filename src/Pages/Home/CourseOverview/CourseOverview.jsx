import React from "react";

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
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Our Courses
      </h2>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="max-w-md m-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              className="object-cover h-32 mb-4 rounded-md shadow-md"
              src={`${course.image}`}
              alt={course.title}
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">
              {course.title}
            </h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOverview;
