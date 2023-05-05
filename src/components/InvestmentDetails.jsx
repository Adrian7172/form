import React from "react";
import InputBox from "./InputBox";
import { dummy } from "@/data/dummy";

const InvestmentDetails = (props) => {
  return (
    <div className="bg-inherit max-w-[1440px] mx-auto py-[35px] flex items-center justify-center px-2">
      <div className="max-w-[1128px] w-full">
        <div className="w-full h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center p-3">
          <h1 className="text-[26px] font-[500]">Investment Details</h1>
        </div>
        <div className="mt-10">
          {dummy.map((data) => (
            <div className="mt-16">
              <InputBox id={data.id} {...data} {...props}/>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
