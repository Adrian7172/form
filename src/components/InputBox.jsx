import React from "react";
import SelectInput from "./SelectInput";
import Input from "./Input";

const InputBox = ({ title, subTitle, type,  ...props }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="w-[25%]">
        <h2 className="text-[22px]">{title}</h2>
        <p className="text-[18px]">{subTitle}</p>
      </span>
      <span className="w-[72%]">
        {type === "input" ? (
          <Input {...props} />
        ) : (
          <SelectInput {...props} />
        )}
      </span>
    </div>
  );
};

export default InputBox;
