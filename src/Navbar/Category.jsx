import { useState, useEffect } from "react";

export function Category() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let prevScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // اگر کاربر در نزدیکی انتهای صفحه است (مثلاً 50px فاصله)
            if (window.innerHeight + currentScrollY >= document.body.offsetHeight - 50) {
                setVisible(true);
            } else {
                // اگر به سمت پایین اسکرول می‌کند، مخفی شود؛ اگر به سمت بالا اسکرول می‌کند، ظاهر شود
                if (currentScrollY > prevScrollY) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            }
            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`flex w-full max-w-full mx-auto justify-between md:px-4 transition-all duration-300 border-b border-gray-400 shadow-md ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* دسته‌بندی‌ها */}
            <div className="flex flex-wrap gap-2 px-28">
                <button className="flex items-center px-2 py-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-7 fill-gray-600 text-neutral-700"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                    <p className="text-sm pr-1 hover:text-blue-600">دسته بندی کالاها</p>
                    <span className="relative min-w-px min-h-5 bg-neutral-200 transform mr-2 mt-1"></span>
                </button>
                <div className="flex items-center px-0 py-1">
                    <button className="text-sm text-neutral-700 hover:text-blue-600">
                        شگفت انگیزها
                    </button>
                </div>
                <div className="flex items-center px-2 py-1">
                    <button className="text-sm text-neutral-700 hover:text-blue-600">
                        سوپرمارکت
                    </button>
                </div>
                <div className="flex items-center px-2 py-1">
                    <button className="text-sm text-neutral-700 hover:text-blue-600">
                        پرفروش‌ترین‌ها
                    </button>
                </div>
                <div className="flex items-center px-2 py-1">
                    <button className="text-sm text-neutral-700 hover:text-blue-600">
                        خرید کالای کارکرده
                    </button>
                </div>
                <div className="flex items-center px-2 py-1">
                    <button className="text-sm text-neutral-700 hover:text-blue-600">
                        طلای دیجیتال
                    </button>
                </div>
            </div>
            {/* موقعیت */}
            <div className="flex pb-1 items-center text-neutral-700 cursor-pointer px-32 mt-2 pt-2 lg:mt-0 lg:pt-0">
                <div className="px-3 py-1 flex items-center justify-between gap-2 rounded-full cursor-pointer bg-orange-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="h-6 fill-orange-400"
                    >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <p className="text-sm">شهر خود را انتخاب کنید</p>
                </div>
            </div>
        </div>
    );
}
