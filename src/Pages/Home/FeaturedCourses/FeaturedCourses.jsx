import React from "react";
import Heading from "../../../0.components/Heading";

const featuredCourses = [
  {
    title: "Web Development Bootcamp",
    description:
      "Comprehensive training in web development, covering HTML, CSS, JavaScript, and popular frameworks. Kickstart your journey to becoming a full-stack developer.",
    image: "https://i.ibb.co/nQZw9k7/backend.png",
  },
  {
    title: "Digital Marketing Mastery",
    description:
      "Unlock the secrets of successful digital marketing strategies. Learn SEO, social media marketing, and content creation to boost your brand’s online presence.",
    image: "https://i.ibb.co/nQZw9k7/backend.png",
  },
];

const FeaturedCourses = () => {
  return (
    <div className="my-8">
      <Heading heading={"Explore Our Featured Courses"}></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
        {featuredCourses.map((course, index) => (
          <div
            key={index}
            className="max-w-md bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="object-cover h-60 mb-6 rounded-md shadow-md"
              src={course.image}
              alt={course.title}
            />
            <h2 className="text-2xl font-semibold mb-2 text-indigo-800">
              {course.title}
            </h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-goldish font-bold text-lg">
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

export default FeaturedCourses;
