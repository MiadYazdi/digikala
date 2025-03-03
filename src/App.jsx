import './App.css';
import { Category } from './Navbar/Category';
import { Navbar } from './Navbar/Navbar';
import { UserNav } from './Navbar/UserNav';
import {Slider} from "./Slider/Slider";

function App() {
    return (
        <div className="bg-gray-300 w-screen h-screen flex flex-col" dir="rtl">
            <div className="w-full h-44 bg-white flex flex-col">
                <Navbar />
                <UserNav />
                <Category />
            </div>
            <div className="border-t-2 border-gray-400 w-full shadow-md"></div>
            <div className="my-2">
                <Slider />
            </div>

        </div>

    );
}

export default App;