import { Montserrat } from "next/font/google";
import InputFile from "@/shared/InputFile";
import SelectedOption from "@/shared/SelectedOption";
export const MontFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const Personal_Information = () => {
  return (
    <div>
      <div
        className={`text-uppercase text-white fs-2 fw-normal text-center ${MontFont.className}`}
      >
        Personal Information
      </div>
      <div></div>
      <div className=" mt-5">
        <div class=" d-lg-flex justify-content-center gap-2">
          <div class="col-xl-3 col-lg-4 ">
            <InputFile placeholder={"Last Name"} />
          </div>
          <div class="col-xl-3 col-lg-4 py-3 py-lg-0">
            <InputFile placeholder={"First Name"} />
          </div>
          <div class="col-xl-3 col-lg-4">
            <InputFile placeholder={"Middle Name"} />
          </div>
        </div>
      </div>
      <div class=" d-lg-flex justify-content-center gap-2">
        <div class="col-xl-3 col-lg-4 ">
          <SelectedOption/>
        </div>
      </div>
    </div>
  );
};

export default Personal_Information;
