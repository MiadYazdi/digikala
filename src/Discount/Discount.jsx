import React, { useState, useEffect } from "react";
import {ProductCard} from "./ProductCard";



export const Discount = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 54, seconds: 9 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { hours, minutes, seconds } = prevTime;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    clearInterval(timer);
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container mx-auto px-4 lg:px-0 bg-red-500 rounded-2xl">
            <div className="flex flex-col lg:block justify-center items-center rounded-lg overflow-hidden">
                <div className="w-full flex flex-nowrap  overflow-hidden relative pr-5 lg:pr-0">
                    <div className="swiper-container flex gap-2">
                        {/* Amazing Offer Link */}
                        <a
                            href="/incredible-offers/"
                            className="w-full lg:w-auto flex flex-row lg:flex-col items-center gap-3 px-5 lg:px-0 pt-5 pb-3"
                        >
                            <div className="flex flex-row lg:flex-col items-center gap-2 lg:gap-3 px-10">
                                <img
                                    src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                                    width="88"
                                    height="88"
                                    alt="شگفت انگیز"
                                    className="w-22 h-22"
                                />
                                <div className="flex gap-1 items-center">
                                    {[timeLeft.seconds, timeLeft.minutes, timeLeft.hours].map((time, index) => (
                                        <div key={index} className="bg-white w-7 h-7 rounded-sm flex items-center justify-center">
                                            <span className="text-neutral-800 text-center w-5 h-5">{String(time).padStart(2, "0")}</span>
                                        </div>
                                    ))}
                                </div>
                                <img
                                    src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
                                    width="80"
                                    height="80"
                                    alt="شگفت انگیز"
                                    className="w-20 h-20"
                                />
                            </div>
                            <div className="text-white flex items-center">
                                مشاهده همه >
                                <svg width="18" height="18" fill="currentColor">
                                    <use xlinkHref="#chevronLeft"></use>
                                </svg>
                            </div>
                        </a>
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};


