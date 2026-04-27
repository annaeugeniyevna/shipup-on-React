import fbIcon from '../assets/images/facebook-icon.svg';
import twitterIcon from '../assets/images/twitter-icon.svg';
import whatsappIcon from '../assets/images/whatsapp-icon.svg';
import instIcon from '../assets/images/instagram-icon.svg';

const Footer = () => {
    return (
        <footer className="bg-primary pt-13">
            <div className="max-w-[1440px] mx-auto px-[5%]">
                <a href="/"
                    className="text-secondary font-light text-xl">Ship<span className="text-white font-bold text-xl">Up</span>
                    </a>
                    <p className="font-sans font-regular text-sm text-white leading-normal mt-5 mb-13">ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
                    <div className="flex gap-12 mb-13">
                        <div>
                            <h3 className="font-sans font-bold text-lg text-white mb-5">Explore</h3>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/" className="font-sans font-regular text-sm text-white">About Us</a></li>
                                <li><a href="/" className="font-sans font-regular text-sm text-white">Our warehoueses</a></li>
                                <li><a href="/" className="font-sans font-regular text-sm text-white">Blog</a></li>
                                <li><a href="/" className="font-sans font-regular text-sm text-white">News and Media</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-sans font-bold text-lg text-white mb-6">Legal</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="/" className="font-sans font-regular text-sm text-white">Terms</a></li>
                                <li><a href="/" className="font-sans font-regular text-sm text-white">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-sans font-bold text-lg text-white mb-5">Social Media</h3>
                        <div className="flex gap-5 mb-15">
                            <a href="/">
                            <img src={fbIcon} alt="Facebook"/>
                            </a>
                            <a href="/">
                            <img src={twitterIcon} alt="Twitter"/>
                            </a>
                            <a href="/">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            </a>
                            <a href="/">
                            <img src={instIcon} alt="Instagram"/>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-driver py-7 text-center">
                         <a href="/" className="font-sans text-2xl text-white">
                         <span className="font-light text-white">Ship</span>
                         <span className="font-bold text-secondary">Up</span>
                         .ng
                         </a>
                    </div>
            </div>
        </footer>
    )
}
export default Footer;