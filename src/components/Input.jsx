import React from "react";

const Input = ({ placeholder = "", name , register}) => {
  return (
    <div>
      <input
        type="text"
        className="bg-[#FFFFFF] outline-none rounded-md block w-full p-4 pr-11 border-[1px] border-gray-700 text-[22px]"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
