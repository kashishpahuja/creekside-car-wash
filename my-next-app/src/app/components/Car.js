



import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const featuresLeft = [
    {
      id: 1,
      number: '01',
      icon: '/Images/car/1.webp',
      title: 'Self Serve Bays',
      description: "Max height 11'6, 24/7",
    },
    {
      id: 2,
      number: '02',
      icon: '/Images/car/2.webp',
      title: 'Vacuums',
      description: 'Powerful cleaning',
    },
  ];
  
  const featuresRight = [
    {
      id: 3,
      number: '03',
      icon: '/Images/car/3.webp',
      title: 'Shampoo Vacuum',
      description: 'Deep cleaning',
    },
    {
      id: 4,
      number: '04',
      icon: '/Images/car/4.webp',
      title: 'Semi Truck Bay',
      description: 'For large vehicles',
    },
  ];
  

  return (
    <div className='relative my-24  py-16 min-h-screen bg-[#1f1e1f]'>
      <div className='  mx-auto px-4 lg:px-20 xl:px-40 2xl:px-60 '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-2  items-center'>
          <div className='col-span-3 space-y-12 text-white '>
            {featuresLeft.map((feature) => (
              <div key={feature.id} className='text-center lg:text-left'>
                <div className='flex items-center justify-center lg:justify-start gap-2 mb-2'>
                <div className='text-[#d7eaf3] text-lg font-bold '>{feature.number}</div>
<div className=' bg-[#d7eaf3] h-[1px]  w-[25%] lg:w-[33%] '></div>
                </div>
                <div className='p-6 w-fit inline-block border border-gray-600  rounded-lg '>
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} className='mx-auto'/>
                </div>
                <h4 className='text-xl font-semibold mt-4'>{feature.title}</h4>
                <p className='text-gray-200'>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className='col-span-6 flex justify-center w-full h-[600px] 2xl:min-h-screen '>
            <Image src='/Images/car/Truck.webp' alt='Car Image' width={600} height={600} className='object-contain w-full h-[100%] ' />
          </div>

          <div className='col-span-3 space-y-12 text-white '>
            {featuresRight.map((feature) => (
              <div key={feature.id} className='text-center lg:text-right'>
                   <div className='flex items-center justify-center mb-2 lg:justify-end gap-2'> 
<div className=' bg-[#d7eaf3] h-[1px]  w-[25%] lg:w-[33%] '></div>

                <div className='text-[#d7eaf3] text-lg font-bold '>{feature.number}</div>
                </div>
                <div className='p-6 w-fit inline-block border border-gray-600  rounded-lg '>
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} className='mx-auto'/>
                </div>
                <h4 className='text-xl font-semibold mt-4'>{feature.title}</h4>
                <p className='text-gray-200'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;