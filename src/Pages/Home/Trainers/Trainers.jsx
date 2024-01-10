import React from "react";
import Heading from "../../../0.components/Heading";

const trainers = [
  {
    name: "John Smith",
    designation: "Trainer",
    expertise: "Data Science",
    bio: "Experienced data scientist specializing in machine learning and data analytics. Dedicated to sharing knowledge and fostering a love for data science.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Jane Doe",
    designation: "Trainer",
    expertise: "Front-end Development",
    bio: "Passionate about creating responsive and user-friendly web interfaces. Expertise in HTML, CSS, and JavaScript.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Alex Johnson",
    designation: "Trainer",
    expertise: "UX Design",
    bio: "Creative UX designer with a focus on creating delightful and intuitive user experiences. Skilled in wireframing and prototyping.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Emily Brown",
    designation: "Trainer",
    expertise: "Digital Marketing",
    bio: "Strategic digital marketer experienced in SEO, social media, and content creation. Helping businesses grow their online presence.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Chris Taylor",
    designation: "Trainer",
    expertise: "Cybersecurity",
    bio: "Cybersecurity expert specializing in threat detection and prevention. Committed to educating others about online security best practices.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Emma White",
    designation: "Trainer",
    expertise: "Graphic Design",
    bio: "Talented graphic designer with a flair for creating visually stunning and impactful designs. Proficient in Adobe Creative Suite.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Samuel Green",
    designation: "Trainer",
    expertise: "Full-stack Development",
    bio: "Full-stack developer with expertise in both front-end and back-end technologies. Enthusiastic about building robust and scalable applications.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  // Add more trainers as needed
];

const leadTrainers = [
  {
    name: "Aisha Rahman",
    designation: "Lead Trainer",
    expertise: "Data Science",
    bio: "Experienced data scientist specializing in machine learning and data analytics. Dedicated to sharing knowledge and fostering a love for data science.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Mohammad Ali Khan",
    designation: "Lead Trainer",
    expertise: "Front-end Development",
    bio: "Passionate about creating responsive and user-friendly web interfaces. Expertise in HTML, CSS, and JavaScript.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Farhana Begum",
    designation: "Lead Trainer",
    expertise: "UX Design",
    bio: "Creative UX designer with a focus on creating delightful and intuitive user experiences. Skilled in wireframing and prototyping.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  {
    name: "Rashed Ahmed Chowdhury",
    designation: "Lead Trainer",
    expertise: "Digital Marketing",
    bio: "Strategic digital marketer experienced in SEO, social media, and content creation. Helping businesses grow their online presence.",
    image: "https://i.ibb.co/mSHCxqx/6.jpg",
  },
  // Add more trainers as needed
];

const Trainers = () => {
  const allInstructors = [...leadTrainers];
  // const allInstructors = [...leadTrainers, ...trainers];

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <Heading heading={"Meet Our Exceptional Instructors"}></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allInstructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#cca44c]"
              />
              <h3 className="text-2xl font-semibold mb-2 text-[#cca44c]">
                {instructor.name}
              </h3>
              <p className="text-gray-600 mb-4">{instructor.expertise}</p>
              <p className="text-gray-700 leading-relaxed">{instructor.bio}</p>
              <div className="mt-6 flex justify-center">
                <a
                  href={`mailto:${instructor.email}`}
                  className="bg-[#cca44c] hover:bg-[#f46c24] text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
