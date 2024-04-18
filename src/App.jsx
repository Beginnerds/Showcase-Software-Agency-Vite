import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServicesSelect from "./components/ServicesSelect";
import DropdownList from "./components/DropdownList/DropdownList";
import ContactForm from "./components/ContactForm";

const COMPANYNAMES = [
  "Regal",
  "Active Zen",
  "The Pyramid",
  "Connectlee",
  "Link Length",
  "Magnify",
  "Art Invasion",
  "Shoe Me",
];

const PROJECTSDATA = [
  {
    img: "/assets/project_1.webp",
    desc: "Data analaysis and warehousing solution for your business nedds.",
  },
  {
    img: "/assets/project_2.webp",
    desc: "AI powered chatbot customized as per user requirements to meet all and every industry needs.",
  },
  {
    img: "/assets/project_3.webp",
    desc: "Ecommerce android/ios app for your business with analytics and monetization reports.",
  },
  {
    img: "/assets/project_4.webp",
    desc: "Custom dashboard to modify and monitor SEO reports for websites.",
  },
];

const KNOWUSBETTERDATA = [
  {
    title: "75+ Clients",
    img: "/assets/clients.webp",
  },
  {
    title: "100+ Projects",
    img: "/assets/projects.webp",
  },
  {
    title: "10+ Years",
    img: "/assets/years.webp",
  },
  {
    title: "200+ Employees",
    img: "/assets/employees.webp",
  },
  {
    title: "10+ Locations",
    img: "/assets/locations.webp",
  },
];

