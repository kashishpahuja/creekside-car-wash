import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center flex-col py-24 bg-white mt-[100px]">
    <div><h3 className="montserrat text-2xl lg:text-6xl text-black text-center mb-12 ">Page Not Found</h3>
    </div>
    <div>
    <Link href={'/'} className="montserrat text-xl lg:text-3xl text-red-600  mb-12  underline">Go To Home Page</Link>
    </div>
</div>
  );
};

export default NotFoundPage;
