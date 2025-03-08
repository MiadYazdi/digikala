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
        setIndex((index - 1 + images.length) % images.length); // رفتن به تصویر قبلی
    };

    const goToNext = () => {
        setIndex((index + 1) % images.length); // رفتن به تصویر بعدی
    };

    return (
        <div
            style={{ position: "relative" }}
            onMouseEnter={() => setHovered(true)}  // نمایش فلش‌ها هنگام ورود موس
            onMouseLeave={() => setHovered(false)} // مخفی کردن فلش‌ها هنگام خروج موس
        >
            <div>
                <img src={images[index]} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
            </div>

            {/* دکمه ترکیبی برای فلش‌ها */}
            <button
                onClick={goToPrevious}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: "80px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hovered ? 1 : 0, // تغییر شفافیت بر اساس حالت موس
                    transition: "opacity 0.3s ease",
                    gap: "10px",
                    flexDirection: "row-reverse" // معکوس کردن ترتیب فلش‌ها
                }}
            >
                {/* فلش چپ */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L8 12L15 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* فلش راست */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* نقاط ناوبری */}
            <div style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px"
            }}>
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: index === i ? "white" : "rgba(255, 255, 255, 0.5)",
                            borderRadius: "50%",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
