import {UserNav} from "../Navbar/UserNav";
import {Category} from "../Navbar/Category";
import {Footer} from "../Footer/Footer";
import React, {useEffect, useRef, useState} from 'react';
import {createPopper} from '@popperjs/core';
import {ChevronLeft, Truck, Clock, Star} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

const Tooltip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            style={{overflow: 'visible'}} // اطمینان از اینکه Tooltip قطع نمی‌شود
        >
            {children}
            {isVisible && (
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 text-body-2 bg-gray-800 text-white text-xs rounded-lg px-4 py-2 whitespace-nowrap max-w-lg"
                    style={{
                        position: 'absolute',
                        inset: '0px 0px auto auto',
                        transform: 'translate(-30px, -5px)', // تغییرات اینجا برای پایین‌تر آوردن متن
                        opacity: 1,
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

const images = [
    {
        src: "https://dkstatics-public.digikala.com/digikala-products/0e98a8bb597df6fc89b3895e1964551c0f81dada_1668586136.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        alt: "کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04",
        hasVideoIcon: true,
    },
    {
        src: "https://dkstatics-public.digikala.com/digikala-products/0e98a8bb597df6fc89b3895e1964551c0f81dada_1668586136.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
        src: "https://dkstatics-public.digikala.com/digikala-products/629a27c8d7c2d6efab992656492e9e61aff9c52a_1668586137.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
        src: "https://dkstatics-public.digikala.com/digikala-products/c57b90db251d047b37b94f7721ee92db09027806_1668586139.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
        src: "https://dkstatics-public.digikala.com/digikala-products/9dc0bd54749f6ce863bd7bc655dfdc6f0025cfc9_1668586140.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    },
    {
        src: "https://dkstatics-public.digikala.com/digikala-products/672a86648961a94687caa4220e4c050b046bfbad_1718193778.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        hasMoreIcon: true,
    },
];

const features = [
    {
        title: "امکان تحویل اکسپرس",
        icon: "https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg",
        link: "/faq/question/79/",
    },
    {
        title: "۲۴ ساعته، ۷ روز هفته",
        icon: "https://www.digikala.com/statics/img/svg/infosection/support.svg",
        link: "/faq/question/80/",
    },
    {
        title: "امکان پرداخت در محل",
        icon: "https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg",
        link: "/faq/question/81/",
    },
    {
        title: "هفت روز ضمانت بازگشت کالا",
        icon: "https://www.digikala.com/statics/img/svg/infosection/days-return.svg",
        link: "/faq/question/83/",
    },
    {
        title: "ضمانت اصل بودن کالا",
        icon: "https://www.digikala.com/statics/img/svg/infosection/original-products.svg",
        link: "/faq/question/82/",
    },
];


export const Cream = () => {
    const stats = [
        {
            icon: 'https://dkstatics-public.digikala.com/digikala-static/54419b9303246cde131fcb5b251b86f2ab4aeb71_1716833765.svg',
            text: '۱۰۰۰+ فروش در هفته گذشته',
            color: 'rgb(16, 126, 24)',
            alt: 'sales'
        },
        {
            icon: 'https://dkstatics-public.digikala.com/digikala-static/b0d6bb54a0077253781cdce04f9e16a34edc5299_1716833794.svg',
            text: 'در سبد خرید ۱۰۰۰+ نفر',
            color: 'rgb(0, 126, 148)',
            alt: 'cart'
        },
        {
            icon: 'https://dkstatics-public.digikala.com/digikala-static/0e6f8a5cd47918608fecad3cd61d3a584a32d47b_1716833780.svg',
            text: '۱۰۰۰+ بازدید در ۲۴ ساعت اخیر',
            color: 'rgb(0, 126, 148)',
            alt: 'views'
        },
        {
            icon: 'https://dkstatics-public.digikala.com/digikala-static/54419b9303246cde131fcb5b251b86f2ab4aeb71_1716833765.svg',
            text: '۱۰۰۰+ فروش در هفته گذشته',
            color: 'rgb(16, 126, 24)',
            alt: 'sales-repeat'
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % stats.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [stats.length]);

    const current = stats[index];

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const referenceRef1 = useRef(null);
    const referenceRef2 = useRef(null);
    const referenceRef3 = useRef(null);

    const popperRef1 = useRef(null);
    const popperRef2 = useRef(null);
    const popperRef3 = useRef(null);

    const popperInstance1 = useRef(null);
    const popperInstance2 = useRef(null);
    const popperInstance3 = useRef(null);

    // ایجاد popper ها
    useEffect(() => {
        if (visible1 && referenceRef1.current && popperRef1.current) {
            popperInstance1.current = createPopper(referenceRef1.current, popperRef1.current, {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10],
                        },
                    },
                ],
            });
        }
        return () => {
            if (popperInstance1.current) {
                popperInstance1.current.destroy();
                popperInstance1.current = null;
            }
        };
    }, [visible1]);

    useEffect(() => {
        if (visible2 && referenceRef2.current && popperRef2.current) {
            popperInstance2.current = createPopper(referenceRef2.current, popperRef2.current, {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10],
                        },
                    },
                ],
            });
        }
        return () => {
            if (popperInstance2.current) {
                popperInstance2.current.destroy();
                popperInstance2.current = null;
            }
        };
    }, [visible2]);

    useEffect(() => {
        if (visible3 && referenceRef3.current && popperRef3.current) {
            popperInstance3.current = createPopper(referenceRef3.current, popperRef3.current, {
                placement: 'right-start',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10],
                        },
                    },
                ],
            });
        }
        return () => {
            if (popperInstance3.current) {
                popperInstance3.current.destroy();
                popperInstance3.current = null;
            }
        };
    }, [visible3]);

    const sliderRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScroll = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        setIsAtStart(slider.scrollLeft === 0);
        setIsAtEnd(Math.ceil(slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth);
    };

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.addEventListener('scroll', checkScroll);
        checkScroll(); // برای بار اول هم چک کنه

        return () => {
            slider.removeEventListener('scroll', checkScroll);
        };
    }, []);

    const [activeTab, setActiveTab] = useState(0);

