import React from "react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
    },
    {
      title: "Data Science Webinar",
      date: "April 5, 2024",
      time: "3:30 PM - 5:30 PM",
      location: "Online",
    },
    // Add more upcoming events as needed
  ];

  return (
    <div className="bg-gradient-to-b from-purple-500 to-indigo-700 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10">
          Upcoming Events
        </h2>
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" className="marquee">
            {upcomingEvents.map((event, index) => (
              <span key={index} className="mr-8 text-white">
                <strong>{event.title}</strong> - {event.date}, {event.time},{" "}
                {event.location}
              </span>
            ))}
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Events;
