"use client";
import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const StepsContainer = () => {
  const [selectedCarType, setSelectedCarType] = useState("Hatchback/Sedan"); 
  
  return (
    <div>
      <Step1  setSelectedCarType={setSelectedCarType} />
      <Step2 />
      <Step3 />
      <Step4 selectedCarType={selectedCarType} />
    </div>
  );
};

export default StepsContainer;
