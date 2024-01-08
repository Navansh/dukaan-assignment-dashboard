import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PaymentsCashfreeDashboardOneRowframe2282 = (props) => {
  const [frame2282value, setFrame2282value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex md:flex-col flex-row gap-4 items-center justify-between max-w-[1216px] sm:px-5 px-8 py-3 w-full">

      
        <div className="flex flex-row gap-4 items-center justify-start">
        {/* Payment Text  */}
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-[15px] text-gray-900 w-auto"
              size="txtInterRegular15"
            >
              {props?.paymenttext}
            </Text>
          </div>
          {/* How to use Text  */}
          <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
            <Img
              className="h-3.5 w-3.5"
              src="images/img_outlinedhelp.svg"
              alt="outlinedhelp"
            />
            <Text
              className="text-gray-800 text-xs w-auto"
              size="txtInterRegular12"
            >
              {props?.howtousetext}
            </Text>
          </div>
        </div>


        <Input
          name="frame2282"
          placeholder="Search features, tutorials, etc."
          value={frame2282value}
          onChange={(e) => setFrame2282value(e)}
          className="font-inter p-0 placeholder:text-gray-600 sm:pr-5 text-[15px] text-gray-600 text-left w-full"
          wrapClassName="bg-gray-100 flex pl-4 pr-[35px] py-2.5 rounded-md w-[35%] md:w-full"
          prefix={
            <Img
              className="mt-px mb-0.5 cursor-pointer h-4 mr-2"
              src="images/img_search.svg"
              alt="search"
            />
          }
          suffix={
            <CloseSVG
              fillColor="#7f7f7f"
              className="cursor-pointer h-4 my-auto"
              onClick={() => setFrame2282value("")}
              style={{
                visibility: frame2282value?.length <= 0 ? "hidden" : "visible",
              }}
              height={16}
              width={16}
              viewBox="0 0 16 16"
            />
          }
        ></Input>

        {/* Rest both the images  */}
        <div className="flex flex-col items-start justify-end">
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Button className="bg-gray-300 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
              <Img
                className="h-5"
                src="images/img_user_gray_800.svg"
                alt="user_One"
              />
            </Button>
            <Button className="bg-gray-300 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
              <Img src="images/img_favorite.svg" alt="favorite" />
            </Button>
          </div>
        </div>


      </div>
    </>
  );
};

PaymentsCashfreeDashboardOneRowframe2282.defaultProps = {
  paymenttext: "Payments",
  howtousetext: "How it works",
};

export default PaymentsCashfreeDashboardOneRowframe2282;
