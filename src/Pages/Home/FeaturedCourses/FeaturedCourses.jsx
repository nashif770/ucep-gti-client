import React from "react";

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
      <h2 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {featuredCourses.map((course, index) => (
          <div
            key={index}
            className="max-w-md bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="object-cover gh-48 mb-4 rounded-md shadow-md"
              src={course.image}
              alt={course.title}
            />
            <h2 className="text-2xl font-semibold mb-2 text-indigo-800">
              {course.title}
            </h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
