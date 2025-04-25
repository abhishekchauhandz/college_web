'use client';

import { FiChevronDown } from 'react-icons/fi';

const menuItems = [
    { label: 'School', hasDropdown: true },
    { label: 'Colleges', hasDropdown: true },
    { label: 'Online Programs', hasDropdown: true },
    { label: 'Streams & Exams', hasDropdown: true },
    { label: "Let's Compare", hasDropdown: true },
    { label: 'Ranking', hasDropdown: false },
    { label: 'Campuspedia', hasDropdown: false },
    { label: 'More', hasDropdown: true },
];

export default function SecondaryHeader() {
    return (
        <div className="w-full bg-light-blue min-h-[2rem] px-4">
            <div className="flex justify-end items-center h-full">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 py-1 whitespace-nowrap overflow-x-auto">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-0.5 px-1 sm:px-2 py-1 text-xs sm:text-sm md:text-base font-medium text-gray-800 cursor-pointer hover:text-primary transition-colors duration-200"
                        >
                            <span className="text-inherit">{item.label}</span>
                            {item.hasDropdown && (
                                <FiChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
