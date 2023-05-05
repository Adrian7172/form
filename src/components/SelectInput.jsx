import React from "react";

const SelectInput = ({ register, name, options }) => {
  return (
    <select
      className="bg-[#FFFFFF] outline-none rounded-md block w-full p-4 pr-11 border-[1px] border-gray-700 text-[22px]"
      {...register(name, { require: true })}
      name={name}
    >
      <option selected disabled value="">
        Select
      </option>
      {options.map((option) => {
        return (
          <option id={`${option.value}-${option.title}`} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
