import {UserNav} from "../Navbar/UserNav";
import {Category} from "../Navbar/Category";
import React from "react";
import {Footer} from "../Footer/Footer";

export const Cream = () => {
    return(
        <div className="bg-white w-full h-full flex flex-col" dir="rtl">
            <div className="fixed top-0 left-0 right-0 z-50 w-full h-22 bg-white flex flex-col">
                <UserNav />
                <Category />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}