import React, { useState } from "react";

const DropdownItem = ({ title, description, img }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative h-[350px] w-full border-t font-body shadow-md shadow-black/10 border-white/50 cursor-pointer  hover:rounded-md hover:bg-white transition-all`}
      onClick={() => setOpen((open) => !open)}
    >
      <div
        className={`flex justify-between p-4 items-center cursor-pointer ${
          open ? "bg-white" : ""
        }`}
      >
        <p className="font-semibold ">{title}</p>
        {!open && (
          <svg
            className="size-4 transition-all delay-200"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-379.000000, -240.000000)"
                  fill="#2c2c2c"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <polygon
                      id="plus-[#1512]"
                      points="344 89 344 91 334.55 91 334.55 100 332.45 100 332.45 91 323 91 323 89 332.45 89 332.45 80 334.55 80 334.55 89"
                    >
                      {" "}
                    </polygon>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        )}
        {open && (
          <svg
            className="size-4 transition-all delay-200"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6 12L18 12"
                stroke="#2c2c2c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        )}
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <img className="size-1/3 object-contain" src={img} alt="" />
        <div
          className={`absolute top-14 left-0 w-full h-[calc(100%-56px)] bg-[#fdfcfc] px-4 py-6 font-medium text-gray-600 transition-transform duration-150 origin-top ${
            open ? "scale-y-100" : "scale-y-0"
          } overflow-y-scroll hide-scrollbar border-b-2 border-b-[#8DECB4]`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
