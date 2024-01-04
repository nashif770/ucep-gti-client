import React from "react";

const trainers = [
    {
      name: 'John Smith',
      designation: 'Trainer',
      expertise: 'Data Science',
      bio: 'Experienced data scientist specializing in machine learning and data analytics. Dedicated to sharing knowledge and fostering a love for data science.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Jane Doe',
      designation: 'Trainer',
      expertise: 'Front-end Development',
      bio: 'Passionate about creating responsive and user-friendly web interfaces. Expertise in HTML, CSS, and JavaScript.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Alex Johnson',
      designation: 'Trainer',
      expertise: 'UX Design',
      bio: 'Creative UX designer with a focus on creating delightful and intuitive user experiences. Skilled in wireframing and prototyping.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Emily Brown',
      designation: 'Trainer',
      expertise: 'Digital Marketing',
      bio: 'Strategic digital marketer experienced in SEO, social media, and content creation. Helping businesses grow their online presence.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Chris Taylor',
      designation: 'Trainer',
      expertise: 'Cybersecurity',
      bio: 'Cybersecurity expert specializing in threat detection and prevention. Committed to educating others about online security best practices.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Emma White',
      designation: 'Trainer',
      expertise: 'Graphic Design',
      bio: 'Talented graphic designer with a flair for creating visually stunning and impactful designs. Proficient in Adobe Creative Suite.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Samuel Green',
      designation: 'Trainer',
      expertise: 'Full-stack Development',
      bio: 'Full-stack developer with expertise in both front-end and back-end technologies. Enthusiastic about building robust and scalable applications.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    // Add more trainers as needed
  ];

  const leadTrainers = [
    {
      name: 'Aisha Rahman',
      designation: 'Lead Trainer',
      expertise: 'Data Science',
      bio: 'Experienced data scientist specializing in machine learning and data analytics. Dedicated to sharing knowledge and fostering a love for data science.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Mohammad Ali Khan',
      designation: 'Lead Trainer',
      expertise: 'Front-end Development',
      bio: 'Passionate about creating responsive and user-friendly web interfaces. Expertise in HTML, CSS, and JavaScript.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Farhana Begum',
      designation: 'Lead Trainer',
      expertise: 'UX Design',
      bio: 'Creative UX designer with a focus on creating delightful and intuitive user experiences. Skilled in wireframing and prototyping.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    },
    {
      name: 'Rashed Ahmed Chowdhury',
      designation: 'Lead Trainer',
      expertise: 'Digital Marketing',
      bio: 'Strategic digital marketer experienced in SEO, social media, and content creation. Helping businesses grow their online presence.',
      image: 'https://i.ibb.co/mSHCxqx/6.jpg',
    }
    // Add more trainers as needed
  ];

const Trainers = () => {
    const allInstructors = [...leadTrainers];
    // const allInstructors = [...leadTrainers, ...trainers];
    
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Meet Our Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allInstructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-500">
                {instructor.name}
              </h3>
              <p className="text-gray-600 mb-4">{instructor.expertise}</p>
              <p className="text-gray-700">{instructor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
