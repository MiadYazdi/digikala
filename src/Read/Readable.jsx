import React from "react";

const articles = [
    {
        href: "/mag/ghibli-style-image-in-chatgpt/",
        imgSrc: "https://www.digikala.com/mag/wp-content/uploads/2025/03/chatgpt-ghibli-4.jpg",
        alt: "با قابلیت جدید Chatgpt جادوی استودیو جیبلی در دستان شماست!",
        title: "با قابلیت جدید Chatgpt جادوی استودیو جیبلی در دستان شماست!"
    },
    {
        href: "/mag/a-literary-haft-seen-for-families/",
        imgSrc: "https://www.digikala.com/mag/wp-content/uploads/2025/03/a-literary-haft-seen-for-families.jpg",
        alt: "هفت سین کتابی؛ سال جدید را با این کتاب‌های خواندنی آغاز کنید",
        title: "هفت سین کتابی؛ سال جدید را با این کتاب‌های خواندنی آغاز کنید"
    },
    {
        href: "/mag/nowruz-1404-movies/",
        imgSrc: "https://www.digikala.com/mag/wp-content/uploads/2025/03/nowruz-1404-movies.jpg",
        alt: "معرفی فیلم‌های اکران نوروز ۱۴۰۴؛ در سینماها چی ببینیم؟",
        title: "معرفی فیلم‌های اکران نوروز ۱۴۰۴؛ در سینماها چی ببینیم؟"
    },
    {
        href: "/mag/pistachio-buying-guide/",
        imgSrc: "https://www.digikala.com/mag/wp-content/uploads/2025/03/Pistachio1.jpg",
        alt: "راهنمای جامع خرید بهترین پسته",
        title: "راهنمای جامع خرید بهترین پسته"
    }
];

export const Readable = () => {
    return (
        <div className="w-full bg-white select-none lg:rounded-xl container mx-auto px-4 lg:px-40 relative pt-3">
            <div className="flex justify-between py-4 items-center px-5">
                <div className="text-xl font-bold text-gray-900">خواندنی‌ها</div>
                <span>
          <a
              className="inline-flex items-center text-blue-600 text-sm hover:underline"
              href="/mag/"
          >
            <span>مطالب بیشتر در دیجی‌کالا مگ</span>
            <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-5 lg:px-0">
                {articles.map((article, index) => (
                    <a
                        key={index}
                        className="bg-white border rounded-lg flex flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition"
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-full object-cover"
                            src={article.imgSrc}
                            alt={article.alt}
                        />
                        <div className="mt-2 mb-3 px-4 text-sm text-gray-900">
                            {article.title}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};