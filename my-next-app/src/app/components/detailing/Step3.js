"use client";
import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const is24Hours = true;

const unavailableTimes = {};

const timeSlots = ["09:00 am", "11:00 am", "01:00 pm", "03:00 pm", "05:00 pm", "07:00 pm"];

const generateDates = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const newDate = new Date();
    newDate.setDate(today.getDate() + i);
    return {
      day: newDate.toLocaleString("en-US", { weekday: "long" }),
      date: newDate.getDate(),
      month: newDate.toLocaleString("en-US", { month: "short" }),
      fullDate: newDate.toISOString().split("T")[0],
      isToday: i === 0,
    };
  });
};

const getTimeSlotStatus = (selectedDate, selectedDay, time) => {
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0];
  console.log('time now ',now)
  console.log('current Date',currentDate)


  const [hour, minute, period] = time.match(/(\d+):(\d+) (\w+)/).slice(1);
  let slotHour = parseInt(hour) + (period.toLowerCase() === "pm" && hour !== "12" ? 12 : 0);
  if (period.toLowerCase() === "am" && hour === "12") slotHour = 0;

  const slotTime = new Date(selectedDate);
  slotTime.setHours(slotHour, minute);

  return {
    isPastTime: selectedDate === currentDate && slotTime < now,
    isUnavailable: unavailableTimes[selectedDay]?.includes(time),
  };
};

const Step3 = ({ onNext, setSelectedBookingDate, setSelectedBookingTime }) => {
  const [selected, setSelected] = useState({ date: null, time: null });
  const [hoveredDate, setHoveredDate] = useState(null);
  const availableDates = generateDates();
  const dateRef = useRef(null);

  const handleTimeClick = (date, time, isDisabled) => {
    if (isDisabled) return;
    setSelected({ date, time });
    console.log(date,time)
    setSelectedBookingDate(date);
    setSelectedBookingTime(time);
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
      <h2 className="text-xl xl:text-3xl text-[#d63c3c] font-bold mb-4">STEP 3</h2>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-black">Date and Time</h2>

      <div className="relative mx-4 xl:mx-24 mt-16">
        <button
          onClick={() => scrollDates("left")}
          className="absolute left-0 top-12 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={dateRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-4 lg:grid lg:grid-cols-7 lg:space-x-0"
        >
          {availableDates.map((date, index) => (
            <div key={index} className="flex flex-col items-center p-4 min-w-[120px] relative">
              <div
                className={`flex flex-col items-center font-semibold ${
                  date.isToday || date.fullDate === hoveredDate ? "text-[#d63c3c]" : "text-black"
                }`}
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full border text-lg xl:text-3xl font-bold transition-all ${
                    date.isToday || date.fullDate === hoveredDate ? "border-[#d63c3c]" : "border-gray-400"
                  }`}
                >
                  {date.date}
                </div>
                <div className="text-sm xl:text-xl my-4">{date.day}</div>
              </div>

              <div className="flex flex-col space-y-2">
                {timeSlots.map((time, idx) => {
                  const { isPastTime, isUnavailable } = getTimeSlotStatus(date.fullDate, date.day, time);
                  const isDisabled = isPastTime || isUnavailable;
                  const isSelected = selected.date === date.fullDate && selected.time === time;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleTimeClick(date.fullDate, time, isDisabled)}
                      disabled={isDisabled}
                      onMouseEnter={() => !isSelected && setHoveredDate(date.fullDate)}
                      onMouseLeave={() => !isSelected && setHoveredDate(null)}
                      className={`p-2 text-md 2xl:text-lg font-medium rounded-md transition-all hover:text-[#d63c3c] ${
                        isSelected
                          ? "bg-[#d63c3c] text-white hover:text-white"
                          : isPastTime
                          ? "text-gray-400 cursor-not-allowed"
                          : isUnavailable
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "text-black"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollDates("right")}
          className="absolute right-0 top-12 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Step3;


