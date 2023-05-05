import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector({ setValue, watch, name }) {
  const selectedDate = watch(name);

  const handleDateChange = (date) => {
    setValue(name, date);
  };

  return (
    <div>
      <h1 className="text-[24px]">Date Of Birth</h1>
      <div className="flex items-center justify-center gap-8">
        <select
          className="w-[150px] h-[65px] rounded-md border-[1.5px] border-gray-700 p-2"
          onChange={(e) => {
            const newDate = new Date(selectedDate);
            newDate.setDate(parseInt(e.target.value));
            handleDateChange(newDate);
          }}
        >
          <option selected disabled>
            Day
          </option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          className="w-[150px] h-[65px] rounded-md border-[1.5px] border-gray-700 p-2"
          onChange={(e) => {
            const newDate = new Date(selectedDate);
            newDate.setMonth(parseInt(e.target.value));
            handleDateChange(newDate);
          }}
        >
          <option selected disabled>
            Month
          </option>
          {Array.from({ length: 12 }, (_, i) => i).map((month) => (
            <option key={month} value={month}>
              {new Date(2000, month, 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>
        <select
          className="w-[150px] h-[65px] rounded-md border-[1.5px] border-gray-700 p-2"
          onChange={(e) => {
            const newDate = new Date(selectedDate);
            newDate.setFullYear(parseInt(e.target.value));
            handleDateChange(newDate);
          }}
        >
          <option selected disabled>
            Year
          </option>
          {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DateSelector;
