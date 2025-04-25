// app/components/Header.tsx
'use client';

import React from 'react';
import SearchBar from './SearchBar';
import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="w-full flex flex-wrap items-center justify-between px-[1rem] py-[0.8rem] lg:flex-nowrap md:px-[3.5rem] bg-white lg:gap-2 gap-2">

            {/* Logo + Title */}
            <div className="flex items-center gap-[0.5rem] flex-shrink-0">
                <Image src="/headerLogo1.png" alt="logo" width={30} height={30} />
                <h1 className="text-[1.5rem] lg:text-[1.75rem] font-bold text-black whitespace-nowrap">
                    Campus <span className="text-primary-blue">Encyclopedia</span>
                </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-center md:gap-10 gap-4 w-full lg:w-auto justify-between lg:justify-end flex-wrap lg:flex-nowrap">

                {/* SearchBar */}
                <div className="w-full sm:w-auto">
                    <SearchBar />
                </div>

                {/* Theme Toggle */}
                <div className='flex md:gap-4 gap-1 items-center'>
                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className="text-gray-600 dark:text-gray-300 text-[1.25rem] flex-shrink-0"
                    >
                        {theme === 'light' ? (
                            <FaMoon />
                        ) : (
                            <Image
                                src="/theme.png"
                                alt="theme-icon"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        )}
                    </button>

                    {/* Avatar */}
                    <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="w-auto rounded-[0.5rem] border border-gray-300 px-[1rem] py-[0.625rem] flex items-center gap-[0.3125rem] text-sm text-primary-blue dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="min-w-[16px] min-h-[16px]">
                            <path d="M15.8163 14.2438L12.6522 6.57969C12.5938 6.43815 12.4947 6.31715 12.3674 6.23201C12.2401 6.14686 12.0904 6.10141 11.9373 6.10141C11.7842 6.10141 11.6345 6.14686 11.5073 6.23201C11.38 6.31715 11.2809 6.43815 11.2224 6.57969L8.05836 14.2438C8.01902 14.3377 7.99863 14.4386 7.99837 14.5405C7.99812 14.6424 8.01799 14.7433 8.05686 14.8375C8.09573 14.9317 8.15283 15.0172 8.22487 15.0893C8.29692 15.1613 8.38249 15.2184 8.47667 15.2573C8.57085 15.2962 8.67178 15.3161 8.77367 15.3158C8.87556 15.3156 8.9764 15.2952 9.07039 15.2559C9.16438 15.2166 9.24967 15.159 9.32137 15.0866C9.39306 15.0142 9.44975 14.9284 9.48816 14.834L10.1326 13.2734H13.7421L14.3865 14.834C14.4449 14.9756 14.544 15.0967 14.6714 15.1819C14.7987 15.2671 14.9484 15.3125 15.1016 15.3125C15.2287 15.3124 15.3538 15.281 15.4658 15.2211C15.5779 15.1612 15.6735 15.0745 15.7441 14.9689C15.8147 14.8632 15.8582 14.7418 15.8708 14.6153C15.8833 14.4888 15.8645 14.3612 15.8159 14.2438H15.8163ZM10.7714 11.7266L11.9375 8.90176L13.1036 11.7266H10.7714ZM8.41625 11.0558C8.53641 10.8898 8.58579 10.6829 8.55356 10.4806C8.52133 10.2782 8.41012 10.0969 8.24434 9.97648C8.2373 9.97121 7.71699 9.58519 6.96148 8.75551C8.35543 6.86832 9.14504 4.72133 9.46707 3.71094H10.6016C10.8067 3.71094 11.0034 3.62945 11.1485 3.4844C11.2935 3.33936 11.375 3.14263 11.375 2.9375C11.375 2.73237 11.2935 2.53564 11.1485 2.3906C11.0034 2.24555 10.8067 2.16406 10.6016 2.16406H6.52344V1.46094C6.52344 1.25581 6.44195 1.05908 6.2969 0.914035C6.15186 0.768987 5.95513 0.6875 5.75 0.6875C5.54487 0.6875 5.34814 0.768987 5.2031 0.914035C5.05805 1.05908 4.97656 1.25581 4.97656 1.46094V2.16406H0.898438C0.693309 2.16406 0.496582 2.24555 0.351535 2.3906C0.206487 2.53564 0.125 2.73237 0.125 2.9375C0.125 3.14263 0.206487 3.33936 0.351535 3.4844C0.496582 3.62945 0.693309 3.71094 0.898438 3.71094H7.83301C7.49832 4.6584 6.88203 6.1543 5.94195 7.52047C4.8377 6.05516 4.42742 5.10699 4.42426 5.09926C4.34342 4.91243 4.19218 4.76501 4.00335 4.68897C3.81453 4.61292 3.60333 4.61439 3.41558 4.69304C3.22782 4.7717 3.07864 4.9212 3.0004 5.10913C2.92216 5.29706 2.92116 5.50825 2.99762 5.69691C3.01801 5.74543 3.50914 6.90031 4.85598 8.64758C4.88832 8.68941 4.92031 8.7302 4.9523 8.77098C3.57277 10.3302 2.21926 11.2973 1.65289 11.6095C1.4728 11.7077 1.3391 11.8735 1.28121 12.0703C1.22333 12.2671 1.24599 12.4788 1.34422 12.6589C1.44245 12.839 1.60819 12.9727 1.805 13.0306C2.0018 13.0885 2.21354 13.0658 2.39363 12.9676C2.46957 12.9261 4.10223 12.0222 5.96656 9.95855C6.75828 10.8051 7.3025 11.2045 7.3352 11.2277C7.41746 11.2874 7.5107 11.3304 7.60958 11.3541C7.70846 11.3778 7.81103 11.3817 7.91144 11.3657C8.01185 11.3497 8.10812 11.3141 8.19474 11.2608C8.28136 11.2076 8.35663 11.1378 8.41625 11.0554V11.0558Z" fill="#0071E3" />
                        </svg>  <span className="text-[0.75rem] md:text-sm">Ind - Eng</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
