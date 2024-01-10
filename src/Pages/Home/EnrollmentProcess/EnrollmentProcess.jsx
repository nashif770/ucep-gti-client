import React from "react";
import Heading from "../../../0.components/Heading";

const enrollmentSteps = [
  {
    title: "Explore Courses",
    description:
      "Browse through our diverse range of courses and find the one that aligns with your interests and career goals.",
  },
  {
    title: "Create an Account",
    description:
      "Sign up for an account on our platform. This will be your gateway to enrolling in courses and accessing learning materials.",
  },
  {
    title: "Enroll in a Course",
    description:
      "Select the course you want to enroll in and complete the enrollment process. Make sure to check any prerequisites and review course details.",
  },
  {
    title: "Payment",
    description:
      "Complete the payment process for the course. We offer various payment options and financial aid for eligible students.",
  },
  {
    title: "Access Learning Materials",
    description:
      "Once enrolled, you'll have access to the course materials, assignments, and any additional resources through our online learning platform.",
  },
  // Add more enrollment steps as needed
];

const EnrollmentProcess = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <Heading heading={"Seamless Enrollment Process"}></Heading>
        <ul className="list-disc text-white">
          {enrollmentSteps.map((step, index) => (
            <li
              key={index}
              className="bg-white list-none text-gray-800 mb-8 p-8 rounded-lg shadow-md transition-transform hover:scale-105 duration-300 ease-in-out"
            >
              <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnrollmentProcess;
