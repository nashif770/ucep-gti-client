import React from "react";


const Banner = () => {

  return (
    <section
      className="bg-cover bg-center relative text-white p-8 min-h-screen"
      style={{ backgroundImage: `url('https://i.ibb.co/k8TMY8m/Whats-App-Image-2024-01-04-at-09-52-59-8c3b2ad2.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to TechSkillHub</h1>
        <p className="text-lg text-center">Empowering your future through technical and vocational education.</p>
      </div>
    </section>
  );
};

export default Banner;
