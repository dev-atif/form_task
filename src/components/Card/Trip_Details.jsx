"use client";
import React, { useState } from "react";
import { MontFont } from "../Personal_Information";
import InputFile from "@/shared/InputFile";
import CountrySelect from "@/shared/CountrySelect";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateTimePicker from "react-datetime-picker";

const Trip_Details = () => {
  const [travelDate, setTravelDate] = useState();

  // Function to handle date change
  const handleDateChange = (date) => {
    setTravelDate(date);
  };
  return (
    <div>
      <div>
        <h1 className={`fs-lg-5 fs-6 pb-2 fw-normal ${MontFont.className}`}>
          Trip Details
        </h1>
      </div>
      <div>
        <InputFile
          placeholder={
            "Address in Jamaica ( eg. Hotel name or Residential address)"
          }
        />
      </div>
      <div className="my-3">
        <CountrySelect label={"Country visited in the last 6 Weeks"} />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <CountrySelect label={"Flight Name / Vessel(Ship) Name"} />
        </div>
        <div className="col-lg-6 pt-3 pt-lg-0">
          <InputFile placeholder={"Flight # (eg. 0090)"} />
        </div>
      </div>
      <div className="row align-items-end my-3 mt-lg-0">
        <div className="col-lg-6">
          <InputFile placeholder={"Departure Port eg. Miami"} />
        </div>
        <div className="col-lg-6 pt-2 pt-lg-0">
        
          <div className="w-100  rounded-5 ">
            <p className={`mb-0 text-secondary ms-3 fw-normal ${MontFont.className}`}>Travel Date</p>
            <div className="px-3 bg-white Input-Border-Color border rounded-5 py-2">
              <DateTimePicker
                disableClock={true}
                format="dd-MM-yyyy"
                dayPlaceholder="dd"
                monthPlaceholder="mm"
                yearPlaceholder="yyy"
                onChange={handleDateChange}
                value={travelDate}
                className="w-100 text-dark"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Trip_Details;
