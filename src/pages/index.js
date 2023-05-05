
import AccountDetails from "@/components/AccountDetails";
import BankDetails from "@/components/BankDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InvestmentDetails from "@/components/InvestmentDetails";
import InvestmentRiskProfiler from "@/components/InvestmentRiskProfiler";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DateSelector from "@/components/DatePicker";

export default function Home() {
  const [error, setError] = useState(null);

  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm(
    {
      defaultValues: {
        account_type: "",
        strategy_name: "",
        fund_fees_category: "",
        investment_category: "",
        communication_address: "",
        country: "",
        account_holders: "",
        quantum_investment: "",
        investment_mode: "",
        accounts: {
          applicant_name: "",
          applicant_contact: "",
          mobile_otp: "",
          applicant_email: "",
          email_otp: "",
          applicant_pan: "",
          date_of_birth: null,
          bank_type: "Bank Details",
          bank_details: {
            bank_name: "",
            account_number: "",
            account_title: "",
            bank_ifsc: "",
            number_of_nominees: "",
            nominees: {
              nominee_name: "",
              nominee_pan: "",
              nominee_email: "",
              nominee_contact_number: "",
              nominee_date_of_birth: null,
              relation: "",
              nominee_percentage: ""
            }
          }
        },
        investment_risk_profilers: {
          investmentExperience: "",
          investmentStyle: "",
          portfolioReaction: "",
          investment_objective: "",
          risk_tolerance: "",
          investmentHorizon: ""
        },
      }
    }
  );


  /* send Data */
  async function sendData(data) {
    try {
      const response = await axios.post(process.env.BACKEND_URL, data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert("Form Submitted");
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
      alert("An error occurred while sending the data.");
    }
  }

  const onSubmit = async (data) => {
    console.log(data)
    await sendData(data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <Header />

      {/* Investment Details */}
      <InvestmentDetails register={register} />


      {/* Investment Details */}
      <AccountDetails register={register} setValue={setValue} watch={watch} />


      {/* Bank Details */}
      <BankDetails register={register} watch={watch} setValue={setValue} />

      {/* Investment Risk Profiler */}
      <InvestmentRiskProfiler register={register} />

      <Footer />
    </form>
  )
}
