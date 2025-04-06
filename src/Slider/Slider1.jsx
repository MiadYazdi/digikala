import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const images = Array.from({ length: 15 }, (_, i) => ({
    src: `/image/slide${i + 1}.jpg`,
    text: `عکس ${i + 1}`,
}));

const ImageGrid = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleImages = images.slice(startIndex, startIndex + 13);

    const handleNext = () => {
        if (startIndex + 13 < images.length) {
            setStartIndex(startIndex + 1); // به جلو حرکت می‌کنیم
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1); // به عقب حرکت می‌کنیم
        }
    };

    return (
        <div className="mt-[100px] flex items-center justify-center gap-4 p-6">
            {startIndex > 0 && (
                <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md">
                    <ChevronRight size={24} /> {/* جهت به سمت راست */}
                </button>
            )}
            <div className="flex gap-4">
                {visibleImages.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={item.src}
                            alt={item.text}
                            className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md"
                        />
                        <p className="mt-2 text-center text-gray-700">{item.text}</p> {/* نمایش متن مربوط به هر عکس */}
                    </div>
                ))}
            </div>
            {startIndex + 13 < images.length && (
                <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md">
                    <ChevronLeft size={24} /> {/* جهت به سمت چپ */}
                </button>
            )}
        </div>
    );
};

export default ImageGrid;
