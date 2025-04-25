"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Colleges", "Schools", "Programs", "Countries", "Exams", "Streams", "Courses"];

const SlidingText = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block overflow-hidden align-middle h-[1.6em] w-[8ch] text-left">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute left-0 right-0 bottom-[0.4rem] text-primary-blue font-poppins"
                    style={{
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        textAlign: "justify", // Justify alignment
                        verticalAlign: "middle", // Vertical alignment
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textTransform: "capitalize", // Capitalize text
                        width: "100%", // Ensures the text container adjusts to screen size
                    }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default SlidingText;
