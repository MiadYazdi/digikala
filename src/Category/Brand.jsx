import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { useRef } from "react";

const brands = [
    {
        name: "پریل",
        img: "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png",
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
];

export default function PopularBrands() {
    const swiperRef = useRef(null);

    return (
        <div className="container mx-auto px-4 lg:px-40 relative">
            <div className="w-full py-6 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-center items-center">
                    <p className="text-xl font-bold text-gray-900 ml-2">محبوب‌ترین برندها</p>
                </div>
                <div className="mt-3 overflow-hidden w-full relative">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={8}
                        spaceBetween={0}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        navigation // استفاده از ناوبری داخلی
                        className="mySwiper"
                    >
                        {brands.map((brand, index) => (
                            <SwiperSlide key={index} className="w-auto h-auto">
                                <a
                                    href={brand.link}
                                    className={`px-4 py-1 overflow-hidden flex items-center justify-center h-full shrink-0 
                                    ${index !== brands.length + 1 ? "border-r border-gray-300" : ""}`} // فقط بین برندها خط عمودی
                                >
                                    <img
                                        src={brand.img}
                                        alt={brand.name}
                                        className="w-[110px] h-[110px] object-contain"
                                    />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
