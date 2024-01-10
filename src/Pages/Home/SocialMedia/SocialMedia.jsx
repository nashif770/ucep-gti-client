import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  const socialMediaLinks = {
    facebook:
      "https://i.ibb.co/k8TMY8m/Whats-App-Image-2024-01-04-at-09-52-59-8c3b2ad2.jpg",
    twitter:
      "https://i.ibb.co/k8TMY8m/Whats-App-Image-2024-01-04-at-09-52-59-8c3b2ad2.jpg",
    instagram:
      "https://i.ibb.co/k8TMY8m/Whats-App-Image-2024-01-04-at-09-52-59-8c3b2ad2.jpg",
    linkedin:
      "https://i.ibb.co/k8TMY8m/Whats-App-Image-2024-01-04-at-09-52-59-8c3b2ad2.jpg",
  };
  return (
    <section className="bg-gradient-to-b from-[#cda549] to-[#f26822] py-12 m-3 w-full flex justify-center flex-col items-center">
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
        Stay Connected with Us
      </h2>
      <div className="flex items-center space-x-6">
        <a
          href={socialMediaLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
        </a>
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
        </a>
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
        </a>
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
