import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const featuresLeft = [
    {
      id: 1,
      number: '01',
      icon: '/Images/gif/detail.gif',
      title: 'Self Serve Bays',
      description: "Max height 11'6, 24/7",
    },
    {
      id: 2,
      number: '02',
      icon: '/Images/gif/detail.gif',
      title: 'Vacuums',
      description: 'Powerful cleaning',
    },
  ];
  
  const featuresRight = [
    {
      id: 3,
      number: '03',
      icon: '/Images/gif/detail.gif',
      title: 'Shampoo Vacuum',
      description: 'Deep cleaning',
    },
    {
      id: 4,
      number: '04',
      icon: '/Images/gif/detail.gif',
      title: 'Semi Truck Bay',
      description: 'For large vehicles',
    },
  ];
  

  return (
    <div className='relative my-24  py-16'>
      <div className='container mx-auto px-4 lg:px-40'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          <div className='space-y-12 text-black hidden lg:block'>
            {featuresLeft.map((feature) => (
              <div key={feature.id} className='text-left'>
                <h3 className='text-2xl font-bold mb-2'>{feature.number}</h3>
                <div className='p-6 w-fit inline-block border border-gray-400  rounded-lg '>
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} className='mx-auto'/>
                </div>
                <h4 className='text-xl font-semibold mt-4'>{feature.title}</h4>
                <p className='text-gray-800'>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <Image src='/Images/center.webp' alt='Car Image' width={600} height={600} className='object-contain' />
          </div>

          <div className='space-y-12 text-black'>
            {featuresRight.map((feature) => (
              <div key={feature.id} className='text-right'>
                <h3 className='text-2xl font-bold mb-2'>{feature.number}</h3> 
                <div className='p-6 w-fit inline-block border border-gray-400  rounded-lg '>
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} className='mx-auto'/>
                </div>
                <h4 className='text-xl font-semibold mt-4'>{feature.title}</h4>
                <p className='text-gray-800'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;