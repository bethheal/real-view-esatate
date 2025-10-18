import React from "react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury 3-Bedroom Apartment",
      location: "East Legon, Accra",
      price: "$120,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Modern Studio Flat",
      location: "Osu, Accra",
      price: "$60,000",
      image:
        "https://images.unsplash.com/photo-1600585154154-5d1b33f2f2c9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Spacious Family Home",
      location: "Kumasi, Ashanti",
      price: "$95,000",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Beachside Villa",
      location: "Cape Coast",
      price: "$200,000",
      image:
        "https://images.unsplash.com/photo-1600585153490-76fb20a326e0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#f9f8fb]">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#887232] mb-2">Available Properties</h2>
        <p className="text-gray-600">
          Explore our latest listings across Ghana — find your dream home today.
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="p-5 rounded-xl shadow-md border border-gray-200 bg-white 
                       transition-all transform hover:-translate-y-2 
                       hover:bg-gradient-to-r hover:from-[#887232] hover:to-[#887111] 
                       hover:shadow-lg group"
          >
            {/* Property Image */}
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Property Info */}
            <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-white">
              {property.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 group-hover:text-white">
              📍 {property.location}
            </p>
            <p className="text-[#887232] font-semibold text-lg mb-4 group-hover:text-white">
              {property.price}
            </p>

            {/* Button */}
            <button className="w-full bg-[#887232] text-white py-2 rounded-lg 
                               hover:bg-white hover:text-[#887232] 
                               transition font-medium group-hover:bg-white group-hover:text-[#887232]">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
