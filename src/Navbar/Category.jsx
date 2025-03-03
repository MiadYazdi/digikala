export function Category() {
    return <div className="flex w-full container-4xl-w mx-auto relative justify-between md:px-4 grow">
        {/* دسته‌بندی‌ها */}
        <div className="flex flex-wrap space-x-2">
            <div className="flex items-center px-2 py-1">
                <button className="text-sm text-neutral-700 hover:text-blue-600">شگفت انگیزها</button>
            </div>
            <div className="flex items-center px-2 py-1">
                <button className="text-sm text-neutral-700 hover:text-blue-600">سوپرمارکت</button>
            </div>
            <div className="flex items-center px-2 py-1">
                <button className="text-sm text-neutral-700 hover:text-blue-600">پرفروش‌ترین‌ها</button>
            </div>
            <div className="flex items-center px-2 py-1">
                <button className="text-sm text-neutral-700 hover:text-blue-600">خرید کالای کارکرده</button>
            </div>
            <div className="flex items-center px-2 py-1">
                <button className="text-sm text-neutral-700 hover:text-blue-600">طلای دیجیتال</button>
            </div>
        </div>
        {/* موقعیت */}
        <div className="flex pb-1 items-center text-neutral-700 cursor-pointer mt-2 pt-2 lg:mt-0 lg:pt-0">
            <div className="px-3 py-1 flex items-center justify-between gap-2 rounded-full cursor-pointer bg-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 fill-orange-400">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <p className="text-sm">شهر خود را انتخاب کنید</p>
            </div>
        </div>
    </div>;
}
