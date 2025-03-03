import { useState, useEffect } from "react";

export function Slider() {
    const images = [
        "/image/slide1.gif",
        "/image/slide2.webp",
        "/image/slide3.webp",
        "/image/slide4.webp",
        "/image/slide5.jpg"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5500);

        return () => clearInterval(interval); // پاک کردن تایمر هنگام خروج از کامپوننت
    }, []);

    return (
        <div>
            <div>
                <img src={images[index]} alt={`Slide ${index + 1}`} />
            </div>
        </div>
    );
}
