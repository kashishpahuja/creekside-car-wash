import Image from "next/image";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

const packages = [
  {
    name: "Leather Cleaning",
    price: "30.00",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Pet Hair Removal",
    price: "49.99",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Restoration of VRP",
    price: "50.00",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Steam Wash",
    price: "50.00",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Engine Bay Cleaning",
    price: "49.99",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Headlight Restoration",
    price: "49.99",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Shampoo / Odor Removal",
    price: "79.99",
    image: "/Images/services/detailing.webp",
  },
  {
    name: "Wind Shield Ceramic Coating",
    price: "99.99",
    image: "/Images/services/detailing.webp",
  },
];

function Step5({ setSelectedAddedService }) {
  const [selectedPackages, setSelectedPackages] = useState([]);

  const handleSelect = (pkg) => {
    const isSelected = selectedPackages.some((item) => item.name === pkg.name);
    let updatedSelection;

    if (isSelected) {
      updatedSelection = selectedPackages.filter((item) => item.name !== pkg.name);
    } else {
      updatedSelection = [...selectedPackages, pkg];
    }
    
    setSelectedPackages(updatedSelection);
    setSelectedAddedService(updatedSelection);
  };

  return (
    <div
      className="my-24 py-24 "

    >
      <h2 className="montserrat text-xl xl:text-3xl text-[#d63c3c] text-center px-4 lg:px-24">STEP 4</h2>
      <h2 className="montserrat text-2xl md:text-3xl lg:text-5xl text-[#1f1e1f] text-center my-6 px-4 lg:px-24">Value Added Services</h2>
      <h2 className="text-md lg:text-xl text-gray-800 text-center mb-12 px-4 lg:px-24">
        We offer additional services to enhance performance & appearance of your vehicle.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 pt-12 mx-8 lg:mx-16 xl:mx-24">
        {packages.map((pkg, index) => {
          const isSelected = selectedPackages.some((item) => item.name === pkg.name);
          return (
            <div key={index} className="relative text-center overflow-hidden">
              <Image height={200} width={200} src={pkg.image} alt={pkg.name} className="w-full h-90 rounded-xl object-cover" />
              <div className="p-6">
                <h5 className="exo text-xl lg:text-2xl font-medium text-[#1f1e1f] mb-2">{pkg.name}</h5>
                <div className="text-xl lg:text-2xl font-bold text-[#d63c3c]">${pkg.price}</div>
                <button
                  onClick={() => handleSelect(pkg)}
                  className={`montserrat mt-6 px-6 py-3 rounded-2xl lg:text-xl text-white w-fit hover:transition-transform hover:translate-y-[-12px] duration-300   ${
                    isSelected ? "bg-green-600" : "bg-[#d63c3c]"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <SiTicktick className="inline mr-2" /> Selected
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Step5;
