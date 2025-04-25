'use client';

import React from 'react';
import Image from 'next/image';
import searchIcon from '/public/search.gif'; // use the icon from your image
import SlidingText from '../SlidingText';
  

const SearchBar = () => {
    return (
        <div className="w-full max-w-[23rem] border-b">
            <div className="w-full flex items-center gap-2 pb-2">
                <Image
                    src={searchIcon}
                    alt="search icon"
                    width={24}
                    height={24}
                    className="min-w-[24px] min-h-[24px] w-6 h-6"
                />
                <p className="md:text-[1rem] text-[0.75rem] text-black font-medium whitespace-nowrap">
                    Search Globally Among 1720+{' '}
                    <span className="z-10 relative"><SlidingText /></span>
                </p>
            </div>
        </div>
    );
};

export default SearchBar;
