import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelect = (packageName) => {
    setSelectedPackage(packageName);
  };

  return (
    <div
      className="my-24 py-24 bg-[#1f1e1f]"
      style={{
        backgroundImage: `url('/Images/detailing/bg2.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="montserrat text-xl xl:text-3xl text-[#d63c3c] text-center px-4 lg:px-24">
        STEP 2
      </h2>
      <h2 className="montserrat text-2xl md:text-3xl lg:text-5xl text-white text-center my-6 px-4 lg:px-24">
        Select Your Plan
      </h2>

      <h2 className="text-xl text-gray-200 text-center mb-12 px-4 lg:px-24">
        Choose your plan from our wide range of services for various types of
        vehicles.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8 pt-12 mx-8 lg:mx-16 xl:mx-24">
        {[
          {
            name: "TOUCHLESS BASE WASH",
            price: "12.99",
            features: [
              "2 Step Pre Soak",
              "High Pressure Rinse (x2)",
              "Body Shield Wax",
              "Undercarriage Blast",
              "Spot Free Rinse",
              "Dryer",
            ],
          },
          {
            name: "TOUCHLESS BETTER WASH",
            price: "14.99",
            features: [
              "2 Step Pre Soak",
              "Triple Foam Conditioner",
              "High Pressure Rinse (x2)",
              "Body Shield Wax",
              "Undercarriage Blast",
              "Spot Free Rinse",
              "Dryer",
            ],
          },
          {
            name: "TOUCHLESS BEST WASH",
            price: "19.99",
            features: [
              "2 Step Pre Soak",
              "Triple Foam Conditioner",
              "High Pressure Rinse (x2)",
              "Body Shield Wax",
              "Undercarriage Blast",
              "Spot Free Rinse",
              "Dryer",
            ],
          },
          {
            name: "THE WORKS WASH",
            price: "29.99",
            features: [
              "**During Attendant hours only",
              "Bug/salt/bird dropping, wheels, windshields prep",
              "Vacuum token worth 4 minutes",
              "Touchless Premium Wash",
            ],
          },
        ].map((pkg, index) => (
          <div
            key={index}
            className="relative text-center hover:transition-transform hover:translate-y-[-12px] duration-300"
          >
            <h5 className="montserrat bg-[#d63c3c] px-8 text-white font-medium text-xl 2xl:text-2xl py-8 2xl:py-10 rounded-t-xl mx-auto">
              {pkg.name}
            </h5>
            <div className="bg-[#edede9] rounded-b-xl py-8">
              <div className="text-2xl gap-2 flex items-center justify-center text-[#1f1e1f]">
                ${" "}
                <span className="montserrat text-6xl">{pkg.price}</span>
              </div>
              <div>
                <ul className="p-6 text-gray-700 font-semibold text-sm md:text-lg space-y-4 text-center">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleSelect(pkg.name)}
                className={`montserrat mt-6 px-6 py-3 rounded-2xl text-xl text-white  ${
                  selectedPackage === pkg.name
                    ? "bg-green-600"
                    : "bg-[#d63c3c]"
                }`}
              >
                {selectedPackage === pkg.name ? (
                  <>
                    <SiTicktick className="inline mr-2" />
                    Selected
                  </>
                ) : (
                  "Select Plan"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
