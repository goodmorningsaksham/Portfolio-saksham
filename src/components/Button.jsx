import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function Button({title = "Check Demo", color="white"}) {
  return (
    <div className="flex justify-center text-center">
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      <span className={`${color === "teal" ? "text-teal-300" : "text-white"  }`}>{title}</span>
      <MdArrowOutward />
    </HoverBorderGradient>
  </div>
  );
}

export default Button;
