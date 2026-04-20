import {useState} from 'react';

const NavItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="relative list-none">
            <button 
            onClick={() => setIsOpen(!isOpen)} 
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="flex items-center gap-1 mb-2 text-black hover:text-blue-600 font-regular transition-colors">
                {title}
                    <svg
                    className={`text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={21}
                    fill="none">
                        <path
                        fill="currentColor"
                        d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"/>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute top-full left-0 px-3 py-2 w-64 text-gray bg-white border-gray rounded-sm z-50">
                        {children}
                    </div>
                )}
        </li>
    );
};
export default NavItem;