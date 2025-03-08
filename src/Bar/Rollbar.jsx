import React from 'react';

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
        src: 'imageroll/pas bedeh.jpg',
        link: '/landing/fashion-return-1403/'
    },
    {
        title: 'اشتراک پلاس',
        src: 'imageroll/eshterak plus.png',
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

const MoreButton = () => (
    <div className="shrink-0 w-[80px] flex flex-col items-center user-select-none my-2 lg:my-0 cursor-pointer lg:w-35 w-1/8 px-3 lg:px-4 lg:w-[82px]">
        <div className="bg-neutral-100 rounded-full flex justify-center items-center text-neutral-400 w-12 h-12">
            <span className="text-xl fill pb-3 ">...</span>
        </div>
        <span className="text-caption-strong text-neutral-700 mt-1">بیشتر</span>
    </div>
);

const CategoryLinks = () => {
    return (
        <div className="w-full lg:py-2 bg-neutral-000 lg:items-start flex-wrap lg:justify-around flex overflow-x-auto flex-nowrap overflow-y-hidden hide-scrollbar">
            {categories.map((category, index) => (
                <a
                    key={index}
                    className="flex flex-col items-center user-select-none my-2 lg:my-0 lg:w-35 w-1/8 shrink-0 lg:!w-[82px] w-[75px]"
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
            <MoreButton />
        </div>
    );
};

export default CategoryLinks;
