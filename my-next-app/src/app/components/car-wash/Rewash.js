import React from 'react'

function Rewash() {
  return (
    <div className='bg-gray-200 text-center py-24'>
        <h3 className="montserrat text-2xl  lg:text-3xl font-bold text-gray-800 text-center">
       REWASH POLICY
      </h3>
      <h3 className="montserrat text-xl  lg:text-xl font-bold text-gray-600 text-center mt-6 ">
   Did We Miss A Spot?
      </h3>
      <div className="flex items-center gap-12 justify-center flex-col xl:flex-row  relative z-30 px-4 md:px-8 py-12   w-full shadow-lg text-black  rounded-xl">
     
        <div className="w-full lg:w-1/2 text-center lg:pb-8">
     
          

            <p className="exo  text-gray-700 text-md lg:text-lg ">
              Simply choose a denomination (savings included) and proceed to the
              secure checkout screen. You will receive a confirmation email and
              we will have your card or fob ready for pickup in 24hrs. For all
              return customers, simply come see an attendant to recharge the
              card.
            </p>
            <p className="exo mt-8 text-gray-700 text-md lg:text-lg ">
            Simply choose a denomination (savings included) and proceed to the
              secure checkout screen. You will receive a confirmation email and
              we will have your card or fob ready for pickup in 24hrs. For all
              return customers, simply come see an attendant to recharge the
              card.
            </p>

        </div>

        <div className=" w-full lg:w-1/2 ">
          <img
            src="/Images/footer.jpg"
            alt=""
            className=" w-full h-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Rewash
