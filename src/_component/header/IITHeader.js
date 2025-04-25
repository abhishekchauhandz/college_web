'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function IITHeader() {
    const data = [
        { type: 'Rank', value: '35th In Asia', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
        { type: 'Students', value: '1000 Students', bgColor: 'bg-green-100', textColor: 'text-green-700' },
        { type: 'Courses', value: '250+ Courses', bgColor: 'bg-yellow-100', textColor: 'text-yellow-700' },
    ];

    // State to keep track of the active type (Rank, Students, or Courses)
    const [activeData, setActiveData] = useState(data[0]); 
    const [fade, setFade] = useState(false); 

    useEffect(() => {
        const interval = setInterval(() => {
          setFade(true); 
    
          setTimeout(() => {
            setActiveData((prev) => {
              const currentIndex = data.findIndex((item) => item.type === prev.type);
              const nextIndex = (currentIndex + 1) % data.length;
              return data[nextIndex];
            });
            setFade(false); 
          }, 3000); 
        }, 3000);
    
        return () => clearInterval(interval);
      }, [data]);

    return (
        <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Logo & Name */}
            <div className="flex items-center space-x-4">
                <Image src="/iitLogo.png" alt="IIT Madras Logo" width={80} height={80} />
            </div>
            <div className='w-full flex flex-col lg:gap-1 gap-2'>
                <div className='flex flex-col lg:flex-row justify-between lg:gap-0 gap-2'>
                    <div className='flex w-full max-w-[37rem] gap-2 items-center'>
                        <h1 className="md:text-[1.125rem] text-[0.8rem] font-bold text-[#092B84]">
                            Indian Institute Of Technology Madras (IIT Madras)
                        </h1>
                        <span className="text-sm text-gray-600">Chennai, India</span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 lg:justify-center">
                        <Image src="/thumb.png" alt="IIT Madras Logo" width={60} height={60} />
                        <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full shadow-sm text-sm">
                            📄 View Brochure
                        </button>
                        <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                            ⊕ Add To Compare | 🔖 Shortlist
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-start flex-wrap gap-4 justify-start">
                    {/* Render the same active data type in all three divs */}
                    {[1, 2, 3].map((_, i) => (
                        <span
                            key={i}
                            className={`transition-all duration-500 ${fade ? 'opacity-0' : 'opacity-100'} ${activeData.bgColor} ${activeData.textColor} px-3 py-2 rounded-[20px] text-[1rem]`}
                        >
                         {activeData.value}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
}
