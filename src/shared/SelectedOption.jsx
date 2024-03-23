import { MontFont } from "@/components/Personal_Information";
import React from "react";

const SelectedOption = ({options,label}) => {
  return (
    <div>
      <div className="bg-white rounded-5 pe-2 border Input-Border-Color ">
        <select
          className={`w-100 text-secondary fw-light bg-transparent fs-6 ps-3 border-0  custom-outline-none input_paddings  ${MontFont.className}  `}
        >
          <option selected disabled>
            {" "}
           {label}
          </option>
         {options.map((item,index)=>(
           <option key={index} className={`${MontFont.className}`}> {item.name}</option>
           
         ))}
        </select>
      </div>
    </div>
  );
};

export default SelectedOption;
