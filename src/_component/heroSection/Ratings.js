'use client';
import React from 'react';
import Image from 'next/image';


const RatingMeter = ({ score, icon, gradientId, gradientColors }) => {
    const radius = 36;
    const circumference = Math.PI * radius; // Half-circle
    const percentage = (score / 5) * 100;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center relative">
            <svg width="206.16" height="103.08" viewBox="0 0 100 60">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={gradientColors[0]} />
                        <stop offset="100%" stopColor={gradientColors[1]} />
                    </linearGradient>
                </defs>

                {/* Background Arc (Gray) */}
                <path
                    d="M 14 50 A 36 36 0 0 1 86 50"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                />

                {/* Foreground Arc with dynamic gradient */}
                <path
                    d="M 14 50 A 36 36 0 0 1 86 50"
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="6"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Icon in center */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF5E7] p-2 rounded-[1rem] mt-10">
                <Image src={icon} alt="icon" width={30} height={30} />
            </div>

            {/* Label 1 at the left arc bottom */}
            <div className="absolute top-[90%] left-[16%] -translate-x-1/2 text-gray-700 font-semibold text-lg">
                1
            </div>

            {/* Label 5 at the right arc bottom */}
            <div className="absolute top-[90%] left-[86%] -translate-x-1/2 text-gray-700 font-semibold text-lg">
                5
            </div>

        </div>
    );
};



export default function Ratings() {
    const ratings = [
        {
            score: 3,
            icon: '/group.png',
            label: 'Rating by Public',
            gradientId: 'gradientYellowGreen1',
            gradientColors: ['#FFCE16', '#31FF9A'],
        },
        {
            score: 3.4,
            icon: '/remove.png',
            label: 'Rating by Campus Encyclopedia',
            gradientId: 'gradientYellowGreen2',
            gradientColors: ['#FFCE16', '#31FF9A'],
        },
        {
            score: 2,
            icon: '/university.png',
            label: 'Rating by Institutes',
            gradientId: 'gradientYellowGreen3',
            gradientColors: ['#FFCE16', '#31FF9A'],
        },
    ];


    return (
        <div className="rounded-xl p-4" style={{ boxShadow: "2.3px 4px 26px 0px #00000021" }}>
            <h2 className="text-green-accent font-normal md:text-[1.5rem] text-[1rem] mb-2" style={{ fontFamily: 'Luckiest Guy, cursive' }}>Ratings</h2>

            {/* Overall Rating */}
            <div className="bg-white rounded-[1.85rem] p-6 flex flex-col items-start justify-between h-auto"
                style={{ boxShadow: "2.3px 4px 26px 0px #0000000D" }}
            >
                <h1 className="font-poppins font-semibold text-[18px] leading-[100%] tracking-[0%] capitalize sm:text-[20px] md:text-[24px]">
                    Overall
                </h1>

                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className='flex flex-col gap-4'>
                        <RatingMeter
                            score={3.4}
                            icon="/bulb.gif"
                            gradientId="gradientGreen"
                            gradientColors={['#31FF9A', '#099852']}
                        />
                        <div className="text-center font-poppins font-semibold text-[24.25px] leading-[100%] tracking-[0%] capitalize">
                            3.4/5
                        </div>

                    </div>
                    <div>
                        <p className="text-gray-700 text-[14px] leading-snug">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            Consectetur adipiscing elit, sed do.
                        </p>
                        <p className="text-[14px] text-gray-400 mt-4">
                            Consectetur adipiscing elit, sed do.
                        </p>
                    </div>
                </div>

            </div>


            {/* Other Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {ratings.map((item, i) => (
                    <div key={i} className="rounded-xl px-4 text-center" style={{ boxShadow: "2.3px 4px 26px 0px #0000000D" }}>
                        <RatingMeter
                            score={item.score}
                            icon={item.icon}
                            gradientId={item.gradientId}
                            gradientColors={item.gradientColors}
                        />
                        <div className="mt-2 text-[1.12rem] font-semibold mt-3">{item.score}/5</div>
                        <p className="text-[1rem] font-medium text-gray-800 mt-1">{item.label}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
