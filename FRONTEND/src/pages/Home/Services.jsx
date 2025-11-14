import React from "react";
import {
  FaUserCog,
  FaTools,
  FaHeadset,
  FaCogs,
  FaThumbsUp,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserCog size={24} className="text-gray-700" />,
    title: "Expert Technicians",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: <FaTools size={24} className="text-gray-700" />,
    title: "Professional Service",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: <FaHeadset size={24} className="text-gray-700" />,
    title: "Great Support",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: <FaCogs size={24} className="text-gray-700" />,
    title: "Technical Skills",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: <FaStar size={24} className="text-gray-700" />,
    title: "Highly Recommended",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
  {
    icon: <FaThumbsUp size={24} className="text-gray-700" />,
    title: "Positive Reviews",
    description:
      "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Why we are the best
        </h2>
        <p className="text-gray-500 mb-10">
          Who are in extremely love with eco friendly system.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md border  border-gray-200 bg-[#f9f8fb] transition-all transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#887232] hover:to-[#887111] hover:text-white hover:shadow-lg`}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
