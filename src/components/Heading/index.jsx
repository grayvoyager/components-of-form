import React from "react";

const sizes = {
  "2xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  xl: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  s: "text-base font-semibold",
  md: "text-xl font-semibold",
  xs: "text-sm font-semibold",
  lg: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
