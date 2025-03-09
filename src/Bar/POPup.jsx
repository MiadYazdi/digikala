import "./Rollbar"
export const PopupModal = ({ categories, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            {/* پس‌زمینه تاریک برای پنجره */}
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-4 rounded shadow-lg z-10 max-h-full overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2">
                {/* Header شامل دکمه بستن در سمت چپ و لوگو در سمت راست */}
                <div className="flex justify-between items-center mb-4">
                    <div>خدمات دیجی‌کالا</div>
                    <button onClick={onClose} className="text-black text-xl font-bold">
                        &times;
                    </button>
                </div>
                <hr className="w-full border-t border-gray-300 my-2" />
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-3">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            className="flex flex-col items-center m-2"
                            href={category.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <div style={{ width: '52px', height: '52px', lineHeight: 0 }}>
                                <img
                                    className="w-full"
                                    src={category.src}
                                    width="52"
                                    height="52"
                                    alt={category.title}
                                    style={{ objectFit: 'contain' }}/>
                            </div>
                            <span className="text-center mt-1">{category.title}</span>
                        </a>
                    ))}
                </div>
                <div className="text-body1-strong text-neutral-500 mt-6">
                    سرویس‌های گروه دیجی‌کالا
                </div>
                <div className="gap-2 mt-2">
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                        {[
                            {
                                href: "/gold/?utm_source=dk&utm_medium=circlebadge&utm_campaign=launch&hideHeader=1",
                                imgSrc: "/imageroll/more/tala.png",
                                title: "طلای دیجیتال جایزه ۵۰ برابری",
                            },
                            {
                                href: "/landing/esfand1403-Boomi/",
                                imgSrc: "/imageroll/more/takhfif.png",
                                title: "تخفیف بومی محلی",
                            },
                            {
                                href: "/users/login/?backUrl=/",
                                imgSrc: "/imageroll/more/gest.png",
                                title: "۴ قسطه",
                                description: "خرید قسطی گوشی موبایل، لپ‌تاپ، طلا و لوازم خانگی",
                            },
                            {
                                href: "/landing/DKStore/",
                                imgSrc: "/imageroll/more/haraj.png",
                                title: "حراج فروشگاه حضوری",
                            },
                            {
                                href: "https://digikala-service.com/?utm_source=Digikala&utm_medium=services+badge&utm_id=5",
                                imgSrc: "/imageroll/more/service.png",
                                title: "دیجی کالا سرویس",
                                description: "گارانتی و خدمات پس از فروش دیجی‌کالا",
                            },
                            {
                                href: "https://www.digistyle.com/",
                                imgSrc: "/imageroll/more/style.jpg",
                                title: "دیجی‌استایل",
                                description: "فروشگاه آنلاین مد، پوشاک، لوازم ورزشی و سفر",
                            },
                            {
                                href: "https://www.digistyle.com/",
                                imgSrc: "/imageroll/more/bizines.png",
                                title: "دیجی کالا بیزنیس",
                                description: "خرید عمده و سازمانی انواع کالا",
                            },
                            {
                                href: "https://www.digistyle.com/",
                                imgSrc: "/imageroll/more/mehr.png",
                                title: "دیجی کالا مهر",
                                description: "به مسیر تازه مهربانی بیا",
                            },
                            {
                                href: "https://www.digistyle.com/",
                                imgSrc: "/imageroll/more/pindo.png",
                                title: "پیندو",
                                description: "ثبت آگهی برای کالا و خدمات",
                            },
                            {
                                href: "https://www.digistyle.com/",
                                imgSrc: "/imageroll/more/fidibo.png",
                                title: "فیدیبو",
                                description: "خرید کتاب و دانلود کتاب الکترونیک",
                            },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                className="flex items-start p-4 border rounded-lg hover:shadow-lg transition-all"
                            >
                                {/* تصویر در سمت راست */}
                                <div className="w-16 h-16 flex-shrink-0 border rounded-md bg-white overflow-hidden">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                {/* متن کنار تصویر با فاصله بیشتر */}
                                <div className="ml-6 flex flex-col justify-center">
                                    <p className="text-base font-semibold text-gray-800">{item.title}</p>
                                    {item.description && (
                                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
