import React from 'react';

export const Advertisements = () => {
    return (
        <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 px-5">
            <div>
                <a
                    className="relative overflow-hidden bg-neutral-100 user-select-none w-full flex flex-col lg:flex-row justify-between rounded-large lg:items-center px-5 lg:px-10 pt-4 pb-3"
                    target="_blank"
                    href="/fresh/incredible-offers/"
                >
                    <div
                        className="absolute left-0 top-0 bottom-0 right-0 z-1"
                        style={{ background: 'url("") left center no-repeat' }}
                    />
                    <div className="absolute right-0 top-0 bottom-0 left-0 rounded-large bg-gradient-to-r from-blue-500 to-green-500 z-1" />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center z-1 shrink-0 gap-2 lg:gap-0">
                        <div className="flex items-center z-1 shrink-0">
                            <div style={{ width: '66px', height: '62px', lineHeight: '0' }}>
                                <picture>
                                    <source type="image/webp" srcSet="" />
                                    <source type="image/jpeg" srcSet="" />
                                    <img
                                        className="w-full inline-block"
                                        src=""
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
                                    src=""
                                    width="250"
                                    height="28"
                                    alt=""
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                        <div className="inline-flex items-center text-neutral-000 text-center mx-2 lg:mx-0 justify-center text-normal bg-fresh-700 rounded-lg px-3 text-body2-strong">
                            <p className="inline-block text-body1-strong text-white">تا ۶۰٪ تخفیف</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between lg:justify-start mt-4 lg:mt-0 lg:mr-4 z-1">
                        <div className="flex items-center lg:justify-end flex-nowrap lg:flex-wrap overflow-hidden">
                            {['product1', 'product2', 'product3', 'product4', 'product5'].map((product, index) => (
                                <a
                                    key={index}
                                    className="relative bg-neutral-000 rounded-full flex items-center justify-center p-2 ml-2 lg:mb-4"
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
                                    <div className="px-1 text-white rounded-large flex items-center justify-center absolute right-0 bottom-0 z-1 bg-red-500">
                                        <span className="text-body2-strong">۵۰٪</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="bg-neutral-000 p-3 lg:py-3 lg:px-5 text-button-2 flex items-center justify-center text-fresh-700">
                            <span className="hidden lg:inline whitespace-nowrap cursor-pointer">بیش از ۱۰۰ کالا</span>
                            <div className="flex mr-0 lg:mr-2">
                                <svg style={{ width: '20px', height: '20px', fill: 'var(--color-fresh-700)' }}>
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


