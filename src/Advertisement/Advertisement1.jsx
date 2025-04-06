import React from "react";

const banners = [
    {
        href: "/landing/endofyear/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D9%87%D9%86%DA%A9%D9%84&promo_position=home_top&promo_creative=195002&bCode=195002",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/7a4824f56ee60743bbd764f4be14de98296bf9aa_1740981418.gif?x-oss-process=image",
        alt: "پارتنرشیپ-هنکل",
    },
    {
        href: "/landing/watch-offers-esfand/?&promo_name=%D8%B3%D8%A7%D8%B9%D8%AA&promo_position=home_top&promo_creative=195595&bCode=195595",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/7898ca59d12b13a917903175a1f4efece649947d_1741705802.jpg?x-oss-process=image/quality,q_95",
        alt: "ساعت",
    },
    {
        href: "/product-list/plp_254266878/?sort=7&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D8%B2%D8%B1%DB%8C%D9%86&promo_position=home_top&promo_creative=195467&bCode=195467",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/4d9cf560cb98e5a8e22dc99e36c4edef7d1440f0_1741767412.jpg?x-oss-process=image/quality,q_95",
        alt: "پارتنرشیپ-زرین",
    },
    {
        href: "/landing/tarin-1403-he/?&promo_name=%D8%AA%D8%B1%DB%8C%D9%86%E2%80%8C%D9%87%D8%A7+%7C+he+%7C+1403&promo_position=home_top&promo_creative=195484&bCode=195484",
        src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/7c19e2b2f849952e48d69eaf1ee7c1dc37511941_1741515448.jpg?x-oss-process=image/quality,q_95",
        alt: "ترین‌ها | he | 1403",
    },
];

export const Advertisement = () => {
    return (
        <div className="flex gap-4 py-4 container mx-auto px-4 lg:px-40 relative pt-3">
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


