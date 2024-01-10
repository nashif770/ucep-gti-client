import React from "react";
import Heading from "../../../0.components/Heading";

const industryPartnerships = [
  {
    logo: "https://i.ibb.co/company-logo1.png", // Replace with actual logo URL
    name: "Tech Solutions Inc.",
    description:
      "Strategic partnership with Tech Solutions Inc. to provide real-world projects and internship opportunities for our students.",
  },
  {
    logo: "https://i.ibb.co/company-logo2.png", // Replace with actual logo URL
    name: "Textile Innovations Ltd.",
    description:
      "Collaboration with Textile Innovations Ltd. to stay updated on industry trends and offer specialized courses in textile technology.",
  },
  // Add more partnerships as needed
];

const IndustrialPartnerShip = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <Heading
          heading={"Forge Strong Alliances with Our Industrial Partners"}
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industryPartnerships.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="mb-6 h-20 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-1 h-16 text-black">
                {partner.name}
              </h3>
              <p className="text-gray-700 h-44">{partner.description}</p>
              <div className="mt-3 h-16">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Explore Partnership
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialPartnerShip;
