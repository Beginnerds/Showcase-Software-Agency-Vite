import React, { useState } from "react";

const tabList = [
  "Fullstack Development",
  "Mobile App Development",
  "UI/UX Design",
  "Product Maintenance and Support",
  "Data Analytics and Business Intelligence",
];

const servicesDetailsIcons = [
  "/images/code_icon.svg",
  "/images/mobile_icon.svg",
  "/images/ui_icon.svg",
  "/images/product_icon.svg",
  "/images/data_icon.svg",
];

const servicesDetailsListIcons = [
  <svg
    fill="#000000"
    viewBox="0 0 32 32"
    version="1.1"
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
      <title>web</title>{" "}
      <path d="M0 15.656v-0.031c0.281-3.625 1.594-6.344 3.875-8.063 2.25-1.75 4.688-2.594 7.344-2.594 2.781-0.031 5.375 0.906 7.688 2.781 2.344 1.844 3.5 4.594 3.5 8.156v0.219c0 3.594-1.156 6.281-3.5 8.125-2.344 1.875-4.938 2.813-7.719 2.813h-0.125c-2.719-0.031-5.219-0.969-7.531-2.844-2.313-1.844-3.5-4.688-3.531-8.563zM10.531 10.75v-4.938h-0.75c-0.156 0.188-0.281 0.406-0.406 0.594s-0.25 0.375-0.375 0.594c-0.125 0.188-0.281 0.438-0.375 0.625-0.125 0.188-0.219 0.375-0.313 0.594-0.188 0.313-0.344 0.625-0.469 0.906-0.156 0.281-0.281 0.563-0.375 0.813 0.188 0.125 0.406 0.281 0.656 0.375 0.281 0.094 0.563 0.188 0.844 0.25 0.313 0.063 0.594 0.094 0.844 0.125 0.281 0.031 0.531 0.063 0.719 0.063zM11.844 5.813v4.906c0.156 0 0.344 0.031 0.531 0 0.188 0 0.406-0.031 0.594-0.063 0.344-0.063 0.75-0.156 1.063-0.25 0.344-0.125 0.656-0.281 0.875-0.469-0.375-0.906-0.781-1.625-1.188-2.313s-0.875-1.281-1.375-1.781v-0.031h-0.5zM8.469 6.094v-0.031c-0.219 0.094-0.438 0.25-0.688 0.344-0.219 0.094-0.5 0.219-0.719 0.344-0.438 0.219-0.875 0.469-1.313 0.75-0.406 0.281-0.813 0.594-1.156 0.906 0.125 0.125 0.281 0.25 0.406 0.344s0.281 0.219 0.438 0.344c0.125 0.063 0.281 0.156 0.438 0.281 0.156 0.094 0.344 0.219 0.531 0.344 0.25-0.563 0.5-1.156 0.813-1.688 0.313-0.563 0.656-1.094 1-1.563 0.031-0.063 0.063-0.125 0.125-0.188 0.031-0.031 0.063-0.125 0.125-0.188zM18.031 8.406v-0.031c-0.781-0.594-1.469-1.094-2.156-1.406s-1.375-0.625-2-0.875c0.5 0.5 0.938 1.125 1.219 1.719 0.313 0.625 0.625 1.281 0.875 1.906 0.125-0.063 0.281-0.125 0.469-0.25 0.156-0.094 0.375-0.188 0.563-0.281 0.188-0.125 0.344-0.25 0.531-0.375 0.188-0.156 0.375-0.281 0.5-0.406zM17.5 15.375h3.594c0-1.156-0.25-2.25-0.719-3.375-0.438-1.094-1.063-2-1.844-2.781v-0.031c-0.156 0.25-0.375 0.469-0.594 0.625-0.25 0.156-0.469 0.281-0.719 0.406-0.156 0.094-0.313 0.219-0.469 0.281-0.156 0.094-0.375 0.156-0.531 0.25 0.125 0.25 0.25 0.531 0.375 0.781 0.094 0.281 0.25 0.594 0.313 0.875 0.188 0.5 0.313 1.031 0.438 1.563 0.094 0.469 0.156 0.969 0.156 1.406zM6.188 10.75v-0.031c-0.25-0.125-0.531-0.219-0.75-0.344-0.219-0.156-0.438-0.313-0.625-0.438-0.188-0.094-0.375-0.219-0.531-0.344s-0.281-0.25-0.406-0.375c-0.813 0.781-1.406 1.656-1.781 2.688-0.406 1.031-0.688 2.188-0.813 3.438h3.844c0-0.875 0.125-1.719 0.344-2.563 0.188-0.875 0.469-1.531 0.719-2.031zM10.531 15.344v-3.594c-0.25 0.031-0.563 0.031-0.844 0-0.313-0.031-0.625-0.125-0.906-0.219-0.25-0.063-0.563-0.125-0.813-0.219-0.281-0.063-0.563-0.188-0.781-0.313-0.188 0.313-0.344 0.688-0.469 1.094-0.156 0.375-0.25 0.781-0.344 1.156-0.063 0.375-0.094 0.781-0.125 1.125s-0.063 0.688-0.063 0.969h4.344zM11.844 11.813v3.531h4.625c0-0.188 0-0.406-0.031-0.656-0.063-0.219-0.094-0.5-0.125-0.75-0.094-0.375-0.188-0.781-0.313-1.156-0.125-0.344-0.25-0.688-0.406-0.969-0.063-0.156-0.125-0.344-0.188-0.469-0.094-0.156-0.188-0.25-0.25-0.344-0.344 0.25-0.813 0.406-1.375 0.531-0.531 0.125-1.156 0.25-1.719 0.281h-0.219zM5.125 16.375h-3.844c0 0.531 0.094 1.125 0.25 1.844 0.156 0.75 0.469 1.438 0.813 2.188 0.156 0.375 0.344 0.75 0.531 1.125 0.219 0.344 0.469 0.719 0.719 1.063 0.188-0.125 0.375-0.219 0.531-0.313 0.188-0.094 0.406-0.219 0.594-0.313 0.219-0.094 0.438-0.188 0.688-0.313 0.219-0.094 0.5-0.219 0.781-0.344-0.25-0.781-0.531-1.531-0.719-2.375-0.219-0.813-0.344-1.625-0.344-2.531v-0.031zM10.531 20.031v-3.656h-4.344c0 0.25 0.031 0.625 0.094 1 0.031 0.375 0.125 0.781 0.188 1.188 0.125 0.438 0.219 0.875 0.344 1.25s0.25 0.688 0.375 0.969c0.563-0.219 1.125-0.375 1.5-0.469 0.406-0.125 0.781-0.219 1.156-0.25h0.344c0.125-0.031 0.25-0.031 0.344-0.031zM11.844 16.375v3.625c0.219 0.031 0.469 0.063 0.719 0.094 0.281 0.031 0.625 0.094 0.906 0.156l0.469 0.094c0.156 0.063 0.344 0.094 0.5 0.125 0.188 0.063 0.375 0.094 0.563 0.156 0.156 0.063 0.313 0.094 0.438 0.156 0.406-1.031 0.656-1.875 0.813-2.594 0.156-0.688 0.219-1.281 0.219-1.781v-0.031h-4.625zM21.094 16.406v-0.031h-3.594v0.188c-0.031 0.594-0.125 1.281-0.25 2-0.125 0.688-0.406 1.5-0.781 2.5 0.5 0.25 0.969 0.5 1.344 0.75s0.719 0.531 0.969 0.781c0.531-0.531 1-1.25 1.406-2.188 0.406-0.906 0.688-1.844 0.844-2.844 0.031-0.188 0.031-0.375 0.063-0.563v-0.594zM10.531 25.906v-4.875c-0.781 0.125-1.438 0.281-1.938 0.406s-0.875 0.25-1.125 0.375c0.188 0.469 0.375 0.875 0.563 1.25 0.188 0.344 0.406 0.719 0.594 1.031 0.063 0.125 0.188 0.25 0.281 0.406 0.094 0.125 0.156 0.281 0.25 0.406 0.094 0.156 0.188 0.344 0.281 0.531 0.125 0.156 0.219 0.344 0.344 0.469h0.75zM11.844 25.906h0.719c0.281-0.219 0.563-0.531 0.781-0.875 0.25-0.344 0.531-0.75 0.719-1.094 0.219-0.406 0.438-0.781 0.625-1.156s0.344-0.719 0.469-0.969c-0.344-0.125-0.813-0.25-1.281-0.375s-1.125-0.25-2.031-0.375v4.844zM18.031 23.344v-0.031c-0.063-0.094-0.188-0.219-0.281-0.313s-0.25-0.219-0.406-0.313c-0.125-0.094-0.281-0.188-0.469-0.281s-0.438-0.219-0.656-0.344c-0.125 0.25-0.344 0.688-0.656 1.281-0.281 0.594-0.781 1.313-1.406 2.094 0.781-0.125 1.469-0.406 2.094-0.781 0.688-0.344 1.281-0.813 1.781-1.313zM6.406 22.344v-0.031c-0.219 0.125-0.563 0.281-0.906 0.438-0.375 0.156-0.781 0.344-1.156 0.594 0.219 0.188 0.438 0.375 0.625 0.5 0.188 0.156 0.406 0.281 0.594 0.406 0.344 0.219 0.75 0.438 1.156 0.625s0.906 0.375 1.531 0.563c-0.219-0.25-0.375-0.563-0.531-0.813s-0.344-0.5-0.5-0.75-0.281-0.531-0.406-0.781c-0.156-0.25-0.281-0.5-0.406-0.75z"></path>{" "}
    </g>
  </svg>,
  <svg
    fill="#000000"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M448,182.857h-73.143c-5.056,0-9.143,4.096-9.143,9.143v54.857c0,5.047,4.087,9.143,9.143,9.143v150.126l-57.289,32.731 H210.286v18.286H320c1.591,0,3.154-0.411,4.535-1.207l50.322-28.754v48.247c0,20.169,16.402,36.571,36.571,36.571 S448,495.598,448,475.429V256c5.056,0,9.143-4.096,9.143-9.143V192C457.143,186.953,453.056,182.857,448,182.857z M429.714,475.429c0,10.085-8.201,18.286-18.286,18.286s-18.286-8.201-18.286-18.286V329.143h36.571V475.429z M429.714,310.857 h-36.571V256h36.571V310.857z M438.857,237.714H384v-36.571h54.857V237.714z"></path>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M256,0C114.843,0,0,114.843,0,256s114.843,256,256,256c36.306,0,71.397-7.451,104.302-22.144l-7.461-16.695 c-30.537,13.641-63.122,20.553-96.841,20.553c-66.743,0-127.104-27.685-170.322-72.128l174.254-156.827l88.503-9.838 l-2.021-18.167l-81.271,9.033V18.514c114.962,4.379,209.262,90.725,225.938,202.167l-16.658,1.856l2.021,18.167l16.594-1.847 c0.393,5.669,0.677,11.374,0.677,17.143c0,43.584-11.895,86.199-34.405,123.255l15.625,9.49C499.191,348.827,512,302.93,512,256 C512,114.843,397.157,0,256,0z M73.417,408.027C39.022,366.784,18.286,313.774,18.286,256c0-27.959,4.891-54.784,13.797-79.717 l206.885,82.752L73.417,408.027z M246.857,242.487L38.912,159.314c35.941-80.375,115.2-137.271,207.945-140.8V242.487z"></path>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <rect
            x="210.286"
            y="365.714"
            width="18.286"
            height="18.286"
          ></rect>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <rect
            x="246.857"
            y="365.714"
            width="18.286"
            height="18.286"
          ></rect>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <rect
            x="283.429"
            y="365.714"
            width="18.286"
            height="18.286"
          ></rect>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <rect
            x="210.286"
            y="402.286"
            width="18.286"
            height="18.286"
          ></rect>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <rect
            x="246.857"
            y="402.286"
            width="18.286"
            height="18.286"
          ></rect>{" "}
        </g>{" "}
      </g>{" "}
      <g>
        {" "}
        <g>
          {" "}
          <rect
            x="283.429"
            y="402.286"
            width="18.286"
            height="18.286"
          ></rect>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63605 5.63605C7.19815 4.07395 9.73081 4.07395 11.2929 5.63605L14.1213 8.46448C15.6834 10.0266 15.6834 12.5592 14.1213 14.1213C13.7308 14.5119 13.0976 14.5119 12.7071 14.1213C12.3166 13.7308 12.3166 13.0976 12.7071 12.7071C13.4882 11.9261 13.4882 10.6597 12.7071 9.87869L9.87869 7.05026C9.09764 6.26922 7.83131 6.26922 7.05026 7.05026C6.26922 7.83131 6.26922 9.09764 7.05026 9.87869L7.75737 10.5858C8.1479 10.9763 8.14789 11.6095 7.75737 12C7.36685 12.3905 6.73368 12.3905 6.34316 12L5.63605 11.2929C4.07395 9.73081 4.07395 7.19815 5.63605 5.63605ZM11.2929 9.8787C11.6834 10.2692 11.6834 10.9024 11.2929 11.2929C10.5119 12.074 10.5119 13.3403 11.2929 14.1213L14.1213 16.9498C14.9024 17.7308 16.1687 17.7308 16.9498 16.9498C17.7308 16.1687 17.7308 14.9024 16.9498 14.1213L16.2427 13.4142C15.8521 13.0237 15.8521 12.3905 16.2427 12C16.6332 11.6095 17.2663 11.6095 17.6569 12L18.364 12.7071C19.9261 14.2692 19.9261 16.8019 18.364 18.364C16.8019 19.9261 14.2692 19.9261 12.7071 18.364L9.8787 15.5356C8.3166 13.9735 8.3166 11.4408 9.8787 9.8787C10.2692 9.48817 10.9024 9.48817 11.2929 9.8787Z"
        fill="#000000"
      ></path>{" "}
    </g>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M19 13.8C19 17.7764 15.866 21 12 21C8.13401 21 5 17.7764 5 13.8C5 12.8452 5.18069 11.9338 5.50883 11.1C6.54726 8.46135 12 3 12 3C12 3 17.4527 8.46135 18.4912 11.1C18.8193 11.9338 19 12.8452 19 13.8Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>,
];

