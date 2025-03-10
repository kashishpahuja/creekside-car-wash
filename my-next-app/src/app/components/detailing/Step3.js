"use client";
import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Generate the next 7 days dynamically
const generateDates = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const newDate = new Date();
    newDate.setDate(today.getDate() + i);
    return {
      day: newDate.toLocaleString("en-US", { weekday: "long" }),
      date: newDate.getDate(),
      month: newDate.toLocaleString("en-US", { month: "short" }),
      fullDate: newDate.toISOString().split("T")[0], // YYYY-MM-DD
      isToday: i === 0,
    };
  });
};

// Fixed time slots
const timeSlots = ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm", "5:00 pm", "7:00 pm"];

const Step3 = ({ onNext }) => {
  const [selected, setSelected] = useState({ date: null, time: null });
  const availableDates = generateDates();
  const dateRef = useRef(null);

  const handleTimeClick = (date, time) => {
    setSelected({ date, time });
    console.log("Selected Date & Time:", { date, time });
  };

  const scrollDates = (direction) => {
    if (dateRef.current) {
      dateRef.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-24 text-center">
      {/* Step Title */}
      <h2 className="text-xl xl:text-3xl text-[#d63c3c] font-bold mb-4">STEP 4</h2>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-black">
        Date and Time
      </h2>

      {/* Date Selection - Horizontal Scroll Only on Small Screens */}
      <div className="relative  mx-4  xl:mx-24 mt-16">
        {/* Left Arrow (Only on Small Screens) */}
        <button
          onClick={() => scrollDates("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Dates & Time Slots Grid */}
        <div
          ref={dateRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-4 lg:grid lg:grid-cols-7 lg:space-x-0 "
        >
          {availableDates.map((date, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 min-w-[120px] relative"
            >
              {/* Vertical Line Separator (Except First Column) */}
              {index !== 0 && (
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>
              )}

              {/* Date */}
              <div
                className={`flex flex-col items-center font-semibold ${
                  date.isToday ? "text-[#d63c3c]" : "text-black"
                }`}
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full border text-lg xl:text-3xl font-bold ${
                    date.isToday ? "border-[#d63c3c]" : "border-gray-400"
                  }`}
                >
                  {date.date}
                </div>
                <div className="text-sm xl:text-xl my-4">{date.day}</div>
              </div>

              {/* Time Slots - Always Visible */}
              <div className=" flex flex-col space-y-2">
                {timeSlots.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTimeClick(date.fullDate, time)}
                    className={`p-2 text-md xl:text-lg font-medium rounded-md transition ${
                      selected.date === date.fullDate && selected.time === time
                        ? "bg-[#d63c3c] text-white"
                        : "text-black"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow (Only on Small Screens) */}
        <button
          onClick={() => scrollDates("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Step3;
