import React from "react";
export const ProductCard = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0 bg-red-500 rounded-2xl">
            <div className="flex flex-col lg:block justify-center items-center rounded-lg overflow-hidden">
                <div className="w-full flex flex-nowrap pb-5 lg:py-5 overflow-hidden relative pr-5 lg:pr-0">
                    <div className="swiper-container flex gap-2">
                        <a
                            href="/product/dkp-16008379/"
                            className="bg-white flex flex-col items-stretch p-2 rounded-md w-40">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/048821c5ef857f64d1987d09f81f4dfffd73418a_1720445282.jpg"
                                width="132"
                                height="132"
                                alt="هدفون بلوتوثی ایکس او مدل X33"
                                className="w-32 h-44 rounded-md"/>
                            <h3 className="text-gray-600 text-sm truncate">هدفون بلوتوثی ایکس او مدل X33</h3>
                            <div className="flex justify-between items-center">
                                <span className="bg-red-500 text-white px-1 rounded-md">۴۵٪</span>
                                <span className="text-gray-700">۶۸۹,۰۰۰ تومان</span>
                            </div>
                            <span className="text-gray-400 line-through">۱,۲۵۰,۰۰۰</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


