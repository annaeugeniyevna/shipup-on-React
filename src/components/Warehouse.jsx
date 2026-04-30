import {useState} from 'react';

import mapPhoto from '../assets/images/warehouse-map.webp';
import ItalyIcon from '../assets/images/italy-icon.svg';
import IndiaIcon from '../assets/images/india-icon.svg';
import BerlinIcon from '../assets/images/berlin-icon.svg';

const Warehouse = () => {
    
    const [activePoint, setActivePoint] = useState(null);

    const mapPoints = [
        {id: 1, x: '15%', y: '29%', city: 'Italy', count: '25, 000', icon: ItalyIcon},
        {id: 2, x: '70%', y: '20%', city: 'India', count: '25 000', icon: IndiaIcon},
        {id: 3, x: '70%', y: '38%', city: 'Berlin', count: '25 000', icon: BerlinIcon},
    ];

    return (
        <section 
        className="bg-map-area pt-13 pb-20 
        lg:pt-25 lg:pb-25">
            <div className="max-w-[1440px] mx-auto px-[5%]">
                <h2 
                className="font-sans font-regular text-2xl text-black text-center mb-20 
                md:text-4xl
                lg:mb-25">
                        <span 
                        className="font-sans font-bold text-2xl text-black mr-2 border-b-4 border-secondary pb-2 
                        md:text-4xl">
                            Warehouse 
                        </span>
                        Onsite
                    </h2>
            </div>
                <div className="w-full relative">
                    <img src={mapPhoto} alt="Map" className="block w-full"/>

                    {activePoint && (
                        <div className="absolute inset-0 z-10" 
                        onClick={() => setActivePoint(null)}></div>
                    )}
                    
                    {mapPoints.map((point) => (
                        <div 
                        key={point.id}
                        className="absolute z-30 group cursor-pointer"
                        style={{ left: point.x, top: point.y}}
                        onClick={() => {
                            console.log("Натиснули на точку:", point.id);
                        setActivePoint(activePoint === point.id ? null : point.id);
                        }}>
                            
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping opacity-40 md:w-7 md:h-7">
                                </div>
                                <div className="relative w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                            </div>
                            {activePoint === point.id && (  
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20">
                                <div className="bg-white text-[#230B34] py-1 px-2 rounded-xl shadow-xl whitespace-nowrap text-sm shadow-indigo-100 flex items-center gap-2" 
                                style={{bottom: '20px', left: '0', zIndex: 9999, whiteSpace: 'nowrap'}}>
                                    <div className="w-7">
                                        <img src={point.icon} alt={point.city}
                                        className="w-full object-contain"/>
                                    </div>
                                    <div>
                                        <span className="block font-sans font-regular text-xs text-light-gray">{point.city}</span>
                                        <span className="font-sans font-bold text-sm text-dark-gray">{point.count}</span>
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-transparent border-8 border-t-white"></div>
                                </div>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
                    <div className="max-w-[1440px] mx-auto px-[5%]">
                        <div 
                        className="flex flex-row justify-between mx-auto mt-10 md:max-w-[440px] md:gap-7
                        lg:mt-0">
                            <a href="/" 
                            className="font-sans font-bold text-xs text-primary text-center
                            py-4 px-9
                            border border-primary
                            rounded-xl
                            md:text-lg md:py-5 md:px-13">Request Quote</a>
                            <a 
                            className="font-sans font-bold text-xs text-white text-center bg-primary
                            w-fit
                            py-4 px-13
                            mx-auto
                            rounded-xl
                            md:text-lg md:py-5 md:px-13">Join Now</a>
                        </div>
                    </div>
        </section>
    )
}

export default Warehouse;