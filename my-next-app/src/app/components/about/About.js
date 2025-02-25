import Image from "next/image";
import {
  FaChartLine,
  FaUsers,
  FaDollarSign,
  FaRetweet,
  FaChartBar,
} from "react-icons/fa";

export default function DataDrivenResults() {
  const featuresTop = [
    {
      icon: "/Images/about/1.webp",
      number: "01",
      title: "MRR & ARR",
      description: "Track MRR by channel and get detailed SaaS funnel reports",
    },
    {
      icon: "/Images/about/1.webp",
      number: "02",
      title: "Customer Acquisition Cost",
      description: "Optimize your ad spend with precise CAC tracking",
    },
    {
      icon: "/Images/about/1.webp",
      number: "03",
      title: "Lead Conversion Rate",
      description: "Measure and enhance lead-to-customer conversion rates",
    },
  ];

  const featuresBottom = [
    {
      icon: "/Images/about/1.webp",
      number: "04",
      title: "Churn Rate Analysis",
      description: "Identify trends and improve customer retention strategies",
    },
    {
      icon: "/Images/about/1.webp",
      number: "05",
      title: "Revenue Forecasting",
      description: "Predict growth with AI-powered revenue analytics",
    },
  ];

  return (
    <div className="flex items-center flex-col lg:flex-row gap-12 p-6 mx-4 md:mx-12 xl:mx-24 my-32">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="clash text-4xl lg:text-5xl  font-bold text-[#00193b] ">
        We help organizations increase their impact.
        </h2>
        <p className="fredoka text-lg  text-gray-800">
          Increase your return on investment with our unique methodologies. We
          design strategies and structures that convert clicks, shares, CTR,
          CPC, and other online traffic into paying clients while concentrating
          on generating leads and online customers for your business.
        </p>
        <div className="flex gap-4 my-4">
          <Image
            width={400}
            height={400}
            src="/Images/about/2.webp"
            alt="Image 1"
            className="w-1/2 rounded-lg"
          />
          <Image
            width={400}
            height={400}
            src="/Images/about/2.webp"
            alt="Image 2"
            className="w-1/2 rounded-lg"
          />
        </div>
        <p className="fredoka text-lg  text-gray-800">
        We are a team of creative minds and strategic thinkers, dedicated to helping businesses reach their full potential. Our approach is simple: understand your business, identify your unique value proposition, and develop a marketing strategy that will help you stand out in a crowded market.
        </p>
        {/* <hr className="my-4" />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 w-fit">
          Let&apos;s Chat
        </button> */}
      </div>

      {/* Right Side Feature Blocks */}
      <div className="w-full lg:w-1/2 flex items-center flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {featuresTop.map((feature, index) => (
            <div key={index} className="p-6 shadow-md rounded-2xl  bg-[#00193bdc]">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12">
                  <Image
                    width={400}
                    height={400}
                    alt="img"
                    src={feature.icon}
                    className="w-full h-full object-cover p-2 rounded-lg border border-gray-400"
                  />
                </div>
                <div className="text-gray-400 text-2xl">{feature.number}</div>
              </div>

              <div className="mt-4">
                <h3 className="plus text-xl  text-white ">
                  {feature.title}
                </h3>
                <p className="text-gray-100 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {featuresBottom.map((feature, index) => (
              <div key={index} className="p-6 shadow-md rounded-2xl  bg-[#00193bdc]">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12">
                  <Image
                    width={400}
                    height={400}
                    alt="img"
                    src={feature.icon}
                    className="w-full h-full object-cover p-2 rounded-lg border border-gray-400"
                  />
                </div>
                <div className="text-gray-400 text-2xl">{feature.number}</div>
              </div>

              <div className="mt-4">
                <h3 className="plus text-xl  text-white ">
                  {feature.title}
                </h3>
                <p className="text-gray-100 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
