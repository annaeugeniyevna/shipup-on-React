import servicesIcon from '../assets/images/services-icon.svg';
import carIcon from '../assets/images/car-icon.svg';
import airplaneIcon from '../assets/images/airplane-icon.svg';
import bagIcon from '../assets/images/bag-icon.svg';
const Services = () => {
    return (
        <section 
        className="bg-light-blue pt-19 pb-12 
        lg:pt-43 lg:pb-25">
            <div 
            className="max-w-[1440px] mx-auto px-[5%] 
            lg:px-[6%]">
                <div className="flex justify-between items-center relative">
                    <h2 
                    className="font-sans font-regular text-2xl text-black mb-25
                    md:text-4xl
                    lg:mb-43">
                        <span 
                        className="font-sans font-bold text-2xl text-black mr-2 border-b-4 border-secondary pb-2
                        md:text-4xl">
                            Services 
                        </span>
                        We Offer
                    </h2>
                    <img 
                    src={servicesIcon} 
                    alt="Decor"
                    className="w-30 absolute -top-8 right-0 
                    lg:w-50 lg:-top-20"/>

                </div>
                <div 
                className="flex flex-col gap-12 
                lg:flex-row lg:gap-19 lg:justify-center">
                    <div>
                        <img 
                        src={carIcon} 
                        alt="Car"
                        className="w-[110px] 
                        md:w-[130px]"/>
                        <h3 
                        className="font-sans font-bold text-base text-primary mb-5
                        md:text-2xl">Warehousing Services</h3>
                        <p 
                        className="font-sans font-regular text-xs text-muted leading-normal max-w-[360px]
                        md:text-sm
                        lg:max-w-[330px]">A pay as-you-go solution for: pallet storage, inventory  management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more.</p>
                    </div>
                    <div>
                        <img 
                        src={airplaneIcon} 
                        alt="Airplane"
                        className="w-[110px]"/>
                        <h3 className="font-sans font-bold text-base text-primary mb-5
                        md:text-2xl">Global Freight</h3>
                        <p 
                        className="font-sans font-regular text-xs text-muted leading-normal max-w-[360px]
                        md:text-sm
                        lg:max-w-[330px]">Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight.</p>
                    </div>
                    <div>
                        <img 
                        src={bagIcon} 
                        alt="Bag"
                        className="w-[110px]"/>
                        <h3 
                        className="font-sans font-bold text-base text-primary mb-5
                        md:text-2xl">Packaging Solutions</h3>
                        <p 
                        className="font-sans font-regular text-xs text-muted leading-normal max-w-[360px]
                        md:text-sm
                        lg:max-w-[330px]">Our packaging solutions are optimized for each individual customer and are selected based on on the customer’s specific needs and requirements.</p>
                    </div>
                </div>
                <div 
                className="max-w-[440px] flex flex-row justify-between gap-7 mx-auto mt-20 
                lg:mt-25">
                    <a href="/" 
                        className="font-sans font-bold text-xs text-primary text-center
                        py-4 px-9
                        border border-primary
                        rounded-xl
                        md:text-lg md:py-6 md:px-13">Request Quote</a>
                    <a href="/"
                        className="font-sans font-bold text-xs text-white text-center bg-primary
                        w-fit
                        py-4 px-13
                        mx-auto
                        rounded-xl
                        md:text-lg md:py-6 md:px-13">Join Now</a>
                </div>
            </div>
        </section>
    );
};
export default Services;