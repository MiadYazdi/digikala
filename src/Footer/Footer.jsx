import React, { useState } from 'react';
export const Footer = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return(
        <div className="w-full bg-white border-t border-neutral-200 pt-8 mt-12 select-none lg:rounded-xl">
            <div className="container mx-auto">
                <div className="flex justify-between items-center select-none">
                    <img
                        className="h-10 mr-2"
                        src="https://www.digikala.com/brand/full-horizontal.svg"
                        width="195"
                        height="30"
                        alt="لوگوی دیجیکالا"
                    />
                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // برای اسکرول نرم به بالا
                            })
                        }
                        className="relative border rounded user-select-none text-button-2 rounded-medium flex justify-center items-center px-3 py-1 cursor-pointer"
                    >
                        <div className="flex items-center justify-center relative grow">
                            <span className="text-neutral-400 ml-2">بازگشت به بالا</span>
                            <div className="flex">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                        fill="#808080"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="mb-8 mt-4 mr-2 md:mt-3 md:mb-0 flex items-center flex-wrap lg:flex-nowrap text-body-2 text-neutral-700">
                    <p className="shrink-0 text-sm">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                    <div className="px-5 text-neutral-400 hidden md:block">|</div>
                    <p className="shrink-0">۰۲۱-۹۱۰۰۰۱۰۰</p>
                    <div className="px-5 text-neutral-400 hidden md:block">|</div>
                    <p className="w-full mt-1 md:mt-0">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </div>
                <div className="my-8 ml-2 items-center justify-between select-none hidden lg:flex">
                    <a className="flex py-3 flex-col items-center justify-between text-center grow">
                        <div className="w-20 h-20 ">
                            <img className="w-full inline-block" src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"/>
                        </div>
                        <p className="text-caption text-xs text-neutral-700">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
                    </a>
                    <a className="flex py-3 flex-col items-center justify-between text-center grow">
                        <div className="w-20 h-20">
                            <img className="w-full inline-block" src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" alt="امکان پرداخت در محل"/>
                        </div>
                        <p className="text-caption text-xs text-neutral-700">امکان پرداخت در محل</p>
                    </a>
                    <a className="flex py-3 flex-col items-center justify-between text-center grow">
                        <div className="w-20 h-20">
                            <img className="w-full inline-block" src="https://www.digikala.com/statics/img/svg/footer/support.svg" alt="۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"/>
                        </div>
                        <p className="text-caption text-xs text-neutral-700">۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
                    </a>
                    <a className="flex py-3 flex-col items-center justify-between text-center grow">
                        <div className="w-20 h-20">
                            <img className="w-full inline-block" src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" alt="هفت روز ضمانت بازگشت کالا"/>
                        </div>
                        <p className="text-caption text-xs text-neutral-700">هفت روز ضمانت بازگشت کالا</p>
                    </a>
                    <a className="flex py-3 flex-col items-center justify-between text-center grow">
                        <div className="w-20 h-20">
                            <img className="w-full inline-block" src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" alt="ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"/>
                        </div>
                        <p className="text-caption text-xs text-neutral-700">ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
                    </a>
                </div>
                <div className="flex flex-wrap w-full justify-between mb-8 mr-2">
                    <div className="block lg:grow w-1/4 lg:w-unset">
                        <p className="text-neutral-700 text-h5 mb-2 block font-bold">با دیجی‌کالا</p>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">اتاق خبر دیجی‌کالا</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">فروش در دیجی‌کالا</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">فرصت‌های شغلی</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">گزارش تخلف در دیجی‌کالا</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">تماس با دیجی‌کالا</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">درباره دیجی‌کالا</a>
                    </div>
                    <div className="block lg:grow w-1/4 lg:w-unset">
                        <p className="text-neutral-700 text-h5 mb-2 block font-bold">خدمات مشتریان</p>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">پاسخ به پرسش‌های متداول</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">رویه‌های بازگرداندن کالا</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">شرایط استفاده</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">حریم خصوصی</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">گزارش باگ</a>
                    </div>
                    <div className="block lg:grow w-1/4 lg:w-unset md:block">
                        <p className="text-neutral-700 text-h5 mb-2 block font-bold">راهنمای خرید از دیجی‌کالا</p>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">نحوه ثبت سفارش</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">رویه ارسال سفارش</a>
                        <a className="text-body-1 text-neutral-500 mb-2 block" href="#">شیوه‌های پرداخت</a>
                    </div>
                    <div className="w-1/4 lg:w-unset shrink-0">
                        <div className="w-full flex lg:block lg:flex-row justify-between items-start mt-8 sm:mt-0">
                            <p className="mb-3 text-h5 text-neutral-700 font-bold">همراه ما باشید!</p>
                            <div className="flex items-center">
                                <a className="ml-6 lg:ml-8" href="#">
                                    <div className="flex items-center justify-center">
                                        <svg
                                            className="w-14 h-14 mr-0 pr-0"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                                                stroke="#808080"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                                                stroke="#808080"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <rect
                                                x="15.5"
                                                y="9"
                                                width="2"
                                                height="2"
                                                rx="1"
                                                transform="rotate(-90 15.5 9)"
                                                fill="#808080"
                                            />
                                            <rect
                                                x="16"
                                                y="8.5"
                                                width="1"
                                                height="1"
                                                rx="0.5"
                                                transform="rotate(-90 16 8.5)"
                                                stroke="#808080"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <svg
                                            className="w-10 h-10 ml-10 mr-8"
                                            fill="#808080"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 512 512"
                                            stroke="#808080"
                                        >
                                            <path
                                                d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47
                                                c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886
                                                c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318
                                                c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7
                                                c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832
                                                c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002
                                                c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"
                                            />
                                        </svg>
                                        <svg
                                            viewBox="-143 145 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current text-gray-500 w-8 h-8 ml-10"
                                        >
                                            <g strokeWidth="0"></g>
                                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g>
                                                <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
                                            </g>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current text-gray-500 w-8 h-8"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M12.001 1.594c-9.27-.003-13.913 11.203-7.36 17.758a10.403 10.403 0 0 0 17.76-7.355c0-5.744-4.655-10.401-10.4-10.403zM6.11 6.783c.501-2.598 3.893-3.294 5.376-1.103 1.483 2.19-.422 5.082-3.02 4.582A2.97 2.97 0 0 1 6.11 6.783zm4.322 8.988c-.504 2.597-3.897 3.288-5.377 1.096-1.48-2.192.427-5.08 3.025-4.579a2.97 2.97 0 0 1 2.352 3.483zm1.26-2.405c-1.152-.223-1.462-1.727-.491-2.387.97-.66 2.256.18 2.04 1.334a1.32 1.32 0 0 1-1.548 1.053zm6.198 3.838c-.501 2.598-3.893 3.293-5.376 1.103-1.484-2.191.421-5.082 3.02-4.583a2.97 2.97 0 0 1 2.356 3.48zm-1.967-5.502c-2.598-.501-3.293-3.896-1.102-5.38 2.19-1.483 5.081.422 4.582 3.02a2.97 2.97 0 0 1-3.48 2.36zM13.59 23.264l2.264.61a3.715 3.715 0 0 0 4.543-2.636l.64-2.402a11.383 11.383 0 0 1-7.448 4.428zm7.643-19.665L18.87 2.97a11.376 11.376 0 0 1 4.354 7.62l.65-2.459A3.715 3.715 0 0 0 21.231 3.6zM.672 13.809l-.541 2.04a3.715 3.715 0 0 0 2.636 4.543l2.107.562a11.38 11.38 0 0 1-4.203-7.145zM10.357.702 8.15.126a3.715 3.715 0 0 0-4.547 2.637l-.551 2.082A11.376 11.376 0 0 1 10.358.702z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start pl-6 mt-6 sm:mt-8">
                            <p className="hidden md:block text-base font-bold text-neutral-700 mb-3">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
                            <div className="w-full flex items-center">
                                <form className="w-full flex">
                                    <label className="grow w-full">
                                        <div className="flex items-center bg-white rounded-md">
                                            <div className="grow text-body-3">
                                                <input className="px-2 text-subtitle w-full h-10 rounded-md bg-gray-300 placeholder-gray-600" type="email" name="email" placeholder="ایمیل شما"/>
                                            </div>
                                        </div>
                                    </label>
                                    <button className="relative p-2 flex items-center border rounded-lg pointer-events-auto text-white mr-2 bg-red-500">
                                        <div className="flex items-center justify-center relative grow">ثبت</div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mb-7 lg:px-5 border rounded-lg bg-blue-900 text-white select-none py-2 items-center justify-between">
                    <div className="shrink-0 w-14 h-14">
                        <div className="flex">
                                <source type="image/webp" src="https://www.digikala.com/statics/img/png/footerlogo2.webp" />
                                <source type="image/jpeg" src="https://www.digikala.com/statics/img/png/footerlogo2.png" />
                                <img
                                    className="w-full inline-block"
                                    src="https://www.digikala.com/statics/img/png/footerlogo2.png"
                                    alt="دیجی‌کالا"
                                    title=""
                                    style={{ objectFit: 'cover' }}
                                />
                            <div className="text-xl shrink-0 pt-3 mr-4"> دانلود اپلیکیشن دیجی‌کالا</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end grow">
                        <a className="m-2" title="دریافت از کافه‌بازار" target="_blank" rel="noopener noreferrer" href="#">
                            <div className="h-10">
                                <img
                                    className="w-full h-10"
                                    src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg"
                                    alt="دریافت از کافه‌بازار"
                                />
                            </div>
                        </a>
                        <a className="m-2" title="دریافت از مایکت" target="_blank" rel="noopener noreferrer" href="#">
                            <div className="h-10">
                                <img
                                    className="w-full h-10"
                                    src="https://www.digikala.com/statics/img/svg/appStores/myket.svg"
                                    alt="دریافت از مایکت"
                                />
                            </div>
                        </a>
                        <a className="m-2" title="دریافت از سیب‌اپ" target="_blank" rel="noopener noreferrer" href="#">
                            <div className="h-10">
                                <img
                                    className="w-full h-10"
                                    src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg"
                                    alt="دریافت از سیب‌اپ"
                                />
                            </div>
                        </a>
                        <a className="hidden mr-4 lg:block" title="بیشتر" target="_blank" rel="noopener noreferrer" href="#">
                            <div className="bg-white h-10 w-10 rounded-md">
                                <img
                                    className="w-full inline-block"
                                    src="https://www.digikala.com/statics/img/svg/More.svg"
                                    alt="بیشتر"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex items-start justify-between border-t py-8 border-n-200 flex-wrap lg:flex-nowrap">
                   <div className="grow">
                       <div className="relative seo lg:ml-10 ml-0 text-neutral-500 text-body-2">
                           {/* با تغییر وضعیت isExpanded کلاس max-h تغییر می‌کند */}
                           <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-20'}`}>
                               <p className="text-xl font-bold">
                                   دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران
                               </p>
                               <p className="text-sm">
                                   دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.
                               </p>
                               <p className="text-xl font-bold">
                                   ویژگی های مهم دیجی کالا
                               </p>
                               <p>
                                   یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر محصولات است. این فروشگاه اینترنتی طیف وسیعی از کالاها را در دسته‌های مختلف از جمله لوازم دیجیتال، لوازم خانگی، مد و پوشاک، لوازم آرایشی و بهداشتی، محصولات سلامت و زیبایی، و بسیاری از محصولات دیگر ارائه می‌دهد. به عنوان مثال، اگر به دنبال خرید یک گوشی موبایل جدید باشید، دیجی کالا مجموعه‌ای از بهترین گوشی‌ها از برندهای معتبر اپل و سامسونگ مانند ایفون 16، گوشی S25، گوشی‌های مختلف از برند شیائومی مانند شیائومی نوت ۱۴ و بسیاری از برندهای دیگر را در اختیار شما قرار می‌دهد. همچنین برای علاقه‌مندان به لوازم دیجیتال، این فروشگاه اینترنتی انواع لپ تاپ، تلویزیون، اسپیکر و هندزفری بلوتوثی با کیفیت بالا را برای خرید آنلاین ارائه می‌دهد. دیجی کالا، مقصدی بی‌پایان برای خرید آسان، سریع و مطمئن است. راهی که هر آنچه نیاز دارید از قیمت لپ تاپ تا یک ایرپاد مطمئن را در اختیار شما قرار می‌دهد.
                               </p>
                               <p className="text-xl font-bold">
                                   ارسال سریع و مطمئن کالا
                               </p>
                               <p>
                                   یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش ارسال مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به صورت ارسال امروز، ارسال سریع توسط پیک‌های دیجی کالا، از جمله روش‌های خرید سریع از این فروشگاه اینترنتی است. این امکانات باعث می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن دریافت کنند. علاوه بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت یا هر دلیل دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت کالا را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید آنلاین از فروشگاه اینترنتی دیجی کالا شده است.
                               </p>
                               <p className="text-xl font-bold">
                                   تخفیف های ویژه و جشنواره ها
                               </p>
                               <p>
                                   دیجی کالا به طور منظم جشنواره‌ها و تخفیف‌های ویژه‌ای را برگزار می‌کند که برای مشتریان فرصت خرید کالاهای باکیفیت با قیمت‌های مناسب به همراه خواهد داشت. این تخفیف‌ها در ایام خاص مانند بلک فرایدی یا همان حراج جمعه سیاه و جشنواره‌های تابستانی توجه بسیاری از خریداران را جلب می‌کند. در این جشنواره‌ها، دیجی کالا تخفیف‌های عالی روی محصولات مختلف از جمله گوشی‌های موبایل، لپ تاپ‌ها، تلویزیون‌ها، و حتی محصولات زیبایی ارائه می‌دهد. می‌توانید گوشی ایفون 16 یا گوشی S25 را با تخفیف‌های ویژه خریداری کنید و از قیمت مناسب بهره‌مند شوید. دیجی کالا فراتر از یک فروشگاه اینترنتی، یک تجربه خرید مطمئن در بین کاربران مختلف بوده است که با ارائه بزرگ‌ترین تنوع کالا، قیمت‌های مختلف و خدماتی بی‌نقص، به مقصد اول خریداران آنلاین در ایران تبدیل شده است.
                               </p>
                               <p className="text-xl font-bold">
                                   انواع محصولات فروشگاه دیجی کالا
                               </p>
                               <p>
                                   دیجی کالا دارای محصولات متنوعی در گروه‌های مختلف است که خرید آنها بسیار راحت و سریع است. به عنوان مثال، اگر به دنبال قاب گوشی یا هندزفری بلوتوثی باشید، می‌توانید مدل‌های مختلف و برندهای گوناگونی را در این فروشگاه پیدا کنید.
                               </p>
                               <p className="text-xl font-bold">
                                   موبایل و کالای دیجیتال
                               </p>
                               <p>
                                   دیجی‌کالا انواع گوشی‌های هوشمند از برندهای معتبر جهانی مانند سامسونگ، اپل، شیائومی و هواوی را با مشخصات و قیمت‌های متنوع عرضه می‌کند. علاوه بر موبایل، دیجی‌کالا مجموعه‌ای از لوازم جانبی مانند هدفون، هندزفری، ساعت‌های هوشمند، تبلت‌ها و لپ تاپ را نیز در اختیار مشتریان قرار می‌دهد. با امکان مقایسه محصولات، مطالعه نظرات کاربران و دسترسی به جدیدترین مدل‌ها، دیجی‌کالا به یکی از مقاصد اصلی خرید آنلاین در حوزه موبایل و کالای دیجیتال تبدیل شده است. از دهه گذشته همواره دیجی کالا به عنوان اولین گزینه برای خرید گوشی های سامسونگ، آیفون های اپل و گوشی شیائومی محسوب می‌شده است و تا امروز هم در عرضه این موبایل های محبوب به بازار، دیجی‌کالا اولین فروشگاه آنلاین بوده است.
                               </p>
                               <p className="text-xl font-bold">
                                   کتاب و لوازم تحریر
                               </p>
                               <p>
                                   کتاب، لوازم تحریر و هنر در دیجی کالا یک مجموعه بی‌نظیر از محصولات فرهنگی و هنری است که به علاقه‌مندان به کتابخوانی، هنر و نوشتن کمک می‌کند تا دنیای خود را گسترش دهند. از کتاب‌های چاپی و کتاب‌های صوتی گرفته تا مجلات خارجی و داخلی و آثار معروف‌ترین نویسندگان مثل سعدی، حافظ، مولانا و فروغ فرخزاد، تمامی نیازهای کتابخوان‌ها را پوشش می‌دهد. همچنین با مجموعه‌ای از لوازم تحریر، ابزار نقاشی و رنگ‌آمیزی، آلبوم‌های عکس و فرش‌های دستبافت، به شما این امکان را می‌دهد تا دنیای هنر و خلاقیت خود را به بهترین نحو پرورش دهید.
                               </p>
                               <p className="text-xl font-bold">
                                   لوازم آرایشی و بهداشتی
                               </p>
                               <p>
                                   در دسته محصولات آرایشی و بهداشتی، دیجی کالا مجموعه‌ای از بهترین و پرطرفدارترین برندهای جهانی را در اختیار کاربران قرار می‌دهد. محصولات متنوعی همچون مرطوب كننده‌ها، كرم پودر، ضدآفتاب، ريمل و رژلب از برندهایی مانند لورال، کلینیک و میبلین در دیجی کالا موجود هستند که برای هر سلیقه و نیاز قابل انتخاب هستند. علاوه بر این، شما می‌توانید محصولات مراقبت از پوست و مو مانند شامپو، کرم‌های ضد چروک و ماسک صورت را در این فروشگاه بیابید و خرید آنلاین خود را به راحتی انجام دهید. دیجی کالا، بزرگ‌ترین و معتبرترین فروشگاه آنلاین لوازم آرایشی ایران، جایی که تنوع، کیفیت و اطمینان در خرید یکجا جمع شده‌اند.
                               </p>
                           </div>
                           <span
                               onClick={() => setIsExpanded(!isExpanded)}
                               className="cursor-pointer text-button-2 flex mt-2 items-center user-select-none text-blue-400"
                           >
                               {isExpanded ? "مشاهده کمتر>" : "مشاهده بیشتر>"}</span>
                       </div>
                   </div>
                   <div className="w-full flex items-center mt-4 lg:mt-0 justify-center lg:justify-end">
                       <a className="cursor-pointer p-2 lg:p-4 flex items-center justify-center border rounded-lg mr-2" target="_blank" href="https://sapra.ir/">
                           <div className="w-16 h-16">
                               <picture>
                                   <source type="image/webp" src="https://www.digikala.com/statics/img/png/sapra.webp"/>
                                   <source type="image/jpeg" src="https://www.digikala.com/statics/img/png/sapra.png/"/>
                                   <img className="w-14 inline-block"
                                        src="https://www.digikala.com/statics/img/png/sapra.png"
                                        alt="سامانه پایش مردمی رسانه‌های صوت و تصویر"/>
                               </picture>
                           </div>
                       </a>
                       <div className="cursor-pointer p-2 lg:p-4 flex items-center justify-center border rounded-lg mr-2">
                           <div className="w-16 h-16">
                               <picture>
                                   <source type="image/webp" src="https://www.digikala.com/statics/img/png/rezi.webp"/>
                                   <source type="image/jpeg" src="https://www.digikala.com/statics/img/png/rezi.png"/>
                                   <img className="w-full inline-block"
                                        src="https://www.digikala.com/statics/img/png/rezi.png"
                                        alt="نشان ملی ثبت"/>
                               </picture>
                           </div>
                       </div>
                       <div className="cursor-pointer p-2 lg:p-4 flex items-center justify-center border rounded-lg mr-2">
                           <div className="w-16 h-16">
                               <picture>
                                   <source type="image/webp" src="https://www.digikala.com/statics/img/png/kasbokar.webp"/>
                                   <source type="image/jpeg" src="https://www.digikala.com/statics/img/png/kasbokar.png"/>
                                   <img className="w-14 h-16inline-block"
                                        src="https://www.digikala.com/statics/img/png/kasbokar.png"
                                        alt="نشان ملی ثبت"/>
                               </picture>
                           </div>
                       </div>
                       <a className="cursor-pointer p-2 lg:p-4 flex items-center justify-center border rounded-lg mr-2" target="_blank" href="https://trustseal.enamad.ir/?id=19077&Code=sScdOJOzhFxtcEqkjP7P">
                           <div className="w-16 h-16">
                               <img className="w-full inline-block" src="https://trustseal.enamad.ir/logo.aspx?id=19077&Code=sScdOJOzhFxtcEqkjP7P" alt="نماد اعتماد الکترونیک"/>
                           </div>
                       </a>
                   </div>
                </div>
                <div className="flex text-sm text-caption text-neutral-500 text-center items-center flex-col justify-between border-t py-8">
                    برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
                </div>
            </div>
            <div className="w-full bg-neutral-100 relative z-[999]">
                <div className="container mx-auto flex items-center justify-end flex-wrap">
                    <a className="border-l border-b px-5 py-4 pt-6 items-center grow flex flex-col justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digimag.svg" alt="مجله اینترنتی دیجی‌کالا مگ"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digipay.svg" alt="بهترین راهکارهای پرداخت آنلاین"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digistyle.svg" alt="خرید آنلاین مد و لباس از فروشگاه اینترنتی دیجی‌استایل با همان تجربه از دیجی‌کالا"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digiplus.svg" alt="خدمات ویژه دیجی‌کالا برای کاربران با اشتراک پلاس"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digiclub.svg" alt="دیجی کلاب باشگاه مشتریان دیجیکالا"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/jet.svg" alt="خرید آنی سوپرمارکتی از فروشگاه های نزدیک"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digiMehr.svg" alt="دیجیکالا مهر - زنجیره مهربانی و لبخند"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/diginext.svg" alt="مرکز نوآوری و فناوری گروه دیجی‌کالا"/>
                        </div>
                    </a>
                    <a className="border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digiexpress.svg" alt="سیستم حمل و نقل دیجی‌کالا"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/ganjeh.svg" alt="گنجه"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digify.svg" alt="دیجی‌فای"/>
                        </div>
                    </a>
                    <a className="border-l border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digikala-business.svg" alt="دیجی‌کالا بیزینس"/>
                        </div>
                    </a>
                    <a className="border-b px-5 py-4 pt-6 grow flex flex-col items-center justify-center" target="_blank" href="#">
                        <div className="h-10">
                            <img className="w-full inline-block h-6" src="https://www.digikala.com/statics/img/svg/footer/digikala-service.svg" alt="دیجی‌کالا سرویس"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};