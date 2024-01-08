import React from "react";

import { Text } from "components";

const PaymentsCashfreeDashboardOneTabletype = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-center w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtInterMedium14Gray800"
                >
                  {props?.orderid}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsCashfreeDashboardOneTabletype.defaultProps = { orderid: "Order ID" };

export default PaymentsCashfreeDashboardOneTabletype;
