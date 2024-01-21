import React from 'react';
import Script from 'next/script'
import './tailwindstyle.css'; // Import your CSS here

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Main />
            <Footer />
        </>
    );
};

function NavBar() {
    return <>
        {/*Nav*/}
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a
                        className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                    >
                        {/*Icon from: http://www.potlabicons.com/ */}
                        {/*<svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005"> */}
                    </a>
                    <a
                        className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                    >
                        <img
                            src="/img/ThriftyGrocer.png"
                            alt="Thrifty Grocer Logo"
                            className="h-20 inline"
                        />
                    </a>
                    <rect
                        fill="#2a2a31"
                        x="16.539"
                        y="425.626"
                        width="479.767"
                        height="50.502"
                        transform="matrix(1,0,0,1,0,0)"
                    >
                        <path
                            className="plane-take-off"
                            d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                        >
                            {/*Code can go here if needed*/}
                        </path>
                    </rect>
                </div>
                <div className="block lg:hidden pr-4">
                    <button
                        id="nav-toggle"
                        className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                        <svg
                            className="fill-current h-6 w-6"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                    id="nav-content"
                >
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a
                                className="inline-block py-2 px-4 text-black font-bold no-underline"
                                href="#"
                            >
                                About us
                            </a>
                        </li>
                        <li className="mr-3">
                            <a
                                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                href="#"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li className="mr-3">
                            <a
                                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                href="#"
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                    <button
                        id="navAction"
                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                        Order!
                    </button>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
        <Script> {`
                var scrollpos = window.scrollY;
                var header = document.getElementById("header");
                var navcontent = document.getElementById("nav-content");
                var navaction = document.getElementById("navAction");
                var brandname = document.getElementById("brandname");
                var toToggle = document.querySelectorAll(".toggleColour");

                document.addEventListener("scroll", function () {
                /*Apply classes for slide in bar*/
                scrollpos = window.scrollY;

                if (scrollpos > 10) {
                    header.classList.add("bg-white");
                    navaction.classList.remove("bg-white");
                    navaction.classList.add("gradient");
                    navaction.classList.remove("text-gray-800");
                    navaction.classList.add("text-white");
                    //Use to switch toggleColour colours
                    for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                    }
                    header.classList.add("shadow");
                    navcontent.classList.remove("bg-gray-100");
                    navcontent.classList.add("bg-white");
                } else {
                    header.classList.remove("bg-white");
                    navaction.classList.remove("gradient");
                    navaction.classList.add("bg-white");
                    navaction.classList.remove("text-white");
                    navaction.classList.add("text-gray-800");
                    //Use to switch toggleColour colours
                    for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                    }

                    header.classList.remove("shadow");
                    navcontent.classList.remove("bg-white");
                    navcontent.classList.add("bg-gray-100");
                }
                });`}
        </Script>
        <Script> {`
                var navMenuDiv = document.getElementById("nav-content");
                var navMenu = document.getElementById("nav-toggle");

                document.onclick = check;
                function check(e) {
                var target = (e && e.target) || (event && event.srcElement);

                //Nav Menu
                if (!checkParent(target, navMenuDiv)) {
                    // click NOT on the menu
                    if (checkParent(target, navMenu)) {
                    // click on the link
                    if (navMenuDiv.classList.contains("hidden")) {
                        navMenuDiv.classList.remove("hidden");
                    } else {
                        navMenuDiv.classList.add("hidden");
                    }
                    } else {
                    // click both outside link and outside menu, hide menu
                    navMenuDiv.classList.add("hidden");
                    }
                }
                }
                function checkParent(t, elm) {
                while (t.parentNode) {
                    if (t == elm) {
                    return true;
                    }
                    t = t.parentNode;
                }
                return false;
                }`}
        </Script>
    </>
}

function Hero() {
    return (
        <div className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full">
                        Cheaper groceries delivered right to your door!
                    </p>
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                        Welcome to Thrifty Grocers - Your Budget-Friendly Grocery Partner!
                    </h1>
                    <p className="leading-normal text-2xl mb-8"></p>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Order Now!
                    </button>
                </div>
                {/*Right Col*/}
                <div className="w-full md:w-3/5 py-6 text-center">
                    <img className="w-full md:w-full z-50" src="/img/processed_image.png" />
                </div>
            </div>
        </div>
    )
}

