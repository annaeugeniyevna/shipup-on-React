import hero from '../assets/images/hero.png';
import PricingForm from './PricingForm';

const Hero = () => {
    return (
        <section className="mt-6 mb-20">
            <div className="max-w-[1440px] mx-auto px-[5%]">
                <div>
                    <h1 className="font-sans font-bold text-black text-3xl text-center leading-loose
                    mb-5">Quick & Reliable <span className="text-secondary text-4xl">Warehousing and Logistics</span> Solution.</h1>
                    <p className="font-sans font-regular text-xs text-gray text-center
                    max-w-[360px] 
                    mb-13">ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
                    <div className="flex items-center gap-7">
                        <a className="font-sans font-bold text-xs text-white      text-center bg-primary
                        py-5 px-13
                        w-fit
                        mx-auto
                        rounded-xl">Join Now</a>
                            <a href="/" className="flex items-center gap-4 group">
                                <div className="w-15 h-15 bg-white rounded-full     shadow-xl
                                active: scale-95
                                transition-transform duration-200
                                group-active:scale-90
                                flex items-center justify-center">
                                    <svg
                            className="text-primary w-6 h-6">
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.969 5.13h6.603c2.76 0 4.689 1.903 4.689 4.63v7.84c0 2.727-1.928 4.63-4.69 4.63H6.97c-2.761 0-4.69-1.903-4.69-4.63V9.76c0-2.727 1.929-4.63 4.69-4.63Zm15.783 2.712a1.576 1.576 0 0 1 1.565.073c.478.3.763.82.763 1.39v8.75c0 .571-.285 1.091-.763 1.39a1.579 1.579 0 0 1-1.566.072l-1.689-.851a1.85 1.85 0 0 1-1.012-1.661v-6.65c0-.709.388-1.345 1.012-1.66l1.69-.853Z"
                            clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="font-sans font-bold text-xs text-primary">Play Demo</span>
                            </a>
                        </div>
                        <div className="mt-13 mb-13">
                            <img src={hero} alt="ShipUp Logistics Illustration" className="max-w-[320px]"/>
                        </div>
                    </div>
                    <PricingForm/>
            </div>
        </section>
    );
};

export default Hero;