const detailsList = [
  {
    title: "Fullstack software development",
    link: "#",
    services: [
      "Fullstack software development",
      "Unit and E2E testing",
      "Ecommerce platforms",
      "Live chat applications",
      "Location monitoring applications",
    ],
  },
  {
    title: "Mobile app development",
    link: "#",
    services: [
      "Native app development",
      "PWA and hybrid app development",
      "Quality assurance and testing",
      "SEO on play and app app store",
      "Monetization services",
    ],
  },
  {
    title: "UI/UX design",
    link: "#",
    services: [
      "Wireframes to outline the structure and layout of the interface",
      "Developing interactive prototypes or mockups",
      "Designing high-fidelity mockups or UI designs",
      "Designing intuitive interactions, animations, and transitions",
      "Ensuring that the interface is accessible to users with disabilities",
    ],
  },
  {
    title: "Product maintenance and improvements",
    link: "#",
    services: [
      "Implementing new features or functionality based on user feedback",
      "Analyzing and improving the performance of the software products",
      "Applying security patches, fixes, and updates",
      "Updating user manuals, guides, and documentation to reflect changes",
      "Managing and maintaining multiple versions of the software product",
    ],
  },
  {
    title: "Data analytics and intelligence",
    link: "#",
    services: [
      "Cleaning, transforming, and structuring raw data",
      "Creating interactive dashboards, reports, and visualizations",
      "Designing and implementing data warehouses",
      "Applying machine learning algorithms and artificial intelligence",
      "Optimizing supply chain operations by analyzing data",
    ],
  },
];

