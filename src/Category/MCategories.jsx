import React, { useRef, useState, useEffect } from "react";

const categories = [
    {
        title: "موبایل",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/09a98a13c782e12a245930b4515d243b17734a33_1740299441.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/landing/mobile/",
    },
    {
        title: "تجهیزات پزشکی و سلامت",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/deb3f514c62761797eb6a49e1559268b8bce3219_1740299561.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/landing/medical-health-equipment/",
    },
    {
        title: "کالای دیجیتال",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740299456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/electronic-devices/",
    },
    {
        title: "کتاب، لوازم تحریر و هنر",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/0cdf9c404e509371c3177a334be948a7e500419c_1740299574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/book-and-media/",
    },
    {
        title: "خانه و آشپزخانه",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/8a042388b93c5116604f35092a1fb35f8f0756be_1740299467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/home-and-kitchen/",
    },
    {
        title: "ورزش و سفر",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740299590.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/sport-entertainment/",
    },
    {
        title: "آرایشی بهداشتی",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/b196bbdea97f57bfac02dc1666d7401b16ee4bcb_1740299482.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/personal-appliance/",
    },
    {
        title: "کارت هدیه و گیفت کارت",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/f35b3eba7de8bf2432fff4f53abfa8cbaa6e71d6_1740299603.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/dk-ds-gift-card/",
    },
    {
        title: "خودرو و موتورسیکلت",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/03552aa1293fec9f43477814ca62afdacdac18e3_1740299496.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/vehicles-spare-parts/",
    },
    {
        title: "کالای خوراکی و اساسی",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/7adb0cc6edc18a6d04b9ba3bdd424b1bcce47848_1740299618.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "لوازم خانگی و برقی",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/d825f64f509cd5067a9022528c465e8ca705f60d_1740299511.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "اسباب بازی کودک و نوجوان",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/6f5284dccdb280616bbfe58533ecc483de4639af_1740299648.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "ابزار الات و تجهیزات",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/fb6303218362cd2c48b40fef5da89ad33a5c04d7_1740299524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "محصولات بومی و محلی",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/9a4dfac524f8a865f9f69e38d5434fa69fe63e3b_1740299663.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "مد و پوشاک",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/b3d4eaefebe67ab8d849296ea2e7e113cde8094c_1740299538.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "کالای کارکرده",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/29b1e4b2aa0e42aaa361228f8d0402910c949b14_1740299704.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
    {
        title: "طلاونقره",
        image:
            "https://dkstatics-public.digikala.com/digikala-mega-menu/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740299548.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/main/food-beverage/",
    },
];


export const MCategorySlider = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        checkScrollPosition();
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener("scroll", checkScrollPosition);
        }
        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener("scroll", checkScrollPosition);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <div className="container mx-auto px-40 relative">
            <div className="py-6">
                <h3 className="text-2xl font-bold text-center mb-6">
                    خرید بر اساس دسته‌بندی
                </h3>
                <div className="relative flex items-center">
                    {showLeftArrow && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                            </svg>
                        </button>
                    )}
                    <div ref={scrollContainerRef} className="overflow-x-hidden scroll-auto whitespace-nowrap grid grid-flow-col gap-3 grid-rows-2">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href={category.link}
                                className="flex flex-col items-center p-4 bg-white rounded-lg"
                            >
                                <div className="w-28 h-28 flex items-center justify-center">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="mt-3 text-center font-semibold text-gray-800 text-sm">
                                    {category.title}
                                </p>
                            </a>
                        ))}
                    </div>
                    {showRightArrow && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};