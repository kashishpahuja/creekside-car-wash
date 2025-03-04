"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const News = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Regular Car Washes Are Essential for Your Vehicle’s Longevity",
      images: ["/Images/blog1.webp", "/Images/blog2.webp"],
      date: "March 5, 2025",
      tag: "Car Wash",
      description:
        "Regular car washes not only improve your vehicle's appearance but also protect its exterior from dirt, grime, and harmful contaminants that can cause damage over time.",
      content:
        "A routine car wash is more than just about maintaining a shiny vehicle. Dirt, road salt, and environmental pollutants can cause paint deterioration and lead to rust. Our professional car wash services ensure a deep clean that removes these harmful elements, preserving your car’s exterior. With options like hand washes, touchless cleaning, and premium wax coatings, we help maintain your car’s showroom shine while extending its lifespan. Keeping your car clean also enhances visibility, reduces wear on wipers, and contributes to safer driving."
    },
    {
      id: 2,
      title: "Oil Undercoating: The Best Way to Protect Your Vehicle from Rust",
      images: ["/Images/blog3.webp", "/Images/blog4.webp"],
      date: "March 1, 2025",
      tag: "Oil Undercoating",
      description:
        "Protect your vehicle’s undercarriage from rust and corrosion with professional oil undercoating. Learn how this service extends the life of your car.",
      content:
        "Harsh weather conditions, road salt, and moisture can cause significant damage to your vehicle’s undercarriage. Our oil undercoating service creates a protective barrier that prevents rust from forming on critical components like the frame, brake lines, and fuel lines. This process is especially essential for vehicles driven in winter conditions or exposed to high humidity. With long-lasting protection, your vehicle remains durable and reliable for years to come."
    },
    {
      id: 3,
      title: "The Importance of Professional Car Detailing for a Pristine Ride",
      images: ["/Images/blog1.webp", "/Images/blog2.webp"],
      date: "February 20, 2025",
      tag: "Car Detailing",
      description:
        "Professional car detailing restores your vehicle’s appearance, protects its interior, and enhances its overall value. Discover why detailing is a must for every car owner.",
      content:
        "Car detailing is much more than a standard wash. It involves deep cleaning, polishing, and applying protective treatments to both the interior and exterior of your vehicle. Our expert detailing services include clay bar treatments, waxing, upholstery shampooing, and leather conditioning to maintain a spotless and fresh-looking car. Regular detailing not only improves aesthetics but also preserves the longevity of materials, removes stubborn stains, and eliminates odors. Investing in professional detailing ensures your car stays in top condition inside and out."
    },
    {
      id: 4,
      title: "Fleet Accounts: Convenient and Cost-Effective Car Wash Services for Businesses",
      images: ["/Images/blog3.webp", "/Images/blog4.webp"],
      date: "February 10, 2025",
      tag: "Fleet Accounts",
      description:
        "Keeping a fleet of vehicles clean and well-maintained is essential for business operations. Learn about our tailored fleet car wash services.",
      content:
        "Managing a fleet of vehicles comes with the responsibility of ensuring they remain clean, professional-looking, and well-maintained. Our fleet car wash services provide businesses with customized packages that keep their vehicles spotless while saving time and money. With flexible scheduling, discounted rates, and premium cleaning solutions, our fleet accounts help businesses maintain a professional image and protect their investments. Whether you operate delivery vans, company cars, or service trucks, our comprehensive cleaning services ensure your fleet is always in top condition."
    },
    {
      id: 5,
      title: "Top Benefits of a Touchless Car Wash",
      images: ["/Images/blog1.webp", "/Images/blog2.webp"],
      date: "February 1, 2025",
      tag: "Car Wash",
      description:
        "Touchless car washes offer a safe and effective way to clean your vehicle without the risk of scratches. Find out why this option is gaining popularity.",
      content:
        "Traditional car washes use brushes that may leave swirl marks or scratches. A touchless car wash uses high-pressure water and specialized detergents to clean without physical contact. This method is gentle on your vehicle’s paint while still delivering a thorough clean. It’s especially beneficial for cars with custom paint jobs or delicate finishes."
    },
    {
      id: 6,
      title: "Why Waxing Your Car is a Must After Every Wash",
      images: ["/Images/blog3.webp", "/Images/blog4.webp"],
      date: "January 25, 2025",
      tag: "Car Care",
      description:
        "Waxing your car not only enhances its shine but also adds a protective layer against environmental elements. Learn why it should be part of your routine.",
      content:
        "Applying wax after washing your car forms a protective barrier against UV rays, dirt, and water spots. It helps maintain the paint’s gloss and prevents fading. Regular waxing also makes cleaning easier and adds to the longevity of your car’s exterior finish."
    },
    {
      id: 7,
      title: "How Often Should You Get a Professional Car Wash?",
      images: ["/Images/blog1.webp", "/Images/blog2.webp"],
      date: "January 15, 2025",
      tag: "Car Wash",
      description:
        "How often you should wash your car depends on various factors like climate and driving habits. Learn the best schedule for keeping your car clean.",
      content:
        "For most drivers, a bi-weekly car wash is ideal to maintain cleanliness and prevent dirt buildup. However, if you drive in areas with heavy pollution, rain, or snow, a weekly wash is recommended. Regular washes prevent contaminants from embedding into your car’s paint, preserving its condition."
    }
  ];
  


  // Function to limit words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="relative text-center px-4 lg:px-24 overflow-hidden my-24">
      {/* Title Section */}
      <h2 className="montserrat text-2xl lg:text-5xl text-black text-center mb-12">
        OUR BLOGS
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation={false}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
      >
        {blogs.map((blog) => {
          const blogDate = new Date(blog.date);
          const month = blogDate.toLocaleString("en-US", { month: "short" });
          const year = blogDate.getFullYear();

          return (
            <SwiperSlide key={blog.id}>
              <div className="p-4">
                <div className="w-auto h-auto overflow-hidden">
                  <div>
                  <Image
                    width={400}
                    height={400}
                    src={blog.images[0]} 
                    alt="img"
                    className="w-full h-72 2xl:h-80 object-cover"
                  />
                  </div>
                  <div className="mt-4 text-start">
                    <Link href={'/blogs'} className="exo text-lg md:text-xl font-semibold  text-black hover:text-[#ee0a00]">
                      {blog.title}
                    </Link>
                    <p className="mt-2 text-md 2xl:text-xl text-gray-700 leading-relaxed ">
                      {truncateText(blog.description, 26)}
                    </p>
                    <div className="flex items-start md:items-center justify-between flex-col md:flex-row">

                        <Link href={'/blogs'} className="exo text-gray-900 text-md lg:text-md font-semibold hover:underline mt-4 inline-block">
                          <span>Read More</span>{" "}
                          <FaArrowRight className="inline ml-2" />
                        </Link>
  
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default News;
