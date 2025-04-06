import React from 'react';

export const Advert = () => {
    return (
        <div className="container mx-auto px-40">
            <div>
                <a
                    className="relative overflow-hidden bg-neutral-100 select-none w-full flex flex-col lg:flex-row justify-between rounded-lg lg:items-center px-5 lg:px-10 pt-4 pb-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/fresh/incredible-offers/"
                >
                    <div
                        className="absolute inset-0"
                        style={{ background: 'url("") left center no-repeat' }}
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-black-500 z-10" />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center z-10 shrink-0 gap-2 lg:gap-0">
                        <div className="flex items-center z-10 shrink-0">
                            <div style={{ width: '66px', height: '62px', lineHeight: '0' }}>
                                <picture>
                                    <source type="image/webp" srcSet="https://www.digikala.com/statics/img/png/amazing/fresh.webp" />
                                    <source type="image/png" srcSet="https://www.digikala.com/statics/img/png/amazing/fresh.png" />
                                    <img
                                        className="w-full inline-block"
                                        src="https://www.digikala.com/statics/img/png/amazing/fresh.png"
                                        width="66"
                                        height="62"
                                        alt="icon"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </picture>
                            </div>
                            <div className="mx-2 lg:mx-5" style={{ width: '250px', height: '28px', lineHeight: '0' }}>
                                <img
                                    className="w-full inline-block"
                                    src="https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg"
                                    width="250"
                                    height="28"
                                    alt=""
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                        <div className="inline-flex items-center border bg-red-500 text-white text-center mx-2 lg:mx-0 justify-center text-normal bg-fresh-700 rounded-2xl px-3 text-body2-strong">
                            <p className="inline-block text-body1-strong">تا ۶۰٪ تخفیف</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between lg:justify-start mt-4 lg:mt-0 lg:mr-4 z-10">
                        <div className="flex items-center lg:justify-end flex-nowrap lg:flex-wrap overflow-hidden">
                            {['product1', 'product2', 'product3', 'product4', 'product5'].map((product, index) => (
                                <a
                                    key={index}
                                    className="relative bg-white rounded-full flex items-center justify-center p-2 ml-2 lg:mb-4 shadow-md"
                                    href={`/product/${product}`}
                                >
                                    <div className="overflow-hidden rounded-full">
                                        <div style={{ width: '58px', height: '58px', lineHeight: '0' }}>
                                            <picture>
                                                <source
                                                    type="image/webp"
                                                    srcSet={`https://example.com/products/${product}.webp`}
                                                />
                                                <source
                                                    type="image/jpeg"
                                                    srcSet={`https://example.com/products/${product}.jpg`}
                                                />
                                                <img
                                                    className="w-full inline-block"
                                                    src={`https://example.com/products/${product}.jpg`}
                                                    width="58"
                                                    height="58"
                                                    alt={product}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="px-1 text-white rounded-lg flex items-center justify-center absolute right-0 bottom-0 z-10 bg-red-500">
                                        <span className="text-body2-strong">۵۰٪</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="bg-white py-2 px-2 flex items-center justify-center rounded-2xl shadow-md cursor-pointer">
                            <span className="hidden lg:inline">بیش از ۱۰۰ کالا ></span>
                            <div className="flex mr-0 lg:mr-2">
                                <svg width="20" height="20" fill="currentColor">
                                    <use xlinkHref="#arrowLeft" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};
