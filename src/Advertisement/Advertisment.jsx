import React from "react";

const banners = [
    {
        href: "/landing/endofyear/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D9%87%D9%86%DA%A9%D9%84&promo_position=home_top&promo_creative=195002&bCode=195002",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/847c3d366bcb2d95db3a8d2c90df35ef1f7f2c46_1741444442.jpg?x-oss-process=image/quality,q_95/format,webp",
        alt: "پارتنرشیپ-لوکس-شامپو",
    },
    {
        href: "/landing/watch-offers-esfand/?&promo_name=%D8%B3%D8%A7%D8%B9%D8%AA&promo_position=home_top&promo_creative=195595&bCode=195595",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/d621cca09a2f665faa5db61117b755f47e71ce14_1741181263.jpg?x-oss-process=image/quality,q_95/format,webp",
        alt: "پارتنرشیپ-پینو بیبی",
    },
    {
        href: "/product-list/plp_254266878/?sort=7&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D8%B2%D8%B1%DB%8C%D9%86&promo_position=home_top&promo_creative=195467&bCode=195467",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/b1b74cdf93d2e54b55c9bca88af38126d15b4d99_1741444658.jpg?x-oss-process=image/quality,q_95",
        alt: "پارتنرشیپ-گلرنگ",
    },
    {
        href: "/landing/tarin-1403-he/?&promo_name=%D8%AA%D8%B1%DB%8C%D9%86%E2%80%8C%D9%87%D8%A7+%7C+he+%7C+1403&promo_position=home_top&promo_creative=195484&bCode=195484",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/0d79c239e542cc95a5b321c7ed9a1091d9c4ddc0_1741170055.jpg?x-oss-process=image/quality,q_95/format,webp",
        alt: "پارتنرشیپ-ایکس ویژن",
    },
];

export const Advertisment2 = () => {
    return (
        <div className="flex gap-4 px-40 py-4">
            {banners.map((banner, index) => (
                <a
                    key={index}
                    href={banner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/4 block relative"
                >
                    <div className="h-full rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={banner.src}
                            alt={banner.alt}
                            title={banner.alt}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};