function Main() {
    return <>

        <div className="relative -mt-12 lg:-mt-24">
            <svg
                viewBox="0 0 1428 174"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g
                        transform="translate(-2.000000, 44.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                    >
                        <path
                            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                            opacity="0.100000001"
                        />
                        <path
                            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                            opacity="0.100000001"
                        />
                        <path
                            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                            id="Path-4"
                            opacity="0.200000003"
                        />
                    </g>
                    <g
                        transform="translate(-4.000000, 76.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                    >
                        <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                    </g>
                </g>
            </svg>
        </div>
        <section className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Thrifty Grocer
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                </div>
                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            🛒 Why Choose Thrifty Grocers?
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Unbeatable Prices: Our commitment to affordability means you get the
                            best deals on your groceries every time.
                            <br />
                            <br />
                            Quality You Can Trust: Low prices don't mean low quality. We
                            carefully select our products to ensure freshness and taste.
                            <br />
                            <br />
                            Convenience at Your Fingertips: Shop from the comfort of your home
                            and enjoy swift, hassle-free delivery right to your doorstep.
                            <br />
                            <br />
                            Special Deals &amp; Offers: Keep an eye out for our weekly specials,
                            bulk buy discounts, and exclusive member offers.
                            <br />
                            <br />
                            Customer-Friendly Environment: The store is known for its friendly
                            staff and clean, well-organized aisles, making shopping a pleasant
                            experience.
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                        <img
                            src="/img/3731109.jpg"
                            alt="Descriptive text for the image"
                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img
                            src="/img/na_january_20.jpg"
                            alt="Descriptive text for the image"
                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                        />
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <div className="align-middle">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                🚚 Fast, Reliable Delivery
                            </h3>
                            <p className="text-gray-600 mb-8">
                                We know that your time is precious. That's why our team works
                                tirelessly to deliver your groceries quickly and efficiently,
                                ensuring that your order arrives at your door exactly when you
                                need it.
                                <br />
                                <br />
                            </p>
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                📅 Weekly Delivery Program - Convenience Redefined
                            </h3>
                            <p className="text-gray-600 mb-8">
                                At Thrifty Grocers, we understand that life can get busy. That's
                                why we're excited to introduce our Weekly Delivery Program,
                                designed to bring ease and consistency to your grocery shopping
                                routine.
                                <br />
                                <br />
                                {/*Images from:

          <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Change the colour #f8fafc to match the previous section colour */}
        <svg
            className="wave-top"
            viewBox="0 0 1439 147"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                    <g className="wave" fill="#f8fafc">
                        <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                    </g>
                    <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                            <path
                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                opacity="0.100000001"
                            />
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"
                            />
                            <path
                                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                opacity="0.200000003"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <section className="container mx-auto text-center py-6 mb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                Order Now!
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <h3 className="my-4 text-3xl leading-tight">
                Fresh Savings, Right to Your Doorstep!
            </h3>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Order
            </button>
        </section>
    </>
}

function Footer() {
    return
    <footer className="bg-white">
        <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 mb-6 text-black">
                    <a
                        className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                    >
                        {/*Icon from: http://www.potlabicons.com/ */}
                        {/*<svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">*/}
                        <rect
                            fill="#2a2a31"
                            x="16.539"
                            y="425.626"
                            width="479.767"
                            height="50.502"
                            transform="matrix(1,0,0,1,0,0)"
                        ></rect>
                    </a>
                    <a
                        className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#"
                    >
                        <img
                            src="/img/ThriftyGrocer.png"
                            alt="Thrifty Grocer Logo"
                            className="h-32 inline"
                        />
                    </a>
                    <path
                        className="plane-take-off"
                        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                    >
                        {/*Title*/}
                    </path>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Links</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                FAQ
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Help
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Terms
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Social</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Company</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Official Blog
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                About Us
                            </a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a
                                href="#"
                                className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}