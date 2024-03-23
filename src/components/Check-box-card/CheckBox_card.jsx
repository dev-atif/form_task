"use client";
import React, { useState } from "react";
import { MontFont } from "../Personal_Information";

const Brigning_List = [
  {
    id: "1)",
    label:
      "Fruits, plants, cut flowers, vegetable, soil, meat, live animals and organisms, honey, wildlife products, plant material, food, animal products or live birds.",
  },
  {
    id: "2)",
    label:
      "Pharmaceuticals, chemicals, narcotics and other illicit drugs or biological substances",
  },
  {
    id: "3)",
    label: "Illicit drugs or narcotics. ",
  },
  {
    id: "4)",
    label: " Radioactive or nuclear substances.",
  },
  {
    id: "5)",
    label:
      "Arms, ammunitions, explosives, fireworks, toy guns or other weapons.",
  },
  {
    id: "6)",
    label:
      " I am / we are carrying currency or monetary instruments over U$$10,000 or equivalent.",
  },
  {
    id: "7)",
    label:
      " I have goods exceeding the value of my (our) personal duty-free allowance.",
  },
  {
    id: "8)",
    label: " I have gifts or articles for resale.",
  },
];
const CheckBox_card = () => {
    const [isChecked, setIsChecked] = useState(
        Brigning_List.map(() => ({ yes: false, no: false }))
      ); // Initialize isChecked with an array of objects containing yes and no states
    
      const handleCheckboxChange = (index, option) => {
        const newCheckedState = isChecked.map((item, idx) => {
          if (idx === index) {
            return {
              ...item,
              [option]: !item[option],
              [option === "yes" ? "no" : "yes"]: false, // Uncheck the other option
            };
          }
          return item;
        });
        setIsChecked(newCheckedState);
      };
  return (
    <>
      <div>
        <div className="pb-5">
          <h1
            className={`text-primary fw-normal pb-4 fs-2 ${MontFont.className}`}
          >
            I AM BRINGING:
          </h1>
          <div>
            {Brigning_List.map((item, index) => (
              <div className="d-flex align-items-start gap-5 pb-2 ">
                <div className="pe-4  w-100  ">
                  <p
                    className={`d-flex  gap-3 fw-light fs-6 text-secondary   ${MontFont.className}`}
                  >
                    <span>{item.id}</span>
                    {item.label}
                  </p>
                </div>
                <div className="d-flex gap-4 pe-lg-4 justify-content-center check-box-container">
                <input
                  type="checkbox"
                  checked={isChecked[index].yes}
                  onChange={() => handleCheckboxChange(index, "yes")}
                />
                <input
                  type="checkbox"
                  checked={isChecked[index].no}
                  onChange={() => handleCheckboxChange(index, "no")}
                />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckBox_card;
