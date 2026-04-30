import { useState } from 'react';
import {Menu, X} from 'lucide-react';
import NavItem from './NavItem';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div 
            className="max-w-[1440px] mx-auto px-[5%] 
            lg:px-[6%]">
                <nav 
                className="flex justify-between py-6 relative z-[100]
                md:py-8 
                lg:pt-13 lg:pb-0">
                    {/* Logo */}
                    <a href="/"
                    className="cursor-pointer text-primary font-light text-xl
                    md:text-2xl 
                    lg:mt-2">Ship<span className="text-secondary font-black text-xl cursor-pointer
                    md:text-2xl">Up</span></a>
                    {/* Burger menu */}
                    <button 
                    className="block 
                    lg:hidden z-50" 
                    onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X className="w-7 h-7 md:w-10 md:h-10"/>
                         ) : (
                            <Menu className="w-7 h-7 md:w-10 md:h-10"/>
                         )
                        }
                    </button>

                    {/* Mobile menu */}
                    <div 
                    className={`
                        fixed top-0 right-0 w-[250px] h-[450px] bg-light-blue z-40
                        flex flex-col items-center gap-6 
                        rounded-l-2xl
                        py-6 mt-18 
                        shadow-2xl 
                        transition-all duration-300
                        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                        md:py-9 md:w-[300px] md:h-[500px]`}>
                    <ul 
                    className="lg:flex gap-5">
                        <NavItem title="Company">
                            <p>Some text</p>
                        </NavItem>  
                        <NavItem title="Services">
                            <p>Some text</p>
                        </NavItem>
                        <li 
                        className="font-sans font-regular text-black text-base mb-2 
                        md:text-lg md:mb-3">
                            <a href="/">Solution</a>
                        </li>
                        <li 
                        className="font-sans font-regular text-black text-base mb-2 
                        md:text-lg md:mb-3">
                            <a href="/">Industries</a>
                        </li>
                        <li 
                        className="font-sans font-regular text-black text-base mb-2 
                        md:text-lg md:mb-3">
                            <a href="/">Insights</a>
                        </li>
                        <li 
                        className="font-sans font-regular text-black text-base mb-2 
                        md:text-lg">
                            <a href="/">News And Media</a>
                        </li>
                    </ul>

                    {/* Buttons for mobile*/}
                    <div 
                    className="flex flex-col gap-4">
                        <a href="/" 
                        className="
                        font-sans font-bold text-base text-primary text-center
                        py-4 px-9
                        border border-primary
                        rounded-xl">Request Quote</a>
                        <a 
                        className="font-sans font-bold text-base text-white text-center bg-primary
                        w-fit
                        py-4 px-9
                        mx-auto
                        rounded-xl">Join Now</a>
                    </div>
                    </div>

                    {/* Desctop menu */}
                    <div 
                    className="hidden 
                    lg:flex lg:items-center lg:gap-13">
                    <ul 
                    className="flex gap-8">
                        <NavItem title="Company">
                            <p>Some text</p>
                        </NavItem>  
                        <NavItem title="Services">
                            <p>Some text</p>
                        </NavItem>
                        <li>
                            <a href="/"
                            className="font-sans font-regular text-sm text-black 
                            md:text-base">
                            Solution
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-sans font-regular text-sm text-black 
                            md:text-base">
                            Indasties
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-sans font-regular text-sm text-black 
                            md:text-base">
                            Insights
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-sans font-regular text-sm text-black 
                            md:text-base">
                            News and Media
                            </a>
                        </li>
                    </ul>

                    {/* Buttons for desctop*/}
                    <div 
                    className="flex gap-7">
                        <a href="/" 
                        className="font-sans font-bold text-xs text-primary text-center
                        py-4 px-9
                        border border-primary
                        rounded-xl
                        lg:text-sm
                        ">Request Quote</a>
                    <a 
                        className="font-sans font-bold text-xs text-white text-center bg-primary
                        cursor-pointer
                        w-fit
                        py-4 px-10
                        mx-auto
                        rounded-xl
                        lg:text-sm
                        ">Join Now</a>
                    </div>
                    </div>
                </nav>

            </div>
        </header>
    );
}
export default Navbar;