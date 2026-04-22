const Services = () => {
    return (
        <section className="bg-light-blue pt-19 pb-12">
            <div className="max-w-[1440px] mx-auto px-[5%]">
                <div className="flex justify-between items-center relative">
                    <h2 className="font-sans font-regular text-2xl text-black mb-25">
                        <span className="font-sans font-bold text-2xl text-black mr-2 border-b-4 border-secondary pb-2">
                            Services 
                        </span>
                        We Offer
                    </h2>
                    <svg
                        className="w-27 h-27 absolute -top-8 right-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none">
                        <g filter="url(#a)">
                        <rect width={75} height={75} x={21} y={7} fill="#F4F6F9" rx={37.5} />
                        </g>
                        <rect width={75} height={75} y={34} fill="#fff" rx={37.5} />
                        <path
                        fill="#F67366"
                        d="M23.438 65.875h12.187l.938 1.875H24.374l-.938-1.875Zm1.25 3.75h12.187l.938 1.875H25.624l-.938-1.875Zm20.312 10a1.872 1.872 0 0 0 1.875-1.875A1.872 1.872 0 0 0 45 75.875a1.872 1.872 0 0 0-1.875 1.875c0 1.037.837 1.875 1.875 1.875Zm1.875-11.25H43.75V71.5h5.575l-2.45-3.125ZM32.5 79.625a1.872 1.872 0 0 0 1.875-1.875 1.872 1.872 0 0 0-1.875-1.875 1.872 1.872 0 0 0-1.875 1.875c0 1.037.837 1.875 1.875 1.875Zm15-13.125 3.75 5v6.25h-2.5A3.745 3.745 0 0 1 45 81.5a3.745 3.745 0 0 1-3.75-3.75h-5a3.753 3.753 0 0 1-3.75 3.75 3.745 3.745 0 0 1-3.75-3.75h-2.5v-4.375h2.5v1.875h.95A3.766 3.766 0 0 1 32.5 74c1.112 0 2.112.487 2.8 1.25h5.95V64h-15c0-1.388 1.113-2.5 2.5-2.5h15v5h3.75Z"
                        />
                        <defs>
                            <filter
                                id="a"
                                width={91}
                                height={91}
                                x={14}
                                y={0}
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dx={1} dy={1} />
                                <feGaussianBlur stdDeviation={4} />
                                <feColorMatrix values="0 0 0 0 0.956863 0 0 0 0 0.964706 0 0 0 0 0.976471 0 0 0 1 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_268_722" />
                                <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_268_722"
                                result="shape"
                                />
                                <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dx={4} dy={4} />
                                <feGaussianBlur stdDeviation={5} />
                                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                                <feColorMatrix values="0 0 0 0 0.847 0 0 0 0 0.847 0 0 0 0 0.847 0 0 0 1 0" />
                                <feBlend in2="shape" result="effect2_innerShadow_268_722" />
                                <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dx={-6} dy={-5} />
                                <feGaussianBlur stdDeviation={6} />
                                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                                <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.984314 0 0 0 0 0.988235 0 0 0 1 0" />
                                <feBlend
                                in2="effect2_innerShadow_268_722"
                                result="effect3_innerShadow_268_722"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col gap-12">
                    <div>
                        <svg
                            viewBox="20 20 60 60"
                            className="w-[70px] h-[70px] mb-4"
                            style={{ imageRendering: 'crisp-edges'}}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none">
                            <g>
                            <rect width={50} height={50} x={24} y={25} fill="#fff" rx={25} />
                            </g>
                            <path
                            fill="#2C2D5B"
                            d="M36.5 45h10.834l.833 1.667H37.334L36.5 45Zm1.112 3.333h10.833L49.278 50H38.445l-.833-1.667Zm18.055 8.89c.922 0 1.667-.745 1.667-1.667 0-.923-.745-1.667-1.667-1.667s-1.666.744-1.666 1.667c0 .922.744 1.666 1.666 1.666Zm1.667-10h-2.778V50h4.956l-2.178-2.778Zm-12.778 10c.922 0 1.667-.745 1.667-1.667 0-.923-.745-1.667-1.667-1.667s-1.667.744-1.667 1.667c0 .922.745 1.666 1.667 1.666Zm13.333-11.667L61.223 50v5.556H59a3.329 3.329 0 0 1-3.334 3.333 3.329 3.329 0 0 1-3.333-3.333h-4.445c0 1.844-1.5 3.333-3.333 3.333a3.329 3.329 0 0 1-3.333-3.333H39v-3.89h2.222v1.667h.844a3.348 3.348 0 0 1 2.489-1.11c.989 0 1.878.433 2.489 1.11h5.289v-10H39c0-1.233.99-2.222 2.223-2.222h13.333v4.445h3.333Z"
                            />
                        </svg>
                        <h3 className="font-sans font-bold text-base text-primary mb-5">Warehousing Services</h3>
                        <p className="font-sans font-regular text-xs text-muted leading-normal max-w-[360px]">A pay as-you-go solution for: pallet storage, inventory  management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more.</p>
                    </div>
                    <div>
                        <svg
                            viewBox="20 20 60 60"
                            className="w-[70px] h-[70px] mb-4"
                            style={{ imageRendering: 'crisp-edges'}}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none">
                            <g>
                            <rect width={50} height={50} x={24} y={25} fill="#fff" rx={25} />
                            </g>
                            <path
                            fill="#2C2D5B"
                            d="M39 56.667h20v2.222H39v-2.222ZM59.566 46.14a1.789 1.789 0 0 0-2.262-1.132l-4.97 1.658-8.89-3.334-2.222 1.111 6.667 4.445-4.444 2.222L39 48.89 37.89 50l4.444 4.444 16.163-6.06a1.79 1.79 0 0 0 1.069-2.243Z"/>
                        </svg>
                        <h3 className="font-sans font-bold text-base text-primary mb-5">Global Freight</h3>
                        <p className="font-sans font-regular text-xs text-muted leading-normal max-w-[360px]">Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight.</p>
                    </div>
                    <div>
                        <svg
                            viewBox="20 20 60 60"
                            className="w-[70px] h-[70px] mb-4"
                            style={{ imageRendering: 'crisp-edges'}}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none">
                            <g>
                            <rect width={50} height={50} x={24} y={25} fill="#fff" rx={25} />
                            </g>
                            <path
                            fill="#2C2D5B"
                            fillRule="evenodd"
                            d="M53.91 43.856h.227c2.991 0 5.419 2.5 5.419 5.566v6.134c0 3.066-2.428 5.555-5.419 5.555H43.864c-2.992 0-5.42-2.489-5.42-5.555v-6.134c0-3.066 2.428-5.566 5.42-5.566h.227c.022-1.334.531-2.578 1.452-3.512.932-.944 2.124-1.422 3.468-1.455 2.688 0 4.866 2.222 4.899 4.967Zm-7.229-2.323a3.421 3.421 0 0 0-.964 2.323h6.567c-.032-1.823-1.485-3.3-3.273-3.3a3.33 3.33 0 0 0-2.33.977Zm6.438 6.6a.822.822 0 0 0 .812-.833v-1.289a.822.822 0 0 0-.812-.833.83.83 0 0 0-.813.833V47.3a.83.83 0 0 0 .813.833Zm-7.522-.833a.822.822 0 0 1-.812.833.83.83 0 0 1-.813-.833v-1.289a.83.83 0 0 1 .813-.833c.455 0 .812.378.812.833V47.3Z"
                            clipRule="evenodd"/>
                        </svg>
                        <h3 className="font-sans font-bold text-base text-primary mb-5">Packaging Solutions</h3>
                        <p className="font-sans font-regular text-xs text-muted leading-normal max-w-[360px]">Our packaging solutions are optimized for each individual customer and are selected based on on the customer’s specific needs and requirements.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between mx-auto mt-20">
                    <a href="/" 
                        className="font-sans font-bold text-xs text-primary text-center
                        py-4 px-9
                        border border-primary
                        rounded-xl">Request Quote</a>
                    <a 
                        className="font-sans font-bold text-xs text-white text-center bg-primary
                        w-fit
                        py-4 px-13
                        mx-auto
                        rounded-xl">Join Now</a>
                </div>
            </div>
        </section>
    );
};
export default Services;