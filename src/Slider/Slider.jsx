import { useState, useEffect } from "react";

export function Slider() {
    const images = [
        "/imageslider/slide1.gif",
        "/imageslider/slide2.webp",
        "/imageslider/slide3.webp",
        "/imageslider/slide4.webp",
        "/imageslider/slide5.jpg"
    ];

    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5500);

        return () => clearInterval(interval); // پاک کردن تایمر هنگام خروج از کامپوننت
    }, []);

    const goToPrevious = () => {
        setIndex((index + 1 + images.length) % images.length); // رفتن به تصویر قبلی
    };

    const goToNext = () => {
        setIndex((index - 1 + images.length) % images.length); // رفتن به تصویر بعدی
    };

    return (
        <div
            className="relative w-full max-w-full"
            onMouseEnter={() => setHovered(true)}  // نمایش فلش‌ها هنگام ورود موس
            onMouseLeave={() => setHovered(false)} // مخفی کردن فلش‌ها هنگام خروج موس
        >
            <div className="w-full">
                <img src={images[index]} alt={`Slide ${index + 1}`} className="w-full" />
            </div>

            {/* دکمه ترکیبی برای فلش‌ها */}
            <div className={`absolute bottom-5 right-5 flex gap-0 ${hovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                <button
                    onClick={goToNext} // تغییر به تصویر بعدی
                    className="bg-black bg-opacity-50 border-none cursor-pointer rounded-full w-12 h-6 flex items-center justify-center"
                    style={{
                        gap: "10px",
                        flexDirection: "row-reverse" // معکوس کردن ترتیب فلش‌ها
                    }}
                >
                    {/* فلش راست */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <button
                    onClick={goToPrevious} // تغییر به تصویر قبلی
                    className="bg-black bg-opacity-50 border-none cursor-pointer rounded-full w-12 h-6 flex items-center justify-center"
                    style={{
                        gap: "10px",
                        flexDirection: "row-reverse" // معکوس کردن ترتیب فلش‌ها
                    }}
                >
                    {/* فلش چپ */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L8 12L15 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* نقاط ناوبری */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${index === i ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                    />
                ))}
            </div>
        </div>
    );
}
