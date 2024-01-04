import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        'To enroll in a course, visit our Courses page, select the desired course, and click on the "Enroll" button. Follow the instructions to complete the enrollment process.',
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Prerequisites vary for each course. You can find detailed information about prerequisites on the course description page. Ensure you meet the requirements before enrolling.",
    },
    {
      question: "How can I access course materials?",
      answer:
        "Once enrolled, you can access course materials through our online learning platform. Log in with your account credentials and navigate to the course dashboard to find all relevant resources.",
    },
    {
      question: "Is financial aid available?",
      answer:
        "Yes, we offer financial aid for eligible students. Visit our Financial Aid page to learn more about the application process and eligibility criteria.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="bg-gradient-to-b from-purple-500 to-indigo-700 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-500">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
