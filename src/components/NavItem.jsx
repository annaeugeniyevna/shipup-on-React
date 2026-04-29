import {useState} from 'react';

import chevronIcon from '../assets/images/chevron.svg';

const NavItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="relative list-none
        font-sans font-regular text-base text-black
        md:text-base md:mb-3 lg:mb-0">
            <button 
            onClick={() => setIsOpen(!isOpen)} 
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="flex items-center gap-1 mb-2 transition-colors ">
                {title}
                    <img src={chevronIcon} alt="Arrow"
                    className={`text-muted transition-transform duration-200
                        md:w-7 md:h-7 
                        ${isOpen ? 'rotate-180' : ''}`}/>
                </button>
                {isOpen && (
                    <div className="absolute top-full left-0 px-3 py-2 w-64 text-gray bg-white border-gray rounded-sm z-50
                    md:bg-off-white">
                        {children}
                    </div>
                )}
        </li>
    );
};
export default NavItem;