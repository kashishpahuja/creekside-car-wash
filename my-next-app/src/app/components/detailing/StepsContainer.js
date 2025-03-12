"use client";
import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from './Step5';

const StepsContainer = () => {
  const [selectedCarType, setSelectedCarType] = useState("Hatchback/Sedan"); 
  const [selectedPlan, setSelectedPlan] = useState("Touchless Base Wash"); 
  const [selectedPlanPrice, setSelectedPlanPrice] = useState("12.99"); 
  const [selectedBookingDate, setSelectedBookingDate] = useState(""); 
  const [selectedBookingTime, setSelectedBookingTime] = useState(""); 
  const [selectedAddedService, setSelectedAddedService] = useState([]); 
  const [selectedAddedServicePrice, setSelectedAddedServicePrice] = useState([]); 




  
  return (
    <div>
      <Step1  setSelectedCarType={setSelectedCarType} />
      <Step2 setSelectedPlan={setSelectedPlan} setSelectedPlanPrice={setSelectedPlanPrice}/>
      <Step3 setSelectedBookingDate={setSelectedBookingDate} setSelectedBookingTime={setSelectedBookingTime}/>
      <Step5 setSelectedAddedService={setSelectedAddedService} setSelectedAddedServicePrice={setSelectedAddedServicePrice}/>
      
      <Step4 selectedAddedServicePrice={selectedAddedServicePrice} selectedAddedService={selectedAddedService} selectedBookingDate={selectedBookingDate} selectedBookingTime={selectedBookingTime} selectedPlan={selectedPlan} selectedPlanPrice={selectedPlanPrice} selectedCarType={selectedCarType} />
    </div>
  );
};

export default StepsContainer;
