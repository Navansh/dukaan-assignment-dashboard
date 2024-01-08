import React from "react";

import { Button, Img, Text } from "components";

const PaymentsCashfreeDashboardOnePagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[100px] pl-[5px] pr-[11px] py-[7px] rounded"
          leftIcon={
            <Img
              className="h-[18px] mr-1.5"
              src="images/img_arrowleft.svg"
              alt="arrow_left"
            />
          }
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">
            {props?.previous}
          </div>
        </Button>
        <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zero}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroOne}
            </Text>
          </div>
          <Button className="bg-blue-800 cursor-pointer font-inter font-medium h-7 py-[5px] rounded text-center text-sm text-white-A700 w-7">
            {props?.ten}
          </Button>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroTwo}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroThree}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroFour}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroFive}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroSix}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroSeven}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroEight}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14Gray800"
            >
              {props?.zeroNine}
            </Text>
          </div>
        </div>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[74px] pl-[11px] pr-[5px] py-[7px] rounded"
          rightIcon={
            <Img
              className="h-[18px] ml-1.5"
              src="images/img_arrowright.svg"
              alt="arrow_right"
            />
          }
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">
            {props?.next}
          </div>
        </Button>
      </div>
    </>
  );
};

PaymentsCashfreeDashboardOnePagination.defaultProps = {
  previous: "Previous",
  zero: "1",
  zeroOne: "...",
  ten: "10",
  zeroTwo: "11",
  zeroThree: "12",
  zeroFour: "13",
  zeroFive: "14",
  zeroSix: "15",
  zeroSeven: "16",
  zeroEight: "17",
  zeroNine: "18",
  next: "Next",
};

export default PaymentsCashfreeDashboardOnePagination;
