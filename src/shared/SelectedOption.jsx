import { MontFont } from "@/components/Personal_Information";
import React from "react";

const SelectedOption = () => {
  return (
    <div>
      <div className="bg-white rounded-5 pe-2 ">
        <select
          className={`w-100 text-secondary fw-light bg-transparent fs-6 ps-3 border-0 custom-outline-none py-2 ${MontFont.className}  `}
        >
          <option selected disabled>
            {" "}
            Gender
          </option>
          <option className={`${MontFont.className}`}> Male</option>
          <option className={`${MontFont.className}`}>Female</option>
        </select>
      </div>
    </div>
  );
};

export default SelectedOption;