// تابع کلیک روی تب
    const handleTabClick = (tabIndex, sectionId) => {
        setActiveTab(tabIndex);

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 200;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const introductionRef = useRef(null);
    const expertReviewRef = useRef(null);
    const specificationsRef = useRef(null);
    const commentsRef = useRef(null);
    const questionsRef = useRef(null);

    const sectionRefs = [
        { ref: introductionRef, index: 0 },
        { ref: expertReviewRef, index: 1 },
        { ref: specificationsRef, index: 2 },
        { ref: commentsRef, index: 3 },
        { ref: questionsRef, index: 4 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const found = sectionRefs.find((section) => section.ref.current === entry.target);
                        if (found) {
                            setActiveTab(found.index);
                        }
                    }
                });
            },
            {
                rootMargin: "-100px 0px -70% 0px",
                threshold: 0.1,
            }
        );

        sectionRefs.forEach(({ ref }) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sectionRefs.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const [expandedSections, setExpandedSections] = useState({
        introduction: false,
        expertReview: false,
        specifications: false,
        comments:false,
        questions:false,
    });

    const specifications = {
        "کشور تولیدکننده": "ایران",
        "ناحیه استفاده": "دست و صورت",
        "نوع کرم": "مرطوب کننده",
        "زمان استفاده": "روز و شب",
        "نوع رایحه": "بدون رایحه",
        "حجم": "۷۵ میلی‌لیتر",
        "وزن": "۷۵ گرم",
        "کشور مبدا برند": "ایران",
        "شماره مجوز": "۵۶/۲۰۱۸۰",
        "نوع عصاره": "پنیرک و آلوئه‌ورا",
        "مشخصات محصول": "ضد التهاب",
        "سازگار با پوست‌‌های": "حساس",
        "جنس محفظه": "پلاستیک",
        "ترکیبات": "روغن های طبیعی",
        "نوع محفظه": "تیوبی",
        "صادر کننده مجوز": "سازمان غذا و دارو",
        "ویتامین‌ها و مواد معدنی موجود": ["E", "C"]
    };

    const entries = Object.entries(specifications);
    const previewCount = 5;
    const showAll = expandedSections.specifications;
    const displayedSpecs = showAll ? entries : entries.slice(0, previewCount);

    const toggleExpand = (sectionId) => {
        setExpandedSections((prev) => ({
            ...prev,
            [sectionId]: !prev[sectionId],
        }));
    };

    const [areMediaVisible, setAreMediaVisible] = useState(false);  // تغییر نام از showAll به areMediaVisible

    // تعریف متغیر media که حاوی اطلاعات ویدیوها و تصاویر است.
    const media = [
        { id: 1, url: "/film/film1.mp4", type: "video", title: "ویدیو 1", link: "https://www.digikala.com/product/dkp-1234567" },
        { id: 2, url: "https://dkstatics-public.digikala.com/digikala-comment-files/eb8f40a4636486fd0f197c209e35a44386c14396_1612982464.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80", type: "image", title: "تصویر 1", link: "https://www.digikala.com/product/dkp-1234572" },
        { id: 3, url: "https://dkstatics-public.digikala.com/digikala-comment-files/3c123606262f9f88999ff57b4d35937248c753a0_1627671523.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80", type: "image", title: "تصویر 2", link: "https://www.digikala.com/product/dkp-1234573" },
        { id: 4, url: "https://dkstatics-public.digikala.com/digikala-comment-files/3c123606262f9f88999ff57b4d35937248c753a0_1627671523.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80", type: "image", title: "تصویر 3", link: "https://www.digikala.com/product/dkp-1234574" },
        { id: 5, url: "https://dkstatics-public.digikala.com/digikala-comment-files/0fc4c823140534896e15096718c4f618fb01952c_1727477195.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80", type: "image", title: "تصویر 4", link: "https://www.digikala.com/product/dkp-1234575" },
        { id: 6, url: "https://dkstatics-public.digikala.com/digikala-comment-files/91640e6e0f3dbb2a93da5f5a1ce386a13f9ff979_1736947257.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80", type: "image", title: "تصویر 5", link: "https://www.digikala.com/product/dkp-1234576" },
        { id: 7, url: "https://digikala.arvanvod.ir/kGp7mgrY8V/92aLPMxd04/thumbnail.png?x-oss-process=image/resize,m_fill,h_115,w_115", type: "video", title: "ویدیو 2", link: "https://www.digikala.com/product/dkp-1234568" },
    ];


    return (
        <div className="bg-white w-full h-full flex flex-col" dir="rtl">
            <div className="fixed top-0 left-0 right-0 z-50 w-full h-22 bg-white flex flex-col">
                <UserNav/>
                <Category/>
            </div>
            <div className="lg:px-5 m-36">
                <div className="flex flex-wrap items-center lg:mb-5">
                    <nav className="py-2 px-5 lg:px-0 grow min-w-0">
                        <div>
                            <div className="relative overflow-hidden flex rtl flex-row">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide swiper-slide-active text-sm">
                                        <a className="text-neutral-500 shrink-0" href="/">دیجی‌کالا
                                            <span className="mx-3">/</span>
                                        </a>
                                        <a className="text-neutral-500 shrink-0" href="/">کرم آبرسان و مرطوب کننده
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-col lg:flex items-center mr-auto py-2">
                        <a className="text-neutral-400 text-xs flex items-center" target="_blank" rel="noreferrer"
                           href="#">
                            فروش در دیجی‌کالا
                        </a>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row overflow-hidden">
                    <div className="lg:ml-4 shrink-0 flex flex-col-reverse lg:flex-col">
                        <div className="flex flex-col items-center lg:max-w-92 xl:max-w-145 lg:block">
                            <div className="flex relative">
                                <div
                                    className="flex my-2 lg:flex-col lg:gap-y-4 text-neutral-700 self-end lg:self-start lg:text-neutral-900">
                                    <Tooltip text="اضافه به علاقه‌مندی">
                                        <button className="flex items-center space-x-2 cursor-pointer ml-5 lg:ml-0">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                stroke="#808080"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </button>
                                    </Tooltip>

                                    <Tooltip text="به اشتراک گذاری کالا">
                                        <button className="flex items-center space-x-2 cursor-pointer ml-5 lg:ml-0">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                transform="rotate(180)"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </button>
                                    </Tooltip>

                                    <Tooltip text="اطلاع‌رسانی شگفت‌انگیز">
                                        <button className="flex items-center space-x-2 cursor-pointer ml-5 lg:ml-0">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    d="M6.4288 2.41297C6.70116 2.10089 6.66896 1.62711 6.35689 1.35475C6.04481 1.08238 5.57103 1.11458 5.29867 1.42665L4.00686 2.90682C3.2741 3.74643 2.85987 4.81695 2.83663 5.9311L2.77995 8.64876C2.77131 9.06288 3.10003 9.4056 3.51415 9.41423C3.92827 9.42287 4.27099 9.09416 4.27963 8.68003L4.3363 5.96238C4.3522 5.20006 4.63562 4.4676 5.13699 3.89314L6.4288 2.41297Z"
                                                    fill="#808080"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6.237 7.70074C6.3759 5.48001 8.21749 3.75 10.4426 3.75H11V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V3.75H13.5574C15.7825 3.75 17.6241 5.48001 17.763 7.70074L17.984 11.2342C18.0682 12.5814 18.5205 13.8797 19.2916 14.9876C19.9882 15.9886 19.368 17.3712 18.1571 17.5165L14.75 17.9254V19C14.75 20.5188 13.5188 21.75 12 21.75C10.4812 21.75 9.24998 20.5188 9.24998 19V17.9254L5.84285 17.5165C4.63192 17.3712 4.0117 15.9886 4.70839 14.9876C5.47945 13.8797 5.93173 12.5814 6.016 11.2342L6.237 7.70074ZM10.4426 5.25C9.00956 5.25 7.82353 6.36417 7.73407 7.79438L7.51307 11.3278C7.41168 12.949 6.86742 14.5112 5.93957 15.8444C5.88922 15.9168 5.93405 16.0167 6.02157 16.0272L9.75923 16.4757C11.2477 16.6543 12.7522 16.6543 14.2407 16.4757L17.9784 16.0272C18.0659 16.0167 18.1107 15.9168 18.0604 15.8444C17.1325 14.5112 16.5883 12.949 16.4869 11.3278L16.2659 7.79438C16.1764 6.36417 14.9904 5.25 13.5574 5.25H10.4426ZM12 20.25C11.3096 20.25 10.75 19.6904 10.75 19V18.25H13.25V19C13.25 19.6904 12.6903 20.25 12 20.25Z"
                                                    fill="#808080"
                                                />
                                                <path
                                                    d="M17.6431 1.35475C17.331 1.62711 17.2988 2.10089 17.5712 2.41297L18.863 3.89314C19.3643 4.4676 19.6478 5.20006 19.6637 5.96238L19.7203 8.68003C19.729 9.09416 20.0717 9.42287 20.4858 9.41423C20.8999 9.4056 21.2287 9.06288 21.22 8.64876L21.1633 5.9311C21.1401 4.81695 20.7259 3.74643 19.9931 2.90682L18.7013 1.42665C18.4289 1.11458 17.9552 1.08238 17.6431 1.35475Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </button>
                                    </Tooltip>

                                    <Tooltip text="نمودار قیمت">
                                        <button className="flex items-center space-x-2 cursor-pointer ml-5 lg:ml-0">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    d="M1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2V20C3 20.5523 3.44771 21 4 21L22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H3C1.89543 23 1 22.1046 1 21V2Z"
                                                    fill="#808080"
                                                />
                                                <path
                                                    d="M19.9285 5.37139C20.1336 4.85861 19.8842 4.27664 19.3714 4.07152C18.8586 3.86641 18.2766 4.11583 18.0715 4.62861L14.8224 12.7513C14.6978 13.0628 14.3078 13.1656 14.0459 12.9561L11.0811 10.5843C10.3619 10.0089 9.29874 10.2116 8.84174 11.0114L5.13176 17.5039C4.85775 17.9834 5.02434 18.5942 5.50386 18.8682C5.98338 19.1423 6.59423 18.9757 6.86824 18.4961L9.9982 13.0187C10.1505 12.7521 10.5049 12.6846 10.7447 12.8764L13.849 15.3598C14.635 15.9886 15.805 15.6802 16.1788 14.7456L19.9285 5.37139Z"
                                                    fill="#808080"
                                                />
                                            </svg>
                                        </button>
                                    </Tooltip>

                                    <Tooltip text="مقایسه کالا">
                                        <button className="flex items-center space-x-2 cursor-pointer ml-5 lg:ml-0">
                                            <img
                                                src="https://img.icons8.com/wired/64/1A1A1A/compare.png"
                                                alt="Compare Icon"
                                                className="w-6 h-6"
                                            />
                                        </button>
                                    </Tooltip>

                                    <Tooltip text="افزودن به لیست">
                                        <button className="flex items-center space-x-2 cursor-pointer ml-5 lg:ml-0">
                                            <svg
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                className="w-6 h-6 transform rotate-180"
                                            >
                                                <path
                                                    fill="#808080"
                                                    fillRule="evenodd"
                                                    d="M19 4a1 1 0 01-1 1H7a1 1 0 010-2h11a1 1 0 011 1zM4 4a1 1 0 01-1 1H2a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H7a1 1 0 110-2h11a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H7a1 1 0 100 2h11zM3 17a1 1 0 100-2H2a1 1 0 100 2h1z"
                                                />
                                            </svg>
                                        </button>
                                    </Tooltip>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="cursor-pointer">
                                        <picture>
                                            <source
                                                type="image/webp"
                                                src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                                            />
                                            <source
                                                type="image/jpeg"
                                                src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                            />
                                            <img
                                                className="max-w-[550px] rounded-2xl overflow-hidden inline-block object-contain"
                                                src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                                alt="خرید و قیمت کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 مناسب پوست‌های حساس حجم 75 میلی‌لیتر"
                                                title="کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 مناسب پوست‌های حساس حجم 75 میلی‌لیتر"
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pt-2 flex items-center mt-5 mb-3 max-w-[588.953125] max-h-[82]">{images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative cursor-pointer rounded border border-complete-200 p-1 ml-2 flex items-center justify-center"
                                    style={{width: '72px', height: '72px'}}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt || 'تصویر محصول'}
                                        title={image.alt}
                                        className="w-full h-full object-contain inline-block"
                                    />
                                    {(image.hasVideoIcon || image.hasMoreIcon) && (
                                        <div
                                            className="absolute flex items-center justify-center top-0 left-0 w-full h-full">
                                            <svg className="w-6 h-6 fill-current text-black">
                                                <use xlinkHref={`#${image.hasVideoIcon ? 'video' : 'moreHoriz'}`}/>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}</div>
                        </div>
                    </div>
                    <div className="grow min-w-0">
                        <div className="flex items-center w-full px-5 lg:px-0">
                            <div>
                                <div className="flex items-center">
                                    <nav className="flex items-center">
                                        <a href="#">
                                            <span className="text-secondary-500 font-semibold text-sm">لافارر</span>
                                        </a>
                                        <a href="#">
                                            <span className="text-neutral-300 mx-2">/</span>
                                            <span className="text-secondary-500 font-semibold text-sm">
                                                  کرم آبرسان و مرطوب کننده لافارر
                                            </span>
                                        </a>

                                    </nav>
                                </div>
                                <h1 className="text-lg text-neutral-900 mb-2 pointer-events-none font-semibold">
                                    کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04، مناسب پوست‌‌های حساس، با عصاره
                                    پنیرک و آلوئه‌ورا، حاوی آلفا بیزابولول، نارینژنین، روغن بادام و زیتون، سدیم
                                    هیالورونات، سدیم PCA، پیشگیری از التهاب و حساسیت پوستی، مناسب استفاده در صبح و شب،
                                    75 میلی‌لیتر
                                </h1>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-nowrap">
                            <div>
                                <div className="min-w-0">
                                    <div className="items-center flex mx-5 lg:mx-0">
                                        <span className="text-neutral-300 ml-2 text-body-2"></span>
                                        <div className="bg-neutral-200 grow border-t"></div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-start gap-2 mt-2 w-full"
                                         dir="rtl">
                                        {/* امتیاز */}
                                        <div className="flex items-center">
                                            <div className="w-4 h-4 leading-none">
                                                <picture>
                                                    <source
                                                        type="image/webp"
                                                        src="https://www.digikala.com/statics/img/png/star-yellow.webp"
                                                    />
                                                    <source
                                                        type="image/jpeg"
                                                        src="https://www.digikala.com/statics/img/png/star-yellow.png"
                                                    />
                                                    <img
                                                        src="https://www.digikala.com/statics/img/png/star-yellow.png"
                                                        width="16"
                                                        height="16"
                                                        alt="امتیاز"
                                                        className="w-full inline-block object-contain"
                                                    />
                                                </picture>
                                            </div>
                                            <p className="mr-1 text-body-2">4.3</p>
                                            <p className="mr-1 text-sm text-neutral-300 whitespace-nowrap">
                                                (امتیاز ۶۶۱۲ خریدار)
                                            </p>
                                        </div>

                                        {/* خلاصه دیدگاه‌ها */}
                                        <span className="inline-flex items-center text-body-2 cursor-pointer py-1">
                                        <span
                                            className="bg-gray-100 text-sm flex items-center px-2 rounded-lg whitespace-nowrap">
                                                خلاصه دیدگاه‌ها
                                        </span>
                                    </span>

                                        {/* تعداد دیدگاه‌ها */}
                                        <span className="inline-flex items-center text-body-2 cursor-pointer py-1">
                                        <span
                                            className="bg-gray-100 text-sm flex items-center px-2 rounded-lg whitespace-nowrap">
                                            3430 دیدگاه
                                        </span>
                                    </span>

                                        {/* تعداد پرسش‌ها */}
                                        <span className="inline-flex items-center text-body-2 cursor-pointer py-1">
                                        <span
                                            className="bg-gray-100 text-sm flex items-center px-2 rounded-lg whitespace-nowrap">
                                            86 پرسش
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full">
                                        <div className="break-words py-3">
                                            <div className="flex items-center grow">
                                                <p className="grow text-h5 text-neutral-900">
                                                    <span className="relative text-lg font-semibold">ویژگی‌ها</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="overflow-auto hide-scrollbar">
                                            <ul className="!pb-0 flex gap-1 w-max lg:w-auto lg:gap-2 mt-2 lg:grid lg:grid-cols-3 lg:overflow-hidden">
                                                <li className="flex flex-col items-start justify-start bg-neutral-100 p-0 pr-2 mb-2 rounded-md">
                                                    <div className="flex flex-col gap-2 max-w-[150px]">
                                                        <div>
                                                            <p className="text-neutral-500 text-xs !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden text-ellipsis mb-0">ناحیه
                                                                استفاده</p>
                                                            <p className="text-xs !leading-none lg:!leading-9 text-neutral-700 break-all font-bold lg:overflow-hidden text-ellipsis">دست
                                                                و صورت</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col items-start justify-start bg-neutral-100 p-0 pr-2 mb-2 rounded-md">
                                                    <div className="flex flex-col gap-2 max-w-[150px]">
                                                        <div>
                                                            <p className="text-neutral-500 text-xs !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden text-ellipsis mb-0">زمان
                                                                استفاده</p>
                                                            <p className="text-xs !leading-none lg:!leading-9 text-neutral-700 break-all font-bold lg:overflow-hidden text-ellipsis">روز
                                                                و شب</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col items-start justify-start bg-neutral-100 p-0 pr-2 mb-2 rounded-md">
                                                    <div className="flex flex-col gap-2 max-w-[150px]">
                                                        <div>
                                                            <p className="text-neutral-500 text-xs !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden text-ellipsis mb-0">کشور
                                                                مبدا برند</p>
                                                            <p className="text-xs !leading-none lg:!leading-9 text-neutral-700 break-all font-bold lg:overflow-hidden text-ellipsis">ایران</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col items-start justify-start bg-neutral-100 rounded-md pr-2">
                                                    <div className="flex flex-col gap-1 max-w-[150px]">
                                                        <div>
                                                            <p className="text-neutral-500 text-xs !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden text-ellipsis mb-0">مشخصات
                                                                محصول</p>
                                                            <p className="text-xs !leading-none lg:!leading-9 text-neutral-700 break-all font-bold lg:overflow-hidden text-ellipsis">ضد
                                                                التهاب</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col items-start justify-start bg-neutral-100 rounded-md pr-2 ">
                                                    <div className="flex flex-col gap-1 max-w-[150px]">
                                                        <div>
                                                            <p className="text-neutral-500 text-xs !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden text-ellipsis mb-0">ترکیبات</p>
                                                            <p className="text-xs !leading-none lg:!leading-9 text-neutral-700 break-all font-bold lg:overflow-hidden text-ellipsis">روغن
                                                                های طبیعی</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col items-start justify-start bg-neutral-100 rounded-md pr-2">
                                                    <div className="flex flex-col gap-1 max-w-[200px]">
                                                        <div>
                                                            <p className="text-neutral-500 text-xs !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden text-ellipsis mb-0">ویتامین‌ها
                                                                و مواد معدنی موجود</p>
                                                            <p className="text-xs !leading-none lg:!leading-9 text-neutral-700 break-all font-bold lg:overflow-hidden text-ellipsis">E،
                                                                C</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex justify-center items-center gap-4 mt-4">
                                            <hr className="border-e-0 grow"/>
                                            <button
                                                className="relative flex items-center user-select-none rounded-medium">
                                                <div
                                                    className="flex items-center rounded-lg p-2 border text-xs font-bold border-gray-200 justify-center relative grow">مشاهده
                                                    همه
                                                    ویژگی ها
                                                    <div className="flex mr-2">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6 text-gray-900"
                                                        >
                                                            <path
                                                                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>
                                            <hr className="border-e-0 grow"/>
                                        </div>
                                    </div>
                                    <div className="rounded my-2 mx-5 lg:mx-0">
                                        <div className="flex">
                                            <div className="flex mt-1">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-gray-500"
                                                >
                                                    <path
                                                        d="M12.5 2.2a10.3 10.3 0 1 0 10.3 10.3A10.299 10.299 0 0 0 12.5 2.2zM12 7h1v7h-1zm.5 10.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1z"/>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                </svg>
                                            </div>
                                            <span className="mr-2 text-neutral-500 text-xs">درخواست مرجوع کردن کالا در گروه کرم مرطوب کننده و نرم کننده با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-neutral-100 lg:bg-white flex flex-col pt-5 px-5 lg:px-0 gap-y-4 lg:gap-y-3">
                                    <div className="lg:border lg:rounded bg-white pb-4 px-3 relative">
                                        <div className="flex items-center mt-2">
                                            <div className="ml-2 text-plus-500 text-xl text-pink-950">
                                                <Star className="w-6 h-6"/>
                                            </div>
                                            <span className="text-plus-500 text-sm text-pink-950">ارسال <b>رایگان</b> سفارش‌ها برای اعضای پلاس</span>
                                        </div>

                                        {/* مزایا */}
                                        <div className="mt-2 space-y-2">
                                            {[
                                                {text: '۴ ارسال رایگان عادی', badge: '۲ ارسال بیشتر'},
                                                {text: '۲ ارسال سوپرمارکت'},
                                                {text: 'پشتیبانی اختصاصی'},
                                                {text: 'ارسال فوری برای شهر تهران (رایگان)'},
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center justify-start">
                                                    <div className="relative flex items-center space-x-2">
                                                        <div
                                                            className="relative flex items-center justify-center self-stretch ml-3 w-6 min-w-[24px]">
                                                            <span
                                                                className="absolute block bg-neutral-200 top-0 h-[calc(50%-5px)] w-px"></span>
                                                            <span
                                                                className="absolute block bg-neutral-200 bottom-0 h-[calc(50%-5px)] w-px"></span>
                                                            <div
                                                                className="w-1.5 h-1.5 rounded-full bg-pink-900 z-10"></div>
                                                        </div>
                                                        <h3 className="text-xs text-neutral-500">{item.text}</h3>
                                                    </div>
                                                    {item.badge && (
                                                        <div
                                                            className="flex items-center rounded-lg pr-1 pl-1.5 py-0.5 bg-pink-100">
                                                            <i className="cube-font-icon text-[8px] text-plus-500"/>
                                                            <span
                                                                className="text-[10px] text-pink-900 text-plus-500 font-bold mr-1">{item.badge}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div
                                            className="flex items-center mt-2 mr-8 text-secondary-500 text-sm cursor-pointer text-blue-400">
                                            خرید اشتراک
                                            <ChevronLeft className="w-6 h-6"/>
                                        </div>

                                        <div className="absolute left-0 bottom-0 z-0">
                                            <img
                                                src="https://www.digikala.com/statics/img/svg/digiplus/free-delivery.svg"
                                                className="max-w-[103] max-h-[60] object-contain"
                                                alt="free-delivery"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:mr-3 lg:mb-3 lg:gap-y-2">
                                <div className="rounded-md border bg-gray-100 border-gray-200">
                                    <div
                                        className="break-words pt-4 pb-2 px-5 w-full flex items-center justify-between user-select-none">
                                        <h3 className="grow text-h5 text-neutral-900">فروشنده</h3>
                                        <span className="text-sm text-secondary-500 cursor-pointer text-blue-400">۱ فروشنده دیگر</span>
                                    </div>
                                    <div className="w-full px-4 flex">
                                        <a href="#" target="_blank" className="w-full">
                                            <div className="py-3 flex grow pt-0 pb-4">
                                                <div
                                                    ref={referenceRef1}
                                                    onMouseEnter={() => setVisible1(true)} // پاپ‌آپ وقتی موس می‌آید
                                                    onMouseLeave={() => setVisible1(false)} // پاپ‌آپ وقتی موس می‌رود
                                                    className="flex cursor-pointer"
                                                >
                                                    {/* آیکون */}
                                                    <div className="ml-4">
                                                        <svg
                                                            viewBox="0 0 150 150"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-10 h-10"
                                                        >
                                                            <path fill="none" d="M0,.2H150v150H0Z"/>
                                                            <path
                                                                fill="#ee4055"
                                                                d="M91.56,16.51c-21.48,0-42.95.21-64.42.34-6.86-.2-8.24,2.59-7.92,8.86.13,34.26,0,68.53.29,102.78.2,5.19,4.74,5.12,8.84,5.08,11.17,0,53.84.22,64,.08a54.08,54.08,0,0,0,10.78-1.09c20.62-4.59,32.7-23.42,32.87-39q.18-17.85.12-35.71C135.11,34.11,115.85,16.25,91.56,16.51Zm19.92,62.14c-16.47,21-50.36,21-66.84,0a3,3,0,0,1,.74-4.38c1.62-1.2,3.28-2.35,5-3.47,2-1.37,3.33-1.28,5,.53a30.55,30.55,0,0,0,45.46,0c1.65-1.81,2.95-1.9,5-.53,1.68,1.12,3.34,2.27,5,3.47A3,3,0,0,1,111.48,78.65Z"
                                                            />
                                                        </svg>
                                                    </div>

                                                    {/* اطلاعات فروشنده */}
                                                    <div className="flex w-full">
                                                        <div>
                                                            <div className="flex items-center mb-2 lg:mb-1">
                                                                <p className="text-neutral-700 ml-2 text-base font-medium">دیجی‌کالا</p>
                                                            </div>

                                                            <div className="w-full flex items-center text-sm">
                                                                {/* رضایت از کالا */}
                                                                <div
                                                                    className="pl-2 flex items-center border-l border-gray-300">
                                                                    <p className="ml-1 text-green-600 font-semibold">88.6٪</p>
                                                                    <p className="text-neutral-500 whitespace-nowrap">رضایت
                                                                        از کالا</p>
                                                                </div>

                                                                {/* عملکرد */}
                                                                <div className="pr-2 flex items-center">
                                                                    <p className="text-neutral-500 ml-1">عملکرد</p>
                                                                    <p className="whitespace-nowrap font-semibold text-green-600">عالی</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        {/* Popper */}
                                        {visible1 && (
                                            <div
                                                ref={popperRef1}
                                                className="absolute z-30 bg-white border border-gray-200 shadow-lg rounded-lg overflow-y-auto w-96 p-5"
                                            >
                                                <div className="text-lg font-bold flex justify-between items-center">
                                                    فروشگاه دیجی‌کالا
                                                </div>
                                                <p className="text-sm text-gray-500">عضو از 8 سال و 8 ماه</p>

                                                <div className="text-center my-4">
                                                    <p className="text-3xl font-bold text-green-600">88.6٪</p>
                                                    <p className="font-semibold">رضایت خریداران از کیفیت کالاها</p>
                                                    <p className="text-sm text-gray-500">2,107 نفر امتیاز داده‌اند</p>
                                                </div>

                                                {/* نوار رضایت */}
                                                <div className="flex h-2 rounded-lg overflow-hidden mt-3">
                                                    <div className="bg-green-600" style={{width: '61.46%'}}></div>
                                                    <div className="bg-green-400" style={{width: '25.53%'}}></div>
                                                    <div className="bg-yellow-400" style={{width: '9.4%'}}></div>
                                                    <div className="bg-orange-400" style={{width: '2.18%'}}></div>
                                                    <div className="bg-red-400" style={{width: '1.42%'}}></div>
                                                </div>

                                                <div
                                                    className="flex justify-between text-xs text-gray-500 mt-1 border-b pb-2">
                                                    <span>کاملا راضی</span>
                                                    <span>کاملا ناراضی</span>
                                                </div>

                                                <div className="text-center my-2">
                                                    <p className="text-3xl font-bold text-emerald-600">عالی</p>
                                                    <p className="font-semibold">عملکرد کلی فروشنده</p>
                                                </div>

                                                <div
                                                    className="flex justify-between mt-4 text-center text-sm text-gray-600">
                                                    <div>
                                                        <p className="font-semibold">100٪</p>
                                                        <p className="text-xs">تامین به موقع</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">100٪</p>
                                                        <p className="text-xs">تعهد ارسال</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">99.9٪</p>
                                                        <p className="text-xs">بدون مرجوعی</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative w-full lg:px-4 lg:pb-2">
                                        <div className="border-t-2 border-gray-200 lg:pt-4">
                                            <div className="w-full z-3 bg-neutral-100 shadow-lg lg:shadow-none">
                                                <div>
                                                    <div className="flex items-center">
                                                        <div
                                                            className="flex justify-start flex-col items-end mr-auto text-xl">
                                                            <div className="flex items-center justify-end w-full gap-1">
                                                                <span
                                                                    className="line-through text-sm ml-1 text-neutral-300">
                                                                    278,750
                                                                </span>
                                                                <div
                                                                    className="px-2 text-white rounded-full flex items-center justify-center bg-red-500 shrink-0 mr-1 mb-1">
                                                                    <span className="text-sm font-bold">48٪</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className="ml-1 text-neutral-800 text-lg font-semibold">
                                                                    145,900
                                                                </span>
                                                                <div className="flex">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 100 100"
                                                                        className="w-6 h-6"
                                                                    >
                                                                        <text
                                                                            x="50%"
                                                                            y="50%"
                                                                            fontSize="48"
                                                                            textAnchor="middle"
                                                                            alignmentBaseline="middle"
                                                                            fill="black"
                                                                        >
                                                                            تومان
                                                                        </text>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden h-5 mb-3">
                                                        <div
                                                            className="flex items-center h-5 overflow-hidden whitespace-nowrap transition-all duration-300"
                                                            key={index} // برای انیمیشن رندر مجدد
                                                        >
                                                            <div className="flex ml-1">
                                                                <div style={{
                                                                    width: '18px',
                                                                    height: '18px',
                                                                    lineHeight: 0
                                                                }}>
                                                                    <img
                                                                        className="w-full"
                                                                        src={current.icon}
                                                                        width="18"
                                                                        height="18"
                                                                        style={{objectFit: 'cover'}}
                                                                        alt={current.alt}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p className="text-sm font-semibold"
                                                               style={{color: current.color}}>
                                                                {current.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <button
                                                            className="relative flex items-center user-select-none bg-red-600 text-white rounded-full w-full py-2">
                                                            <div
                                                                className="flex items-center justify-center relative grow">
                                                                افزودن به سبد
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 flex items-center">
                                        <div className="py-3 grow flex items-center">
                                            <div className="ml-4">
                                                <div className="flex">
                                                    <svg
                                                        fill="#808080"
                                                        viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        style={{
                                                            fillRule: 'evenodd',
                                                            clipRule: 'evenodd',
                                                            strokeLinejoin: 'round',
                                                            strokeMiterlimit: 2,
                                                        }}
                                                    >
                                                        <g transform="matrix(1,0,0,1,-96,-384)">
                                                            <g transform="matrix(1,0,0,1.5,0,-195)">
                                                                <path
                                                                    d="M123,390.139C123,389.941 122.869,389.755 122.642,389.628C122.415,389.501 122.116,389.448 121.825,389.483C119.095,389.739 115.9,389.237 113.167,387.95C112.472,387.611 111.529,387.612 110.835,387.953C108.106,389.249 104.916,389.77 102.184,389.504C101.896,389.468 101.598,389.519 101.372,389.643C101.146,389.768 101.015,389.954 101.015,390.149C101,392.424 101,398.817 101,401.141C101,401.664 101.458,402.139 102.172,402.355C104.41,403.033 109.237,404.496 111.172,405.083C111.698,405.242 112.302,405.242 112.828,405.083C114.763,404.496 119.59,403.033 121.828,402.355C122.542,402.139 123,401.664 123,401.141C123,398.813 123,392.403 123,390.139Z"
                                                                    fill="#ffffff"
                                                                />
                                                            </g>
                                                            <path
                                                                d="M124,406.712L124,390.208C124,389.616 123.738,389.055 123.284,388.675C122.836,388.3 122.247,388.14 121.671,388.236C119.171,388.584 116.25,387.878 113.747,386.109C112.704,385.354 111.293,385.357 110.253,386.116C107.762,387.889 104.859,388.626 102.364,388.272C101.772,388.168 101.183,388.323 100.734,388.695C100.279,389.072 100.015,389.633 100.015,390.224C100,393.632 100,403.225 100,406.712C100,407.889 100.688,408.956 101.759,409.443C103.996,410.46 108.823,412.654 110.759,413.534C111.547,413.893 112.453,413.893 113.241,413.534C115.177,412.654 120.004,410.46 122.241,409.443C123.312,408.956 124,407.889 124,406.712ZM121.999,390.208L122,390.209L122,406.712C122,407.104 121.771,407.46 121.414,407.623C119.177,408.639 114.349,410.834 112.414,411.713C112.151,411.833 111.849,411.833 111.586,411.713C109.651,410.834 104.823,408.639 102.586,407.623C102.229,407.46 102,407.104 102,406.712C102,403.231 102,393.664 102.015,390.242L102.018,390.243C104.998,390.678 108.459,389.849 111.416,387.743L111.422,387.739C111.77,387.483 112.235,387.482 112.578,387.732L112.584,387.736C115.547,389.831 119.009,390.63 121.964,390.214L121.999,390.208ZM107.293,399.707L110.44,402.854C110.83,403.244 111.463,403.244 111.854,402.854L117.748,396.96C118.138,396.57 118.138,395.936 117.748,395.546C117.357,395.155 116.724,395.155 116.334,395.546L111.147,400.732L108.707,398.293C108.317,397.903 107.683,397.903 107.293,398.293C106.903,398.683 106.903,399.317 107.293,399.707Z"
                                                                fill="#808080"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex w-full">
                                                <p
                                                    className="text-xs text-neutral-700">گارانتی اصالت و سلامت فیزیکی
                                                    کالا</p></div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 cursor-pointer">
                                        <div className="py-3 flex grow border-t border-gray-200">
                                            <div className="flex w-full">
                                                <div className="flex flex-col w-full relative">
                                                    <ul className="flex flex-col gap-1">
                                                        <li className="flex ml-3 items-center">
                                                            <div className="flex items-center text-green-600">
                                                                <Truck className="w-4 h-4 scale-x-[-1]"/>
                                                            </div>
                                                            <p className="text-sm text-neutral-500 mr-2 truncate">
                                                                ارسال دیجی‌کالا
                                                            </p>
                                                        </li>
                                                        <li className="flex ml-3 items-center">
                                                            <div className="flex items-center text-blue-500">
                                                                <Clock className="w-4 h-4"/>
                                                            </div>
                                                            <p className="text-sm text-neutral-500 mr-2 truncate">
                                                                ارسال امروز (فعلا در شهر تهران و کرج)
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex mr-auto text-neutral-400 items-center">
                                                    <ChevronLeft className="w-6 h-6"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 w-full relative">
                                        <div className="border-t border-gray-200 py-3">
                                            <div className="flex flex-row justify-start items-center mb-2">
                                                <div className="flex ml-3 mr-1 text-pink-900">
                                                    <Star className="w-6 h-6"/>
                                                </div>
                                                <p className="text-sm font-medium text-neutral-700">ویژه اعضای پلاس</p>
                                            </div>
                                            <ul className="flex flex-col">
                                                <li className="flex items-center ml-3 relative">
                                                    <div
                                                        className="relative flex items-center justify-center self-stretch ml-3 w-6 min-w-[24px]">
                                                        <span
                                                            className="absolute block bg-neutral-200 top-0 h-[calc(50%-5px)] w-px"></span>
                                                        <span
                                                            className="absolute block bg-neutral-200 bottom-0 h-[calc(50%-5px)] w-px"></span>
                                                        <div
                                                            className="w-1.5 h-1.5 rounded-full bg-pink-900 z-10"></div>
                                                    </div>
                                                    <div className="flex items-center text-pink-900 mr-1">
                                                        <Truck className="w-4 h-4 scale-x-[-1]"/>
                                                    </div>
                                                    <p className="text-sm text-neutral-500 mr-1 whitespace-nowrap">
                                                        ارسال سریع برای شهر تهران و کرج (رایگان)
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 flex items-center">
                                        <div className="py-3 flex grow border-t border-gray-200 items-center">
                                            <div className="ml-4">
                                                <img
                                                    className="w-6 h-6 inline-block object-contain"
                                                    src="https://www.digikala.com/statics/img/svg/club-point.svg"
                                                    alt="دیجی‌کلاب"
                                                />
                                            </div>
                                            <div className="flex w-full items-center justify-start">
                                                <p className="text-sm text-neutral-700">۱۶ امتیاز دیجی‌کلاب</p>
                                                <Tooltip
                                                    text="بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صفحه ماموریت‌های کلابی سر بزنید.">
                                                    <div className="pr-0 mt-1 cursor-pointer">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            className="w-4 h-4 text-gray-500"
                                                        >
                                                            <path
                                                                d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"/>
                                                            <path fill="none" d="M0 0h24v24H0z"/>
                                                        </svg>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full cursor-pointer" onClick={() =>
                                    window.open(
                                        'https://about.digikala.com/newsroom/pricing-sale-and-price-monitoring-at-digikala/',
                                        '_blank'
                                    )
                                }
                                >
                                    <div
                                        className="flex justify-between items-center border border-gray-200 rounded-md py-2 px-5">
                                        <div className="flex items-center">
                                            <div className="ml-2">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    className="w-4 h-4 text-gray-500"
                                                >
                                                    <path
                                                        d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"/>
                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 text-sm">
                                                فرآیند قیمت‌گذاری و نظارت بر قیمت
                                            </span>
                                        </div>
                                        <div className="flex ">
                                            <ChevronLeft className="w-6 h-6" color="#808080"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t px-3 pt-3 pb-7 flex flex-col lg:mt-3">
                    <div className="w-full mx-auto">
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={24}
                            freeMode={true}
                            dir="rtl"
                            className="w-full"
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="!w-[303px] h-auto"
                                    style={{marginLeft: "24px"}}
                                >
                                    <a href={feature.link}>
                                        <div className="flex flex-col lg:flex-row items-center justify-center px-1">
                                            <div
                                                className="lg:inline-block lg:ml-2"
                                                style={{width: "42px", height: "42px", lineHeight: 0}}
                                            >
                                                <img
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    className="w-full inline-block object-contain"
                                                    width={42}
                                                    height={42}
                                                />
                                            </div>
                                            <p className="text-center text-sm font-medium text-neutral-400 mt-2 lg:mt-0">
                                                {feature.title}
                                            </p>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div id="sellerSection">
                    <div className="hidden lg:block lg:mt-4 px-5 lg:px-0 pb-5 border-b-4 border-gray-200">
                        <div className="break-words py-3">
                            <div className="flex items-center grow">
                                <p className="grow text-h5 text-neutral-900 font-bold">
                                    <span className="relative inline-block pb-2">
                                        فروشندگان این کالا
                                        <span
                                            className="absolute right-0 bottom-0 w-16 border-b-2 border-red-600"></span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-medium p-4">
                            <div className="flex justify-center lg:justify-between items-center">
                                <div className="lg:grid grid-cols-3 items-center grow">
                                    <div className="relative flex items-center">
                                        <div className="flex cursor-pointer">
                                            <div
                                                ref={referenceRef2}
                                                onMouseEnter={() => setVisible2(true)} // پاپ‌آپ وقتی موس می‌آید
                                                onMouseLeave={() => setVisible2(false)} // پاپ‌آپ وقتی موس می‌رود
                                            >
                                                <svg
                                                    viewBox="0 0 150 150"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                >
                                                    <path fill="none" d="M0,.2H150v150H0Z"/>
                                                    <path
                                                        fill="#ee4055"
                                                        d="M91.56,16.51c-21.48,0-42.95.21-64.42.34-6.86-.2-8.24,2.59-7.92,8.86.13,34.26,0,68.53.29,102.78.2,5.19,4.74,5.12,8.84,5.08,11.17,0,53.84.22,64,.08a54.08,54.08,0,0,0,10.78-1.09c20.62-4.59,32.7-23.42,32.87-39q.18-17.85.12-35.71C135.11,34.11,115.85,16.25,91.56,16.51Zm19.92,62.14c-16.47,21-50.36,21-66.84,0a3,3,0,0,1,.74-4.38c1.62-1.2,3.28-2.35,5-3.47,2-1.37,3.33-1.28,5,.53a30.55,30.55,0,0,0,45.46,0c1.65-1.81,2.95-1.9,5-.53,1.68,1.12,3.34,2.27,5,3.47A3,3,0,0,1,111.48,78.65Z"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Popper */}
                                            {visible2 && (
                                                <div
                                                    ref={popperRef2}
                                                    className="absolute z-30 bg-white border border-gray-200 shadow-lg rounded-lg overflow-y-auto w-96 p-5"
                                                >
                                                    <div
                                                        className="text-lg font-bold flex justify-between items-center">
                                                        فروشگاه دیجی‌کالا
                                                    </div>
                                                    <p className="text-sm text-gray-500">عضو از 8 سال و 8 ماه</p>

                                                    <div className="text-center my-4">
                                                        <p className="text-3xl font-bold text-green-600">88.6٪</p>
                                                        <p className="font-semibold">رضایت خریداران از کیفیت کالاها</p>
                                                        <p className="text-sm text-gray-500">2,107 نفر امتیاز
                                                            داده‌اند</p>
                                                    </div>

                                                    {/* نوار رضایت */}
                                                    <div className="flex h-2 rounded-lg overflow-hidden mt-3">
                                                        <div className="bg-green-600" style={{width: '61.46%'}}></div>
                                                        <div className="bg-green-400" style={{width: '25.53%'}}></div>
                                                        <div className="bg-yellow-400" style={{width: '9.4%'}}></div>
                                                        <div className="bg-orange-400" style={{width: '2.18%'}}></div>
                                                        <div className="bg-red-400" style={{width: '1.42%'}}></div>
                                                    </div>

                                                    <div
                                                        className="flex justify-between text-xs text-gray-500 mt-1 border-b pb-2">
                                                        <span>کاملا راضی</span>
                                                        <span>کاملا ناراضی</span>
                                                    </div>

                                                    <div className="text-center my-2">
                                                        <p className="text-3xl font-bold text-emerald-600">عالی</p>
                                                        <p className="font-semibold">عملکرد کلی فروشنده</p>
                                                    </div>

                                                    <div
                                                        className="flex justify-between mt-4 text-center text-sm text-gray-600">
                                                        <div>
                                                            <p className="font-semibold">100٪</p>
                                                            <p className="text-xs">تامین به موقع</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">100٪</p>
                                                            <p className="text-xs">تعهد ارسال</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">99.9٪</p>
                                                            <p className="text-xs">بدون مرجوعی</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mr-4">
                                            <div className="flex items-center mb-2 lg:mb-1">
                                                <p className="text-neutral-700 ml-2 text-subtitle">دیجی‌کالا</p>
                                            </div>
                                            <div className="w-full flex items-center text-body-2 text-xs">
                                                {/* بخش رضایت از کالا */}
                                                <div className="pl-2 flex items-center border-l border-neutral-200">
                                                    <p className="ml-1 font-bold text-green-600">88.6%</p>
                                                    <p className="text-neutral-500 whitespace-nowrap">رضایت از کالا</p>
                                                </div>

                                                {/* بخش عملکرد */}
                                                <div className="pr-2 flex items-center">
                                                    <p className="text-neutral-500 ml-1">عملکرد</p>
                                                    <p className="whitespace-nowrap font-bold text-green-600">عالی</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {/* ارسال دیجی‌کالا */}
                                        <div className="flex items-center">
                                            <Truck className="w-4 h-4 ml-2 scale-x-[-1]"/>
                                            <p className="text-sm text-gray-500">ارسال دیجی‌کالا</p>
                                        </div>

                                        {/* ارسال امروز */}
                                        <div className="flex items-center">
                                            <p className="text-sm text-gray-500">
                                                ارسال امروز (فعلا در شهر تهران و کرج)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center text-neutral-700 ml-2">
                                            <svg
                                                fill="#808080"
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                style={{
                                                    fillRule: 'evenodd',
                                                    clipRule: 'evenodd',
                                                    strokeLinejoin: 'round',
                                                    strokeMiterlimit: 2,
                                                }}
                                            >
                                                <g transform="matrix(1,0,0,1,-96,-384)">
                                                    <g transform="matrix(1,0,0,1.5,0,-195)">
                                                        <path
                                                            d="M123,390.139C123,389.941 122.869,389.755 122.642,389.628C122.415,389.501 122.116,389.448 121.825,389.483C119.095,389.739 115.9,389.237 113.167,387.95C112.472,387.611 111.529,387.612 110.835,387.953C108.106,389.249 104.916,389.77 102.184,389.504C101.896,389.468 101.598,389.519 101.372,389.643C101.146,389.768 101.015,389.954 101.015,390.149C101,392.424 101,398.817 101,401.141C101,401.664 101.458,402.139 102.172,402.355C104.41,403.033 109.237,404.496 111.172,405.083C111.698,405.242 112.302,405.242 112.828,405.083C114.763,404.496 119.59,403.033 121.828,402.355C122.542,402.139 123,401.664 123,401.141C123,398.813 123,392.403 123,390.139Z"
                                                            fill="#ffffff"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M124,406.712L124,390.208C124,389.616 123.738,389.055 123.284,388.675C122.836,388.3 122.247,388.14 121.671,388.236C119.171,388.584 116.25,387.878 113.747,386.109C112.704,385.354 111.293,385.357 110.253,386.116C107.762,387.889 104.859,388.626 102.364,388.272C101.772,388.168 101.183,388.323 100.734,388.695C100.279,389.072 100.015,389.633 100.015,390.224C100,393.632 100,403.225 100,406.712C100,407.889 100.688,408.956 101.759,409.443C103.996,410.46 108.823,412.654 110.759,413.534C111.547,413.893 112.453,413.893 113.241,413.534C115.177,412.654 120.004,410.46 122.241,409.443C123.312,408.956 124,407.889 124,406.712ZM121.999,390.208L122,390.209L122,406.712C122,407.104 121.771,407.46 121.414,407.623C119.177,408.639 114.349,410.834 112.414,411.713C112.151,411.833 111.849,411.833 111.586,411.713C109.651,410.834 104.823,408.639 102.586,407.623C102.229,407.46 102,407.104 102,406.712C102,403.231 102,393.664 102.015,390.242L102.018,390.243C104.998,390.678 108.459,389.849 111.416,387.743L111.422,387.739C111.77,387.483 112.235,387.482 112.578,387.732L112.584,387.736C115.547,389.831 119.009,390.63 121.964,390.214L121.999,390.208ZM107.293,399.707L110.44,402.854C110.83,403.244 111.463,403.244 111.854,402.854L117.748,396.96C118.138,396.57 118.138,395.936 117.748,395.546C117.357,395.155 116.724,395.155 116.334,395.546L111.147,400.732L108.707,398.293C108.317,397.903 107.683,397.903 107.293,398.293C106.903,398.683 106.903,399.317 107.293,399.707Z"
                                                        fill="#808080"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-sm text-neutral-700">
                                            گارانتی اصالت و سلامت فیزیکی کالا
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end min-w-[12rem]">
                                    {/* قیمت */}
                                    <div className="ml-6">
                                        <div>
                                            <div className="flex items-center justify-start">
                                                <div className="flex items-center gap-1 justify-start">
                                                    <span
                                                        className="text-xl font-bold text-neutral-800 ml-1">145,900</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg
                                                        className="w-[30px] h-[30px] font-bold fill-current text-neutral-800">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 100 100"
                                                            className="w-14 h-14"
                                                        >
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* دکمه افزودن به سبد */}
                                    <div className="shrink-0">
                                        <button
                                            className="relative flex items-center justify-center text-sm bg-red-500 font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 transition-colors duration-200"
                                            data-add-to-cart-variant-id="11200608"
                                            data-testid="add-to-cart"
                                        >
                                            افزودن به سبد
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="inline-flex items-center px-2 py-1 mt-3 mr-10 rounded bg-gradient-to-l from-purple-100 to-white">
                                {/* آیکن و عنوان خدمات پلاس */}
                                <span className="flex items-center text-pink-800 font-semibold text-sm ml-4">
                                    <Star size={18} className="ml-1"/>
                                    خدمات پلاس
                                </span>

                                {/* توضیح سرویس */}
                                <span className="flex items-center text-neutral-500 text-xs">
                                    ارسال سریع برای شهر تهران و کرج (رایگان)
                                </span>
                            </div>
                        </div>
                        <div className="rounded-medium p-4 bg-gray-100 rounded-lg">
                            <div className="flex justify-center lg:justify-between items-center">
                                <div className="lg:grid grid-cols-3 items-center grow">
                                    <div className="relative flex items-center">
                                        <div className="flex cursor-pointer">
                                            <div
                                                ref={referenceRef3}
                                                onMouseEnter={() => setVisible3(true)} // پاپ‌آپ وقتی موس می‌آید
                                                onMouseLeave={() => setVisible3(false)} // پاپ‌آپ وقتی موس می‌رود
                                            >
                                                <svg
                                                    version="1.0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 64 64"
                                                    enableBackground="new 0 0 64 64"
                                                    xmlSpace="preserve"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <g>
                                                        <path fill="#F76D57"
                                                              d="M43,2v22c0,2.209,1.791,4,4,4s4-1.791,4-4V2H43z"></path>
                                                        <path fill="#F76D57"
                                                              d="M23,24c0,2.209,1.791,4,4,4s4-1.791,4-4V2h-8V24z"></path>
                                                        <path fill="#F76D57"
                                                              d="M3,4v20c0,2.209,1.791,4,4,4s4-1.791,4-4V2H5C3.896,2,3,2.895,3,4z"></path>
                                                        <path fill="#F9EBB2"
                                                              d="M58,60c0,1.104-0.896,2-2,2H26V37c0-0.516-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v25H8c-1.104,0-2-0.896-2-2V29.91C6.326,29.965,6.658,30,7,30c2.088,0,3.926-1.068,5-2.688C13.074,28.932,14.912,30,17,30s3.926-1.068,5-2.688C23.074,28.932,24.912,30,27,30s3.926-1.068,5-2.688C33.074,28.932,34.912,30,37,30s3.926-1.068,5-2.688C43.074,28.932,44.912,30,47,30s3.926-1.068,5-2.688C53.074,28.932,54.912,30,57,30c0.342,0,0.674-0.035,1-0.09V60z"></path>
                                                        <path fill="#B4CCB9"
                                                              d="M33,24c0,2.209,1.791,4,4,4s4-1.791,4-4V2h-8V24z"></path>
                                                        <path fill="#B4CCB9"
                                                              d="M13,24c0,2.209,1.791,4,4,4s4-1.791,4-4V2h-8V24z"></path>
                                                        <path fill="#B4CCB9"
                                                              d="M59,2h-6v22c0,2.209,1.791,4,4,4s4-1.791,4-4V4C61,2.895,60.104,2,59,2z"></path>
                                                        <path fill="#394240"
                                                              d="M59,0H5C2.789,0,1,1.789,1,4v20c0,2.219,1.208,4.152,3,5.189V60c0,2.211,1.789,4,4,4h48 c2.211,0,4-1.789,4-4V29.189c1.792-1.037,3-2.971,3-5.189V4C63,1.789,61.211,0,59,0z M51,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2 H51z M41,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H41z M31,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H31z M21,2v22 c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H21z M3,4c0-1.105,0.896-2,2-2h6v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V4z M12,62V38h12v10h-1 c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v12H12z M58,60c0,1.104-0.896,2-2,2H26V37c0-0.516-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v25H8 c-1.104,0-2-0.896-2-2V29.91C6.326,29.965,6.658,30,7,30c2.088,0,3.926-1.068,5-2.688C13.074,28.932,14.912,30,17,30 s3.926-1.068,5-2.688C23.074,28.932,24.912,30,27,30s3.926-1.068,5-2.688C33.074,28.932,34.912,30,37,30s3.926-1.068,5-2.688 C43.074,28.932,44.912,30,47,30s3.926-1.068,5-2.688C53.074,28.932,54.912,30,57,30c0.342,0,0.674-0.035,1-0.09V60z M57,28 c-2.209,0-4-1.791-4-4V2h6c1.104,0,2,0.895,2,2v20C61,26.209,59.209,28,57,28z"></path>
                                                        <path fill="#394240"
                                                              d="M53,36H29c-0.553,0-1,0.447-1,1v20c0,0.553,0.447,1,1,1h24c0.553,0,1-0.447,1-1V37 C54,36.447,53.553,36,53,36z M52,56H30V38h22V56z"></path>
                                                        <path fill="#45AAB8"
                                                              d="M12,62h12V50h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1V38H12V62z"></path>
                                                        <rect x="30" y="38" fill="#45AAB8" width="22"
                                                              height="18"></rect>
                                                        <path fill="#394240"
                                                              d="M48.293,42.707C48.488,42.902,48.744,43,49,43s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 l-1-1c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,42.707z"></path>
                                                        <path fill="#394240"
                                                              d="M48.293,47.707C48.488,47.902,48.744,48,49,48s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 l-6-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,47.707z"></path>
                                                    </g>
                                                </svg>
                                            </div>

                                            {/* Popper */}
                                            {visible3 && (
                                                <div
                                                    ref={popperRef3}
                                                    className="absolute z-30 bg-white border border-gray-200 shadow-lg rounded-lg overflow-y-auto w-96 p-5"
                                                >
                                                    <div
                                                        className="text-lg font-bold flex justify-between items-center">
                                                        تجارت الکترونیک امید
                                                    </div>
                                                    <p className="text-sm text-gray-500">عضو از 2 سال و 10 ماه</p>

                                                    <div className="text-center my-4">
                                                        <p className="text-3xl font-bold text-green-600">87.4٪</p>
                                                        <p className="font-semibold">رضایت خریداران از کیفیت کالاها</p>
                                                        <p className="text-sm text-gray-500">1,436 نفر امتیاز
                                                            داده‌اند</p>
                                                    </div>

                                                    {/* نوار رضایت */}
                                                    <div className="flex h-2 rounded-lg overflow-hidden mt-3">
                                                        <div className="bg-green-600" style={{width: '61.46%'}}></div>
                                                        <div className="bg-green-400" style={{width: '25.53%'}}></div>
                                                        <div className="bg-yellow-400" style={{width: '9.4%'}}></div>
                                                        <div className="bg-orange-400" style={{width: '2.18%'}}></div>
                                                        <div className="bg-red-400" style={{width: '1.42%'}}></div>
                                                    </div>

                                                    <div
                                                        className="flex justify-between text-xs text-gray-500 mt-1 border-b pb-2">
                                                        <span>کاملا راضی</span>
                                                        <span>کاملا ناراضی</span>
                                                    </div>

                                                    <div className="text-center my-2">
                                                        <p className="text-3xl font-bold text-emerald-600">عالی</p>
                                                        <p className="font-semibold">عملکرد کلی فروشنده</p>
                                                    </div>

                                                    <div
                                                        className="flex justify-between mt-4 text-center text-sm text-gray-600">
                                                        <div>
                                                            <p className="font-semibold">100٪</p>
                                                            <p className="text-xs">تامین به موقع</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">100٪</p>
                                                            <p className="text-xs">تعهد ارسال</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">99.9٪</p>
                                                            <p className="text-xs">بدون مرجوعی</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mr-4">
                                            <div className="flex items-center mb-2 lg:mb-1">
                                                <p className="text-neutral-700 ml-2 text-subtitle">تجارت الکترونیک
                                                    امید</p>
                                                <div className="py-1 flex items-center justify-center ml-2">
                                                    <div
                                                        className="inline-flex items-center justify-center px-2  bg-indigo-200 text-undefined rounded-lg">
                                                        <p className="inline-block pb-1 text-xs">رسمی</p>
                                                    </div>
                                                </div>
                                                <div className="py-1 flex items-center justify-center ml-2">
                                                    <div
                                                        className="inline-flex items-center justify-center px-2  bg-green-200 rounded-lg">
                                                        <p className="inline-block pb-1 text-xs">منتخب</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full flex items-center text-body-2 text-xs">
                                                {/* بخش رضایت از کالا */}
                                                <div className="pl-2 flex items-center border-l border-neutral-200">
                                                    <p className="ml-1 font-bold text-green-600">87.4%</p>
                                                    <p className="text-neutral-500 whitespace-nowrap">رضایت از کالا</p>
                                                </div>

                                                {/* بخش عملکرد */}
                                                <div className="pr-2 flex items-center">
                                                    <p className="text-neutral-500 ml-1">عملکرد</p>
                                                    <p className="whitespace-nowrap font-bold text-green-600">عالی</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {/* ارسال دیجی‌کالا */}
                                        <div className="flex items-center">
                                            <Truck className="w-4 h-4 ml-2 scale-x-[-1]"/>
                                            <p className="text-sm text-gray-500">ارسال دیجی‌کالا</p>
                                        </div>

                                        {/* ارسال امروز */}
                                        <div className="flex items-center">
                                            <p className="text-sm text-gray-500">
                                                ارسال امروز (فعلا در شهر تهران و کرج)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center text-neutral-700 ml-2">
                                            <svg
                                                fill="#808080"
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                                style={{
                                                    fillRule: 'evenodd',
                                                    clipRule: 'evenodd',
                                                    strokeLinejoin: 'round',
                                                    strokeMiterlimit: 2,
                                                }}
                                            >
                                                <g transform="matrix(1,0,0,1,-96,-384)">
                                                    <g transform="matrix(1,0,0,1.5,0,-195)">
                                                        <path
                                                            d="M123,390.139C123,389.941 122.869,389.755 122.642,389.628C122.415,389.501 122.116,389.448 121.825,389.483C119.095,389.739 115.9,389.237 113.167,387.95C112.472,387.611 111.529,387.612 110.835,387.953C108.106,389.249 104.916,389.77 102.184,389.504C101.896,389.468 101.598,389.519 101.372,389.643C101.146,389.768 101.015,389.954 101.015,390.149C101,392.424 101,398.817 101,401.141C101,401.664 101.458,402.139 102.172,402.355C104.41,403.033 109.237,404.496 111.172,405.083C111.698,405.242 112.302,405.242 112.828,405.083C114.763,404.496 119.59,403.033 121.828,402.355C122.542,402.139 123,401.664 123,401.141C123,398.813 123,392.403 123,390.139Z"
                                                            fill="#ffffff"
                                                        />
                                                    </g>
                                                    <path
                                                        d="M124,406.712L124,390.208C124,389.616 123.738,389.055 123.284,388.675C122.836,388.3 122.247,388.14 121.671,388.236C119.171,388.584 116.25,387.878 113.747,386.109C112.704,385.354 111.293,385.357 110.253,386.116C107.762,387.889 104.859,388.626 102.364,388.272C101.772,388.168 101.183,388.323 100.734,388.695C100.279,389.072 100.015,389.633 100.015,390.224C100,393.632 100,403.225 100,406.712C100,407.889 100.688,408.956 101.759,409.443C103.996,410.46 108.823,412.654 110.759,413.534C111.547,413.893 112.453,413.893 113.241,413.534C115.177,412.654 120.004,410.46 122.241,409.443C123.312,408.956 124,407.889 124,406.712ZM121.999,390.208L122,390.209L122,406.712C122,407.104 121.771,407.46 121.414,407.623C119.177,408.639 114.349,410.834 112.414,411.713C112.151,411.833 111.849,411.833 111.586,411.713C109.651,410.834 104.823,408.639 102.586,407.623C102.229,407.46 102,407.104 102,406.712C102,403.231 102,393.664 102.015,390.242L102.018,390.243C104.998,390.678 108.459,389.849 111.416,387.743L111.422,387.739C111.77,387.483 112.235,387.482 112.578,387.732L112.584,387.736C115.547,389.831 119.009,390.63 121.964,390.214L121.999,390.208ZM107.293,399.707L110.44,402.854C110.83,403.244 111.463,403.244 111.854,402.854L117.748,396.96C118.138,396.57 118.138,395.936 117.748,395.546C117.357,395.155 116.724,395.155 116.334,395.546L111.147,400.732L108.707,398.293C108.317,397.903 107.683,397.903 107.293,398.293C106.903,398.683 106.903,399.317 107.293,399.707Z"
                                                        fill="#808080"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-sm text-neutral-700">
                                            گارانتی اصالت و سلامت فیزیکی کالا
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end min-w-[12rem]">
                                    {/* قیمت */}
                                    <div className="ml-6">
                                        <div>
                                            <div className="flex items-center justify-start">
                                                <div className="flex items-center gap-1 justify-start">
                                                    <span
                                                        className="text-xl font-bold text-neutral-800 ml-1">278,750</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg
                                                        className="w-[30px] h-[30px] font-bold fill-current text-neutral-800">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 100 100"
                                                            className="w-14 h-14"
                                                        >
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* دکمه افزودن به سبد */}
                                    <div className="shrink-0">
                                        <button
                                            className="relative flex items-center justify-center text-sm bg-red-500 font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 transition-colors duration-200"
                                            data-add-to-cart-variant-id="11200608"
                                            data-testid="add-to-cart"
                                        >
                                            افزودن به سبد
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="inline-flex items-center px-2 py-1 mt-3 mr-10 rounded bg-gradient-to-l from-purple-100 to-white">
                                {/* آیکن و عنوان خدمات پلاس */}
                                <span className="flex items-center text-pink-800 font-semibold text-sm ml-4">
                                    <Star size={18} className="ml-1"/>
                                    خدمات پلاس
                                </span>

                                {/* توضیح سرویس */}
                                <span className="flex items-center text-neutral-500 text-xs">
                                    ارسال سریع برای شهر تهران و کرج (رایگان)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lazyload-wrapper">
                    <div>
                        <div
                            className="flex flex-col relative overflow-hidden w-full pt-2 lg:border lg:rounded-md lg:mt-4 pb-3 lg:w-auto">
                            <div className="break-words py-3 px-4">
                                <div className="flex items-center grow">
                                    <p className="grow text-h5 text-neutral-900 font-bold">
                                        <span className="relative inline-block pb-2">
                                            کالاهای مشابه
                                            <span
                                                className="absolute right-0 bottom-0 w-16 border-b-2 border-red-600"></span>
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* کادر اسلایدر */}
                            <div className="relative">
                                {/* دکمه‌های چپ و راست (جابجا شده) */}
                                {!isAtEnd && (
                                    <button
                                        onClick={scrollLeft}
                                        className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white shadow-md rounded-full p-2"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"/>
                                        </svg>
                                    </button>
                                )}
                                {!isAtStart && (
                                    <button
                                        onClick={scrollRight}
                                        className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white shadow-md rounded-full p-2"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500 rotate-180"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"/>
                                        </svg>
                                    </button>
                                )}

                                {/* اسلایدر */}
                                <div
                                    id="slider"
                                    ref={sliderRef}
                                    className="swiper-container rtl flex overflow-x-hidden touch-pan-x snap-x snap-mandatory cursor-grab"
                                >
                                    <div className="swiper-wrapper flex space-x-4 px-8">
                                        <div className="swiper-slide swiper-slide-active ml-6 pt-5"
                                             style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="#"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                    {/* تصویر محصول */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/6be7e06d3e82e423dd6e0286a4bf02d3cb5435a2_1639038594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/6be7e06d3e82e423dd6e0286a4bf02d3cb5435a2_1639038594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                src="https://dkstatics-public.digikala.com/digikala-products/6be7e06d3e82e423dd6e0286a4bf02d3cb5435a2_1639038594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="ژل مرطوب‌کننده و آبرسان مدل Hyaloranic Acid حجم 100 میلی‌لیتر"
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* عنوان محصول */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        ژل مرطوب‌کننده و آبرسان رومینا، مدل Hyaloranic Acid، مناسب
                                                        پوست‌های چرب و مستعد جوش، با عصاره آلوئه‌ورا...
                                                    </h3>

                                                    {/* ارسال فروشنده */}
                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                        <svg
                                                            viewBox="0 0 390.335 390.335"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4 ml-2"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M275.329,255.418v45.511H114.36v-45.511l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.133c12.477,8.145,26.57,12.994,41.697,12.994c15.709,0,29.802-4.331,41.697-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244L275.329,255.418z"
                                                                        className="fill-white"
                                                                    />
                                                                    <path
                                                                        d="M93.22,267.83v100.784H50.424v-75.83c0-0.517,0.517-1.099,1.099-1.616L93.22,267.83z"
                                                                        className="fill-white"
                                                                    />
                                                                    <path
                                                                        d="M297.503,267.83v100.784h42.279v-75.83c0-0.517-0.517-1.099-1.099-1.616L297.503,267.83z"
                                                                        className="fill-white"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="M266.667,62.448v23.337c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.869V62.448c0-7.564,4.331-14.093,11.378-17.325l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622C262.335,48.356,266.667,54.885,266.667,62.448z"
                                                                    className="fill-sky-400"
                                                                />
                                                                <path
                                                                    d="M261.236,136.145H128.97c4.331,46.61,30.901,80.743,66.133,80.743C239.515,216.889,257.939,175.709,261.236,136.145z"
                                                                    className="fill-white"
                                                                />
                                                                <g>
                                                                    <rect
                                                                        x="114.36"
                                                                        y="323.168"
                                                                        width="160.97"
                                                                        height="45.511"
                                                                        className="fill-sky-400"
                                                                    />
                                                                    <path
                                                                        d="M121.406,114.489h149.01c-11.378-11.895-39.564-22.238-74.796-22.238C160.97,92.251,132.784,102.529,121.406,114.489z"
                                                                        className="fill-sky-400"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="M349.543,272.162l-90.505-50.424v-14.093c13.576-17.907,22.238-42.279,24.372-71.564h3.814 c5.948,0,10.861-4.848,10.861-10.861c0-8.145-3.232-15.709-8.663-22.756V62.384c0-16.291-9.762-30.901-24.372-37.366L218.376,4.461c-14.093-5.947-30.319-5.947-44.412,0l-46.61,20.622c-15.192,6.529-24.372,21.139-24.372,37.366v40.663c-5.43,6.529-8.145,14.093-8.145,22.238c0,5.947,4.848,10.861,10.861,10.861h2.198c2.198,27.087,10.861,50.941,24.372,68.848v16.291l-91.604,50.812c-7.564,4.331-11.895,11.895-11.895,20.622v86.691c0,5.948,4.848,10.861,10.861,10.861h311.079c5.948,0,10.861-4.849,10.861-10.861v-86.691C361.503,284.121,356.59,275.976,349.543,272.162zM136.016,45.123l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622c7.046,3.232,11.378,9.762,11.378,17.325v23.273c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.933V62.448C124.638,54.885,128.97,48.356,136.016,45.123zM196.202,92.251c34.715,0,63.418,10.279,74.279,22.238H121.406C132.784,102.529,160.97,92.251,196.202,92.251zM128.97,136.145h132.267c-3.232,39.564-21.657,80.743-66.133,80.743C159.871,216.889,133.301,182.756,128.97,136.145zM114.36,255.418l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.198c12.477,8.145,26.57,12.994,41.762,12.994c15.709,0,29.802-4.331,41.762-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244l33.034,18.424v45.511H114.36V255.418zM93.22,368.679h-0.517H50.424v-75.895c0-0.517,0.517-1.099,1.099-1.616l41.762-23.273v100.784H93.22zM114.36,368.679v-45.511h160.97v45.511H114.36zM339.782,368.679h-42.279V267.83l41.762,23.273c0,0,0.517,0.517,0.517,1.616V368.679z"
                                                                    className="fill-blue-900"
                                                                />
                                                            </g>
                                                        </svg>
                                                        ارسال فروشنده
                                                    </div>

                                                    {/* قیمت */}
                                                    <div
                                                        className="mt-3 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                        <span className="ml-1" data-testid="price-final">87,970</span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 100 100"
                                                            className="w-6 h-6"
                                                        >
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next ml-6 pt-5"
                                             style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/dkp-1046156/کرم-مرطوب-کننده-دکتر-ژیلا-سری-emolient-مدل-eucerin-حجم-75-میلی-لیتر/"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                    {/* تصویر محصول */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/4940212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/4940212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                src="https://dkstatics-public.digikala.com/digikala-products/4940212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="کرم مرطوب کننده دکتر ژیلا سری Emolient مدل Eucerin حجم 75 میلی لیتر"
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* عنوان محصول */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        کرم مرطوب کننده دکتر ژیلا سری Emolient مدل Eucerin حجم 75 میلی
                                                        لیتر
                                                    </h3>

                                                    {/* ارسال فروشنده (چون این محصول نداشت، حذف کردم) */}

                                                    {/* قیمت */}
                                                    <div
                                                        className="mt-10 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                        <span className="ml-1" data-testid="price-final">135,000</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                             className="w-6 h-6">
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide ml-6" style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/dkp-708421/کرم-مرطوبکننده-و-آبرسان-دست-و-صورت-لافارر-مدل-02-مناسب-پوستهای-نرمال-و-مختلط-با-عصارههای-بابونه-کالاندولا-و-آلوئهورا-حاوی-ویتامینهای-e-و-c-روغنهای-بادام-و-زیتون-و-گلیسیرین-ضدحساسیت-و-ضدجوش-مناسب-استفاده-در-صبح-و-شب-حجم-75-میلیلیتر/"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                    {/* بنر تخفیف بالا */}
                                                    <div className="flex items-center justify-start mb-1">
                                                        <div className="ml-1 w-16 h-3.5">
                                                            <img
                                                                src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                                                                alt="Special Sale"
                                                                className="w-full object-contain"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* تصویر محصول */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/5a707cd1bb58ed7045344ee49abff9d05b79c8e9_1668584314.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/5a707cd1bb58ed7045344ee49abff9d05b79c8e9_1668584314.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                src="https://dkstatics-public.digikala.com/digikala-products/5a707cd1bb58ed7045344ee49abff9d05b79c8e9_1668584314.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 02 مناسب پوست‌های نرمال و مختلط حجم 75 میلی‌لیتر"
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* عنوان محصول */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 02 مناسب پوست‌های
                                                        نرمال و مختلط حجم 75 میلی‌لیتر
                                                    </h3>

                                                    {/* ارسال سریع دیجی کالا */}
                                                    <div
                                                        className="flex items-center justify-start text-xs text-neutral-600 mb-2">
                                                        <svg
                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                            viewBox="0 0 32 32"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect x="4" y="16" width="12" height="2"/>
                                                            <rect x="2" y="11" width="10" height="2"/>
                                                            <path
                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                        </svg>
                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                    </div>

                                                    {/* قیمت + تخفیف */}
                                                    <div className="mt-auto flex flex-col gap-1">
                                                        {/* قیمت با تخفیف */}
                                                        <div className="flex items-center justify-between">
                                                            <div
                                                                className="px-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                                                <span data-testid="price-discount-percent">45٪</span>
                                                            </div>
                                                            <div
                                                                className="flex items-center gap-1 font-bold text-sm md:text-lg text-neutral-700">
                                                                <span data-testid="price-final">153,310</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 100 100" className="w-6 h-6">
                                                                    <text
                                                                        x="50%"
                                                                        y="50%"
                                                                        fontSize="48"
                                                                        textAnchor="middle"
                                                                        alignmentBaseline="middle"
                                                                        fill="black"
                                                                    >
                                                                        تومان
                                                                    </text>
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        {/* قیمت بدون تخفیف */}
                                                        <div
                                                            className="flex justify-end text-xs text-neutral-400 line-through">
                                                            <span data-testid="price-no-discount">278,750</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide ml-6" style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/"
                                                target="_blank"
                                                className="block cursor-pointer relative bg-neutral-000 overflow-hidden grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div className="h-full">
                                                    <article
                                                        className="overflow-hidden flex flex-col items-stretch justify-start h-full">
                                                        {/* بنر تخفیف */}
                                                        <div className="flex items-center justify-start mb-1">
                                                            <div className="ml-1 w-16 h-3.5">
                                                                <img
                                                                    src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                                                                    alt=""
                                                                    className="w-full object-contain"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* تصویر محصول */}
                                                        <div className="relative flex justify-center mb-1">
                                                            <picture>
                                                                <source
                                                                    type="image/webp"
                                                                    src="https://dkstatics-public.digikala.com/digikala-products/ef6e03b9115f2774463df9adf9b583839213d7fa_1646904028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                />
                                                                <source
                                                                    type="image/jpeg"
                                                                    src="https://dkstatics-public.digikala.com/digikala-products/ef6e03b9115f2774463df9adf9b583839213d7fa_1646904028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                />
                                                                <img
                                                                    className="w-[150px] h-[150px] object-contain rounded-md"
                                                                    src="https://dkstatics-public.digikala.com/digikala-products/ef6e03b9115f2774463df9adf9b583839213d7fa_1646904028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                    alt="ژل آبرسان ساین اسکین مدل aqua حجم 75 میلی‌لیتر"
                                                                />
                                                            </picture>
                                                        </div>

                                                        {/* عنوان محصول */}
                                                        <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                            کرم ژل آبرسان ساین اسکین، مدل Synaqua، مناسب انواع پوست،
                                                            حاوی Patch2o، بایوسرامید و هیالورونیک‌اسید، مناسب استفاده در
                                                            روز و شب و برای صورت و بدن، حجم 75 میلی‌لیتر
                                                        </h3>

                                                        {/* ارسال سریع دیجی کالا */}
                                                        <div
                                                            className="flex items-center justify-start text-xs text-neutral-600 mb-2">
                                                            <svg
                                                                className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                viewBox="0 0 32 32"
                                                                fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect x="4" y="16" width="12" height="2"/>
                                                                <rect x="2" y="11" width="10" height="2"/>
                                                                <path
                                                                    d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                            </svg>
                                                            ارسال سریع دیجی‌کالا (تهران و کرج)
                                                        </div>

                                                        {/* قیمت + تخفیف */}
                                                        <div className="mt-auto flex flex-col gap-1">
                                                            {/* قیمت با تخفیف */}
                                                            <div className="flex items-center justify-between">
                                                                <div
                                                                    className="px-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                                                    <span
                                                                        data-testid="price-discount-percent">35٪</span>
                                                                </div>
                                                                <div
                                                                    className="flex items-center gap-1 font-bold text-sm md:text-lg text-neutral-700">
                                                                    <span data-testid="price-final">219,660</span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                         viewBox="0 0 100 100" className="w-6 h-6">
                                                                        <text
                                                                            x="50%"
                                                                            y="50%"
                                                                            fontSize="48"
                                                                            textAnchor="middle"
                                                                            alignmentBaseline="middle"
                                                                            fill="black"
                                                                        >
                                                                            تومان
                                                                        </text>
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            {/* قیمت بدون تخفیف */}
                                                            <div
                                                                className="flex justify-end text-xs text-neutral-400 line-through">
                                                                <span data-testid="price-no-discount">337,950</span>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide ml-6" style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="block cursor-pointer relative bg-neutral-000 overflow-hidden grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div className="h-full">
                                                    <article
                                                        className="overflow-hidden flex flex-col items-stretch justify-start h-full">
                                                        <div className="flex items-center justify-start mb-1">
                                                            <div className="ml-1 w-16 h-3.5">
                                                                <img
                                                                    className="w-full object-contain"
                                                                    src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex grow relative flex-col mb-1">
                                                            <div className="flex items-stretch flex-col relative mb-1">
                                                                <div className="flex items-start mx-auto">
                                                                    <div className="relative w-[150px] h-[150px]">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e0d933b33351111774c06932557b76713c4a0c3b_1662494767.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e0d933b33351111774c06932557b76713c4a0c3b_1662494767.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                className="w-full rounded-md object-contain"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e0d933b33351111774c06932557b76713c4a0c3b_1662494767.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم مرطوب&zwnj;کننده و آبرسان لایت بیوتی مدل ََشی&zwnj;باتر آرگان حجم 250 میلی&zwnj;لیتر"
                                                                            />
                                                                        </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="grow flex flex-col items-stretch justify-start">
                                                            <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 mb-2">
                                                                کرم مرطوب&zwnj;کننده و آبرسان دست و صورت لایت بیوتی، مدل
                                                                Shea Butter، مناسب انواع پوست، حاوی روغن آرگان، اوسرین،
                                                                بیزواکس، روغن بادام شیرین، ویتامین E، روغن نارگیل، روغن
                                                                زیتون و گلیسیرین، تغذیه&zwnj;کننده پوست، حجم 250
                                                                میلی&zwnj;لیتر
                                                            </h3>

                                                            <div className="mb-1 flex items-center justify-between">
                                                                <div className="flex items-center">
                                                                    <div className="flex shrink-0 ml-1">
                                                                        <svg
                                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                            viewBox="0 0 32 32"
                                                                            fill="currentColor"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <rect x="4" y="16" width="12" height="2"/>
                                                                            <rect x="2" y="11" width="10" height="2"/>
                                                                            <path
                                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                                        </svg>
                                                                    </div>
                                                                    <p className="text-xs text-neutral-600">ارسال سریع
                                                                        دیجی‌کالا (تهران و کرج)</p>
                                                                </div>
                                                            </div>

                                                            <div
                                                                className="pt-1 flex flex-col items-stretch justify-between">
                                                                <div className="flex items-center justify-between">
                                                                    <div
                                                                        className="px-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                                                        <span>20٪</span>
                                                                    </div>
                                                                    <div
                                                                        className="flex items-center justify-end gap-1 text-neutral-700 text-lg font-bold">
                                                                        <span>212,000</span>
                                                                        <svg
                                                                            className="w-4 h-4 fill-black"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 100 100"
                                                                        >
                                                                            <text x="50%" y="50%" fontSize="48"
                                                                                  textAnchor="middle" fill="black">
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="flex justify-end text-xs text-neutral-300 line-through">
                                                                    <span>265,000</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide swiper-slide-active ml-6 pt-5"
                                             style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/dkp-81973/%DA%A9%D8%B1%D9%85-%D9%85%D8%B1%D8%B7%D9%88%D8%A8-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D8%A2%D8%B1%D8%AF%D9%86-%D8%A8%D8%A7-%D8%B9%D8%B5%D8%A7%D8%B1%D9%87-%DA%86%D8%A7%DB%8C-%D8%B3%D8%A8%D8%B2-%D9%88-%D8%B3%D8%A8%D8%A8%D8%B3-%D8%A8%D8%B1%D9%86%D8%AC-%D9%88%D8%B2%D9%86-150-%DA%AF%D8%B1%D9%85/"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div className="flex flex-col h-full">
                                                    {/* تصویر محصول */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/e8b9ef9b90f415d6077e53989fc0624ebf01fa7c_1634033787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/e8b9ef9b90f415d6077e53989fc0624ebf01fa7c_1634033787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                src="https://dkstatics-public.digikala.com/digikala-products/e8b9ef9b90f415d6077e53989fc0624ebf01fa7c_1634033787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="کرم مرطوب‌کننده آردن مدل عصاره چای سبز و سبوس برنج وزن 150 گرم"
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* عنوان محصول */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        کرم مرطوب&zwnj;کننده آردن مدل عصاره چای سبز و سبوس برنج مناسب
                                                        پوست&zwnj;های چرب
                                                    </h3>

                                                    {/* ارسال فروشنده */}
                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                        <svg
                                                            viewBox="0 0 390.335 390.335"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4 h-4 ml-2"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M275.329,255.418v45.511H114.36v-45.511l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.133c12.477,8.145,26.57,12.994,41.697,12.994c15.709,0,29.802-4.331,41.697-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244L275.329,255.418z"
                                                                        className="fill-white"
                                                                    />
                                                                    <path
                                                                        d="M93.22,267.83v100.784H50.424v-75.83c0-0.517,0.517-1.099,1.099-1.616L93.22,267.83z"
                                                                        className="fill-white"
                                                                    />
                                                                    <path
                                                                        d="M297.503,267.83v100.784h42.279v-75.83c0-0.517-0.517-1.099-1.099-1.616L297.503,267.83z"
                                                                        className="fill-white"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="M266.667,62.448v23.337c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.869V62.448c0-7.564,4.331-14.093,11.378-17.325l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622C262.335,48.356,266.667,54.885,266.667,62.448z"
                                                                    className="fill-sky-400"
                                                                />
                                                                <path
                                                                    d="M261.236,136.145H128.97c4.331,46.61,30.901,80.743,66.133,80.743C239.515,216.889,257.939,175.709,261.236,136.145z"
                                                                    className="fill-white"
                                                                />
                                                                <g>
                                                                    <rect
                                                                        x="114.36"
                                                                        y="323.168"
                                                                        width="160.97"
                                                                        height="45.511"
                                                                        className="fill-sky-400"
                                                                    />
                                                                    <path
                                                                        d="M121.406,114.489h149.01c-11.378-11.895-39.564-22.238-74.796-22.238C160.97,92.251,132.784,102.529,121.406,114.489z"
                                                                        className="fill-sky-400"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="M349.543,272.162l-90.505-50.424v-14.093c13.576-17.907,22.238-42.279,24.372-71.564h3.814 c5.948,0,10.861-4.848,10.861-10.861c0-8.145-3.232-15.709-8.663-22.756V62.384c0-16.291-9.762-30.901-24.372-37.366L218.376,4.461c-14.093-5.947-30.319-5.947-44.412,0l-46.61,20.622c-15.192,6.529-24.372,21.139-24.372,37.366v40.663c-5.43,6.529-8.145,14.093-8.145,22.238c0,5.947,4.848,10.861,10.861,10.861h2.198c2.198,27.087,10.861,50.941,24.372,68.848v16.291l-91.604,50.812c-7.564,4.331-11.895,11.895-11.895,20.622v86.691c0,5.948,4.848,10.861,10.861,10.861h311.079c5.948,0,10.861-4.849,10.861-10.861v-86.691C361.503,284.121,356.59,275.976,349.543,272.162zM136.016,45.123l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622c7.046,3.232,11.378,9.762,11.378,17.325v23.273c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.933V62.448C124.638,54.885,128.97,48.356,136.016,45.123zM196.202,92.251c34.715,0,63.418,10.279,74.279,22.238H121.406C132.784,102.529,160.97,92.251,196.202,92.251zM128.97,136.145h132.267c-3.232,39.564-21.657,80.743-66.133,80.743C159.871,216.889,133.301,182.756,128.97,136.145zM114.36,255.418l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.198c12.477,8.145,26.57,12.994,41.762,12.994c15.709,0,29.802-4.331,41.762-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244l33.034,18.424v45.511H114.36V255.418zM93.22,368.679h-0.517H50.424v-75.895c0-0.517,0.517-1.099,1.099-1.616l41.762-23.273v100.784H93.22zM114.36,368.679v-45.511h160.97v45.511H114.36zM339.782,368.679h-42.279V267.83l41.762,23.273c0,0,0.517,0.517,0.517,1.616V368.679z"
                                                                    className="fill-blue-900"
                                                                />
                                                            </g>
                                                        </svg>
                                                        ارسال فروشنده
                                                    </div>

                                                    {/* قیمت */}
                                                    <div
                                                        className="mt-5 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                        <span className="ml-1" data-testid="price-final">87,970</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                             className="w-6 h-6">
                                                            <text x="50%" y="50%" fontSize="48" textAnchor="middle"
                                                                  alignmentBaseline="middle" fill="black">
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide ml-6 pt-5" style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/dkp-4131706/کرم-آبرسان-ژوت-کد-04-حجم-120-میلی-لیتر/"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div data-testid="product-card" className="flex flex-col h-full">

                                                    {/* تصویر محصول */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/e2a67418c5276ecb5edf077e1011a226e0ea8c5d_1609406787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/e2a67418c5276ecb5edf077e1011a226e0ea8c5d_1609406787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                src="https://dkstatics-public.digikala.com/digikala-products/e2a67418c5276ecb5edf077e1011a226e0ea8c5d_1609406787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="کرم آبرسان ژوت کد 04 حجم 120 میلی‌لیتر"
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* عنوان محصول */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        کرم آبرسان دست و صورت ژوت، مدل HYDRAACTIVE، مناسب انواع پوست،
                                                        حاوی ویتامین E، شی‌ باتر، دکسپانتنول، آلوئه‌ورا و روغن زیتون،
                                                        مرطوب‌کننده عمقی، التیام بخش، بدون چربی و پارابن، حجم 70
                                                        میلی‌لیتر
                                                    </h3>

                                                    {/* ارسال سریع */}
                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                        <svg
                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                            viewBox="0 0 32 32"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect x="4" y="16" width="12" height="2"/>
                                                            <rect x="2" y="11" width="10" height="2"/>
                                                            <path
                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                        </svg>
                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                    </div>

                                                    {/* قیمت */}
                                                    <div
                                                        className="mt-1 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                        <span className="ml-1" data-testid="price-final">185,000</span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 100 100"
                                                            className="w-6 h-6"
                                                        >
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide swiper-slide-active ml-6 pt-5"
                                             style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/dkp-2075291/کرم-مرطوب-کننده-و-آب-رسان-فیس-دوکس-مدل-hydra-مناسب-پوست-های-چرب-و-آکنه-دار"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                    {/* تصویر محصول */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/0b837473096bb98a95cc16378bcde06614a43b9e_1733215306.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/0b837473096bb98a95cc16378bcde06614a43b9e_1733215306.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                src="https://dkstatics-public.digikala.com/digikala-products/0b837473096bb98a95cc16378bcde06614a43b9e_1733215306.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="کرم مرطوب‌کننده صورت فیس دوکس مدل HYDRA حجم 50 میلی‌لیتر"
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* عنوان محصول */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        کرم مرطوب‌کننده صورت فیس دوکس، سری Acnesome مدل HYDRA، مناسب
                                                        پوست‌های چرب و جوش‌دار، حجم ۵۰ میلی‌لیتر
                                                    </h3>

                                                    {/* ارسال سریع دیجی کالا */}
                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                        <svg
                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                            viewBox="0 0 32 32"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect x="4" y="16" width="12" height="2"/>
                                                            <rect x="2" y="11" width="10" height="2"/>
                                                            <path
                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                        </svg>
                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                    </div>

                                                    {/* قیمت */}
                                                    <div
                                                        className="mt-1 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                        <span className="ml-1" data-testid="price-final">270,330</span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 100 100"
                                                            className="w-6 h-6"
                                                        >
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide ml-6 pt-5" style={{width: 'auto', height: 'auto'}}>
                                            <a
                                                href="/product/dkp-3881940/%DA%A9%D8%B1%D9%85-%D8%A2%D8%A8%D8%B1%D8%B3%D8%A7%D9%86-%D9%88%DA%86%D9%87-%D9%85%D8%AF%D9%84-hyaluronic-acid/"
                                                target="_blank"
                                                data-cro-id="related-products"
                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                            >
                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                    {/* Product Image */}
                                                    <div className="relative flex justify-center mb-2">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/2868bd72d53fb457510d048f53a32075f9457605_1606814080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                            />
                                                            <source
                                                                type="image/jpeg"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/2868bd72d53fb457510d048f53a32075f9457605_1606814080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                            />
                                                            <img
                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                src="https://dkstatics-public.digikala.com/digikala-products/2868bd72d53fb457510d048f53a32075f9457605_1606814080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                alt="کرم آبرسان وچه مدل 629 حجم 60 میلی‌لیتر"
                                                            />
                                                        </picture>
                                                    </div>

                                                    {/* Product Title */}
                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                        کرم آبرسان وچه، مدل Hyaluronic Acid، مناسب پوست‌های خشک و نرمال،
                                                        حاوی سیلک پروتئین هیدرولیز شده،
                                                        روغن گیاه اینکا-اینچی و کره دانه گل کاملینا، نرم‌کننده، بدون
                                                        سیلیکون و پارابن، برای صورت و دست،
                                                        حجم 60 میلی‌لیتر
                                                    </h3>

                                                    {/* Fast Delivery Info */}
                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                        <svg
                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                            viewBox="0 0 32 32"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect x="4" y="16" width="12" height="2"/>
                                                            <rect x="2" y="11" width="10" height="2"/>
                                                            <path
                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"
                                                            />
                                                        </svg>
                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                    </div>

                                                    {/* Price */}
                                                    <div
                                                        className="mt-1 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                        <span className="ml-1" data-testid="price-final">256,230</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                             className="w-6 h-6">
                                                            <text
                                                                x="50%"
                                                                y="50%"
                                                                fontSize="48"
                                                                textAnchor="middle"
                                                                alignmentBaseline="middle"
                                                                fill="black"
                                                            >
                                                                تومان
                                                            </text>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full block sticky z-10 bg-white mt-5" style={{ top: "100px" }}>
                        <div>
                            <ul className="flex relative border-b border-complete-b-200 w-full overflow-x-auto hide-scrollbar">
                                {[
                                    { id: 0, label: "معرفـی", section: "introduction" },
                                    { id: 1, label: "بررسی تخصصی", section: "expertReview" },
                                    { id: 2, label: "مشخصات", section: "specifications" },
                                    { id: 3, label: "دیدگاه‌ها", section: "comments" },
                                    { id: 4, label: "پرسش‌ها", section: "questions" },
                                ].map((tab) => (
                                    <li
                                        key={tab.id}
                                        className={`relative px-4 py-2 flex items-center justify-center lg:justify-start cursor-pointer text-sm font-bold min-w-fit max-w-[300px] lg:max-w-[400px] overflow-hidden ${
                                            activeTab === tab.id ? "text-red-600" : "text-neutral-500"
                                        }`}
                                        onClick={() => handleTabClick(tab.id, tab.section)}
                                    >
                                        {tab.label}
                                        <div
                                            className={`absolute bottom-0 left-0 w-full ${
                                                activeTab === tab.id ? "border-b-2 border-red-600" : "opacity-0"
                                            }`}
                                        ></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="grow min-w-0">
                            <div>
                                <section ref={introductionRef} id="introduction" className="">
                                    {/* معرفی */}
                                    <div className="lg:mt-4 px-5 lg:px-0 pb-5 border-b-4 border-gray-100">
                                        <div>
                                            <div className="break-words py-3">
                                                <div className="flex items-center grow">
                                                    <span className="relative text-lg font-bold">معرفی</span>
                                                </div>
                                                <div className="mt-2 border-b-2 absolute w-20 border-red-500"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={`text-md text-neutral-800 ${expandedSections.introduction ? "" : "line-clamp-3"}`}>
                                                کرم مرطوب کننده و آبرسان لافارر مدل 04 با حجم 75 میلی لیتر، یک محصول مراقبتی متمایز است که برای پوست های حساس طراحی شده است. این کرم با داشتن مجوز از سازمان غذا و دارو، اطمینان از کیفیت و ایمنی را به همراه دارد. فرمولاسیون این کرم شامل روغن های طبیعی است که به تغذیه عمیق پوست کمک کرده و با ویتامین های E و C، به ترمیم و محافظت از پوست در برابر عوامل محیطی کمک می کند. جنس محفظه پلاستیکی و طراحی تیوپی آن، استفاده راحت و بهداشتی را امکان پذیر میسازد. کرم لافارر مدل 04، با تأکید بر مراقبت ملایم و مؤثر، گزینه ای عالی برای مراقبت روزانه از پوست دست و صورت است. با ترکیبات مغذی و مرطوب کننده، این کرم به حفظ نرمی و لطافت پوست کمک کرده و به پیشگیری از خشکی و تحریک پوست میپردازد. کرم مرطوب کننده و آبرسان لافارر، با توجه به ویژگی های برجسته و کیفیت بالای خود، انتخابی ایده آل برای افرادی است که به دنبال محصولی هستند که هم آبرسانی کند و هم به سلامت و زیبایی پوست شان کمک کند.</div>
                                            <div className="mt-2 mb-3 pr-0 flex items-center cursor-pointer text-button-2" onClick={() => toggleExpand('introduction')}>
                                            <span className="text-blue-400 text-sm mr-1">
                                                {expandedSections.introduction ? "بستن" : "بیشتر"}
                                            </span>
                                                <span className="flex transition-transform duration-300" style={{ transform: expandedSections.introduction ? "rotate(180deg)" : "rotate(0deg)" }}>
                                                <ChevronLeft className="text-blue-300 w-4 h-4" />
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section ref={expertReviewRef} id="expertReview" className="">
                                    {/* بررسی تخصصی */}
                                    <div className="lg:mt-4 px-5 lg:px-0 pb-5 border-b-4 border-gray-100">
                                        <div>
                                            <div className="break-words py-3">
                                                <div className="flex items-center grow">
                                                    <span className="relative text-lg font-bold">بررسی تخصصی</span>
                                                </div>
                                                <div className="mt-2 border-b-2 absolute w-20 border-red-500"></div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* عنوان اصلی */}
                                            <div className={`text-md font-semibold text-neutral-800 ${expandedSections.expertReview ? "" : "line-clamp-2"}`}>
                                                <div className="font-semibold text-lg">
                                                    کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 مناسب پوست‌های حساس حجم 75 میلی‌لیتر
                                                </div>
                                            </div>

                                            {/* متن و عکس */}
                                            <div className="lg:flex lg:justify-between lg:items-start mb-4 gap-6">
                                                <div className="text-neutral-800 flex-1 pt-3">
                                                    یکی از این محصولات پوستی با کیفیت برند لافارر که به طور خاص برای
                                                    پوست‌های حساس فرموله شده است، «کرم مرطوب‌کننده و آبرسان دست و صورت
                                                    لافارر مدل 04» است. ضد التهاب بودن این کرم، آن را به یک انتخاب ایده‌آل
                                                    برای افرادی که پوست حساس دارند، تبدیل کرده است. اگر شما نیز از مشکلاتی
                                                    مانند قرمزی، سوزش و خارش پوست رنج می‌برید، این کرم می‌تواند به شما کمک
                                                    کند تا پوست خود را سالم نگه دارید. حجم مناسب و محفظه تیوپی پلاستیکی این
                                                    کرم، استفاده از آن را بسیار آسان و بهداشتی کرده است. شما می‌توانید
                                                    به‌راحتی این کرم را در کیف خود قرار داده و در هر زمان و مکانی از آن
                                                    استفاده کنید. با توجه به تمامی این ویژگی‌ها، اگر به دنبال یک کرم
                                                    مرطوب‌کننده و آبرسان با کیفیت و مؤثر برای پوست حساس خود هستید، کرم
                                                    مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 یک انتخاب عالی برای شما
                                                    خواهد بود.
                                                </div>
                                                <div className="mt-4 lg:mt-0 flex-shrink-0">
                                                    <div className="rounded-md overflow-hidden" style={{ width: "280px", lineHeight: "0" }}>
                                                        <img
                                                            className="w-full h-auto object-cover"
                                                            src="https://dkstatics-public.digikala.com/digikala-reviews/08cb6f44f91161ff5db758b0e1bfd212ca1ff145_1717771130.webp?x-oss-process=image/quality,q_70"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* این قسمت فقط وقتی expandedSections.expertReview باز بود نشون داده میشه */}
                                            {expandedSections.expertReview && (
                                                <>
                                                    <div className="pb-6 mb-2 border-t border-b border-gray-300">
                                                        <div className="font-semibold text-lg pt-2">
                                                            ویژگی‌های کلیدی کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04
                                                        </div>
                                                        <div className="mb-4 mt-4">
                                                            <p className="text-sm text-neutral-800 leading-relaxed">
                                                                کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04، مناسب پوست‌های حساس با حجم ۷۵ میلی‌لیتر، دارای ویژگی‌های کلیدی زیر است:
                                                            </p>
                                                        </div>
                                                        <div className="mb-4">
                                                            <p className="text-sm text-neutral-800 leading-relaxed">
                                                                ● مرطوب‌کنندگی عمیق: ترکیبات مرطوب‌کننده موجود در این کرم به عمق پوست نفوذ کرده و رطوبت لازم را به پوست می‌رسانند.
                                                            </p>
                                                        </div>
                                                        <div className="mb-4">
                                                            <p className="text-sm text-neutral-800 leading-relaxed">
                                                                ● آبرسانی قوی: این محصول با خاصیت آبرسانی بالا، به بازسازی لایه‌های رطوبتی پوست کمک کرده و از خشکی و کشیدگی پوست جلوگیری می‌کند.
                                                            </p>
                                                        </div>
                                                        <div className="mb-4">
                                                            <p className="text-sm text-neutral-800 leading-relaxed">
                                                                ● ضد التهاب و آرامش‌بخش: با داشتن ترکیبات ضد التهاب، این کرم به کاهش التهابات پوستی و قرمزی کمک می‌کند.
                                                            </p>
                                                        </div>
                                                        <div className="mb-4">
                                                            <p className="text-sm text-neutral-800 leading-relaxed">
                                                                ● بافت سبک و جذب سریع: بافت سبک این کرم به‌سرعت جذب پوست می‌شود و حس چربی و چسبندگی باقی نمی‌گذارد.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="pb-6 mb-2 border-b border-gray-300">
                                                        <div className="font-semibold text-lg pt-2">
                                                            خواص و عملکرد عالی
                                                        </div>
                                                        <div className="lg:flex lg:justify-between items-start mb-4">
                                                            <div className="flex justify-center">
                                                                <div className="rounded" style={{ width: '340px', lineHeight: 0 }}>
                                                                    <img
                                                                        className="w-full inline-block object-contain"
                                                                        src="https://dkstatics-public.digikala.com/digikala-reviews/3afef97518732488d35c11f11c3bc797a5cef76d_1717771451.webp?x-oss-process=image/quality,q_70"
                                                                        width="340"
                                                                        alt=""
                                                                        title=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 mr-4">
                                                                <p className="text-md text-neutral-800">
                                                                    کرم مرطوب‌کننده و آبرسان لافارر مدل 04، دارای ترکیبات طبیعی و ویژه‌ای است که باعث می‌شود پوست شما همیشه نرم، مرطوب و درخشان بماند. یکی از نکات برجسته این محصول، وجود روغن‌های طبیعی در ترکیبات آن است. این روغن‌ها نه‌تنها به مرطوب‌کنندگی پوست کمک می‌کنند؛ بلکه خواص ضد التهابی نیز دارند.
                                                                    محصولات مراقبت از پوست باید به‌گونه‌ای باشند که علاوه بر تغذیه و رطوبت‌رسانی به پوست، به بهبود وضعیت کلی پوست نیز کمک کنند. کرم مرطوب‌کننده و آبرسان لافارر با داشتن ویتامین‌های E و C و روغن‌های طبیعی، تمامی این نیازها را برآورده می‌کند. ویتامین E به‌عنوان یک آنتی‌اکسیدان قوی، از پوست در برابر آسیب‌های محیطی محافظت می‌کند و ویتامین C نیز به تولید کلاژن و جوان‌سازی پوست کمک می‌کند.
                                                                    یکی از ویژگی‌های منحصربه‌فرد این محصول، ضد التهاب بودن آن است. افرادی که پوست حساس دارند، معمولاً با مشکلات التهابی مانند قرمزی، سوزش و خارش مواجه می‌شوند. این کرم با ترکیبات خاص خود می‌تواند این مشکلات را کاهش داده و حس راحتی و آرامش را به پوست شما بازگرداند.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pb-6 mb-2 border-b border-gray-300">
                                                        <div className="font-semibold text-lg pt-2">
                                                            نحوه استفاده
                                                        </div>
                                                        <div className="lg:flex lg:justify-between items-start mb-4 pt-4">
                                                            <div>
                                                                <p className="text-base text-neutral-800 leading-relaxed">
                                                                    محفظه تیوپی پلاستیکی این کرم، استفاده از آن را بسیار راحت و بهداشتی کرده است. شما می‌توانید به‌راحتی مقدار مورد نیاز از کرم را خارج کرده و بدون هیچ‌گونه مشکلی از آن استفاده کنید. همچنین، این محفظه باعث می‌شود کرم به مدت طولانی‌تری تازه و مؤثر باقی بماند.
                                                                    استفاده از کرم مرطوب‌کننده و آبرسان لافارر بسیار ساده است. برای بهترین نتیجه، بهتر است ابتدا پوست خود را به‌خوبی شستشو داده و خشک کنید. سپس مقدار مناسبی از کرم را بر روی پوست دست و صورت خود بمالید و به‌آرامی ماساژ دهید تا کرم به‌خوبی جذب پوست شود. توصیه می‌شود این کار را دو بار در روز (صبح و شب) انجام دهید تا پوست شما همیشه مرطوب و شاداب باقی بماند. در صورتی که پوست شما بسیار خشک و حساس است، می‌توانید بنا به دستور پزشک خود تعداد دفعات استفاده را افزایش دهید.
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-center mt-4 mr-4">
                                                                <div className="rounded" style={{ width: '340px', lineHeight: 0 }}>
                                                                    <img
                                                                        className="w-full inline-block object-contain"
                                                                        src="https://dkstatics-public.digikala.com/digikala-reviews/a465954672f7cb10b51cf8619b310d142d593445_1717771475.webp?x-oss-process=image/quality,q_70"
                                                                        width="340"
                                                                        alt=""
                                                                        title=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pb-6 mb-2 border-b border-gray-300">
                                                        <div className="font-semibold text-lg pt-2">
                                                            نتیجه‌گیری
                                                        </div>
                                                        <div className="mb-4 pt-4">
                                                            <p className="text-base text-neutral-800 leading-relaxed">
                                                                اگر به دنبال یک کرم مرطوب‌کننده و آبرسان مؤثر و با کیفیت برای پوست حساس خود هستید،
                                                                کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 می‌تواند یکی از بهترین انتخاب‌ها باشد.
                                                                این کرم با ترکیبات طبیعی و خاص خود، نه‌تنها پوست شما را مرطوب و نرم می‌کند؛ بلکه از آن
                                                                در برابر التهابات و آسیب‌های محیطی نیز محافظت می‌کند.
                                                            </p>
                                                        </div>

                                                    </div>
                                                </>
                                            )}

                                            {/* دکمه بیشتر/بستن */}
                                            <div className="mt-2 mb-3 pr-0 flex items-center cursor-pointer text-button-2" onClick={() => toggleExpand('expertReview')}>
                                            <span className="text-blue-400 text-sm mr-1">
                                                {expandedSections.expertReview ? "بستن" : "مشاهده بیشتر"}
                                            </span>
                                                <span className="flex transition-transform duration-300" style={{ transform: expandedSections.expertReview ? "rotate(180deg)" : "rotate(0deg)" }}>
                                                <ChevronLeft className="text-blue-300 w-4 h-4" />
                                            </span>
                                            </div>
                                        </div>

                                    </div>
                                </section>

                                <section ref={specificationsRef} id="specifications" className="">
                                    {/*مشخصات*/}
                                    <div className="lg:mt-4 px-5 lg:px-0 pb-5 border-b-4 border-gray-100">
                                        <div id="specifications">
                                            <div className="break-words py-3">
                                                <div className="flex items-center grow">
                                                    <span className="relative text-lg font-bold">مشخصات</span>
                                                </div>
                                                <div className="mt-2 border-b-2 absolute w-20 border-red-500"></div>
                                            </div>

                                            {/*مشخصات کامل*/}
                                            <div className="mt-4 pt-4 bg-white pr-10">
                                                <h2 className="text-lg font-bold text-neutral-700 mb-4">مشخصات</h2>
                                                <div className="flex flex-col items-center gap-4 w-full pr-0 md:pr-20 lg:pr-40 xl:pr-60">
                                                    {displayedSpecs.map(([key, value]) => (
                                                        <div key={key} className="flex items-center gap-20 w-full">
                                                            <span className="text-sm text-neutral-500 text-right w-32">{key}</span>
                                                            {Array.isArray(value) ? (
                                                                <div className="flex gap-2 border-b border-gray-200 pb-3 w-full">
                                                                    {value.map((item) => (
                                                                        <span
                                                                            key={item}
                                                                            className="px-2 py-0.5 text-sm text-white bg-neutral-700 rounded-full"
                                                                        >
                                                                            {item}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <div className="w-full border-b border-gray-200 pb-3">
                                                                    <span className="text-sm text-neutral-900 text-right block">{value}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {entries.length > previewCount && (
                                                    <div
                                                        className="mt-2 mb-3 pr-0 flex items-center cursor-pointer text-button-2"
                                                        onClick={() => toggleExpand('specifications')}
                                                    >
                                                        <span className="text-blue-400 text-sm mr-1">
                                                            {expandedSections.specifications ? 'بستن' : 'مشاهده بیشتر'}
                                                        </span>
                                                        <span
                                                            className="flex transition-transform duration-300"
                                                            style={{ transform: expandedSections.specifications ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                                        >
                                                            <ChevronLeft className="text-blue-300 w-4 h-4" />
                                                        </span>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div id="lazyload-wrapper">
                                    <div>
                                        <div
                                            className="flex flex-col relative overflow-hidden w-full pt-2 lg:border lg:rounded-md lg:mt-4 pb-3 lg:w-auto">
                                            <div className="break-words py-3 px-4">
                                                <div className="flex items-center grow">
                                                    <p className="grow">
                                                        <span className="block text-h5 font-bold pb-2 text-neutral-900">
                                                            پیشنهاد فروشندگان
                                                        </span>
                                                        <span className="block text-sm pb-2 w-fit border-b-2 border-red-600">
                                                            آگهی‌شده
                                                        </span>
                                                    </p>

                                                </div>
                                            </div>

                                            {/* کادر اسلایدر */}
                                            <div className="relative">
                                                {/* دکمه‌های چپ و راست (جابجا شده) */}
                                                {!isAtEnd && (
                                                    <button
                                                        onClick={scrollLeft}
                                                        className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white shadow-md rounded-full p-2"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 text-gray-500"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"/>
                                                        </svg>
                                                    </button>
                                                )}
                                                {!isAtStart && (
                                                    <button
                                                        onClick={scrollRight}
                                                        className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white shadow-md rounded-full p-2"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 text-gray-500 rotate-180"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"/>
                                                        </svg>
                                                    </button>
                                                )}

                                                {/* اسلایدر */}
                                                <div
                                                    id="slider"
                                                    ref={sliderRef}
                                                    className="swiper-container rtl flex overflow-x-hidden touch-pan-x snap-x snap-mandatory cursor-grab"
                                                >
                                                    <div className="swiper-wrapper flex space-x-4 px-8">
                                                        <div className="swiper-slide swiper-slide-active ml-6 pt-5"
                                                             style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                                    {/* تصویر محصول */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/6be7e06d3e82e423dd6e0286a4bf02d3cb5435a2_1639038594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/6be7e06d3e82e423dd6e0286a4bf02d3cb5435a2_1639038594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/6be7e06d3e82e423dd6e0286a4bf02d3cb5435a2_1639038594.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="ژل مرطوب‌کننده و آبرسان مدل Hyaloranic Acid حجم 100 میلی‌لیتر"
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* عنوان محصول */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        ژل مرطوب‌کننده و آبرسان رومینا، مدل Hyaloranic Acid، مناسب
                                                                        پوست‌های چرب و مستعد جوش، با عصاره آلوئه‌ورا...
                                                                    </h3>

                                                                    {/* ارسال فروشنده */}
                                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                                        <svg
                                                                            viewBox="0 0 390.335 390.335"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-4 h-4 ml-2"
                                                                        >
                                                                            <g>
                                                                                <g>
                                                                                    <path
                                                                                        d="M275.329,255.418v45.511H114.36v-45.511l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.133c12.477,8.145,26.57,12.994,41.697,12.994c15.709,0,29.802-4.331,41.697-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244L275.329,255.418z"
                                                                                        className="fill-white"
                                                                                    />
                                                                                    <path
                                                                                        d="M93.22,267.83v100.784H50.424v-75.83c0-0.517,0.517-1.099,1.099-1.616L93.22,267.83z"
                                                                                        className="fill-white"
                                                                                    />
                                                                                    <path
                                                                                        d="M297.503,267.83v100.784h42.279v-75.83c0-0.517-0.517-1.099-1.099-1.616L297.503,267.83z"
                                                                                        className="fill-white"
                                                                                    />
                                                                                </g>
                                                                                <path
                                                                                    d="M266.667,62.448v23.337c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.869V62.448c0-7.564,4.331-14.093,11.378-17.325l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622C262.335,48.356,266.667,54.885,266.667,62.448z"
                                                                                    className="fill-sky-400"
                                                                                />
                                                                                <path
                                                                                    d="M261.236,136.145H128.97c4.331,46.61,30.901,80.743,66.133,80.743C239.515,216.889,257.939,175.709,261.236,136.145z"
                                                                                    className="fill-white"
                                                                                />
                                                                                <g>
                                                                                    <rect
                                                                                        x="114.36"
                                                                                        y="323.168"
                                                                                        width="160.97"
                                                                                        height="45.511"
                                                                                        className="fill-sky-400"
                                                                                    />
                                                                                    <path
                                                                                        d="M121.406,114.489h149.01c-11.378-11.895-39.564-22.238-74.796-22.238C160.97,92.251,132.784,102.529,121.406,114.489z"
                                                                                        className="fill-sky-400"
                                                                                    />
                                                                                </g>
                                                                                <path
                                                                                    d="M349.543,272.162l-90.505-50.424v-14.093c13.576-17.907,22.238-42.279,24.372-71.564h3.814 c5.948,0,10.861-4.848,10.861-10.861c0-8.145-3.232-15.709-8.663-22.756V62.384c0-16.291-9.762-30.901-24.372-37.366L218.376,4.461c-14.093-5.947-30.319-5.947-44.412,0l-46.61,20.622c-15.192,6.529-24.372,21.139-24.372,37.366v40.663c-5.43,6.529-8.145,14.093-8.145,22.238c0,5.947,4.848,10.861,10.861,10.861h2.198c2.198,27.087,10.861,50.941,24.372,68.848v16.291l-91.604,50.812c-7.564,4.331-11.895,11.895-11.895,20.622v86.691c0,5.948,4.848,10.861,10.861,10.861h311.079c5.948,0,10.861-4.849,10.861-10.861v-86.691C361.503,284.121,356.59,275.976,349.543,272.162zM136.016,45.123l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622c7.046,3.232,11.378,9.762,11.378,17.325v23.273c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.933V62.448C124.638,54.885,128.97,48.356,136.016,45.123zM196.202,92.251c34.715,0,63.418,10.279,74.279,22.238H121.406C132.784,102.529,160.97,92.251,196.202,92.251zM128.97,136.145h132.267c-3.232,39.564-21.657,80.743-66.133,80.743C159.871,216.889,133.301,182.756,128.97,136.145zM114.36,255.418l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.198c12.477,8.145,26.57,12.994,41.762,12.994c15.709,0,29.802-4.331,41.762-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244l33.034,18.424v45.511H114.36V255.418zM93.22,368.679h-0.517H50.424v-75.895c0-0.517,0.517-1.099,1.099-1.616l41.762-23.273v100.784H93.22zM114.36,368.679v-45.511h160.97v45.511H114.36zM339.782,368.679h-42.279V267.83l41.762,23.273c0,0,0.517,0.517,0.517,1.616V368.679z"
                                                                                    className="fill-blue-900"
                                                                                />
                                                                            </g>
                                                                        </svg>
                                                                        ارسال فروشنده
                                                                    </div>

                                                                    {/* قیمت */}
                                                                    <div
                                                                        className="mt-3 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                                        <span className="ml-1" data-testid="price-final">87,970</span>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 100 100"
                                                                            className="w-6 h-6"
                                                                        >
                                                                            <text
                                                                                x="50%"
                                                                                y="50%"
                                                                                fontSize="48"
                                                                                textAnchor="middle"
                                                                                alignmentBaseline="middle"
                                                                                fill="black"
                                                                            >
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide swiper-slide-next ml-6 pt-5"
                                                             style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/dkp-1046156/کرم-مرطوب-کننده-دکتر-ژیلا-سری-emolient-مدل-eucerin-حجم-75-میلی-لیتر/"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                                    {/* تصویر محصول */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/4940212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/4940212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/4940212.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم مرطوب کننده دکتر ژیلا سری Emolient مدل Eucerin حجم 75 میلی لیتر"
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* عنوان محصول */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        کرم مرطوب کننده دکتر ژیلا سری Emolient مدل Eucerin حجم 75 میلی
                                                                        لیتر
                                                                    </h3>

                                                                    {/* ارسال فروشنده (چون این محصول نداشت، حذف کردم) */}

                                                                    {/* قیمت */}
                                                                    <div
                                                                        className="mt-10 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                                        <span className="ml-1" data-testid="price-final">135,000</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                                             className="w-6 h-6">
                                                                            <text
                                                                                x="50%"
                                                                                y="50%"
                                                                                fontSize="48"
                                                                                textAnchor="middle"
                                                                                alignmentBaseline="middle"
                                                                                fill="black"
                                                                            >
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide ml-6" style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/dkp-708421/کرم-مرطوبکننده-و-آبرسان-دست-و-صورت-لافارر-مدل-02-مناسب-پوستهای-نرمال-و-مختلط-با-عصارههای-بابونه-کالاندولا-و-آلوئهورا-حاوی-ویتامینهای-e-و-c-روغنهای-بادام-و-زیتون-و-گلیسیرین-ضدحساسیت-و-ضدجوش-مناسب-استفاده-در-صبح-و-شب-حجم-75-میلیلیتر/"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                                    {/* بنر تخفیف بالا */}
                                                                    <div className="flex items-center justify-start mb-1">
                                                                        <div className="ml-1 w-16 h-3.5">
                                                                            <img
                                                                                src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                                                                                alt="Special Sale"
                                                                                className="w-full object-contain"
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    {/* تصویر محصول */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/5a707cd1bb58ed7045344ee49abff9d05b79c8e9_1668584314.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/5a707cd1bb58ed7045344ee49abff9d05b79c8e9_1668584314.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/5a707cd1bb58ed7045344ee49abff9d05b79c8e9_1668584314.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 02 مناسب پوست‌های نرمال و مختلط حجم 75 میلی‌لیتر"
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* عنوان محصول */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 02 مناسب پوست‌های
                                                                        نرمال و مختلط حجم 75 میلی‌لیتر
                                                                    </h3>

                                                                    {/* ارسال سریع دیجی کالا */}
                                                                    <div
                                                                        className="flex items-center justify-start text-xs text-neutral-600 mb-2">
                                                                        <svg
                                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                            viewBox="0 0 32 32"
                                                                            fill="currentColor"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <rect x="4" y="16" width="12" height="2"/>
                                                                            <rect x="2" y="11" width="10" height="2"/>
                                                                            <path
                                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                                        </svg>
                                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                                    </div>

                                                                    {/* قیمت + تخفیف */}
                                                                    <div className="mt-auto flex flex-col gap-1">
                                                                        {/* قیمت با تخفیف */}
                                                                        <div className="flex items-center justify-between">
                                                                            <div
                                                                                className="px-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                                                                <span data-testid="price-discount-percent">45٪</span>
                                                                            </div>
                                                                            <div
                                                                                className="flex items-center gap-1 font-bold text-sm md:text-lg text-neutral-700">
                                                                                <span data-testid="price-final">153,310</span>
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                     viewBox="0 0 100 100" className="w-6 h-6">
                                                                                    <text
                                                                                        x="50%"
                                                                                        y="50%"
                                                                                        fontSize="48"
                                                                                        textAnchor="middle"
                                                                                        alignmentBaseline="middle"
                                                                                        fill="black"
                                                                                    >
                                                                                        تومان
                                                                                    </text>
                                                                                </svg>
                                                                            </div>
                                                                        </div>

                                                                        {/* قیمت بدون تخفیف */}
                                                                        <div
                                                                            className="flex justify-end text-xs text-neutral-400 line-through">
                                                                            <span data-testid="price-no-discount">278,750</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide ml-6" style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/"
                                                                target="_blank"
                                                                className="block cursor-pointer relative bg-neutral-000 overflow-hidden grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div className="h-full">
                                                                    <article
                                                                        className="overflow-hidden flex flex-col items-stretch justify-start h-full">
                                                                        {/* بنر تخفیف */}
                                                                        <div className="flex items-center justify-start mb-1">
                                                                            <div className="ml-1 w-16 h-3.5">
                                                                                <img
                                                                                    src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                                                                                    alt=""
                                                                                    className="w-full object-contain"
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        {/* تصویر محصول */}
                                                                        <div className="relative flex justify-center mb-1">
                                                                            <picture>
                                                                                <source
                                                                                    type="image/webp"
                                                                                    src="https://dkstatics-public.digikala.com/digikala-products/ef6e03b9115f2774463df9adf9b583839213d7fa_1646904028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                                />
                                                                                <source
                                                                                    type="image/jpeg"
                                                                                    src="https://dkstatics-public.digikala.com/digikala-products/ef6e03b9115f2774463df9adf9b583839213d7fa_1646904028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                />
                                                                                <img
                                                                                    className="w-[150px] h-[150px] object-contain rounded-md"
                                                                                    src="https://dkstatics-public.digikala.com/digikala-products/ef6e03b9115f2774463df9adf9b583839213d7fa_1646904028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                    alt="ژل آبرسان ساین اسکین مدل aqua حجم 75 میلی‌لیتر"
                                                                                />
                                                                            </picture>
                                                                        </div>

                                                                        {/* عنوان محصول */}
                                                                        <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                            کرم ژل آبرسان ساین اسکین، مدل Synaqua، مناسب انواع پوست،
                                                                            حاوی Patch2o، بایوسرامید و هیالورونیک‌اسید، مناسب استفاده در
                                                                            روز و شب و برای صورت و بدن، حجم 75 میلی‌لیتر
                                                                        </h3>

                                                                        {/* ارسال سریع دیجی کالا */}
                                                                        <div
                                                                            className="flex items-center justify-start text-xs text-neutral-600 mb-2">
                                                                            <svg
                                                                                className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <rect x="4" y="16" width="12" height="2"/>
                                                                                <rect x="2" y="11" width="10" height="2"/>
                                                                                <path
                                                                                    d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                                            </svg>
                                                                            ارسال سریع دیجی‌کالا (تهران و کرج)
                                                                        </div>

                                                                        {/* قیمت + تخفیف */}
                                                                        <div className="mt-auto flex flex-col gap-1">
                                                                            {/* قیمت با تخفیف */}
                                                                            <div className="flex items-center justify-between">
                                                                                <div
                                                                                    className="px-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                                                    <span
                                                                        data-testid="price-discount-percent">35٪</span>
                                                                                </div>
                                                                                <div
                                                                                    className="flex items-center gap-1 font-bold text-sm md:text-lg text-neutral-700">
                                                                                    <span data-testid="price-final">219,660</span>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                         viewBox="0 0 100 100" className="w-6 h-6">
                                                                                        <text
                                                                                            x="50%"
                                                                                            y="50%"
                                                                                            fontSize="48"
                                                                                            textAnchor="middle"
                                                                                            alignmentBaseline="middle"
                                                                                            fill="black"
                                                                                        >
                                                                                            تومان
                                                                                        </text>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>

                                                                            {/* قیمت بدون تخفیف */}
                                                                            <div
                                                                                className="flex justify-end text-xs text-neutral-400 line-through">
                                                                                <span data-testid="price-no-discount">337,950</span>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide ml-6" style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                                className="block cursor-pointer relative bg-neutral-000 overflow-hidden grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div className="h-full">
                                                                    <article
                                                                        className="overflow-hidden flex flex-col items-stretch justify-start h-full">
                                                                        <div className="flex items-center justify-start mb-1">
                                                                            <div className="ml-1 w-16 h-3.5">
                                                                                <img
                                                                                    className="w-full object-contain"
                                                                                    src="https://www.digikala.com/statics/img/svg/productCard/topBadge/SpecialSell.svg"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex grow relative flex-col mb-1">
                                                                            <div className="flex items-stretch flex-col relative mb-1">
                                                                                <div className="flex items-start mx-auto">
                                                                                    <div className="relative w-[150px] h-[150px]">
                                                                                        <picture>
                                                                                            <source
                                                                                                type="image/webp"
                                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e0d933b33351111774c06932557b76713c4a0c3b_1662494767.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                                            />
                                                                                            <source
                                                                                                type="image/jpeg"
                                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e0d933b33351111774c06932557b76713c4a0c3b_1662494767.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                            />
                                                                                            <img
                                                                                                className="w-full rounded-md object-contain"
                                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e0d933b33351111774c06932557b76713c4a0c3b_1662494767.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                                alt="کرم مرطوب&zwnj;کننده و آبرسان لایت بیوتی مدل ََشی&zwnj;باتر آرگان حجم 250 میلی&zwnj;لیتر"
                                                                                            />
                                                                                        </picture>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="grow flex flex-col items-stretch justify-start">
                                                                            <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 mb-2">
                                                                                کرم مرطوب&zwnj;کننده و آبرسان دست و صورت لایت بیوتی، مدل
                                                                                Shea Butter، مناسب انواع پوست، حاوی روغن آرگان، اوسرین،
                                                                                بیزواکس، روغن بادام شیرین، ویتامین E، روغن نارگیل، روغن
                                                                                زیتون و گلیسیرین، تغذیه&zwnj;کننده پوست، حجم 250
                                                                                میلی&zwnj;لیتر
                                                                            </h3>

                                                                            <div className="mb-1 flex items-center justify-between">
                                                                                <div className="flex items-center">
                                                                                    <div className="flex shrink-0 ml-1">
                                                                                        <svg
                                                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                                            viewBox="0 0 32 32"
                                                                                            fill="currentColor"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <rect x="4" y="16" width="12" height="2"/>
                                                                                            <rect x="2" y="11" width="10" height="2"/>
                                                                                            <path
                                                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <p className="text-xs text-neutral-600">ارسال سریع
                                                                                        دیجی‌کالا (تهران و کرج)</p>
                                                                                </div>
                                                                            </div>

                                                                            <div
                                                                                className="pt-1 flex flex-col items-stretch justify-between">
                                                                                <div className="flex items-center justify-between">
                                                                                    <div
                                                                                        className="px-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                                                                        <span>20٪</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="flex items-center justify-end gap-1 text-neutral-700 text-lg font-bold">
                                                                                        <span>212,000</span>
                                                                                        <svg
                                                                                            className="w-4 h-4 fill-black"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 100 100"
                                                                                        >
                                                                                            <text x="50%" y="50%" fontSize="48"
                                                                                                  textAnchor="middle" fill="black">
                                                                                                تومان
                                                                                            </text>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="flex justify-end text-xs text-neutral-300 line-through">
                                                                                    <span>265,000</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide swiper-slide-active ml-6 pt-5"
                                                             style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/dkp-81973/%DA%A9%D8%B1%D9%85-%D9%85%D8%B1%D8%B7%D9%88%D8%A8-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D8%A2%D8%B1%D8%AF%D9%86-%D8%A8%D8%A7-%D8%B9%D8%B5%D8%A7%D8%B1%D9%87-%DA%86%D8%A7%DB%8C-%D8%B3%D8%A8%D8%B2-%D9%88-%D8%B3%D8%A8%D8%A8%D8%B3-%D8%A8%D8%B1%D9%86%D8%AC-%D9%88%D8%B2%D9%86-150-%DA%AF%D8%B1%D9%85/"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div className="flex flex-col h-full">
                                                                    {/* تصویر محصول */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e8b9ef9b90f415d6077e53989fc0624ebf01fa7c_1634033787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e8b9ef9b90f415d6077e53989fc0624ebf01fa7c_1634033787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e8b9ef9b90f415d6077e53989fc0624ebf01fa7c_1634033787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم مرطوب‌کننده آردن مدل عصاره چای سبز و سبوس برنج وزن 150 گرم"
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* عنوان محصول */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        کرم مرطوب&zwnj;کننده آردن مدل عصاره چای سبز و سبوس برنج مناسب
                                                                        پوست&zwnj;های چرب
                                                                    </h3>

                                                                    {/* ارسال فروشنده */}
                                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                                        <svg
                                                                            viewBox="0 0 390.335 390.335"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-4 h-4 ml-2"
                                                                        >
                                                                            <g>
                                                                                <g>
                                                                                    <path
                                                                                        d="M275.329,255.418v45.511H114.36v-45.511l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.133c12.477,8.145,26.57,12.994,41.697,12.994c15.709,0,29.802-4.331,41.697-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244L275.329,255.418z"
                                                                                        className="fill-white"
                                                                                    />
                                                                                    <path
                                                                                        d="M93.22,267.83v100.784H50.424v-75.83c0-0.517,0.517-1.099,1.099-1.616L93.22,267.83z"
                                                                                        className="fill-white"
                                                                                    />
                                                                                    <path
                                                                                        d="M297.503,267.83v100.784h42.279v-75.83c0-0.517-0.517-1.099-1.099-1.616L297.503,267.83z"
                                                                                        className="fill-white"
                                                                                    />
                                                                                </g>
                                                                                <path
                                                                                    d="M266.667,62.448v23.337c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.869V62.448c0-7.564,4.331-14.093,11.378-17.325l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622C262.335,48.356,266.667,54.885,266.667,62.448z"
                                                                                    className="fill-sky-400"
                                                                                />
                                                                                <path
                                                                                    d="M261.236,136.145H128.97c4.331,46.61,30.901,80.743,66.133,80.743C239.515,216.889,257.939,175.709,261.236,136.145z"
                                                                                    className="fill-white"
                                                                                />
                                                                                <g>
                                                                                    <rect
                                                                                        x="114.36"
                                                                                        y="323.168"
                                                                                        width="160.97"
                                                                                        height="45.511"
                                                                                        className="fill-sky-400"
                                                                                    />
                                                                                    <path
                                                                                        d="M121.406,114.489h149.01c-11.378-11.895-39.564-22.238-74.796-22.238C160.97,92.251,132.784,102.529,121.406,114.489z"
                                                                                        className="fill-sky-400"
                                                                                    />
                                                                                </g>
                                                                                <path
                                                                                    d="M349.543,272.162l-90.505-50.424v-14.093c13.576-17.907,22.238-42.279,24.372-71.564h3.814 c5.948,0,10.861-4.848,10.861-10.861c0-8.145-3.232-15.709-8.663-22.756V62.384c0-16.291-9.762-30.901-24.372-37.366L218.376,4.461c-14.093-5.947-30.319-5.947-44.412,0l-46.61,20.622c-15.192,6.529-24.372,21.139-24.372,37.366v40.663c-5.43,6.529-8.145,14.093-8.145,22.238c0,5.947,4.848,10.861,10.861,10.861h2.198c2.198,27.087,10.861,50.941,24.372,68.848v16.291l-91.604,50.812c-7.564,4.331-11.895,11.895-11.895,20.622v86.691c0,5.948,4.848,10.861,10.861,10.861h311.079c5.948,0,10.861-4.849,10.861-10.861v-86.691C361.503,284.121,356.59,275.976,349.543,272.162zM136.016,45.123l46.093-20.622c8.663-3.814,18.424-3.814,26.57,0l46.61,20.622c7.046,3.232,11.378,9.762,11.378,17.325v23.273c-17.907-9.244-42.796-15.192-70.982-15.192c-28.444,0-53.139,5.818-70.982,14.933V62.448C124.638,54.885,128.97,48.356,136.016,45.123zM196.202,92.251c34.715,0,63.418,10.279,74.279,22.238H121.406C132.784,102.529,160.97,92.251,196.202,92.251zM128.97,136.145h132.267c-3.232,39.564-21.657,80.743-66.133,80.743C159.871,216.889,133.301,182.756,128.97,136.145zM114.36,255.418l33.034-18.424c3.814-1.616,5.947-5.43,5.947-9.244v-2.198c12.477,8.145,26.57,12.994,41.762,12.994c15.709,0,29.802-4.331,41.762-11.378v0.517c0,3.814,2.198,7.564,5.43,9.244l33.034,18.424v45.511H114.36V255.418zM93.22,368.679h-0.517H50.424v-75.895c0-0.517,0.517-1.099,1.099-1.616l41.762-23.273v100.784H93.22zM114.36,368.679v-45.511h160.97v45.511H114.36zM339.782,368.679h-42.279V267.83l41.762,23.273c0,0,0.517,0.517,0.517,1.616V368.679z"
                                                                                    className="fill-blue-900"
                                                                                />
                                                                            </g>
                                                                        </svg>
                                                                        ارسال فروشنده
                                                                    </div>

                                                                    {/* قیمت */}
                                                                    <div
                                                                        className="mt-5 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                                        <span className="ml-1" data-testid="price-final">87,970</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                                             className="w-6 h-6">
                                                                            <text x="50%" y="50%" fontSize="48" textAnchor="middle"
                                                                                  alignmentBaseline="middle" fill="black">
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide ml-6 pt-5" style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/dkp-4131706/کرم-آبرسان-ژوت-کد-04-حجم-120-میلی-لیتر/"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div data-testid="product-card" className="flex flex-col h-full">

                                                                    {/* تصویر محصول */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e2a67418c5276ecb5edf077e1011a226e0ea8c5d_1609406787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e2a67418c5276ecb5edf077e1011a226e0ea8c5d_1609406787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/e2a67418c5276ecb5edf077e1011a226e0ea8c5d_1609406787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم آبرسان ژوت کد 04 حجم 120 میلی‌لیتر"
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* عنوان محصول */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        کرم آبرسان دست و صورت ژوت، مدل HYDRAACTIVE، مناسب انواع پوست،
                                                                        حاوی ویتامین E، شی‌ باتر، دکسپانتنول، آلوئه‌ورا و روغن زیتون،
                                                                        مرطوب‌کننده عمقی، التیام بخش، بدون چربی و پارابن، حجم 70
                                                                        میلی‌لیتر
                                                                    </h3>

                                                                    {/* ارسال سریع */}
                                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                                        <svg
                                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                            viewBox="0 0 32 32"
                                                                            fill="currentColor"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <rect x="4" y="16" width="12" height="2"/>
                                                                            <rect x="2" y="11" width="10" height="2"/>
                                                                            <path
                                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                                        </svg>
                                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                                    </div>

                                                                    {/* قیمت */}
                                                                    <div
                                                                        className="mt-1 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                                        <span className="ml-1" data-testid="price-final">185,000</span>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 100 100"
                                                                            className="w-6 h-6"
                                                                        >
                                                                            <text
                                                                                x="50%"
                                                                                y="50%"
                                                                                fontSize="48"
                                                                                textAnchor="middle"
                                                                                alignmentBaseline="middle"
                                                                                fill="black"
                                                                            >
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide swiper-slide-active ml-6 pt-5"
                                                             style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/dkp-2075291/کرم-مرطوب-کننده-و-آب-رسان-فیس-دوکس-مدل-hydra-مناسب-پوست-های-چرب-و-آکنه-دار"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                                    {/* تصویر محصول */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/0b837473096bb98a95cc16378bcde06614a43b9e_1733215306.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/0b837473096bb98a95cc16378bcde06614a43b9e_1733215306.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/0b837473096bb98a95cc16378bcde06614a43b9e_1733215306.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم مرطوب‌کننده صورت فیس دوکس مدل HYDRA حجم 50 میلی‌لیتر"
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* عنوان محصول */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        کرم مرطوب‌کننده صورت فیس دوکس، سری Acnesome مدل HYDRA، مناسب
                                                                        پوست‌های چرب و جوش‌دار، حجم ۵۰ میلی‌لیتر
                                                                    </h3>

                                                                    {/* ارسال سریع دیجی کالا */}
                                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                                        <svg
                                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                            viewBox="0 0 32 32"
                                                                            fill="currentColor"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <rect x="4" y="16" width="12" height="2"/>
                                                                            <rect x="2" y="11" width="10" height="2"/>
                                                                            <path
                                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                                                        </svg>
                                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                                    </div>

                                                                    {/* قیمت */}
                                                                    <div
                                                                        className="mt-1 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                                        <span className="ml-1" data-testid="price-final">270,330</span>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 100 100"
                                                                            className="w-6 h-6"
                                                                        >
                                                                            <text
                                                                                x="50%"
                                                                                y="50%"
                                                                                fontSize="48"
                                                                                textAnchor="middle"
                                                                                alignmentBaseline="middle"
                                                                                fill="black"
                                                                            >
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="swiper-slide ml-6 pt-5" style={{width: 'auto', height: 'auto'}}>
                                                            <a
                                                                href="/product/dkp-3881940/%DA%A9%D8%B1%D9%85-%D8%A2%D8%A8%D8%B1%D8%B3%D8%A7%D9%86-%D9%88%DA%86%D9%87-%D9%85%D8%AF%D9%84-hyaluronic-acid/"
                                                                target="_blank"
                                                                data-cro-id="related-products"
                                                                className="block relative bg-white grow py-3 px-4 lg:px-2 h-full border-l"
                                                                style={{width: '192px', minWidth: '192px', maxWidth: '192px'}}
                                                            >
                                                                <div data-testid="product-card" className="flex flex-col h-full">
                                                                    {/* Product Image */}
                                                                    <div className="relative flex justify-center mb-2">
                                                                        <picture>
                                                                            <source
                                                                                type="image/webp"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/2868bd72d53fb457510d048f53a32075f9457605_1606814080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
                                                                            />
                                                                            <source
                                                                                type="image/jpeg"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/2868bd72d53fb457510d048f53a32075f9457605_1606814080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                            />
                                                                            <img
                                                                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain rounded-md"
                                                                                src="https://dkstatics-public.digikala.com/digikala-products/2868bd72d53fb457510d048f53a32075f9457605_1606814080.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                                                                alt="کرم آبرسان وچه مدل 629 حجم 60 میلی‌لیتر"
                                                                            />
                                                                        </picture>
                                                                    </div>

                                                                    {/* Product Title */}
                                                                    <h3 className="text-xs font-semibold text-neutral-700 line-clamp-2 leading-snug mb-2">
                                                                        کرم آبرسان وچه، مدل Hyaluronic Acid، مناسب پوست‌های خشک و نرمال،
                                                                        حاوی سیلک پروتئین هیدرولیز شده،
                                                                        روغن گیاه اینکا-اینچی و کره دانه گل کاملینا، نرم‌کننده، بدون
                                                                        سیلیکون و پارابن، برای صورت و دست،
                                                                        حجم 60 میلی‌لیتر
                                                                    </h3>

                                                                    {/* Fast Delivery Info */}
                                                                    <div className="flex items-center text-xs text-neutral-600 mb-2">
                                                                        <svg
                                                                            className="w-5 h-5 ml-1 text-gray-500 transform rotate-180 scale-y-[-1]"
                                                                            viewBox="0 0 32 32"
                                                                            fill="currentColor"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <rect x="4" y="16" width="12" height="2"/>
                                                                            <rect x="2" y="11" width="10" height="2"/>
                                                                            <path
                                                                                d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"
                                                                            />
                                                                        </svg>
                                                                        ارسال سریع دیجی‌کالا (تهران و کرج)
                                                                    </div>

                                                                    {/* Price */}
                                                                    <div
                                                                        className="mt-1 flex items-center justify-end text-neutral-700 font-bold text-sm md:text-lg">
                                                                        <span className="ml-1" data-testid="price-final">256,230</span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                                                                             className="w-6 h-6">
                                                                            <text
                                                                                x="50%"
                                                                                y="50%"
                                                                                fontSize="48"
                                                                                textAnchor="middle"
                                                                                alignmentBaseline="middle"
                                                                                fill="black"
                                                                            >
                                                                                تومان
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <section ref={commentsRef} id="comments" className="">
                                    {/*دیدگاه*/}
                                    <div className="lg:mt-4 px-5 lg:px-0 pb-5 border-b-4 border-gray-100">
                                        <div id="comments">
                                            <div className="break-words py-3">
                                                <div className="flex items-center grow">
                                                    <span className="relative text-lg font-bold">امتیاز دیدگاه کاربران</span>
                                                </div>
                                                <div className="mt-2 border-b-2 absolute w-20 border-red-500"></div>
                                            </div>
                                            <div className="flex justify-start item-start mt-3">
                                                <div className="lg:block ml-12 left-0 sticky styles_pdpCommentQuestionSummary__HRGaN" style={{ top: '171.031px' }}>
                                                    <div className="flex items-center">
                                                        <p className="text-2xl sm:text-3xl font-bold ml-1 leading-none">4.3</p>
                                                        <p> از 5 </p>
                                                    </div>
                                                    <div className="flex items-center mt-1">
                                                        {/* ستاره‌ها */}
                                                        <div className="inline-flex flex-nowrap relative">
                                                            {[...Array(5)].map((_, index) => (
                                                                <div key={index} className="flex">
                                                                    {/* ستاره خاکستری (خالی) */}
                                                                    <svg
                                                                        viewBox="0 0 24 24"
                                                                        fill="#E5E7EB"
                                                                        width="20"
                                                                        height="20"
                                                                    >
                                                                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z" />
                                                                    </svg>
                                                                </div>
                                                            ))}

                                                            {/* روکش ستاره‌های طلایی (امتیاز واقعی) */}
                                                            <div className="absolute right-0 top-0 overflow-hidden h-5" style={{ width: '86%' }}>
                                                                <div className="absolute right-0 top-0 flex flex-nowrap">
                                                                    {[...Array(5)].map((_, index) => (
                                                                        <div key={index} className="flex">
                                                                            <svg
                                                                                viewBox="0 0 24 24"
                                                                                fill="#FBBF24"
                                                                                width="20"
                                                                                height="20"
                                                                            >
                                                                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z" />
                                                                            </svg>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* نوشته مجموع امتیاز */}
                                                        <p className="text-sm text-neutral-400 mr-2">از مجموع 6,824 امتیاز</p>
                                                    </div>
                                                    <p className="text-neutral-700 mt-4 mb-3 text-caption">شما هم درباره این کالا دیدگاه ثبت کنید</p>
                                                    <button className="relative flex items-center border border-red-500 p-2 user-select-none text-button-2 rounded-md w-full mt-2 text-button-2" data-cro-id="pdp-add-comment">
                                                        <div className="flex items-center text-red-500 justify-center relative grow">ثبت دیدگاه</div>
                                                    </button>
                                                    <div className="rounded mt-3">
                                                        <div className="flex">
                                                            <div className="flex mt-1">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    className="w-4 h-4 text-gray-500"
                                                                >
                                                                    <path
                                                                        d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"/>
                                                                    <path fill="none" d="M0 0h24v24H0z"/>
                                                                </svg>
                                                            </div>
                                                            <span className="mr-2 text-body-2 text-neutral-500"></span>
                                                            <p className="text-neutral-600 text-sm text-body-2">با ثبت دیدگاه بر روی کالاهای خریداری شده 5 امتیاز در دیجیکلاب دریافت کنید</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grow min-w-0">
                                                    <div>
                                                        <div className="mt-5 border-b-2">
                                                            <div className="mt-8">
                                                                {/* نمایش اولیه به‌صورت افقی و کوچک */}
                                                                <div className="flex overflow-x-auto gap-2 mb-6">
                                                                    {(areMediaVisible ? media : media.slice(0, 5)).map((item) => (
                                                                        <div key={item.id} className="min-w-[56px] min-h-[56px] w-14 h-14 flex-shrink-0">
                                                                            {item.type === "video" ? (
                                                                                <iframe
                                                                                    className="w-14 h-14 rounded object-cover"
                                                                                    src={item.url}
                                                                                    title={item.title}
                                                                                    frameBorder="0"
                                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                    allowFullScreen
                                                                                ></iframe>
                                                                            ) : (
                                                                                <img
                                                                                    src={item.url}
                                                                                    alt={item.title}
                                                                                    className="w-14 h-14 object-cover rounded"
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>


                                                                {/* دکمه مشاهده بیشتر/بستن برای کامنت‌ها */}
                                                                <div
                                                                    className="mt-2 mb-3 pr-0 flex items-center cursor-pointer text-button-2"
                                                                    onClick={() => toggleExpand('comments')}
                                                                >
                                                                <span className="text-blue-400 text-sm mr-1">
                                                                    {expandedSections.comments ? 'بستن' : 'مشاهده بیشتر'}
                                                                </span>
                                                                    <span
                                                                        className="flex transition-transform duration-300"
                                                                        style={{
                                                                            transform: expandedSections.comments ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                        }}
                                                                    >
                                                                    <ChevronLeft className="text-blue-300 w-4 h-4" />
                                                                </span>
                                                                </div>

                                                                {/* Modal: ویدیوها و تصاویر بیشتر */}
                                                                {expandedSections.comments && (
                                                                    <div
                                                                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                                                                        onClick={() => toggleExpand('comments')}
                                                                    >
                                                                        <div
                                                                            className="bg-white p-8 w-11/12 lg:w-3/4 max-h-[80vh] overflow-y-auto rounded-md"
                                                                            onClick={(e) => e.stopPropagation()}
                                                                        >
                                                                            <h3 className="text-xl font-semibold mb-4 text-center">ویدیوها و تصاویر بیشتر</h3>
                                                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                                                                {media.map((item) => (
                                                                                    <div key={item.id} className="relative">
                                                                                        {item.type === "video" ? (
                                                                                            item.url.endsWith(".mp4") ? (
                                                                                                <video
                                                                                                    controls
                                                                                                    className="w-full h-56 rounded-lg shadow-lg object-cover"
                                                                                                >
                                                                                                    <source src={item.url} type="video/mp4" />
                                                                                                    مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                                                                                                </video>
                                                                                            ) : (
                                                                                                <iframe
                                                                                                    className="w-full h-56 rounded-lg shadow-lg"
                                                                                                    src={item.url}
                                                                                                    title={item.title}
                                                                                                    frameBorder="0"
                                                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                                    allowFullScreen
                                                                                                ></iframe>
                                                                                            )
                                                                                        ) : (
                                                                                            <img
                                                                                                src={item.url}
                                                                                                alt={item.title}
                                                                                                className="w-full h-56 object-cover rounded-lg shadow-lg"
                                                                                            />
                                                                                        )}
                                                                                        <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 text-sm rounded">{item.title}</p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="flex justify-center mt-4">
                                                                                <button
                                                                                    onClick={() => toggleExpand('comments')}
                                                                                    className="bg-red-500 text-white px-6 py-2 rounded-lg"
                                                                                >
                                                                                    بستن
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="hidden xl:block mr-10 relative min-w-[320px]">
                            <div className="sticky z-10" style={{top: "195.031px"}}>
                                <div className="bg-neutral-100 mb-2 mt-5 p-4 rounded-md border">
                                    <div className="flex items-center text-h5 py-2">
                                        <div className="text-[#e6123d]">
                                            فروش ویژه
                                        </div>
                                    </div>
                                    <div className="flex border-b border-complete-b-200 pb-3 mb-3">
                                        <div className="rounded shrink-0 w-14 h-14 overflow-hidden">
                                            <picture>
                                                <source
                                                    type="image/webp"
                                                    src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                                                />
                                                <source
                                                    type="image/jpeg"
                                                    src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                                />
                                                <img
                                                    src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                                    alt="کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 مناسب پوست‌های حساس حجم 75 میلی‌لیتر"
                                                    className="w-full h-full object-contain"
                                                />
                                            </picture>
                                        </div>
                                        <div
                                            className="flex flex-col mr-5 justify-center overflow-hidden max-w-[150px] sm:max-w-[200px] md:max-w-[200px]">
                                            <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 leading-tight break-words">
                                                کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04 مناسب پوست‌های حساس
                                                حجم 75 میلی‌لیتر
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mb-2">
                                        <div className="ml-2 flex items-center justify-center">
                                            <div className="flex">
                                                <svg
                                                    viewBox="0 0 150 150"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                >
                                                    <path fill="none" d="M0,.2H150v150H0Z"/>
                                                    <path
                                                        fill="#ee4055"
                                                        d="M91.56,16.51c-21.48,0-42.95.21-64.42.34-6.86-.2-8.24,2.59-7.92,8.86.13,34.26,0,68.53.29,102.78.2,5.19,4.74,5.12,8.84,5.08,11.17,0,53.84.22,64,.08a54.08,54.08,0,0,0,10.78-1.09c20.62-4.59,32.7-23.42,32.87-39q.18-17.85.12-35.71C135.11,34.11,115.85,16.25,91.56,16.51Zm19.92,62.14c-16.47,21-50.36,21-66.84,0a3,3,0,0,1,.74-4.38c1.62-1.2,3.28-2.35,5-3.47,2-1.37,3.33-1.28,5,.53a30.55,30.55,0,0,0,45.46,0c1.65-1.81,2.95-1.9,5-.53,1.68,1.12,3.34,2.27,5,3.47A3,3,0,0,1,111.48,78.65Z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-neutral-700 text-sm">دیجی‌کالا</div>
                                    </div>
                                    <div className="flex mb-2">
                                        <div className="ml-2 flex items-center justify-center">
                                            <div className="flex">
                                                <svg
                                                    fill="#808080"
                                                    viewBox="0 0 32 32"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5"
                                                    style={{
                                                        fillRule: 'evenodd',
                                                        clipRule: 'evenodd',
                                                        strokeLinejoin: 'round',
                                                        strokeMiterlimit: 2,
                                                    }}
                                                >
                                                    <g transform="matrix(1,0,0,1,-96,-384)">
                                                        <g transform="matrix(1,0,0,1.5,0,-195)">
                                                            <path
                                                                d="M123,390.139C123,389.941 122.869,389.755 122.642,389.628C122.415,389.501 122.116,389.448 121.825,389.483C119.095,389.739 115.9,389.237 113.167,387.95C112.472,387.611 111.529,387.612 110.835,387.953C108.106,389.249 104.916,389.77 102.184,389.504C101.896,389.468 101.598,389.519 101.372,389.643C101.146,389.768 101.015,389.954 101.015,390.149C101,392.424 101,398.817 101,401.141C101,401.664 101.458,402.139 102.172,402.355C104.41,403.033 109.237,404.496 111.172,405.083C111.698,405.242 112.302,405.242 112.828,405.083C114.763,404.496 119.59,403.033 121.828,402.355C122.542,402.139 123,401.664 123,401.141C123,398.813 123,392.403 123,390.139Z"
                                                                fill="#ffffff"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M124,406.712L124,390.208C124,389.616 123.738,389.055 123.284,388.675C122.836,388.3 122.247,388.14 121.671,388.236C119.171,388.584 116.25,387.878 113.747,386.109C112.704,385.354 111.293,385.357 110.253,386.116C107.762,387.889 104.859,388.626 102.364,388.272C101.772,388.168 101.183,388.323 100.734,388.695C100.279,389.072 100.015,389.633 100.015,390.224C100,393.632 100,403.225 100,406.712C100,407.889 100.688,408.956 101.759,409.443C103.996,410.46 108.823,412.654 110.759,413.534C111.547,413.893 112.453,413.893 113.241,413.534C115.177,412.654 120.004,410.46 122.241,409.443C123.312,408.956 124,407.889 124,406.712ZM121.999,390.208L122,390.209L122,406.712C122,407.104 121.771,407.46 121.414,407.623C119.177,408.639 114.349,410.834 112.414,411.713C112.151,411.833 111.849,411.833 111.586,411.713C109.651,410.834 104.823,408.639 102.586,407.623C102.229,407.46 102,407.104 102,406.712C102,403.231 102,393.664 102.015,390.242L102.018,390.243C104.998,390.678 108.459,389.849 111.416,387.743L111.422,387.739C111.77,387.483 112.235,387.482 112.578,387.732L112.584,387.736C115.547,389.831 119.009,390.63 121.964,390.214L121.999,390.208ZM107.293,399.707L110.44,402.854C110.83,403.244 111.463,403.244 111.854,402.854L117.748,396.96C118.138,396.57 118.138,395.936 117.748,395.546C117.357,395.155 116.724,395.155 116.334,395.546L111.147,400.732L108.707,398.293C108.317,397.903 107.683,397.903 107.293,398.293C106.903,398.683 106.903,399.317 107.293,399.707Z"
                                                            fill="#808080"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-neutral-700 text-sm">گارانتی اصالت و سلامت فیزیکی
                                            کالا
                                        </div>
                                    </div>
                                    <div className="flex mb-2">
                                        <div className="ml-2 flex items-center justify-center">
                                            <div className="flex">
                                                <svg
                                                    height="200px"
                                                    width="200px"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#000000"
                                                    className="w-5 h-5"
                                                >
                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path fill="#F07B52" d="M499.725,163.607L260.792,1.473c-2.893-1.963-6.69-1.964-9.583,0L12.275,163.607c-2.34,1.587-3.742,4.231-3.742,7.06v332.8c0,4.713,3.821,8.533,8.533,8.533h477.867c4.713,0,8.533-3.821,8.533-8.533v-332.8C503.467,167.838,502.066,165.194,499.725,163.607z" />
                                                        <path fill="#E5563C" d="M34.134,503.467v-332.8c0-2.829,1.402-5.473,3.742-7.061L268.8,6.907l-8.009-5.435c-2.893-1.963-6.69-1.964-9.583,0L12.275,163.606c-2.34,1.588-3.742,4.233-3.742,7.061v332.8c0,4.713,3.821,8.533,8.533,8.533h25.6C37.954,512,34.134,508.181,34.134,503.467z" />
                                                        <path fill="#74757B" d="M409.6,204.8H102.4c-4.713,0-8.533,3.821-8.533,8.533v290.133c0,4.713,3.821,8.533,8.533,8.533h307.2c4.713,0,8.533-3.821,8.533-8.533V213.334C418.134,208.621,414.313,204.8,409.6,204.8z" />
                                                        <path fill="#606268" d="M102.4,204.8c-4.713,0-8.533,3.821-8.533,8.533v290.133c0,4.713,3.821,8.533,8.533,8.533h17.067V204.8H102.4z" />
                                                        <path fill="#C3C4C6" d="M426.667,170.667H85.334c-4.713,0-8.533,3.821-8.533,8.533v34.133c0,4.713,3.821,8.533,8.533,8.533h341.333c4.713,0,8.533-3.821,8.533-8.533V179.2C435.2,174.488,431.379,170.667,426.667,170.667z" />
                                                        <path fill="#AFB0B4" d="M426.667,204.8H85.334c-4.713,0-8.533-3.821-8.533-8.533v17.067c0,4.713,3.821,8.533,8.533,8.533h341.333c4.713,0,8.533-3.821,8.533-8.533v-17.067C435.2,200.981,431.379,204.8,426.667,204.8z" />
                                                        <g>
                                                            <path fill="#E5563C" d="M290.134,76.8h-68.267c-4.713,0-8.533-3.821-8.533-8.533s3.821-8.533,8.533-8.533h68.267c4.713,0,8.533,3.821,8.533,8.533S294.846,76.8,290.134,76.8z" />
                                                            <path fill="#E5563C" d="M290.134,110.934h-68.267c-4.713,0-8.533-3.821-8.533-8.533s3.821-8.533,8.533-8.533h68.267c4.713,0,8.533,3.821,8.533,8.533S294.846,110.934,290.134,110.934z" />
                                                            <path fill="#E5563C" d="M290.134,145.067h-68.267c-4.713,0-8.533-3.821-8.533-8.533s3.821-8.533,8.533-8.533h68.267c4.713,0,8.533,3.821,8.533,8.533S294.846,145.067,290.134,145.067z" />
                                                        </g>
                                                        <g>
                                                            <path fill="#FDDD85" d="M204.8,273.067H102.4c-4.713,0-8.533,3.821-8.533,8.533V384c0,4.713,3.821,8.533,8.533,8.533l51.2,8.533l51.2-8.533c4.713,0,8.533-3.821,8.533-8.533V281.6C213.334,276.888,209.514,273.067,204.8,273.067z" />
                                                            <path fill="#FDDD85" d="M204.8,392.534H102.4c-4.713,0-8.533,3.821-8.533,8.533v102.4c0,4.713,3.821,8.533,8.533,8.533h102.4c4.713,0,8.533-3.821,8.533-8.533v-102.4C213.334,396.355,209.514,392.534,204.8,392.534z" />
                                                        </g>
                                                        <path fill="#FDD042" d="M110.934,503.467v-102.4c0-4.713,3.821-8.533,8.533-8.533H102.4c-4.713,0-8.533,3.821-8.533,8.533v102.4c0,4.713,3.821,8.533,8.533,8.533h17.067C114.754,512,110.934,508.181,110.934,503.467z" />
                                                        <path fill="#F2C127" d="M170.667,392.534h-34.133V435.2c0,4.713,3.821,8.533,8.533,8.533h17.067c4.713,0,8.533-3.821,8.533-8.533V392.534z" />
                                                        <path fill="#74757B" d="M170.667,494.934h-34.133c-4.713,0-8.533-3.821-8.533-8.533s3.821-8.533,8.533-8.533h34.133c4.713,0,8.533,3.821,8.533,8.533S175.38,494.934,170.667,494.934z" />
                                                        <path fill="#FDD042" d="M110.934,384V281.6c0-4.713,3.821-8.533,8.533-8.533H102.4c-4.713,0-8.533,3.821-8.533,8.533V384c0,4.713,3.821,8.533,8.533,8.533h17.067C114.754,392.534,110.934,388.714,110.934,384z" />
                                                        <path fill="#F2C127" d="M170.667,273.067h-34.133v42.667c0,4.713,3.821,8.533,8.533,8.533h17.067c4.713,0,8.533-3.821,8.533-8.533V273.067z" />
                                                        <path fill="#74757B" d="M170.667,375.467h-34.133c-4.713,0-8.533-3.821-8.533-8.533s3.821-8.533,8.533-8.533h34.133c4.713,0,8.533,3.821,8.533,8.533S175.38,375.467,170.667,375.467z" />
                                                        <path fill="#FDDD85" d="M324.267,392.534h-102.4c-4.713,0-8.533,3.821-8.533,8.533v102.4c0,4.713,3.821,8.533,8.533,8.533h102.4c4.713,0,8.533-3.821,8.533-8.533v-102.4C332.8,396.355,328.98,392.534,324.267,392.534z" />
                                                        <path fill="#FDD042" d="M230.4,503.467v-102.4c0-4.713,3.821-8.533,8.533-8.533h-17.067c-4.713,0-8.533,3.821-8.533,8.533v102.4c0,4.713,3.821,8.533,8.533,8.533h17.067C234.221,512,230.4,508.181,230.4,503.467z" />
                                                        <path fill="#F2C127" d="M290.134,392.534H256V435.2c0,4.713,3.821,8.533,8.533,8.533H281.6c4.713,0,8.533-3.821,8.533-8.533V392.534z" />
                                                        <path fill="#74757B" d="M290.134,494.934H256c-4.713,0-8.533-3.821-8.533-8.533s3.821-8.533,8.533-8.533h34.133c4.713,0,8.533,3.821,8.533,8.533S294.846,494.934,290.134,494.934z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-neutral-700 text-sm">موجود در انبار دیجی‌کالا</div>
                                    </div>
                                    <div className="relative w-full lg:px-0 lg:pb-0">
                                        <div className="lg:pt-2">
                                            <div className="w-full z-3 bg-neutral-100 shadow-lg lg:shadow-none">
                                                <div>
                                                    <div className="flex items-center">
                                                        <div
                                                            className="flex justify-start flex-col items-end mr-auto text-xl">
                                                            <div className="flex items-center justify-end w-full gap-1">
                                                                <span
                                                                    className="line-through text-sm ml-1 text-neutral-300">
                                                                    278,750
                                                                </span>
                                                                <div
                                                                    className="px-2 text-white rounded-full flex items-center justify-center bg-red-500 shrink-0 mr-1 mb-1">
                                                                    <span className="text-sm font-bold">48٪</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className="ml-1 text-neutral-800 text-lg font-semibold">
                                                                    145,900
                                                                </span>
                                                                <div className="flex">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 100 100"
                                                                        className="w-6 h-6"
                                                                    >
                                                                        <text
                                                                            x="50%"
                                                                            y="50%"
                                                                            fontSize="48"
                                                                            textAnchor="middle"
                                                                            alignmentBaseline="middle"
                                                                            fill="black"
                                                                        >
                                                                            تومان
                                                                        </text>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden h-5 mb-3">
                                                        <div
                                                            className="flex items-center h-5 overflow-hidden whitespace-nowrap transition-all duration-300"
                                                            key={index} // برای انیمیشن رندر مجدد
                                                        >
                                                            <div className="flex ml-1">
                                                                <div style={{
                                                                    width: '18px',
                                                                    height: '18px',
                                                                    lineHeight: 0
                                                                }}>
                                                                    <img
                                                                        className="w-full"
                                                                        src={current.icon}
                                                                        width="18"
                                                                        height="18"
                                                                        style={{objectFit: 'cover'}}
                                                                        alt={current.alt}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <p className="text-sm font-semibold"
                                                               style={{color: current.color}}>
                                                                {current.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <button
                                                            className="relative flex items-center user-select-none bg-red-600 text-white rounded-md w-full py-2">
                                                            <div
                                                                className="flex items-center justify-center relative grow">
                                                                افزودن به سبد
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};
