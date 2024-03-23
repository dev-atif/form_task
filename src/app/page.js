import Image from "next/image";
import styles from "./page.module.css";

import React from "react";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import Personal_Information, {
  MontFont,
} from "@/components/Personal_Information";
import Address from "@/components/Card/Address";
import PassportDetails from "@/components/Card/PassportDetails";
import Trip_Details from "@/components/Card/Trip_Details";
import Purpose_Visit from "@/components/Card/Purpose_Visit";
import CheckBox_card from "@/components/Check-box-card/CheckBox_card";
import Accompainig from "@/components/Accompaning-card/Accompainig";
import Doubt_section from "@/components/Doubt-section/Doubt_section";
export default function Home() {
  return (
    <main className="pb-5">
      <div className="background-container">
        {/* ----------------BackGround Information Set here */}
      </div>
      {/* ------MAin Content */}
      <div className="Main-Content-Margin-Minus px-lg-3 pt-5  px-xl-0">
        {/* ----------Spacer Dive--------------------------- */}
        <div className=" pt-lg-5 mt-lg-5  ">
            <span > </span>
          </div><div className=" pt-lg-5 pt-md-3 mt-lg-5 mt-4  ">
            <span > </span>
          </div><div className=" mt-xl-3 mt-md-0   ">
            <span > </span>
          </div>  
          {/* -------Spacer DIve End */}
        <div className=" xl-container px-xl-5 pb-5 pt-5 ">

          <div>
            <Personal_Information />
          </div>
        </div>

        {/* -----------------------Card 1---------------------------------------------- */}
        <div className="xl-container  mt-5 ">
          <div className="mt-5  d-flex card-inner">
            <div className="Card-container"></div>
            <div className=" w-100 pt-5 mt-5 px-md-4 px-2">
              <div>
                <Address />
              </div>
              <div className="mt-4">
                <PassportDetails />
              </div>
              <div className="mt-4">
                <Trip_Details />
              </div>
              <div className="mt-5 pb-5">
                <Purpose_Visit />
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------Card 2 ------------------------------------------------- */}
        <div className="xl-container   ">
          <div className="mt-5  d-flex card-inner">
            <div className="Second-Card-container"></div>
            <div className=" w-100  px-md-4 px-2 position-relative ">
              <div className="d-flex gap-md-3 gap-2 Card-Checkbox-container justify-content-center pt-3 ">
                <h1
                  className={` fs-lg-5  fs-6 fw-normal ${MontFont.className}`}
                >
                  Yes
                </h1>
                <h1
                  className={` fs-lg-5  fs-6   fw-normal ${MontFont.className}`}
                >
                  No
                </h1>
              </div>
              <div className="mt-5">
                <CheckBox_card />
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------Card 3------------------------------------------------------- */}
        <div className="xl-container   ">
          <div className="mt-5  d-flex card-inner">
            <div className="Second-Card-container"></div>
            <div className=" w-100  px-md-4 px-2 position-relative ">
              <div className="mt-5">
                <Accompainig />
              </div>
            </div>
          </div>
        </div>
        {/* ------------------- DOUBT  Section------------------------------- */}
        <div className="xl-container mt-5">
          <Doubt_section />
        </div>
        {/* --------------Submit Button------------------------------------ */}
        <div className="xl-container">
          <button
            className={`Submit-form-btn px-4 py-1 border-0 mt-5  rounded-5  ${MontFont.className}`}
          >
            SUBMIT{" "}
            <span className="fw-bold ">
              FORM{" "}
              <span className="fs-3">
                <IoIosArrowDroprightCircle />
              </span>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
