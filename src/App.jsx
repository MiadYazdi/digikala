import './App.css';
import { Category } from './Navbar/Category';
import { UserNav } from './Navbar/UserNav';
import { Slider } from "./Slider/Slider";
import Slider1 from "./Slider/Slider1";
import Rollbar from "./Bar/Rollbar";
import React from "react";
import {Discount} from "./Discount/Discount";
import {Advertisement} from "./Advertisement/Advertisement1";
import {Advert} from "./Advertisement/Advertisements";
import {Advertisment2} from "./Advertisement/Advertisment";
import {MCategorySlider} from "./Category/MCategories";
import PopularBrands from "./Category/Brand";
import {CBuy} from "./Category/CBuy1/CBuy";
import {MostBuy} from "./Category/MostBuy";
import {Buy} from "./Category/CBuy2/buy";
import {Readable} from "./Read/Readable";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="bg-white w-full h-full flex flex-col" dir="rtl">
            <div className="fixed top-0 left-0 right-0 z-50 w-full h-22 bg-white flex flex-col">
                <UserNav />
                <Category />
            </div>
            <div>
                <Slider1 />
            </div>
            <div className="my-2">
                <Slider />
            </div>
            <div className="mt-1 bg-white px-4 sm:px-8 md:px-40 flex flex-col w-full rounded-md">
                <Rollbar />
            </div>
            <div className="container mx-auto px-4 lg:px-40 relative pt-3">
                <Discount />
            </div>
            <div>
                <Advertisement />
                <Advert />
                <Advertisment2 />
            </div>
            <div>
                <MCategorySlider />
            </div>
            <div>
                <PopularBrands />
            </div>
            <div>
                <CBuy />
            </div>
            <div>
                <MostBuy />
            </div>
            <div>
                <Buy />
            </div>
            <div>
                <Readable />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