const ServicesSelect = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row justify-start font-body">
      <div className="__TAB__CONTAINER__ sm:basis-[30%] max-sm:flex overflow-scroll hide-scrollbar">
        {tabList.map((item, index) => {
          return (
            <div key={index} onClick={() => setSelected(index)}>
              <div
                className={`flex justify-start items-center gap-4 cursor-pointer border-y border-white/50 p-4 ${
                  selected == index ? "bg-[#DAE6E4] border-b-[#B4BFBE]" : ""
                }`}
              >
                <div className="size-6 shrink-0 ">
                  <img
                    src={servicesDetailsIcons[index]}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  {/* <svg
                    viewBox="0 0 1024 1024"
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M512 192m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
                        fill="#DFE698FFEA00"
                      ></path>
                      <path
                        d="M110.021808 743.473457a128 128 0 1 0 221.702503-128 128 128 0 1 0-221.702503 128Z"
                        fill="#DFE698FFEA00"
                      ></path>
                      <path
                        d="M739.582127 791.504295a128 128 0 1 0 128-221.702504 128 128 0 1 0-128 221.702504Z"
                        fill="#DFE698FFEA00"
                      ></path>
                      <path
                        d="M181.7 509.3c-4.2 0-8.4-0.4-12.7-1.3-34.7-7-57.1-40.7-50.2-75.3 9.1-45.2 25.4-87.6 48.6-125.8 22.9-37.7 51.9-70.7 86.3-98.1 34.3-27.3 73.2-48.5 115.6-62.9C412.2 131.4 457.8 124 505 124c35.3 0 64 28.7 64 64s-28.7 64-64 64c-133.2 0-235.5 80.8-260.7 205.9-6.1 30.4-32.8 51.4-62.6 51.4zM512 913c-71.5 0-140.8-18.3-200.5-53.1-58.2-33.8-107.2-83.2-141.9-142.8-17.8-30.6-7.4-69.7 23.1-87.5 30.6-17.8 69.7-7.4 87.5 23.1C329.2 736.8 413.6 785 512 785c27.7 0 54.9-4.1 81-12.2 33.8-10.5 69.6 8.4 80.1 42.2 10.5 33.8-8.4 69.6-42.2 80.1C592.5 907 552.5 913 512 913zM807.9 738c-10.9 0-21.9-2.8-32-8.6-30.6-17.7-41-56.9-23.3-87.5C775 603.3 785 563.2 785 512c0-72.9-28.4-141.5-80-193-25-25-25-65.5 0-90.5s65.5-25 90.5 0c36.8 36.8 65.7 79.7 85.9 127.4 20.9 49.5 31.5 102 31.5 156.1 0 74-15.8 135.7-49.6 194.1-11.8 20.5-33.3 31.9-55.4 31.9z"
                        fill="#DFE698"
                      ></path>
                    </g>
                  </svg> */}
                </div>
                <p
                  className={`font-medium ${
                    selected == index
                      ? "text-black font-semibold"
                      : "text-gray-500"
                  } max-sm:whitespace-nowrap`}
                >
                  {item}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="__DETAILS__CONTAINER__ sm:basis-[70%] px-10 py-8 bg-[#ebf6f7]">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold font-title">
          {detailsList[selected].title}
        </h2>
        <div className="mt-8">
          <a
            className="px-3 py-3 rounded-full font-medium uppercase text-sm filter  text-black bg-accent saturate-150 hover:saturate-200 transition-all text-center align-middle group"
            href={detailsList[selected].link}
          >
            More{" "}
            <svg
              className="w-6 h-6 inline transition-transform mt-[-2px] group-hover:translate-x-1"
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
        </div>
        <div className="mt-8 h-px bg-black/50"></div>
        <div className="mt-12 flex justify-center sm:justify-between">
          <div className="__SERVICES__LIST__CONTAINER__ w-full sm:w-[70%]">
            {detailsList[selected].services.map((item, index) => {
              return (
                <div className="flex justify-between max-sm:items-center max-sm:gap-2 pt-4 border-b border-black/20 shadow-sm font-medium">
                  <p>{item}</p>
                  <div className="size-5 shrink-0 ">
                    {servicesDetailsListIcons[index]}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="__BIG__ICON__CONTAINER__ hidden md:block self-end">
            <img
              className="size-[100px] object-cover"
              src={servicesDetailsIcons[selected]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSelect;
