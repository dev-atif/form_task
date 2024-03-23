"use client";
import React, { useEffect, useState } from "react";
import { MontFont } from "../Personal_Information";
import InputFile from "@/shared/InputFile";
import DateTimePicker from "react-datetime-picker";
import { IoMdClose } from "react-icons/io";

const Accompainig = () => {
  const [familyMembers, setFamilyMembers] = useState([
    { name: "", dob: "", relation: "" },
  ]);

  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { name: "", dob: "", relation: "" }]);
  };
  const DeleteFamilyMember = (index) => {
    const updatedMembers = [...familyMembers];
    updatedMembers.splice(index, 1); // Remove the family member at the specified index
    setFamilyMembers(updatedMembers);
  };
  const handleInputChange = (index, name, value) => {
    const updatedMembers = [...familyMembers];
    if (name === "dob" || name === "datePicker") {
      updatedMembers[index]["dob"] = value ? value.toString() : ""; // Update dob directly
    } else {
      updatedMembers[index][name] = value; // Update other fields
    }
    setFamilyMembers(updatedMembers);
  };
  useEffect(() => {
    console.warn("Family Members:", familyMembers);
  }, [familyMembers]);

  return (
    <div className="pb-5">
      <div className="pb-5">
        <h1
          className={`text-primary fw-normal pb-4 fs-2 ${MontFont.className}`}
        >
          SPOUSE & CHILDREN UNDER AGE 18 ACCOMPANYING YOU
        </h1>
      </div>
      <div className="">
        <div className="row   ">
          <div className="col-md-4">
            {familyMembers.map((member, index) => (
              <div className="" key={index}>
                <div className="pb-2">
                  {index === 0 && (
                    <label
                      className={`fs-4 fw-light ps-3 pb-2 ${
                        index === 0 ? "visible" : "hidden"
                      } ${MontFont.className}`}
                    >
                      Name
                    </label>
                  )}
                  <InputFile
                    placeholder={"Enter Name"}
                    value={member.name}
                    onchange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {familyMembers.map((member, index) => (
              <div className="" key={index}>
                <div className="pb-2">
                  {index === 0 && (
                    <label
                      className={`fs-4 fw-light ps-3 pb-2 ${MontFont.className}`}
                    >
                      Date of Birth
                    </label>
                  )}
                  <div className="w-100 bg-white rounded-5">
                    <div className="px-3 Input-Border-Color  border rounded-5 DayTime-padding">
                      <DateTimePicker
                        disableClock={true}
                        format="dd-MM-yyyy"
                        dayPlaceholder="Day"
                        monthPlaceholder="Month"
                        yearPlaceholder="Year"
                        className="w-100 text-secondary py-1 py-lg-0"
                        value={member.dob ? new Date(member.dob) : null}
                        onChange={(value) =>
                          handleInputChange(index, "dob", value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {familyMembers.map((member, index) => (
              <div className="d-flex align-items-center gap-2" key={index}>
                <div className="pb-2 flex-fill">
                  {index === 0 && (
                    <label
                      className={`fs-4 fw-light ps-3 pb-2 ${MontFont.className}`}
                    >
                      Relation
                    </label>
                  )}
                  <InputFile
                    placeholder={"Son, Wife, Daughter, etc ..."}
                    value={member.relation}
                    onchange={(e) =>
                      handleInputChange(index, "relation", e.target.value)
                    }
                  />
                </div>
                {index > 0 && (
                  <div className=" ">
                    <button
                      onClick={() => DeleteFamilyMember(index)}
                      className="border-0 bg-transparent text-danger fw-bolder fs-4"
                    >
                      <IoMdClose />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button
          className={`Add-button d-flex align-items-center gap-2 text-white mt-3 ${MontFont.className}`}
          onClick={addFamilyMember}
        >
          ADD{" "}
          <span className="d-flex fw-bold align-items-center">
            MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 72 72"
              style={{ fill: "#FFFFFF" }}
            >
              <path d="M36,12c13.255,0,24,10.745,24,24c0,13.255-10.745,24-24,24S12,49.255,12,36C12,22.745,22.745,12,36,12z M44,39	c1.657,0,3-1.343,3-3c0-1.657-1.343-3-3-3c-0.329,0-2.426,0-5,0c0-2.574,0-4.672,0-5c0-1.657-1.343-3-3-3c-1.657,0-3,1.343-3,3	c0,0.328,0,2.426,0,5c-2.574,0-4.671,0-5,0c-1.657,0-3,1.343-3,3c0,1.657,1.343,3,3,3c0.329,0,2.426,0,5,0c0,2.574,0,4.672,0,5	c0,1.657,1.343,3,3,3c1.657,0,3-1.343,3-3c0-0.328,0-2.426,0-5C41.574,39,43.671,39,44,39z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="py-5">
        <p className={`fs-6 text-secondary fw-light ${MontFont.className}`}>
          All passengers, 18 years & older are entitled to US$500 Duty Free
          Allowance on items not for resale or In commercial quantity.
        </p>
        <p className={`fs-6 text-secondary fw-light ${MontFont.className}`}>
          In addition, passengers and crew members are entitled to import free
          of duty: 200 sticks of cigarettes or 50 sticks of cigars or 230g of
          Tobacco; 1 litre of Spirits; 1 litre of Wine; 170 ml of Perfumed
          Spirits and 340 ml of Toilet Water.
        </p>
      </div>
    </div>
  );
};

export default Accompainig;
