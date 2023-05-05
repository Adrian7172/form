import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Footer = () => {
  const [captchaCode, setCaptchaCode] = useState(null);
  const [enteredCaptcha, setEnteredCaptcha] = useState(null);

  useEffect(() => {
    setCaptchaCode(nanoid(6));
  }, []);

  return (
    <div className="bg-inherit max-w-[1185px] mx-auto py-[35px] flex flex-col px-2 mt-24 mb-60">
      <h1 className="text-[22px] text-center text-[#0E4059]">
        I / We understand, the above informatio provided is correct to the best
        of my knowledge / belief, and understand the adversities / risk
        tolerance arising from mis - placement of information / data in any
        manner
      </h1>

      <div className="flex flex-col w-[30%] mt-20">
        <div className="bg-[#D9D9D9] h-[140px] w-[355px] flex items-center justify-center font-bold text-[28px]">
          {captchaCode}
        </div>
        <div className="flex flex-col mt-16">
          <p>Enter Captcha</p>
          <input
            className="bg-[#FFFFFF] outline-none rounded-md block w-full p-4 pr-11 border-[1px] border-gray-700 text-[22px]"
            name="enteredCaptcha"
            value={enteredCaptcha}
            onChange={(e) => setEnteredCaptcha(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-10">
          <button
            disabled={enteredCaptcha !== captchaCode}
            type="submit"
            className={`bg-[#1EA596] p-4 text-white rounded-md ${
              enteredCaptcha !== captchaCode
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
