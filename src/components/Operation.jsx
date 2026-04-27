import truckIcon from '../assets/images/icon-truck.svg';
import courierPhoto from '../assets/images/operation-courier.png';
import truckDriver from '../assets/images/operation-truck-driver.png';
import fastShipping from '../assets/images/operation-fast-shipping.png';

const Operation = () => {
    return (
        <section className="mt-20 mb-20">
            <div className="max-w-[1440px] mx-auto px-[5%]">
                <img 
                src={truckIcon} 
                alt="Delivery truck"
                className="mb-7"/>
                <h2 className="font-sans font-regular text-2xl text-center text-black mb-20"><span className="font-sans font-bold text-2xl text-black mr-2 border-b-4 border-secondary pb-2">Operation</span> Mode</h2>
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-7">
                            <span className="font-sans font-bold text-2xl text-off-white bg-dark-purple rounded-full py-2 px-4">1</span>
                            <h3 className="font-sans font-bold text-2xl text-secondary">Connect</h3>
                        </div>
                        <p className="font-sans font-regular text-xs text-muted leading-normal mb-5">You’re currently running your store on Shopify, , or any other platform. As a first step, you’ll connect your store with our platform.</p>
                        <div>
                            <img 
                            src={courierPhoto}
                            alt="Courier"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-7">
                            <span className="font-sans font-bold text-2xl text-off-white bg-dark-purple rounded-full py-2 px-4">2</span>
                            <h3 className="font-sans font-bold text-2xl text-secondary">Store</h3>
                        </div>
                        <p className="font-sans font-regular text-xs text-muted leading-normal mb-5">Then, you can send us your inventory and the fun begins. We’ll choose a delivery day together so your fulfilment is not interrupted.</p>
                        <div>
                            <img
                            src={truckDriver} 
                            alt="Truck Driver"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-7">
                            <span className="font-sans font-bold text-2xl text-off-white bg-dark-purple rounded-full py-2 px-4">3</span>
                            <h3 className="font-sans font-bold text-2xl text-secondary">Ship</h3>
                        </div>
                        <p className="font-sans font-regular text-xs text-muted leading-normal mb-5">We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day,</p>
                        <div>
                            <img
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