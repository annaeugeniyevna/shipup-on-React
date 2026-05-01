import hero from '../assets/images/hero.png';
import heroLarge from '../assets/images/hero-large.png';
import heroDecor from '../assets/images/hero-decor.png';
import PricingForm from './PricingForm';
import cameraIcon from '../assets/images/camera-icon.svg';

const Hero = () => {
    return (
        <section 
        className="mt-6 mb-20 relative 
        lg:mt-25 lg:mb-25">
            <div 
            className="hidden lg:block absolute top-[-125px] left-0 z-0
            lg:top-[-210px]">
                <img 
                src={heroDecor} 
                alt="Decor"/>
            </div>
            <div className="relative z-10">
                <div 
                className="max-w-[1440px] mx-auto px-[5%] 
                lg:px-[6%]">
                    <div className="lg:flex">
                        <div className="lg:max-w-[575px] lg:pt-35">
                            <h1 
                            className="font-sans font-bold text-black text-3xl text-center leading-loose
                            mb-5
                            md:text-4xl md:max-w-xl md:mx-auto
                            lg:text-left lg:mx-0 lg:max-w-[575px]">Quick &  Reliable <span className="text-secondary text-4xl 
                            md:text-5xl">Warehousing and Logistics</span> Solution.</h1>
                            <p 
                            className="font-sans font-regular text-xs text-gray text-center
                            max-w-[350px] 
                            mb-13
                            md:text-sm md:max-w-lg md:mx-auto md:leading-normal
                            lg:text-left lg:mx-0 lg:max-w-[575px]">ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
                            <div 
                            className="flex items-center
                            md:max-w-[360px] md:mx-auto
                            lg:gap-3 lg:mx-0">
                                <a href="/"
                                className="font-sans font-bold text-xs text-white text-center bg-primary cursor-pointer
                                py-5 px-12
                                w-fit
                                rounded-xl
                                md:text-base md:px-10">Join Now</a>
                                <a href="/" 
                                className="flex items-center group">
                                    <img 
                                    src={cameraIcon} 
                                    lt="Camera"/>
                                    <span 
                                    className="font-sans font-bold text-xs text-primary
                                    md:text-base
                                    lg:font-extrabold">Play Demo</span>
                                </a>
                            </div>
                        </div>
                            <div 
                            className="mt-13 mb-13 
                            lg:mb-29">
                                <img 
                                src={hero} 
                                alt="ShipUp Logistics Illustration" className="max-w-[320px] 
                                md:hidden"/>
                                <img 
                                src={heroLarge} 
                                alt="ShipUp Logistics illustration"
                                className="hidden 
                                md:block md:max-w-[600px]"/>
                            </div>
                    </div>
                    <PricingForm/>
                </div>
            </div>
        </section>
    );
};

export default Hero;