import { useState } from 'react';
import {Menu, X} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
        <nav className="flex justify-between py-6">
            {/* Logo */}
            <a href="/"
            className="text-primary font-light text-xl">Ship<span className="text-secondary font-black text-xl">Up</span></a>

            {/* Burger menu */}
            <button className="block md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>

            {/* Mobile menu */}
            <div className={`
                fixed top-0 right-0 w-[250px] h-[450px] bg-light-blue z-40
                flex flex-col items-center gap-6 
                rounded-l-2xl
                py-6 mt-18 
                shadow-2xl 
                transition-all duration-300
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                md:hidden`}>
            <ul className="md:flex gap-5">
                <li className="flex items-center gap-1 mb-2">
                    <span className="font-sans font-regular text-black text-base">Company</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="text-muted w-5 h-5 {`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}"
                >
                    <path
                        fill="currentColor"
                        d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"
                    />
                </svg>
                </li >  
                <li className="flex items-center gap-1 mb-2">
                    <span className="font-sans font-regular text-black text-base">Services</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="text-muted w-5 h-5 {`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}"
                >
                    <path
                        fill="currentColor"
                        d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"
                    />
                </svg>
                </li>
                <li className="font-sans font-regular text-black text-base mb-2">
                    Solution
                </li>
                <li className="font-sans font-regular text-black text-base mb-2">
                    Industries
                </li>
                <li className="font-sans font-regular text-black text-base mb-2">
                    Insights
                </li>
                <li className="font-sans font-regular text-black text-base mb-2">
                    News And Media
                </li>
            </ul>

            {/* Buttons for mobile*/}
            <div className="flex flex-col gap-4">
                <a href="/" className="
                font-sans font-bold text-base text-primary text-center
                py-4 px-9
                border border-primary
                rounded-xl">Request Quote</a>
                <a className="font-sans font-bold text-base text-white text-center bg-primary
                w-fit
                py-4 px-9
                mx-auto
                rounded-xl">Join Now</a>
            </div>
            </div>

            {/* Desctop menu */}
            <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-6">
                <li className="flex items-center gap-1">
                    <span>Company</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-5 h-5 {`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}"
                >
                    <path
                        fill="currentColor"
                        d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"
                    />
                </svg>
                </li >  
                <li className="flex items-center gap-1">
                    <span>Services</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-5 h-5 {`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}"
                >
                    <path
                        fill="currentColor"
                        d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"
                    />
                </svg>
                </li>
                <li>
                    Solution
                </li>
                <li>
                    Industries
                </li>
                <li>
                    Insights
                </li>
                <li>
                    News And Media
                </li>
            </ul>

            {/* Buttons for desctop*/}
            <div className="flex gap-4">
                <button>Request Quote</button>
                <button>Join Now</button>
            </div>
            </div>
        </nav>
        </header>
    );
}
export default Navbar;