import './App.css';
import { Navbar } from './Navbar/Navbar';
import { UserNav } from './Navbar/UserNav';

function App() {
    return (
        <div className="bg-gray-300 w-screen h-screen flex flex-col" dir="rtl">
            <div className="w-full h-44 bg-white flex flex-col divide-y-2 divide-gray-100">
                <Navbar />
                <UserNav />
            </div>
        </div>
    );
}

export default App;

