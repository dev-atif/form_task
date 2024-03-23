"use client";
import InputFile from "@/shared/InputFile";
import React, { useMemo } from "react";
import { MontFont } from "../Personal_Information";
import countryList from "react-select-country-list";
import CountrySelect from "@/shared/CountrySelect";

const Address = () => {
  const countrylist = useMemo(() => countryList().getData(), []);

  return (
    <div>
      <div>
        <h1 className={`fs-5 pb-2 fw-normal ${MontFont.className}`}>
          HOME ADDRESS
        </h1>
      </div>
      <div>
        <InputFile placeholder={"Street Address"} />
      </div>
      <div className="d-flex gx-2 row py-3">
        <div className="col-lg-6">
          <InputFile placeholder={"City / Town"} />
        </div>
        <div className="col-lg-6 pt-3 pt-lg-0">
          <InputFile placeholder={"State / Province / Region"} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <InputFile placeholder={"Zip / Postal Code"} />
        </div>
      </div>
      <div className="py-3">
        <CountrySelect label={"Select Country"} />
      </div>
    </div>
  );
};

export default Address;
