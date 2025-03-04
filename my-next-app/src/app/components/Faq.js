import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  const [openIndexLeft, setOpenIndexLeft] = useState(0); // Default open first question
  const [openIndexRight, setOpenIndexRight] = useState(0);
  const contentRefsLeft = useRef([]);
  const contentRefsRight = useRef([]);

  const toggleDropdown = (index, side) => {
    if (side === "left") {
      setOpenIndexLeft(openIndexLeft === index ? null : index);
    } else {
      setOpenIndexRight(openIndexRight === index ? null : index);
    }
  };

  const faqs = [
    {
      question: "How does Digital Paaji ensure results for its clients?",
      answer:
        "To assess companies, the market, and the competition, create customized marketing plans, and track the success of campaigns, Digital Paaji employs a data-driven methodology. We work together closely, stay transparent, and get input to improve your campaign goals. Our objective is to provide long-term corporate growth and a high return on investment.",
    },
    {
      question: "What industries does Digital Paaji serve?",
      answer:
        "Digital Paaji serves a variety of industries, including technology, retail, healthcare, and more. Our strategies are tailored to meet the specific needs of each sector.",
    },
    {
      question: "What can I expect in terms of timeline and deliverables?",
      answer:
        "Our timelines and deliverables are customized to suit each project. Typically, we provide detailed plans and regular updates to ensure transparency and on-time delivery.",
    },
    {
      question: "Can Digital Paaji help with branding and messaging?",
      answer:
        "Yes, we specialize in branding and crafting compelling messages to ensure your brand stands out and resonates with your target audience.",
    },
    {
      question: "What is the cost of Digital Paaji's services?",
      answer:
        "Our pricing is competitive and tailored to the services required. Contact us for a detailed quote based on your needs.",
    },
  ];

  return (
    <div className="">
    <div className="flex flex-col xl:flex-row gap-10 my-16  mx-4 md:mx-12 xl:mx-32">
      {/* Left Column */}
      <div className="flex flex-col gap-4 w-full xl:w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleDropdown(index, "left")}
              className={`w-full flex justify-between items-center py-4 px-4 text-left font-medium transition-colors duration-500 ${
                openIndexLeft === index
                  ? "bg-white text-black shadow-md"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span className="exo text-lg 2xl:text-xl">{faq.question}</span>
              {openIndexLeft === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-[700ms] ease-in-out ${
                openIndexLeft === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
              ref={(el) => (contentRefsLeft.current[index] = el)}
            >
              <div className="p-4 text-gray-700 bg-white shadow-md">
                <span className="exo text-md 2xl:text-lg">{faq.answer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 w-full xl:w-1/2   items-center justify-center">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleDropdown(index, "right")}
              className={`w-full flex justify-between items-center py-4 px-4 text-left font-medium transition-colors duration-500 ${
                openIndexRight === index
                  ? "bg-white text-black shadow-md"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span className="exo text-lg 2xl:text-xl">{faq.question}</span>
              {openIndexRight === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-[700ms] ease-in-out ${
                openIndexRight === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
              ref={(el) => (contentRefsRight.current[index] = el)}
            >
              <div className="p-4 text-gray-700 bg-white shadow-md">
                <span className="exo text-md 2xl:text-lg">{faq.answer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div 
        // style={{
        //   backgroundImage: `url('/Images/gift/blackBG.webp')`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }} 
    className="flex flex-col gap-4 items-center justify-center  h-[300px]">
      {/* <div
          className="absolute inset-0 bg-[#111414] bg-opacity-70 rounded-xl"
          aria-hidden="true"
        ></div> */}
  <p className="exo  text-black text-2xl lg:text-4xl">
    Not what you were looking for?
  </p>
  <p className="exo text-lg text-gray-800">
    Talk to us directly, and we&apos;ll be happy to help!
  </p>
  <p className="mt-6">
    <Link href={'/contact'} className="montserrat mx-auto text-xl lg:text-xl hover:bg-white bg-[#1f1e1f]  hover:border-2 hover:border-[#1f1e1f]  text-white hover:text-[#1f1e1f] py-4 px-6 rounded-xl">
      Contact Us
    </Link>
  </p>
</div>

    </div>
  );
}

export default Faq;
