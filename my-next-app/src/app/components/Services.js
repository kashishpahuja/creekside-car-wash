import Link from 'next/link';
import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Services() {
  const services = [
    {id:'1', name: 'Car Wraps', image: '/Images/services/carWraps.webp', icon: <MdKeyboardDoubleArrowRight /> },
    { id:'2', name: 'Auto Glass', image: '/Images/services/autoGlass.jpg', icon: <MdKeyboardDoubleArrowRight /> },
    { id:'3', name: 'Auto Detailing', image: '/Images/services/detailing.jpg', icon: <MdKeyboardDoubleArrowRight /> },
    { id:'4', name: 'Car Wash', image: '/Images/services/carWash.webp', icon: <MdKeyboardDoubleArrowRight /> },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-4 lg:gap-1 mx-6 lg:mx-0'>
      {services.map((service, index) => (
        <div
          key={index}
          className='relative w-full h-[260px] bg-cover bg-center rounded shadow-lg overflow-hidden'
          style={{ backgroundImage: `url(${service.image})` }}
        >
           <Link href={`/service/${service.id}`}>
          {/* Black overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-75'></div>

          {/* Text and icon */}
          <div className='relative z-10 flex  items-center justify-center gap-3 h-full text-white'>
            <div className='exo text-2xl font-bold'>{service.name}</div>
            <div className='text-3xl '>{service.icon}</div>

          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Services;
