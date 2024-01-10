import React from "react";
import Heading from "../../../0.components/Heading";

const studentProjects = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce platform with user authentication, product listings, and checkout functionality.",
    image: "https://i.ibb.co/placeholder-image.jpg", // Replace with actual project image URL
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard that visualizes complex data sets using charts, graphs, and maps.",
    image: "https://i.ibb.co/placeholder-image.jpg",
  },
  // Add more student projects as needed
];

const StudentProjects = () => {
  return (
    <div class="bg-gradient-to-b from-goldish to-greenish py-16">
      <div class="container mx-auto text-center">
        <Heading heading={"Discover Outstanding Student Projects"}></Heading>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentProjects.map((project, index) => (
            <div
              key={index}
              class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-64 mb-6 rounded-md object-cover"
              />
              <h3 class="text-2xl font-semibold mb-2 text-goldish">
                {project.title}
              </h3>
              <p class="text-gray-700 mb-4">{project.description}</p>
              <div class="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-greenish hover:underline"
                >
                  Learn More
                </a>
                <div class="flex items-center space-x-2">
                  <span class="text-goldish font-bold text-lg">
                    {project.likes} Likes
                  </span>
                  <button class="bg-goldish hover:bg-orangeish text-white font-bold py-1 px-3 rounded-full transition duration-300 ease-in-out">
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProjects;
