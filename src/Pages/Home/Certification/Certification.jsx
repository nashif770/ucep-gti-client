import React from "react";
import Heading from "../../../0.components/Heading";

const certifications = [
  {
    title: "IT Support Professional Certificate",
    issuingAuthority: "Google",
    description:
      "Earn a certificate from Google upon completion of our IT Support program, showcasing your skills in troubleshooting and customer support.",
  },
  {
    title: "Certified Welder",
    issuingAuthority: "American Welding Society (AWS)",
    description:
      "Our Welding course provides the necessary skills to earn certification from AWS, a globally recognized accreditation in welding.",
  },
  {
    title: "Electrical Technician Certification",
    issuingAuthority:
      "International Association of Electrical Inspectors (IAEI)",
    description:
      "Complete our Electrical Installation and Maintenance course and obtain certification from IAEI, demonstrating expertise in electrical systems.",
  },
  // Add more certifications as needed
];

const Certification = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto text-center">
        <Heading
          heading={"Elevate Your Skills with Our Certifications"}
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-3xl font-semibold mb-4">
                {certification.title}
              </h3>
              <p className="text-gray-700">
                Issued by {certification.issuingAuthority}, this certification
                provides {certification.description}
              </p>
              <div className="mt-6">
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
