import React from "react";
import InputBox from "./InputBox";

function Radio({ value, label, name, register }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        className=""
        type="radio"
        name={name}
        value={value}
        id={`${name}-${label}`}
        {...register(name)}
      />
      <label htmlFor={`${name}-${label}`}>{label}</label>
    </div>
  );
}

const InvestmentRiskProfiler = ({ register }) => {
  return (
    <div className="bg-inherit max-w-[1440px] mx-auto py-[75px] flex items-center justify-center px-2">
      <div className="max-w-[1128px] w-full">
        <div className="w-full h-[51px] bg-[#0E4059] text-[#FFFFFF] flex items-center p-3">
          <h1 className="text-[26px] font-[500]">Investment Risk Profiler</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-center">
            Welcome to <span className="text-[#1EA596]">Risk Profiler</span>
          </h1>
          <h2 className="text-center">
            Your Investment is utmost as important as understanding your
            emotional risk appetite
          </h2>
        </div>
        <div className="mt-20">
          {/*Investment Experience */}
          <div className="flex items-center justify-between">
            <span className="w-[30%]">
              <h2 className="text-[22px]">Investment Experience:</h2>
            </span>
            <span className="w-[60%] flex items-center gap-10">
              <Radio
                label="0-3 yr"
                name="investment_risk_profilers.investmentExperience"
                value="0-3 yr"
                register={register}
              />
              <Radio
                label="3-5 yr"
                name="investment_risk_profilers.investmentExperience"
                value="3-5 yr"
                register={register}
              />
              <Radio
                label="5-7 yr"
                name="investment_risk_profilers.investmentExperience"
                value="5-7 yr"
                register={register}
              />
              <Radio
                label=">7 yr"
                name="investment_risk_profilers.investmentExperience"
                value=">7 yr"
                register={register}
              />
            </span>
          </div>

          {/*Investment Style */}
          <div className="flex items-center justify-between mt-16">
            <span className="w-[30%]">
              <h2 className="text-[22px]">Investment Style:</h2>
            </span>
            <span className="w-[60%] flex items-center gap-10">
              <Radio
                label="Active"
                value="Active"
                name="investment_risk_profilers.investmentStyle"
                register={register}
              />
              <Radio
                label="Passive"
                value="Passive"
                name="investment_risk_profilers.investmentStyle"
                register={register}
              />
            </span>
          </div>

          {/*DiversePorfolioReaction*/}
          <div className="flex items-center justify-between mt-16">
            <span className="w-[40%]">
              <h2 className="text-[22px]">
                How would you react if well diversified portfolio fells below
                10%:
              </h2>
            </span>
            <span className="w-[60%] flex items-center gap-10">
              <Radio
                label="Accumulate"
                value="Accumulate"
                name="investment_risk_profilers.portfolioReaction"
                register={register}
              />
              <Radio
                label="Hold"
                value="Hold"
                name="investment_risk_profilers.porfolioReaction"
                register={register}
              />
              <Radio
                label="Reduce"
                value="Reduce"
                name="investment_risk_profilers.porfolioReaction"
                register={register}
              />
              <Radio
                label="Exit"
                value="Exit"
                name="investment_risk_profilers.porfolioReaction"
                register={register}
              />
            </span>
          </div>

          {/*Investment Objective*/}
          <div className="mt-16">
            <InputBox
              title="Investment Objective"
              name="investment_risk_profilers.investment_objective"
              value="investment_risk_profilers.investment_objective"
              register={register}
              type="select"
              options={[
                { title: "Long Term", value: "Long Term" },
                { title: "Short Term", value: "Short Term" },
              ]}
            />
          </div>

          {/*Risk Tolerance*/}
          <div className="mt-16">
            <InputBox
              title="Risk Tolerance"
              name="investment_risk_profilers.risk_tolerance"
              value="investment_risk_profilers.risk_tolerance"
              register={register}
              type="select"
              options={[
                { title: "High", value: "High" },
                { title: "Medium", value: "Medium" },
                { title: "low", value: "low" },
              ]}
            />
          </div>

          {/*Investment horizon */}
          <div className="flex items-center justify-between mt-16">
            <span className="w-[30%]">
              <h2 className="text-[22px]">Investment Horizon:</h2>
            </span>
            <span className="w-[60%] flex items-center gap-10">
              <Radio
                label="<3 yr"
                value="<3 yr"
                name="investment_risk_profilers.investmentHorizon"
                register={register}
              />
              <Radio
                label="3-5 yr"
                value="3-5 yr"
                name="investment_risk_profilers.investmentHorizon"
                register={register}
              />
              <Radio
                label="5-7 yr"
                value="5-7 yr"
                name="investment_risk_profilers.investmentHorizon"
                register={register}
              />
              <Radio
                label=">10 yr"
                value=">10 yr"
                name="investment_risk_profilers.investmentHorizon"
                register={register}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentRiskProfiler;
