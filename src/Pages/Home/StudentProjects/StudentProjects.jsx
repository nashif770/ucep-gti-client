import React from "react";

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
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Student Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 mb-4 rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-500">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProjects;
