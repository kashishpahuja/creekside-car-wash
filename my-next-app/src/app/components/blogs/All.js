"use client";
import React from "react";
import Image from "next/image";

const News = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Regular Car Washes Are Essential for Your Vehicle's Longevity",
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
  

  return (
    <div className="px-4 lg:px-12 xl:px-32 py-12 space-y-12">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-xl lg:text-3xl 2xl:text-4xl font-bold text-black">{blog.title}</h1>
          <p className="text-gray-500 mt-2 text-md 2xl:text-lg">{blog.date} | {blog.tag}</p>
          <p className="mt-4 text-md 2xl:text-xl text-gray-700 leading-relaxed">{blog.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {blog.images.map((img, index) => (
              <Image
                key={index}
                width={700}
                height={500}
                src={img}
                alt=""
                className="w-full h-auto xl:h-[400px] object-cover rounded-md"
              />
            ))}
          </div>
          <p className="mt-6 text-md 2xl:text-xl text-gray-700 leading-relaxed">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
