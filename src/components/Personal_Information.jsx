import { Montserrat } from "next/font/google";
import InputFile from "@/shared/InputFile";
import SelectedOption from "@/shared/SelectedOption";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

export const MontFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const Gender = [
  {
    name: "Male",
  },
  {
    name: "Female",
  },
];
const FamilyMember =[
  {name:'0'},
  {name:'1'},
  {name:'2'},
  {name:'3'},
  {name:'4'},
  {name:'5'},
  {name:'6'},
  {name:'7'},
];

const Personal_Information = () => {
  return (
    <div>
      <div
        className={`text-uppercase text-white fs-md-2 fs-2 px-3 px-md-0 fw-normal text-center ${MontFont.className}`}
      >
        Personal Information
      </div>
      <div></div>
      <div className="mt-md-5 mt-1">
        <div class=" d-lg-flex justify-content-center gap-2">
          <div class=" col-lg-4 ">
            <InputFile placeholder={"Last Name"} />
          </div>
          <div class=" col-lg-4 py-3 py-lg-0">
            <InputFile placeholder={"First Name"} />
          </div>
          <div class=" col-lg-4">
            <InputFile placeholder={"Middle Name"} />
          </div>
        </div>
      </div>
      <div class=" d-lg-flex justify-content-center gap-2 align-items-end mt-4">
        <div class=" col-lg-4 ">
          <div className="DayTime_Label ">
            <h1
              className={`px-2  fw-normal custom-text-color ${MontFont.className}`}
            >
              Birth Date{" "}
              <span className=" fw-normal">
                (As it appears on your Passport)
              </span>
            </h1>
          </div>
          <div className="w-100 bg-white rounded-5 ">
            <div className="px-3 Input-Border-Color border rounded-5 py-2">
              <DateTimePicker
                disableClock={true}
                format="dd-MM-yyyy"
                dayPlaceholder="Day"
                monthPlaceholder="Month"
                yearPlaceholder="Year"
                className="w-100 text-white"
              />
            </div>
          </div>
        </div>
        <div class=" col-lg-4 py-3 py-lg-0">
          <SelectedOption options={Gender} label={"Gender"}/>
        </div>
        <div class=" col-lg-4 ">
          <SelectedOption options={FamilyMember} label={"Family Members With you"}/>
        </div>
      </div>
    </div>
  );
};

export default Personal_Information;
