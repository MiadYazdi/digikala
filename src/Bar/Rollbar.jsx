import React from 'react';
import { PopupModal } from "./POPup"
import { useState } from "react";

const categories = [
    {
        title: 'خرید خودرو',
        src: '/imageroll/kharid khodro.png',
        link: '/search/category-automobile/?has_selling_stock=1'
    },
    {
        title: 'موبایل کارکرده',
        src: '/imageroll/mobile karkarde.png',
        link: 'https://used.digikala.com/shop?utm_source=DKHP&utm_medium=CIRCLEBADGE&utm_campaign=SHOP-CIRCLEBADGE&utm_id=DK-CIRCLEBADGE-SHOP-110225'
    },
    {
        title: 'طلای دیجیتال',
        src: '/imageroll/talay digital.png',
        link: '/gold/?utm_source=dk&utm_medium=circlebadge&utm_campaign=launch&hideHeader=1'
    },
    {
        title: 'پس بده',
        src: '/imageroll/pasbedeh.jpg',
        link: '/landing/fashion-return-1403/'
    },
    {
        title: 'اشتراک پلاس',
        src: '/imageroll/eshterak plus.png',
        link: '/landing/NowroozPlus/'
    },
    {
        title: '۴ قسطه',
        src: '/imageroll/4gest.png',
        link: '/users/login/?backUrl=/'
    },
    {
        title: 'تخفیف بومی محلی',
        src: '/imageroll/takhfif bomi.png',
        link: '/landing/esfand1403-Boomi/'
    },
    {
        title: 'دیجی کالا سرویس',
        src: '/imageroll/digikala service.png',
        link: 'https://digikala-service.com/?utm_source=Digikala&utm_medium=services+badge&utm_id=5'
    },
    {
        title: 'حراج فروشگاه حضوری',
        src: '/imageroll/harag foroshgah.png',
        link: '/landing/DKStore/'
    }
];

const MoreButton = ({ onClick }) => (
    <div
        onClick={onClick}
        className="shrink-0 w-[80px] flex flex-col items-center user-select-none my-2 lg:my-0 cursor-pointer lg:w-35 w-1/8 px-3 lg:px-4 lg:w-[82px]"
    >
        <div className="bg-neutral-100 rounded-full flex justify-center items-center text-neutral-400 w-12 h-12">
            <span className="text-xl fill pb-3">...</span>
        </div>
        <span className="text-caption-strong text-neutral-700 mt-1">بیشتر</span>
    </div>
);

const CategoryLinks = () => {
    const [showModal, setShowModal] = useState(false);

    const handleMoreClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="w-full max-w-full lg:py-2 bg-neutral-000 lg:items-start flex flex-wrap lg:justify-around overflow-hidden container mx-auto px-4 lg:px-40 relative pt-3">
                {categories.map((category, index) => (
                    <a
                        key={index}
                        className="flex flex-col items-center user-select-none my-2 lg:my-0 w-[75px] shrink-0"
                        href={category.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <div style={{ width: '52px', height: '52px', lineHeight: 0 }}>
                            <img
                                className="w-full inline-block"
                                src={category.src}
                                width="52"
                                height="52"
                                alt={category.title}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className="text-caption-strong text-neutral-700 mt-1 text-center px-3 lg:px-4">{category.title}</span>
                    </a>
                ))}
                <MoreButton onClick={handleMoreClick} />
            </div>
            {showModal && <PopupModal categories={categories} onClose={handleCloseModal} />}
        </>
    );
};

export default CategoryLinks;
