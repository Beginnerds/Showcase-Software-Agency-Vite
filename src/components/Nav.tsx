import React, { useEffect, useRef, useState } from "react";

const Nav = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // change style of desktop nav on scroll
  useEffect(() => {
    const changeNavStyleOnScroll = (e) => {
      if (
        document.documentElement.scrollTop >
        document.documentElement.clientHeight
      ) {
        const nav = desktopRef.current! as HTMLElement;
        nav.style.backgroundColor = "#000000";
        nav.style.borderBottom = "1px solid rgba(255,255,255,0.25)";
        nav.querySelector("li")!.style.padding = "16px 0 16px 0";
      } else {
        const nav = desktopRef.current! as HTMLElement;
        nav.style.backgroundColor = "";
        nav.style.borderBottom = "";
        nav.querySelector("li")!.style.padding = "";
      }
    };
    document.addEventListener("scroll", changeNavStyleOnScroll);

    return () => document.removeEventListener("scroll", changeNavStyleOnScroll);
  }, []);

  // change style of mobile nav on scroll
  useEffect(() => {
    const changeNavStyleOnScroll = (e) => {
      if (
        document.documentElement.scrollTop >
        document.documentElement.clientHeight
      ) {
        const nav = mobileRef.current! as HTMLElement;

        nav.style.backgroundColor = "#000000";
      } else {
        const nav = mobileRef.current! as HTMLElement;
        nav.style.backgroundColor = "";
      }
    };
    document.addEventListener("scroll", changeNavStyleOnScroll);

    return () => document.removeEventListener("scroll", changeNavStyleOnScroll);
  }, []);
  return (
    <>
      {/* desktop nav */}
      <nav
        className="hidden sm:flex justify-between items-stretch px-5 md:px-10  bg-black/70 font-semibold font-title z-50 fixed top-0 left-0 w-full origin-top transition-all duration-1000 delay-75"
        ref={desktopRef}
      >
        <div className="grid place-content-center -ml-5 md:ml-[-20px]">
          <img
            src={`/images/logo.png`}
            alt="logo"
            width={180}
            height={80}
            className=""
          />
        </div>
        <ul className="basis-[75%] md:basis-[65%] text-xs md:text-sm flex items-stretch justify-end gap-4 text-custom1  [&>li]:cursor-pointer">
          <li className="hover:text-accent flex justify-between items-center group relative py-8 transition-all duration-1000">
            <a href="#services">SERVICES</a>{" "}
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform group-hover:rotate-180"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#f7f7f7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            <div className="absolute opacity-0 scale-y-0 pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto hover:scale-y-100  hover:opacity-100 hover:pointer-events-auto top-full left-1/2 -translate-x-1/2 bg-black/70 rounded-[6px] text-custom1 flex z-20 transition-all origin-top">
              <span className="left-carat"></span>
              <ul className="py-4 px-8 overflow-visible whitespace-nowrap font-body font-normal">
                <li>
                  <a
                    href="#services"
                    className="block py-2 px-2 hover:text-accent transition-all"
                  >
                    Full Stack Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-2 px-2 hover:text-accent transition-all"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-2 px-2 hover:text-accent transition-all"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-2 px-2 hover:text-accent transition-all"
                  >
                    Product Maintenance and Support
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-2 px-2 hover:text-accent transition-all"
                  >
                    SEO Report
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-center hover:text-accent">
            <a href="#currentstories">CURRENT STORIES</a>
          </li>
          <li className="flex items-center hover:text-accent">
            <a href="#careers">CAREERS</a>
          </li>
          <li className="flex items-center hover:text-accent">
            <a href="#about">ABOUT US</a>
          </li>
          <li className="flex items-center hover:text-accent">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <nav
        ref={mobileRef}
        className={`z-50 flex px-2 justify-between sm:hidden fixed top-0 left-0 w-full bg-black/70 ${
          drawerOpen ? "!bg-black" : ""
        }`}
      >
        <div className="w-[150px] h-[40px] -ml-4">
          <img
            src={`/images/logo.png`}
            alt="logo"
            className="h-full w-full object-cover "
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {!drawerOpen && (
            <svg
              className="h-full w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          )}
          {drawerOpen && (
            <svg
              className="h-full w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>

        <div
          className={`absolute top-full left-0 w-full min-h-screen bg-black origin-top scale-y-0 pointer-events-none ${
            drawerOpen ? "scale-y-100 pointer-events-auto" : ""
          } transition-transform duration-500`}
        >
          <ul className="text-custom1 flex flex-col justify-center items-center gap-8 min-h-[calc(100vh-64px)] w-full text-xl font-title font-semibold">
            <li
              onClick={() => setDrawerOpen(false)}
              className={`w-full opacity-0 transition-all duration-300 delay-300 ${
                drawerOpen ? "opacity-100" : ""
              }`}
            >
              <a href="#services" className="inline-block text-center w-full">
                SERVICES
              </a>
            </li>

            <li
              onClick={() => setDrawerOpen(false)}
              className={`w-full opacity-0 transition-all duration-300 delay-[400ms] ${
                drawerOpen ? "opacity-100" : ""
              }`}
            >
              <a
                href="#currentstories"
                className="inline-block w-full text-center"
              >
                CURRENT STORIES
              </a>
            </li>

            <li
              onClick={() => setDrawerOpen(false)}
              className={`w-full opacity-0 transition-all duration-300 delay-[500ms] ${
                drawerOpen ? "opacity-100" : ""
              }`}
            >
              <a href="#careers" className="inline-block w-full text-center">
                CAREERS
              </a>
            </li>

            <li
              onClick={() => setDrawerOpen(false)}
              className={`w-full opacity-0 transition-all duration-300 delay-[600ms] ${
                drawerOpen ? "opacity-100" : ""
              }`}
            >
              <a href="#about" className="inline-block w-full text-center">
                ABOUT US
              </a>
            </li>

            <li
              onClick={() => setDrawerOpen(false)}
              className={`w-full opacity-0 transition-all duration-300 delay-[600ms] ${
                drawerOpen ? "opacity-100" : ""
              }`}
            >
              <a href="#contact" className="inline-block w-full text-center">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
