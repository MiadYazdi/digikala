import './App.css';
import { Category } from './Navbar/Category';
import { Navbar } from './Navbar/Navbar';
import { UserNav } from './Navbar/UserNav';
import { Slider } from "./Slider/Slider";
import Slider1 from "./Slider/Slider1";
import Rollbar from "./Bar/Rollbar";

function App() {
    return (
        <div className="bg-white w-screen h-screen flex flex-col" dir="rtl">
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
            <div className="mt-1 bg-white px-40 flex flex-col w-full shadow-lg rounded-md">
                <Rollbar />
            </div>
        </div>
    );
}

export default App;
