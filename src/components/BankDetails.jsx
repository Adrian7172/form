import React from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";
import DateSelector from "./DatePicker";

const BankDetails = ({ register, watch , setValue}) => {
  const bank_type = watch("accounts.bank_type");
  return (
    <div className="bg-inherit max-w-[1440px] mx-auto pt-[75px] pb-[45px] flex items-center justify-center">
      <div className="max-w-[1128px] w-full">
        <div className="w-full flex items-center justify-between">
          <div className="w-[25%] h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center p-3">
            <h1 className="text-[26px] font-[500] whitespace-nowrap">
              Applicant Details
            </h1>
          </div>
          <div className="w-[72%] h-[51px] flex items-center gap-10">
            <span
              className={`flex gap-2 items-center px-4 py-3 border-2 rounded-md font-bold cursor-pointer ${
                bank_type === "Canceled Check" && "border-[#1EA596]"
              }`}
            >
              <input
                value="Canceled Check"
                className="cursor-pointer"
                type="radio"
                name="accounts.bank_type"
                id="cancelCheck"
                {...register("accounts.bank_type")}
              />
              <label htmlFor="cancelCheck" className="cursor-pointer">
                Canceled Check
              </label>
            </span>
            <span
              className={`flex gap-2 items-center px-4 py-3 border-2 rounded-md font-bold cursor-pointer ${
                bank_type === "Bank Details" && "border-[#1EA596]"
              }`}
            >
              <input
                className="cursor-pointer"
                value="Bank Details"
                type="radio"
                id="bankDetails"
                name="accounts.bank_type"
                {...register("accounts.bank_type")}
              />
              <label htmlFor="bankDetails" className="cursor-pointer">
                Bank Details
              </label>
            </span>
          </div>
        </div>

        {bank_type === "Bank Details" && (
          <div className="w-[72%] ml-auto">
            {/* name */}
            <div className="mt-16">
              <Input
                placeholder="Bank Name"
                name="accounts.bank_details.bank_name"
                value="accounts.bank_details.bank_name"
                register={register}
              />
            </div>

            {/* Account Number */}
            <div className="mt-16">
              <Input
                placeholder="Account No."
                name="accounts.bank_details.account_number"
                value="accounts.bank_details.account_number"
                register={register}
              />
            </div>

            {/* Title */}
            <div className="mt-16">
              <Input
                placeholder="Account title"
                name="accounts.bank_details.account_title"
                value="accounts.bank_details.account_title"
                register={register}
              />
            </div>

            {/* IFSC */}
            <div className="mt-16">
              <Input
                placeholder="Bank IFSC Code"
                name="accounts.bank_details.bank_ifsc"
                value="accounts.bank_details.bank_ifsc"
                register={register}
              />
            </div>
          </div>
        )}
        {/* Nominee Details */}
        <div className="w-full flex items-center justify-between mt-28">
          <div className="w-[25%] h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center p-3">
            <h1 className="text-[26px] font-[500] whitespace-nowrap">
              Nominee Details
            </h1>
          </div>
          <div className="w-[72%] h-[51px] flex items-center">
            <div className="w-full">
              <SelectInput
                name="accounts.bank_details.number_of_nominees"
                register={register}
                options={[{ title: 1, value: 1 }]}
              />
            </div>
          </div>
        </div>
        <div className="w-[72%] h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center ml-auto mt-16 p-3">
          <h1 className="text-[26px] font-[500]">1st Nominee Details</h1>
        </div>

        {/* name */}
        <div className="mt-16 ml-auto w-[72%]">
          <Input
            placeholder="Nominee Name"
            name="accounts.bank_details.nominees.nominee_name"
            value="accounts.bank_details.nominees.nominee_name"
            register={register}
          />
        </div>

        {/* pan */}
        <div className="mt-16 ml-auto w-[72%]">
          <Input
            placeholder="Nominee Pan"
            name="accounts.bank_details.nominees.nominee_pan"
            value="accounts.bank_details.nominees.nominee_pan"
            register={register}
          />
        </div>

        {/* email */}
        <div className="mt-16 ml-auto w-[72%]">
          <Input
            placeholder="Nominee Email id."
            name="accounts.bank_details.nominees.nominee_email"
            value="accounts.bank_details.nominees.nominee_email"
            register={register}
          />
        </div>

        {/* contact number */}
        <div className="mt-16 ml-auto w-[72%]">
          <Input
            type="number"
            placeholder="Nominee Contact No."
            name="accounts.bank_details.nominees.nominee_contact_number"
            value="accounts.bank_details.nominees.nominee_contact_number"
            register={register}
          />
        </div>

        {/* Date */}
        <div className="mt-16 ml-auto w-[72%] flex items-center justify-between gap-4">
          <DateSelector
            name="accounts.bank_details.nominees.nominee_date_of_birth"
            setValue={setValue}
            watch={watch}
          />
        </div>

        <div className="mt-16 ml-auto w-[72%]">
          <Input
            placeholder="Nominee Relationship with 1st Applicant"
            name="accounts.bank_details.nominees.relation"
            value="accounts.bank_details.nominees.relation"
            register={register}
          />
        </div>

        <div className="mt-16 ml-auto w-[72%]">
          <Input
            placeholder="Nominee (%)"
            name="accounts.bank_details.nominees.nominee_percentage"
            value="accounts.bank_details.nominees.nominee_percentage"
            register={register}
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
