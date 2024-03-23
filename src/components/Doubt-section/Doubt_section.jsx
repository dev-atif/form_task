"use client";
import React, { useState } from "react";
import { MontFont } from "../Personal_Information";
import InputFile from "@/shared/InputFile";
import CountrySelect from "@/shared/CountrySelect";
import { IoMdClose } from "react-icons/io";

const Doubt_section = () => {
  const [fields, setFields] = useState([{ id: 1 }, { id: 2 }]); // Initial state with one field

  const addMore = () => {
    const newFields = [...fields];
    const lastId = fields[fields.length - 1].id;
    newFields.push({ id: lastId + 1 });
    setFields(newFields);
  };

  // Function to remove a field by its index
  const removeField = (id) => {
    const newFields = fields.filter((field) => field.id !== id);
    setFields(newFields);
  };

  return (
    <div className="pb-5">
      <div>
        <div className="Doubt-header text-white px-2 px-md-0">
          <span className={`fs-md-2 fs-1 px-3 py-2 ${MontFont.className}`}>
            IF YOU ARE IN DOUBT{" "}
            <span className="fs-md-6 fs-5 fw-light">
              (Declare all your goods to the customs officer)
            </span>
          </span>
        </div>
        <div className="card-inner py-4 px-4">
          <div>
            <p
              className={`fs-6 fw-light text-secondary  ${MontFont.className}`}
            >
              *Value should be the price paid or payable in the country of
              purchase Description of item
            </p>
          </div>
          <div>
            {fields.map((field, index) => (
              <div className="row gx-2" key={field.id}>
                <div className="col-md-4">
                  <div className="pb-2">
                    <InputFile placeholder={"Descrption of item"} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pb-2">
                    <InputFile placeholder={"Value $0.00"} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center gap-2">
                    <div className="pb-2">
                      <CountrySelect label={"Select Country"} />
                    </div>
                    {field.id > 2 && (
                      <div>
                        <button
                          className="border-0 bg-transparent text-danger fw-bolder fs-4"
                          onClick={() => removeField(field.id)}
                        >
                          <IoMdClose />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button
                onClick={addMore}
                className={`Add-button d-flex align-items-center gap-2 mb-4 text-white mt-3 ${MontFont.className}`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubt_section;
