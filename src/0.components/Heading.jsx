import React from "react";

const Heading = ({heading, subHeading}) => {
  return (
    <div className="text-center py-6 my-3 bg-gradient-to-b from-[#cda549] to-[#f26822] text-white">
      <h1 className="text-4xl font-extrabold mb-4">
        {heading}
      </h1>
      <p className="text-lg">
        {subHeading}
      </p>
    </div>
  );
};

export default Heading;
