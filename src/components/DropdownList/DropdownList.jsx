import React from "react";
import DropdownItem from "./DropdownItem";

const data = [
  {
    title: "Dedicated Teams",
    img: "/assets/teams_icon.svg",
    description:
      "Empower your vision with our dedicated software team. We specialize in turning ideas into exceptional products. With our expertise, your product development journey becomes seamless and efficient. Let us handle the tech while you focus on your business goals. Elevate your innovation with our trusted team.",
  },
  {
    title: "Agile Development",
    img: "/assets/agile_icon.svg",
    description:
      "Join us for agile development excellence! We deliver results faster, adapt to changes seamlessly, and ensure your project's success. Let's build and iterate together!",
  },
  {
    title: "Selected Development",
    img: "/assets/crown_icon.svg",
    description:
      "Join the exclusive 20. We're the software development company that prioritizes quality over quantity. With only 20 clients chosen annually, we offer dedicated attention, bespoke solutions, and unrivaled expertise. Secure your spot among the select few for premium service and exceptional results. Elevate your project with our exclusive focus on your success.",
  },
];

const DropdownList = () => {
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 lg:[&>:not(first-child)]:border-r lg:[&>:not(first-child)]:border-white/50"
          >
            <DropdownItem
              title={item.title}
              img={item.img}
              description={item.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DropdownList;
