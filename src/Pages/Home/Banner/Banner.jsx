import React from "react";

const Banner = () => {
  return (
    <section
  className="bg-cover bg-center relative text-slate p-8 min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url('https://i.ibb.co/k8TMY8m/Whats-App-Image-2024-01-04-at-09-52-59-8c3b2ad2.jpg')`,
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 text-center">
    <h1 className="text-5xl font-extrabold mb-4 text-white">
      Welcome to UCEP GTI
    </h1>
    <p className="text-lg text-white">
      Empowering your future through technical and vocational education.
    </p>
    <button className="bg-slate hover:bg-white hover:text-[#f46c24] bg-[#f46c24] text-white font-bold py-2 px-4 mt-8 rounded-full transition duration-300 ease-in-out">
      Get Started
    </button>
  </div>
</section>
  );
};

export default Banner;
