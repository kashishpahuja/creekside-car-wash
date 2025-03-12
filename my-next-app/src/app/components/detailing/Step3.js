"use client";
import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Toggle 24/7 mode
const is24Hours = true; // Set to false if you want specific working hours

// Define unavailable times (e.g., Saturdays at 3 PM)


const unavailableTimes = {
  // Saturday: ["3:00 pm"],
  // Sunday: ["11:00 am", "5:00 pm"], // Example: Block 11 AM and 5 PM on Sundays
};

// Fixed time slots
const timeSlots = ["09:00 am", "11:00 am", "01:00 pm", "03:00 pm", "05:00 pm", "07:00 pm"];

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

// Check if a time slot is available
const getTimeSlotStatus = (selectedDate, selectedDay, time) => {
  const now = new Date();
  console.log(now)
  console.log('selected date=',selectedDate)

  const currentDate = now.toISOString().split("T")[0];
  console.log('current date=',currentDate)

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
  const availableDates = generateDates();
  const dateRef = useRef(null);

  const handleTimeClick = (date, time, isDisabled) => {
    if (isDisabled) return;
    setSelected({ date, time });
    setSelectedBookingDate(date);
    setSelectedBookingTime(time);
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
      <h2 className="text-xl xl:text-3xl text-[#d63c3c] font-bold mb-4">STEP 3</h2>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-black">
        Date and Time
      </h2>

      {/* Date Selection */}
      <div className="relative mx-4 xl:mx-24 mt-16">
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollDates("left")}
          className="absolute left-0 top-12 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Dates & Time Slots */}
        <div
          ref={dateRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-4 lg:grid lg:grid-cols-7 lg:space-x-0"
        >
          {availableDates.map((date, index) => (
            <div key={index} className="flex flex-col items-center p-4 min-w-[120px] relative">
              {/* Date */}
              <div className={`flex flex-col items-center font-semibold ${date.isToday ? "text-[#d63c3c]" : "text-black"}`}>
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full border text-lg xl:text-3xl font-bold ${
                    date.isToday ? "border-[#d63c3c]" : "border-gray-400"
                  }`}
                >
                  {date.date}
                </div>
                <div className="text-sm xl:text-xl my-4">{date.day}</div>
              </div>

              {/* Time Slots */}
              <div className="flex flex-col space-y-2">
                {timeSlots.map((time, idx) => {
                  const { isPastTime, isUnavailable } = getTimeSlotStatus(date.fullDate, date.day, time);
                  const isDisabled = isPastTime || isUnavailable;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleTimeClick(date.fullDate, time, isDisabled)}
                      disabled={isDisabled}
                      className={` p-2 text-md 2xl:text-lg font-medium rounded-md transition hover:text-[#d63c3c]
                        ${
                          selected.date === date.fullDate && selected.time === time
                            ? "bg-[#d63c3c] text-white "
                            : isPastTime
                            ? "text-gray-400 cursor-not-allowed" // Light gray for past times
                            : isUnavailable
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed " // Grayed out for unavailable times
                            : "text-black "
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

        {/* Right Scroll Button */}
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




// "use client";
// import React, { useState, useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // Generate the next 7 days dynamically
// const generateDates = () => {
//   const today = new Date();
//   return Array.from({ length: 7 }, (_, i) => {
//     const newDate = new Date();
//     newDate.setDate(today.getDate() + i);
//     return {
//       day: newDate.toLocaleString("en-US", { weekday: "long" }),
//       date: newDate.getDate(),
//       month: newDate.toLocaleString("en-US", { month: "short" }),
//       fullDate: newDate.toISOString().split("T")[0], // YYYY-MM-DD
//       isToday: i === 0,
//     };
//   });
// };

// // Fixed time slots
// const timeSlots = ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm", "5:00 pm", "7:00 pm"];

// const Step3 = ({ onNext, setSelectedBookingDate, setSelectedBookingTime }) => {
//   const [selected, setSelected] = useState({ date: null, time: null });
//   const availableDates = generateDates();
//   const dateRef = useRef(null);

//   const handleTimeClick = (date, time) => {
//     setSelected({ date, time });
//     setSelectedBookingDate(date);
//     setSelectedBookingTime(time);
//     console.log("Selected Date & Time:", { date, time });
//   };

//   const scrollDates = (direction) => {
//     if (dateRef.current) {
//       dateRef.current.scrollBy({
//         left: direction === "left" ? -100 : 100,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="my-24 text-center">
//       {/* Step Title */}
//       <h2 className="text-xl xl:text-3xl text-[#d63c3c] font-bold mb-4">STEP 3</h2>
//       <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-black">
//         Date and Time
//       </h2>

//       {/* Date Selection - Horizontal Scroll Only on Small Screens */}
//       <div className="relative mx-4 xl:mx-24 mt-16">
//         {/* Left Arrow (Only on Small Screens) */}
//         <button
//           onClick={() => scrollDates("left")}
//           className="absolute left-0 top-12 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
//         >
//           <FaChevronLeft size={20} />
//         </button>

//         {/* Dates & Time Slots Grid */}
//         <div
//           ref={dateRef}
//           className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 pb-4 lg:grid lg:grid-cols-7 lg:space-x-0"
//         >
//           {availableDates.map((date, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-4 min-w-[120px] relative"
//             >
//               {/* Vertical Line Separator (Except First Column) */}
//               {index !== 0 && (
//                 <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>
//               )}

//               {/* Date */}
//               <div
//                 className={`flex flex-col items-center font-semibold ${
//                   date.isToday ? "text-[#d63c3c]" : "text-black"
//                 }`}
//               >
//                 <div
//                   className={`w-20 h-20 flex items-center justify-center rounded-full border text-lg xl:text-3xl font-bold ${
//                     date.isToday ? "border-[#d63c3c]" : "border-gray-400"
//                   }`}
//                 >
//                   {date.date}
//                 </div>
//                 <div className="text-sm xl:text-xl my-4">{date.day}</div>
//               </div>

//               {/* Time Slots - Always Visible */}
//               <div className="flex flex-col space-y-2">
//                 {timeSlots.map((time, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => handleTimeClick(date.fullDate, time)}
//                     className={`exo p-2 text-gray-700 text-md 2xl:text-lg  font-medium rounded-md transition ${
//                       selected.date === date.fullDate && selected.time === time
//                         ? "bg-[#d63c3c] text-white"
//                         : "text-black"
//                     }`}
//                   >
//                     {time}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow (Only on Small Screens) */}
//         <button
//           onClick={() => scrollDates("right")}
//           className="absolute right-0 top-12 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md lg:hidden"
//         >
//           <FaChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Step3;