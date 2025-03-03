import { useState } from 'react';

export function UserNav() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex justify-between items-center pt-3 px-2 py-3 pb-1">
            {/* Input Search */}
            <div className="relative w-1/3">
                {/* SVG for Search Icon */}
                {searchTerm === "" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-7 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>)}
                {/* Search Input */}
                <input
                    type="text"
                    className="w-full bg-gray-200 p-2 pl-10 rounded-md"
                    placeholder="         جستجو"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            {/* User Buttons */}
            <div className="flex items-center gap-2 ml-2">
                {/* Login/Logout Button */}
                <button className="flex items-center gap-2 font-bold border-2 px-3 py-2 rounded-2xl text-gray-600 hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fill-gray-600 h-7 rotate-180">
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                    </svg>ورود | خروج
                </button>
                {/* Cart Button */}
                <button className="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="fill-gray-600 h-7 scale-x-[-1]">
                        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
