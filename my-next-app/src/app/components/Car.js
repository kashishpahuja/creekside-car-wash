



import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const featuresLeft = [
    {
      id: 1,
      number: '01',
      icon: '/Images/car/1.webp',
      title: 'Hot Water Wash',
      description: 'Better cleaning for tough dirt and grime. Perfect for deep cleaning.',
    },
    {
      id: 2,
      number: '02',
      icon: '/Images/car/2.webp',
      title: 'Full Cleaning Setup',
      description: 'Includes 4 vacuums + 1 shampoo & spot remover vacuum for interior cleaning.',
    },
  ];
  
  const featuresRight = [
    {
      id: 3,
      number: '03',
      icon: '/Images/car/3.webp',
      title: 'Dedicated Semi-Truck Bay',
      description: 'Special 4th bay for semi-trucks with ample space.',
    },
    {
      id: 4,
      number: '04',
      icon: '/Images/car/4.webp',
      title: '24/7 Availability',
      description: 'Open 24 hours, so you can wash your vehicle anytime.',
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
                <h4 className='text-lg xl:text-2xl font-semibold mt-4'>{feature.title}</h4>
                <p className='text-gray-200'>{feature.description}</p>
              </div>
            ))}
          </div>
<div className='col-span-6 flex justify-center w-full h-[400px] lg:h-[600px] 2xl:min-h-screen'>
  <video
    src='/Images/bay/car.webm'
    autoPlay
    loop
    muted
    playsInline
    className='object-contain w-full h-full'
  />
</div>


{/* 
<div className='col-span-6 flex justify-center w-full h-[600px] 2xl:min-h-screen '>
            <Image src='/Images/car/Truck.webp' alt='Car Image' width={600} height={600} className='object-contain w-full h-[100%] ' />
          </div> */}

          <div className='col-span-3 space-y-12 text-white '>
            {featuresRight.map((feature) => (
              <div key={feature.id} className='text-center lg:text-right'>
                   <div className='flex items-center justify-center mb-2 lg:justify-end gap-2'> 
<div className=' bg-[#d7eaf3] h-[1px]  w-[25%] lg:w-[33%] '></div>

                <div className='text-[#d7eaf3] text-lg font-bold '>{feature.number}</div>
                </div>
                <div className='p-6 w-fit inline-block border border-gray-600  rounded-lg '>
                  <Image src={feature.icon} alt='' width={60} height={60} className='w-full h-auto mx-auto'/>
                </div>
                <h4 className='text-lg xl:text-2xl font-semibold mt-4'>{feature.title}</h4>
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