"use client";
import { MontFont } from "@/components/Personal_Information";
import React, { useMemo } from "react";
import countryList from "react-select-country-list";
const CountrySelect = ({ label, name, onChange, value }) => {
  const countrylist = useMemo(() => countryList().getData(), []);
  const handleSelectChange = (event) => {
    const selectedCountry = event.target.value; // Extract the selected value
    onChange(selectedCountry); // Pass the selected value to the onChange function
  };
  return (
    <div>
      <div className="bg-white rounded-5 pe-2 border Input-Border-Color  pt-1  ">
        <select
          name={name}
          onChange={handleSelectChange}
          value={value}
          className={`w-100 text-secondary fw-light bg-transparent fs-6 ps-3 border-0  custom-outline-none input_paddings  ${MontFont.className}  `}
        >
          <option selected disabled>
            {label}
          </option>

          {countrylist.map((item, index) => (
            <option key={index} value={item.value} className={` py-3 ${MontFont.className}`}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountrySelect;
