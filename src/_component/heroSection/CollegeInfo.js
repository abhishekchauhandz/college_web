export default function CollegeInfo() {
    return (
        <div
            className="lg:w-1/2 w-full rounded-[1.25rem] p-6 h-auto"
            style={{ boxShadow: "2.3px 4px 26px 0px #00000021" }}
        >
            <div className="flex justify-between items-center mb-4">
                <h2
                    className="text-red-500 font-normal md:text-[1.5rem] text-[1rem] leading-[30px] uppercase"
                    style={{ fontFamily: 'Luckiest Guy, cursive' }}
                >
                    CURRENT INFO ABOUT COLLEGE
                </h2>

                {/* Toggle Buttons */}
                <div
                    className="bg-white rounded-[3.125rem] flex p-1 gap-1"
                    style={{ boxShadow: '0px 0px 4px 0px #1E1E1E21' }}
                >
                    <button
                        className="px-3 py-[2px] rounded-[3.125rem] bg-white text-blue-600 text-[14px] leading-[20px] font-semibold font-poppins shadow-sm"
                    >
                        Default
                    </button>
                    <button
                        className="px-3 py-[2px] rounded-[3.125rem] text-gray-700 text-[14px] leading-[20px] font-semibold font-poppins"
                    >
                        Advance
                    </button>
                </div>
            </div>
            <div className="bg-cream rounded-[1.25rem] p-4 px-6 text-sm text-gray-700 font-poppins">
                <h3 className="text-blue-700 font-bold text-[18px] leading-[26px] sm:text-[1rem] md:text-[1.25rem] sm:leading-[30px] mb-4">
                    Springfield College
                </h3>

                {/* Other Name */}
                <div className="mb-5">
                    <div className="font-poppins font-bold text-[1rem] md:text-[1.25rem] leading-[30px] tracking-[0%] align-middle sm:text-[24px] sm:leading-[34px] mb-1">Other Names -</div>
                    <div>Springfield lunarlake College</div>
                </div>

                {/* Location Section */}
                <div className="mb-5">
                    <div className="font-poppins font-bold text-[1rem] md:text-[1.25rem] leading-[30px] mb-1">
                        Location
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 text-[0.75rem] md:text-[1rem]">Campus Address -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">123 Green St, Springfield, IL</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 text-[0.75rem] md:text-[1rem]">Zip/Postal Code -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">262659</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 text-[0.75rem] md:text-[1rem]">City -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Springfield</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 text-[0.75rem] md:text-[1rem]">Country -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">United States</span>
                        </div>
                    </div>
                </div>


                {/* Campus Section */}
                <div className="mb-5">
                    <div className="font-poppins font-bold text-[1rem] md:text-[1.25rem] leading-[30px] tracking-[0%] align-middle sm:text-[24px] sm:leading-[34px] mb-1">Campus</div>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <span className="font-medium md:text-[1rem] text-[0.75rem]">Size -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Small Campus</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Parking Facilities -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">200 parking spaces</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Accessibility Features -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Multiple ramps and elevators available</span>
                        </div>
                    </div>
                </div>

                {/* Type of College Section */}
                <div className="mb-5">
                    <div className="font-poppins font-bold text-[1rem] md:text-[1.25rem] leading-[30px] tracking-[0%] align-middle sm:text-[24px] sm:leading-[34px] mb-1">Type of College</div>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Type of College -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Govt / Private</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Degree Levels Offered -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Associate&apos;s and Bachelor&apos;s Degrees</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Online/Hybrid Options -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Fully online programs available</span>
                        </div>
                    </div>
                </div>

                {/* Branches */}
                <div className="mb-5">
                    <div className="font-poppins font-bold text-[1rem] md:text-[1.25rem] leading-[30px] tracking-[0%] align-middle sm:text-[24px] sm:leading-[34px] mb-1">Branches</div>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Affiliated Schools -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">Affiliated with XYZ Institute</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium w-1/2 md:text-[1rem] text-[0.75rem]">Motto -</span>
                            <span className="text-[0.75rem] w-1/2 md:text-[1rem]">&quot;Sapientia est potentia&quot; (Latin)</span>
                           
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
