import React from "react";

import { Text } from "components";

const PaymentsCashfreeDashboardOneTabletype2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-center w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  {props?.datetext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsCashfreeDashboardOneTabletype2.defaultProps = {
  datetext: "7 July, 2023",
};

export default PaymentsCashfreeDashboardOneTabletype2;
