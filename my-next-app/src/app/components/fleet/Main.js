import Link from 'next/link'
import React from 'react'

function Features() {
    const scrollToForm = () => {
        document.getElementById('fleetForm').scrollIntoView({ behavior: 'smooth' });
      };
    
  return (
    <div className='mx-4 md:mx-12 xl:mx-60 my-24'>
          <div className="text-center">
          <h3 className="montserrat text-3xl  xl:text-5xl text-[#1f1e1f]">
            MAKE A LASTING FIRST IMPRESSION!
          </h3>
          <p className="montserrat my-8 text-lg lg:text-2xl text-gray-800">
            No matter your business, your branded vehicles turn heads on the road and at job sites. 
            Ensure they always look their best!
          </p>
          <div className="mx-auto">
            <p className="exo text-gray-700 text-md 2xl:text-xl text-justify">
              Creekside Car Wash offers convenient locations that keep your fleet looking spotless, 
              boosting your company&apos;s image more effectively and affordably than in-house washing. 
              Our fleet plans provide cost-saving volume discounts while ensuring a consistently clean 
              brand presence for your customers.
            </p>
            <p className="exo mt-8 text-gray-700 text-md lg:text-lg ">
              Keep your business shining with ease!
            </p>
            <p className="mt-12">
          <button onClick={scrollToForm} className="montserrat mx-auto text-xl lg:text-xl hover:bg-white bg-[#1f1e1f] hover:text-[#1f1e1f] border-2 border-[#1f1e1f] text-white py-4 px-4 rounded-xl ">
      Explore Fleet Plans
      </button>
      </p>
          </div>
        </div>
    </div>
  )
}

export default Features
