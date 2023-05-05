import React from "react";
import Input from "./Input";
import DateSelector from "./DatePicker";

const AccountDetails = ({ register, setValue, watch }) => {
  // const

  return (
    <div className="bg-inherit max-w-[1440px] mx-auto pt-[75px] pb-[45px] flex items-center justify-center">
      <div className="max-w-[1128px] w-full">
        <div className="w-full flex items-center justify-between">
          <div className="w-[25%] h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center p-3">
            <h1 className="text-[26px] font-[500] whitespace-nowrap">
              Applicant Details
            </h1>
          </div>
          <div className="w-[72%] h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center p-3">
            <h1 className="text-[26px] font-[500]">
              1st Account Holder Details
            </h1>
          </div>
        </div>

        {/* name */}
        <div className="mt-16 ml-auto w-[72%]">
          <Input
            placeholder="Applicant Name"
            name="accounts.applicant_name"
            value="accounts.applicant_name"
            register={register}
          />
        </div>

        {/* mobile otp */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <div className="w-full">
            <Input
              placeholder="Contact No."
              name="accounts.applicant_contact"
              value="accounts.applicant_contact"
              register={register}
            />
          </div>
          <button className="bg-transparent text-[#1EA596] border-2 border-[#1EA596] py-2 px-4 rounded whitespace-nowrap">
            Send OTP
          </button>
        </div>

        {/* verify mobile otp */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <div className="w-full">
            <Input
              placeholder="Enter OTP"
              name="accounts.mobile_otp"
              value="accounts.mobile_otp"
              register={register}
            />
          </div>
          <button className="bg-[#1EA596] text-[#FFFFFF] border-2 border-[#1EA596] py-2 px-8 rounded whitespace-nowrap">
            Verify
          </button>

          <button className="bg-transparent text-[#0E4059] py-2 px-2 rounded whitespace-nowrap font-bold">
            Re-Send OTP
          </button>
        </div>

        {/* email otp */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <div className="w-full">
            <Input
              placeholder="Email Id"
              name="accounts.applicant_email"
              value="accounts.applicant_email"
              register={register}
            />
          </div>
          <button className="bg-transparent text-[#1EA596] border-2 border-[#1EA596] py-2 px-4 rounded whitespace-nowrap">
            Send OTP
          </button>
        </div>

        {/* verify email otp */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <div className="w-full">
            <Input
              placeholder="Enter OTP"
              name="accounts.email_otp"
              value="accounts.email_otp"
              register={register}
            />
          </div>
          <button className="bg-[#1EA596] text-[#FFFFFF] border-2 border-[#1EA596] py-2 px-8 rounded whitespace-nowrap">
            Verify
          </button>

          <button className="bg-transparent text-[#0E4059] py-2 px-2 rounded whitespace-nowrap font-bold">
            Re-Send OTP
          </button>
        </div>

        {/* pan number */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <div className="w-full">
            <Input
              placeholder="PAN No."
              name="accounts.applicant_pan"
              value="accounts.applicant_pan"
              register={register}
            />
          </div>
        </div>

        {/* Date */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <DateSelector
            name="accounts.date_of_birth"
            setValue={setValue}
            watch={watch}
          />
        </div>

        {/* pan card */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-8">
          <div className="w-full">
            <h2 className=" text-[#0E4059] font-bold text-[24px]">
              Upload scanned copy of PAN Card
            </h2>
          </div>
          <button className="bg-transparent text-[#1EA596] border-2 border-[#1EA596] py-2 px-4 rounded whitespace-nowrap">
            Choose file
          </button>
          <button className="bg-[#1EA596] text-[#FFFFFF] border-2 border-[#1EA596] py-2 px-8 rounded whitespace-nowrap">
            Upload
          </button>
        </div>

        {/* aadhar card */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-8">
          <div className="w-full">
            <h2 className=" text-[#0E4059] font-bold text-[24px]">
              Upload scanned copy of Aadhar Card
            </h2>
          </div>
          <button className="bg-transparent text-[#1EA596] border-2 border-[#1EA596] py-2 px-4 rounded whitespace-nowrap">
            Choose file
          </button>
          <button className="bg-[#1EA596] text-[#FFFFFF] border-2 border-[#1EA596] py-2 px-8 rounded whitespace-nowrap">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
