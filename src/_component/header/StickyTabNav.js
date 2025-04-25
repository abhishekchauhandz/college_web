'use client';

const tabs = [
    'Overview',
    'Gallery',
    'News Updates',
    'Courses & Admission',
    'Rating & Accreditation',
    'Review & Community',
];

export default function StickyTabNav() {
    return (
        <div className="py-4">
            <div className="overflow-x-auto w-full rounded-[46.94px] sm:rounded-[36px] md:rounded-[46.94px] py-2 
    bg-white border-[0.81px] border-solid border-transparent 
    border-image-[linear-gradient(276.57deg,_#FFFFFF_61.08%,_rgba(255,_255,_255,_0)_67.29%)] 
    backdrop-blur-[75.26963806152344px] 
    shadow-[2.43px_0px_16.19px_0px_rgba(66,78,96,0.25)]">
                <div className="flex lg:gap-4 gap-2 items-center justify-between h-[4rem] bg-white px-6 py-2 min-w-max">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`rounded-full font-medium text-sm whitespace-nowrap
                                ${index === 0
                                    ? 'bg-white shadow-md text-black border border-gray-300 px-[2.2rem] py-[1.25rem]'
                                    : 'text-gray-800 hover:text-blue-600'}
                                lg:px-[2rem] lg:py-[1.25rem] px-[1rem] py-[0.8rem] text-[1.0625rem]`
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
