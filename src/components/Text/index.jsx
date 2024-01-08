import React from "react";

const sizeClasses = {
  txtInterMedium14Blue800: "font-inter font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtGalanoGrotesqueRegular16: "font-galanogrotesque font-normal",
  txtInterMedium32: "font-inter font-medium",
  txtGalanoGrotesqueRegular13: "font-galanogrotesque font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtGalanoGrotesqueMedium32: "font-galanogrotesque font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtGalanoGrotesqueMedium20: "font-galanogrotesque font-medium",
  txtInterMedium14Gray800: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular14Gray800: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
