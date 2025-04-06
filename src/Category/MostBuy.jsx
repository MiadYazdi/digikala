export const MostBuy = () => {
    const items = [
        {
            name: "هل سبز مصطفوی - 10 گرم",
            img: "https://dkstatics-public.digikala.com/digikala-products/111999050.png?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            link: "/brand/pril/",
        },
        {
            name: "پرسیل",
            img: "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png",
            link: "/brand-landing/persil/",
        },
        {
            name: "چرم مشهد",
            img: "https://dkstatics-public.digikala.com/digikala-brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.jpg",
            link: "/brand-landing/mashad-leather/",
        },
        {
            name: "هوآوی",
            img: "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png",
            link: "/brand-landing/huawei/",
        },
        {
            name: "Xvision",
            img: "https://dkstatics-public.digikala.com/digikala-brands/d23e8875d5f7a9735e433f1fd86a1513902efc8b_1604470597.jpg",
            link: "/brand-landing/xvision/",
        },
        {
            name: "Samsung",
            img: "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg",
            link: "/brand-landing/samsung/",
        },
        {
            name: "Xiaomi",
            img: "https://dkstatics-public.digikala.com/digikala-brands/2994.png",
            link: "/brand-landing/xiaomi/",
        },
        {
            name: "Eu Rho Vital",
            img: "https://dkstatics-public.digikala.com/digikala-brands/e44886020b773202d6d431e2fef2f3bd8bd3bc7f_1737817444.jpg",
            link: "/brand-landing/eu-rho-vital/",
        },
        {
            name: "Pamina",
            img: "https://dkstatics-public.digikala.com/digikala-brands/960dc4b74e21a9d33d594a161386179b26b3a68a_1606823783.png",
            link: "/brand-landing/pamina/",
        },
        {
            name: "Nike",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            link: "/brand-landing/nike/",
        },
        {
            name: "Adidas",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
            link: "/brand-landing/adidas/",
        },
        {
            name: "Puma",
            img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_Logo.svg",
            link: "/brand-landing/puma/",
        },
    ];

    return (
        <div className="container mx-auto px-4 lg:px-40 relative pt-3">
            <div className="w-full py-6 bg-white rounded-lg border border-gray-200 relative">
                <div className="flex justify-center items-center relative">
                    <p className="text-xl font-bold text-gray-900 text-center">
                        پرفروش‌ترین کالاها
                    </p>
                    <a
                        href="#"
                        className="absolute left-3 transform -translate-y-1/2 text-sm text-blue-400 hover:underline"
                    >
                        مشاهده همه
                    </a>
                </div>
                <div className="mt-3">
                    <div className="grid grid-cols-4 gap-9">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="flex bg-white rounded-lg p-2 pr-4"
                            >
                                <div className="flex">
                                    <div
                                        className="rounded shrink-0 ml-3"
                                        style={{ width: "86px", height: "86px", lineHeight: 0 }}
                                    >
                                        <picture>
                                            <source type="image/webp" srcSet={item.img} />
                                            <source type="image/jpeg" srcSet={item.img} />
                                            <img
                                                className="w-full inline-block"
                                                src={item.img}
                                                width="86"
                                                height="86"
                                                alt={item.name}
                                                title=""
                                                style={{ objectFit: "contain" }}
                                            />
                                        </picture>
                                    </div>
                                    <div className="flex flex-col justify-center ml-3">
                                        <span className="text-secondary-500 text-h2-extra flex items-center">
                                            {index + 1}
                                        </span>
                                        <p className="text-body-2 text-neutral-700 ellipsis-2 overflow-hidden">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
