export default function PricingForm() {
    return (
        <form className="lg:flex lg:justify-center">
            <div 
            className="flex flex-col justify-center gap-6
            bg-white shadow-xl rounded-2xl
            p-7
            md:max-w-[390px]
            lg:max-w-[1130px] lg:flex-row lg:items-center lg:gap-5 lg:pt-10 lg:pb-9 lg:px-8">
                <fieldset 
                className="min-w-[270px] border border-light-gray rounded-xl px-4 pb-2 pt-1 mx-auto
                md:min-w-[340px]
                lg:min-w-[250px] lg:mx-0">
                    <legend 
                    className="font-sans font-regular text-base text-light-gray px-2">Origin</legend>
                    <div className="flex items-center gap-3 py-3">
                    <svg
                        className="text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M2.333 6.879c0-3.067 2.563-5.546 5.663-5.546 3.108 0 5.67 2.479 5.67 5.546 0 1.545-.561 2.98-1.486 4.195a14.708 14.708 0 0 1-3.694 3.428c-.324.212-.617.228-.972 0a14.426 14.426 0 0 1-3.694-3.428c-.925-1.216-1.486-2.65-1.486-4.195Zm3.797.172c0 1.027.838 1.835 1.866 1.835S9.87 8.078 9.87 7.051c0-1.02-.847-1.866-1.875-1.866A1.876 1.876 0 0 0 6.13 7.05Z"
                            clipRule="evenodd"/>
                    </svg>
                    <input 
                        type="text"
                        placeholder="Enter Location"
                        className="w-full outline-none
                        font-regular text-xs"/>
                    </div>
                </fieldset>
                <fieldset 
                className="min-w-[270px] border border-light-gray rounded-xl    px-4 pb-2 pt-1 mx-auto
                md:min-w-[340px]
                lg:min-w-[250px] lg:mx-0">
                    <legend 
                    className="font-sans font-regular text-base text-light-gray px-2">Destination</legend>
                        <div className="flex items-center gap-3 py-3">
                        <svg
                        className="text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none">
                        <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M2.333 6.879c0-3.067 2.563-5.546 5.663-5.546 3.108 0 5.67 2.479 5.67 5.546 0 1.545-.561 2.98-1.486 4.195a14.708 14.708 0 0 1-3.694 3.428c-.324.212-.617.228-.972 0a14.426 14.426 0 0 1-3.694-3.428c-.925-1.216-1.486-2.65-1.486-4.195Zm3.797.172c0 1.027.838 1.835 1.866 1.835S9.87 8.078 9.87 7.051c0-1.02-.847-1.866-1.875-1.866A1.876 1.876 0 0 0 6.13 7.05Z"
                        clipRule="evenodd"/>
                        </svg>
                    <   input
                        type="text"
                        placeholder="Enter Location"
                        className="w-full outline-none
                        font-regular text-xs"/>
                        </div>
                </fieldset>
                <fieldset 
                className="min-w-[270px] border border-light-gray rounded-xl px-4 pb-2 pt-1 mx-auto
                md:min-w-[340px]
                lg:min-w-[250px] lg:mx-0">
                <legend 
                    className="font-sans font-regular text-base text-light-gray px-2">Weight</legend>
                    <div className="flex items-center gap-3 py-3">
                        <svg
                        className="text-light-gray"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.945 4.313h.137c1.795 0 3.251 1.5 3.251 3.34v3.68c0 1.84-1.456 3.334-3.251 3.334H4.918c-1.795 0-3.252-1.494-3.252-3.334v-3.68c0-1.84 1.457-3.34 3.252-3.34h.136c.013-.8.319-1.546.872-2.106.559-.567 1.274-.854 2.08-.874 1.613 0 2.92 1.334 2.94 2.98ZM6.608 2.92a2.052 2.052 0 0 0-.578 1.393h3.94c-.02-1.093-.89-1.98-1.964-1.98-.5 0-1.02.207-1.398.587Zm3.863 3.96a.493.493 0 0 0 .488-.5v-.773c0-.274-.215-.5-.488-.5a.498.498 0 0 0-.488.5v.773c0 .273.221.5.488.5Zm-4.513-.5c0 .273-.214.5-.488.5a.498.498 0 0 1-.487-.5v-.773c0-.274.22-.5.487-.5.274 0 .488.226.488.5v.773Z"
                            clipRule="evenodd"/>
                        </svg>
                    <input
                        type="text"
                        placeholder="Weight (KG0"
                        className="w-full outline-none
                        font-regular text-xs"/>
                    </div>
                </fieldset>
                        <a href="/" 
                        className="font-sans font-bold text-xs text-white 
                        bg-primary rounded-xl
                        w-fit
                        min-w-[270px]
                        py-6 px-25 mx-auto
                        md:min-w-[340px] md:px-33
                        lg:min-w-[250px] lg:px-22 lg:py-7">
                        Check Price
                        </a>
            </div>
        </form>

    );
};