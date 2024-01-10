import React from "react";
import Heading from "../../../0.components/Heading";

const careerPaths = [
  {
    trade: "Electrical Installation and Maintenance",
    careers: [
      "Electrician",
      "Electrical Technician",
      "Maintenance Engineer",
      "Renewable Energy Technician",
    ],
  },
  {
    trade: "IT Support",
    careers: [
      "IT Support Specialist",
      "Help Desk Technician",
      "Network Administrator",
      "System Analyst",
    ],
  },
  {
    trade: "Swing Machine Operation",
    careers: [
      "Textile Machine Operator",
      "Garment Production Supervisor",
      "Quality Control Inspector",
      "Textile Production Manager",
    ],
  },
  {
    trade: "Welding",
    careers: [
      "Welder",
      "Welding Inspector",
      "Metal Fabricator",
      "Pipeline Welder",
    ],
  },
  {
    trade: "Apparel Screen Printing",
    careers: [
      "Screen Printer",
      "Graphic Designer (Apparel)",
      "Print Production Manager",
      "Apparel Brand Merchandiser",
    ],
  },
];

const CareerPath = () => {
  return (
    <div className="py-8 ">
      <div className="container mx-auto text-center">
        <Heading heading={"Explore Exciting Career Paths"}></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {careerPaths.map((path, index) => (
            <div
              key={index}
              className="mb-8 bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-2xl h-20 font-semibold mb-4">
                {path.trade}
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                {path.careers.map((career, idx) => (
                  <li key={idx} className="mb-2 text-start">
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPath;