const INDUSTRIESDATA = [
  {
    title: "Healthcare",
    icon: "/assets/healthcare_icon.svg",
  },
  {
    title: "Logistics",
    icon: "/assets/logistics_icon.svg",
  },
  {
    title: "Finance",
    icon: "/assets/finance_icon.svg",
  },
  {
    title: "Technology",
    icon: "/assets/technology_icon.svg",
  },
  {
    title: "IOT",
    icon: "/assets/iot_icon.svg",
  },
  {
    title: "Ecommerce",
    icon: "/assets/ecommerce_icon.svg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1530 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1530, min: 1260 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  smallTablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2.2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const App = () => {
  const toAnimateRef = useRef([]);

  const pushItemsRefToAnimate = (item) => {
    toAnimateRef.current.push(item);
  };

  // scroll animations using intersection observers
  useEffect(() => {
    const animate = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          console.log(elem.style.transform);
          elem.style.opacity = "1";
          console.log(elem.style.position);
          if (elem.style.position != "absolute") {
            elem.style.transform = "scale(1,1) translate(0,0)";
          }
        } else {
          let elem = entry.target;
          // elem.style.opacity = "0";
          elem.style.transform = "";
          elem.style = "";
        }
      });
    };

    const observer = new IntersectionObserver(animate, {});

    toAnimateRef.current.forEach((item) => observer.observe(item));
  }, []);

  return (
    <>
      <main className="min-h-screen overflow-x-hidden relative">
        <Nav />
        <section className="relative">
          <img
            src={`/assets/hero-1.jpg`}
            alt="hero-img"
            className="w-screen h-screen object-cover bg-fixed"
          />
          <div className="h-full w-full bg-black/40 z-10 absolute top-0 left-0"></div>
        </section>

        <div className="absolute w-full h-full top-0 left-0 grid place-content-center">
          <h1
            ref={pushItemsRefToAnimate}
            className="w-full max-w-[900px] font-title font-extrabold text-[4vh] md:text-[6vh] lg:text-[8vh] text-white text-center z-20 opacity-0 transition-all delay-100"
          >
            BRING{" "}
            <span
              ref={pushItemsRefToAnimate}
              className="block text-accent transition-all delay-500 opacity-0 duration-1000"
            >
              YOUR VISION{" "}
            </span>
            TO REALITY
          </h1>
        </div>
      </main>
      <section className="bg-black py-6 md:py-24 px-4 md:px-20 flex flex-col md:flex-row max-md:justify-start max-md:items-center justify-between overflow-x-hidden border-b border-b-white/10">
        <p className="mt-12 md:mt-0 text-custom1/70 font-body font-medium text-lg">
          OUR CLIENTS
        </p>
        <div
          ref={pushItemsRefToAnimate}
          className="md:basis-[65%] mt-24 md:mt-0 flex  flex-wrap justify-center md:justify-start items-start  gap-x-8 sm:gap-x-20  xl:gap-x-30  2xl:gap-x-44 gap-y-14 transition-all opacity-0 duration-1000 translate-x-10 delay-200"
        >
          {COMPANYNAMES.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-start items-center`}
              >
                <img
                  src={`/assets/company-logo-${index + 1}.svg`}
                  alt="client-logo"
                  height={40}
                  width={80}
                  className="size-16 md:size-24"
                />
                <p className="mt-2 text-white text-center font-medium">
                  {COMPANYNAMES[index]}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="bg-black pt-10 md:pt-36 px-4 md:px-20 pb-10"
        id="currentstories"
      >
        <p className="mt-12 md:mt-0 text-custom1/70 font-body font-medium text-lg">
          CURRENT STORIES
        </p>
        <div className="mt-8 w-full max-w-[850px]">
          <h2
            className="font-title text-custom1 font-medium text-xl sm:text-2xl md:text-3xl opacity-0 transition-all duration-500 delay-100 -translate-x-7"
            ref={pushItemsRefToAnimate}
          >
            We design, develop and test{" "}
            <span className="text-accent">YOUR IDEA </span> and bring it to
            completion, Improving your online presence and finding new avenues.
          </h2>
          <p className="text-custom1 mt-8">
            Check out all our projects{" "}
            <a
              className="ml-6 px-3 py-3 rounded-full font-medium uppercase text-sm filter  text-black bg-accent saturate-150 hover:saturate-200 transition-all text-center align-middle group"
              href="#"
            >
              More{" "}
              <svg
                className="w-6 h-6 inline transition-transform mt-[-2px] group-hover:translate-x-2"
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
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </p>
        </div>
      </section>
      {/* This section should contain both the client images and members images | to make the background image work */}
      <section className="bg-black font-body pb-20">
        <div className="__CLIENT_IMAGES_CONTAINER__ px-4 md:px-20 border-y border-y-white/10 grid justify-items-center lg:justify-items-start grid:cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:[&>:not(:nth-child(4))]:border-r 2xl:[&>:not(:nth-child(4))]:border-white/10 ">
          {PROJECTSDATA.map((item, index) => {
            return (
              <a
                key={index}
                className={`py-8 2xl:pr-16 col-span-1 w-full max-w-[360px] h-full flex flex-col justify-between group opacity-0 transition-all duration-1000 delay-${
                  (index + 1) * 100
                } translate-x-7`}
                href="#"
                ref={pushItemsRefToAnimate}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[180px] bg-cover rounded-sm group-hover:scale-110 transition-all"
                />
                <p className="mt-4 text-custom1/70 group-hover:text-accent transition-all delay-100">
                  {item.desc}
                </p>

                <svg
                  className="mt-5 xl:mt-8 w-6 h-6 inline transition-transform scale-x-125 stroke-custom1/70 origin-left delay-200 group-hover:scale-x-150 group-hover:float-right"
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
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            );
          })}
        </div>
        <p className="mt-24 text-custom1 text-xl sm:text-2xl md:text-3xl text-center font-title font-medium">
          Know us better
        </p>
        <div className="__CAROUSEL_CONTAINER__  mt-16 max-w-screen">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            pauseOnHover={true}
            autoPlaySpeed={0}
            keyBoardControl={true}
            customTransition="all 5s linear"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "smallTablet"]}
            dotListClass="custom-dot-list-style"
          >
            {KNOWUSBETTERDATA.map((item, index) => {
              return (
                // <div
                //   key={index}
                //   className={`${
                //     index == 0 ? "pl-2" : "pl-6"
                //   }  flex justify-start gap-10 w-[300px] select-none`}
                // >
                <div key={index} className={` select-none w-fit`}>
                  <span className="mr-8  text-xl text-custom1 font-semibold">
                    {item.title}
                  </span>
                  <img
                    src={item.img}
                    alt=""
                    className="hidden sm:inline ml-auto size-[140px] object-cover select-none filter saturate-50 rounded-sm"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
      <section className="bg-[#E0EBEA] pt-10 md:pt-36 pb-10" id="services">
        <p className=" px-4 md:px-20 mt-12 md:mt-0 text-black/70 font-body font-medium text-lg">
          WHAT WE DO
        </p>
        <div className="mt-8 px-4 md:px-20 w-full max-w-[850px]">
          <h2
            className="font-title font-medium text-xl sm:text-2xl md:text-3xl opacity-0 transition-all duration-500 delay-100 -translate-x-8"
            ref={pushItemsRefToAnimate}
          >
            We've progressed from ideation to clear definitions, from
            implementation through deployment to seamless scaling, and ongoing
            maintenance, touching on every step of product development.
          </h2>
        </div>
        <div
          className="mt-8 opacity-0 transition-all duration-1000 delay-300 translate-x-10"
          ref={pushItemsRefToAnimate}
        >
          <ServicesSelect />
        </div>

        <div className="mt-20 sm:mt-40">
          <p className=" px-4 md:px-20 text-center text-black/70 font-body font-medium text-lg">
            INDUSTRIES
          </p>
          <h2 className="w-full sm:w-3/4 md:w-1/2 mx-auto mt-6 text-center font-title font-medium text-xl sm:text-2xl md:text-3xl">
            Tailored solutions for every sector.
          </h2>

          <div
            className="__INDUSTRIES__CONTAINER__ mt-8 border-y border-white/50 flex flex-wrap max-sm:[&>:not(first-child)]:border-b [&>:not(first-child)]:border-l [&>:not(first-child)]:border-y [&>:not(first-child)]:border-white/50 font-body transition-all origin-top -translate-y-8 duration-1000 opacity-0 delay-200"
            ref={pushItemsRefToAnimate}
          >
            {INDUSTRIESDATA.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-1/2 sm:w-1/3 md:w-1/6 p-5 flex flex-col items-center md:items-start gap-y-4"
                >
                  <img className="size-10" src={item.icon} alt="" />
                  <p className="font-semibold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 sm:mt-40" id="about">
          <p className=" px-4 md:px-20 text-center text-black/70 font-body font-medium text-lg">
            HOW WE WORK
          </p>
          <h2 className="w-full sm:w-3/4 md:w-1/2 mx-auto mt-6 text-center font-title font-medium text-xl sm:text-2xl md:text-3xl">
            We innovate solutions and encourage growth.
          </h2>
          <div
            className="mt-8 transition-all origin-top translate-y-8 duration-1000 opacity-0 delay-200"
            ref={pushItemsRefToAnimate}
          >
            <DropdownList />
          </div>
        </div>
      </section>
      <section
        className="pt-10 md:pt-36 px-4 md:px-20 pb-5 bg-[#F4FF65] font-body min-h-screen"
        id="careers"
      >
        <div
          className="w-full max-w-[850px] transition-all opacity-0 -translate-x-10 duration-1000 delay-200"
          ref={pushItemsRefToAnimate}
        >
          <h2 className="font-title font-medium text-xl sm:text-2xl md:text-3xl">
            We're shaping tomorrow's tech. Join us for innovative challenges,
            growth opportunities, and a dynamic team environment. Explore
            careers now!"
          </h2>
        </div>
        <div className="__CAREERS_IMAGES__CONTAINER__ mt-14 relative w-full h-[700px] max-h-full">
          <div
            className="__RIGHT__IMAGE__ absolute top-0 2xl:top-[5%] right-0 2xl:right-[5%] size-[200px] rounded-md transition-all opacity-0 duration-700 delay-100 translate-x-10"
            ref={pushItemsRefToAnimate}
          >
            <img
              src="/assets/careers_1.webp"
              className="w-full h-full object-cover rounded-md "
              alt=""
            />
          </div>
          <div
            className="__LEFT__IMAGE__ absolute top-1/4 left-0 2xl:left-[5%] size-[150px] rounded-md transition-all opacity-0 duration-700 delay-100 -translate-x-10"
            ref={pushItemsRefToAnimate}
          >
            <img
              src="/assets/careers_3.webp"
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div
            className="__BOTTOM__IMAGE__ absolute bottom-0 left-1/2 mr-[50px] translate-y-10 size-[100px] rounded-md transition-all opacity-0 duration-700 delay-100"
            ref={pushItemsRefToAnimate}
          >
            <img
              src="/assets/careers_2.webp"
              className=" w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="__CENTER__IMAGE__ absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 h-4/5 sm:h-1/2 rounded-md flex gap-8 py-10 px-6 bg-gray-400/20 shadow-md backdrop-blur-md ">
            <img
              src="/assets/careers_4.webp"
              className="hidden sm:block w-2/5 h-full object-cover rounded-md transition-all opacity-0 delay-300 duration-1000 -translate-x-10"
              alt=""
              ref={pushItemsRefToAnimate}
            />
            <div
              className="h-full flex flex-col justify-center items-center gap-8 sm:gap-0 sm:justify-between sm:items-start max-w-[500px] opacity-0 delay-300 duration-1000 translate-x-10"
              ref={pushItemsRefToAnimate}
            >
              <p className="font-bold text-center sm:text-start">
                we're forging the future of tech. Join our team for exciting
                challenges, growth, and a supportive community. Discover your
                next career move with us!
              </p>
              <a
                className="px-3 py-3 rounded-full font-medium uppercase text-sm filter  text-white bg-black hover:brightness-75 saturate-150 hover:saturate-200 transition-all text-center align-middle group flex items-center gap-1"
                href="#"
              >
                JOIN US{" "}
                <svg
                  className="w-6 h-6 inline transition-transform  group-hover:translate-x-1"
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
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="__FORM__SECTION__ pt-6 md:pt-32 px-4 md:px-20 pb-20 bg-black flex flex-col sm:flex-row font-body sm:gap-4"
        id="contact"
      >
        <div className="__LEFT__TEXT__CONTAINER__ flex flex-col justify-center items-center gap-4 sm:gap-0 sm:justify-between sm:items-start h-40  sm:h-screen sm:max-h-[650px] w-full sm:w-[30%]">
          <p className="text-custom1 text-xl sm:text-2xl font-medium text-center sm:text-start">
            Want help in creating solutions that propel impactful change?
          </p>
          <p className="text-custom1 text-2xl sm:text-3xl font-medium font-title text-center sm:text-start">
            Let's talk!
          </p>
        </div>
        <div className="w-full sm:w-[70%]">
          <ContactForm />
        </div>
      </section>
      <div className="h-px bg-white/30"></div>
      <footer className="pt-6 md:pt-20 px-4 md:px-20 pb-10 bg-black">
        <div className="w-full grid grid-cols-4 gap-8 sm:gap-4 text-custom1/70 text-sm font-body">
          <div className="col-span-full sm:col-span-1 flex flex-col justify-between">
            <h3 className="text-custom1 text-xl sm:text-2xl font-medium">
              ByteBloom
            </h3>
            <p className="text-sm">
              &#169; 2024 ByteBloom, All Rights Reserved.
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-custom1/35">Services</p>
            <ul>
              <li className="mt-3 hover:text-custom1 transition-all">
                <a href="#services">Fullstack Development.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#services">Mobile App Development.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#services">UI/UX Design.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#services">Product Maintenance And Support.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#services">
                  Data Analytics And Business Intelligence.
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <ul>
              <li className="mt-[32px] hover:text-custom1 transition-all">
                <a href="#currentstories">Current Stories.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#careers">Careers.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#about">About Us.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#contact">Contact.</a>
              </li>
              <li className="mt-2 hover:text-custom1 transition-all">
                <a href="#">Privacy Policy.</a>
              </li>
            </ul>
          </div>
          <div className="col-span-full sm:col-span-1 justify-self-center  sm:self-end flex gap-6">
            <a href="#">
              <img
                src="/assets/facebook_icon.svg"
                alt="fb"
                className="size-6 object-cover"
              />
            </a>
            <a href="#">
              <img
                src="/assets/instagram_icon.svg"
                alt="fb"
                className="size-6 object-cover"
              />
            </a>
            <a href="#">
              <img
                src="/assets/linkedin_icon.svg"
                alt="fb"
                className="size-6 object-cover"
              />
            </a>
            <a href="#">
              <img
                src="/assets/glassdoor_icon.svg"
                alt="fb"
                className="size-6 object-cover"
              />
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-center text-custom1/20">
          This site is for demonstration purposes only, all the assets have been
          take from the web with open source licenses, any request to remove an
          asset will be honored.
        </p>
      </footer>
    </>
  );
};
