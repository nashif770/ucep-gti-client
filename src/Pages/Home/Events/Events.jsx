import React from "react";
import Heading from "../../../0.components/Heading";

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
    {
      title: "Data Science Webinar",
      date: "April 5, 2024",
      time: "3:30 PM - 5:30 PM",
      location: "Online",
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
    <div className="py-16">
      <div className="container mx-auto text-center">
        <Heading heading={"Join Us at Our Exciting Upcoming Events"}></Heading>
        <div className="marquee-container overflow-hidden">
          <marquee behavior="scroll" direction="left" className="marquee">
            <div className="flex">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="items-center text-white mb-4 mr-8 w-full shadow-xl border rounded-lg"
                >
                  <div className="bg-[#3e574d] p-6 rounded-lg text-center">
                    <p className="mb-2 text-lg font-semibold">{event.title}</p>
                    <p className="text-sm">
                      {event.date}, {event.time}, {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Events;
