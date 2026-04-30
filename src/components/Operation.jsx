import truckIcon from '../assets/images/operation-car.svg';
import decorOperation from '../assets/images/operation-decor.svg';
import courierPhoto from '../assets/images/operation-courier.png';
import courierBigger from '../assets/images/operation-courier-bigger.png';
import truckDriver from '../assets/images/operation-truck-driver.png';
import fastShipping from '../assets/images/operation-fast-shipping.png';

const Operation = () => {
    return (
        <section className="mt-20 mb-20 lg:relative lg:pt-62 lg:mt-0 lg:mb-25">
            <div className="max-w-[1440px] mx-auto px-[5%] lg:px-[6%]">
                <img 
                src={truckIcon} 
                alt="Delivery truck"
                className="w-28 md:w-45 lg:w-50 lg:absolute lg:top-29"/>
                <h2 className="font-sans font-regular text-2xl text-center text-black mb-20 md:text-4xl"><span className="font-sans font-bold text-2xl text-black mr-2 border-b-4 border-secondary pb-2 md:text-4xl">Operation</span> Mode</h2>
                <img 
                className="hidden lg:block lg:absolute lg:left-[370px] lg:bottom-[330px]"
                src={decorOperation} 
                alt="Decor"/>
                <div className="flex flex-col gap-8 lg:gap-14">
                    <div className="md:flex md:items-center 
                    lg:gap-43 lg:justify-center lg:ml-27">
                        <div>
                            <div className="flex items-center gap-4 mb-7 md:gap-7">
                                <span className="font-sans font-bold text-2xl text-off-white bg-dark-purple rounded-full py-2 px-4">1</span>
                                <h3 className="font-sans font-bold text-2xl text-secondary md:text-4xl">Connect</h3>
                            </div>
                            <p 
                            className="font-sans font-regular text-xs text-muted leading-normal mb-5 
                            md:max-w-[300px] md:text-sm">You’re currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you’ll connect your store with our platform.</p>
                        </div>
                        <div>
                            <img 
                            className="lg:w-[600px] lg:hidden"
                            src={courierPhoto}
                            alt="Courier"/>
                            <img 
                            className="hidden lg:block"
                            src={courierBigger} 
                            alt="Courier"/>
                        </div>
                    </div>

                    <div className="md:flex md:items-center lg:gap-65 lg:justify-center">
                        <div className="md:order-2">
                            <div className="flex items-center gap-4 mb-7 md:gap-7">
                                <span className="font-sans font-bold text-2xl text-off-white bg-dark-purple rounded-full py-2 px-4">2</span>
                                <h3 className="font-sans font-bold text-2xl text-secondary md:text-4xl">Store</h3>
                            </div>
                            <p 
                            className="font-sans font-regular text-xs text-muted leading-normal mb-5 md:text-sm 
                            md:max-w-[300px]">Then, you can send us your inventory and the fun begins. We’ll choose a delivery day together so your fulfilment is not interrupted.</p>
                        </div>
                        <div className="md:order-1">
                            <img
                            className="lg:w-[400px]"
                            src={truckDriver} 
                            alt="Truck Driver"/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center lg:gap-65 lg:justify-center lg:ml-10">
                        <div>
                            <div className="flex items-center gap-4 mb-7 md:gap-7">
                                <span className="font-sans font-bold text-2xl text-off-white bg-dark-purple rounded-full py-2 px-4">3</span>
                                <h3 className="font-sans font-bold text-2xl text-secondary md:text-4xl">Ship</h3>
                            </div>
                            <p 
                            className="font-sans font-regular text-xs text-muted leading-normal mb-5 
                            md:text-sm md:max-w-[300px]">We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day,</p>
                        </div>
                        <div>
                            <img
                            className="lg:w-[400px]"
                            src={fastShipping} 
                            alt="Woman on a moped"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Operation;