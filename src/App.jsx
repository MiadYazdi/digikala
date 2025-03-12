import './App.css';
import { Category } from './Navbar/Category';
import { Navbar } from './Navbar/Navbar';
import { UserNav } from './Navbar/UserNav';
import { Slider } from "./Slider/Slider";
import Slider1 from "./Slider/Slider1";
import Rollbar from "./Bar/Rollbar";
import React from "react";
import {Discount} from "./Discount/Discount";
import {Advertisement} from "./Advertisement/Advertisement1";
import {Advertisment2} from "./Advertisement/Advertisment";
import {Advertisements} from "./Advertisement/Advertisements";


function App() {
    return (
        <div className="bg-white w-full h-full flex flex-col" dir="rtl">
            <div className="w-full h-44 bg-white flex flex-col">
                <Navbar />
                <UserNav />
                <Category />
            </div>
            <div className="border-t-2 border-gray-400 w-full shadow-md"></div>
            <div>
                <Slider1 />
            </div>
            <div className="my-2">
                <Slider />
            </div>
            <div className="mt-1 bg-white px-4 sm:px-8 md:px-40 flex flex-col w-full shadow-lg rounded-md">
                <Rollbar />
            </div>
            <div className="mt-1 bg-white md:px-40 flex flex-col w-full">
                <Discount />
            </div>
            <div>
                <Advertisement />
                <Advertisements />
                <Advertisment2 />
            </div>
        </div>
    );
}

export default App;
