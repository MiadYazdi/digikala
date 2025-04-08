export const ProductCard = () => {
    return (
        <a href="Products/Cream" className="block">
            <div className="bg-white rounded-2xl shadow-lg my-4 overflow-hidden max-w-xs mx-auto">
                <div className="relative">
                    <div className="w-44 flex flex-col items-center p-4">
                        <div className="w-full flex justify-center pb-5 overflow-hidden">
                            <img
                                src="https://dkstatics-public.digikala.com/digikala-products/905a437737265610d3fce1591deefb389a065098_1668586134.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
                                width="132"
                                height="132"
                                alt="کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04"
                                className="w-32 h-44 rounded-md object-cover"
                            />
                        </div>
                        <h3 className="text-gray-600 text-sm text-center truncate max-w-full">
                            کرم مرطوب‌کننده و آبرسان دست و صورت لافارر مدل 04
                        </h3>
                        <div className="flex justify-between items-center w-full mt-3">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">۴۸٪</span>
                            <span className="text-gray-700 font-semibold">۱۴۵,۹۰۰ تومان</span>
                        </div>
                        <span className="text-gray-400 line-through text-xs mt-1">۲۷۸,۷۵۰ تومان</span>
                    </div>
                </div>
            </div>
        </a>
    );
};
