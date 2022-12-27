import { useState } from "react";
import CustomInput from "../../../../../components/CustomInput/CustomInput";
import MasterCardImg from "../../../../../assets/images/master_card.png";
import VisaCardImg from "../../../../../assets/images/visa_card.png";

/* This component is just for the purpose of the assessment. */

// Visa card component
export const MasterCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`w-full px-4 py-3 mt-5 border border-gray-300 rounded-md cursor-pointer bg-white`}
      onClick={() => setIsChecked(true)}
    >
      <div className="flex justify-between space-x-2">
        <div className="flex space-x-3">
          <img
            src={MasterCardImg}
            alt="visa_card_icon"
            className="w-[46px] h-[32px]"
          />

          <div className="flex flex-col">
            <div className="flex-col space-y-5 fled">
              <div className="">
                <h1 className={`text-[15px] text-gray-800 font-[900px]`}>
                  Mastercard ending in 1234
                </h1>
                <p className={`text-[14px] text-gray-600 font-[400px]`}>
                  Expiry 06/2024
                </p>
              </div>

              <div className="flex space-x-3">
                <p className={`font-semibold text-[14px] text-gray-500`}>
                  Set default
                </p>
                <a
                  href="/edit"
                  className={`text-gray-700 text-[14px] font-medium`}
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <CustomInput
            id="card"
            className="focus:ring-red-500 dark:focus:ring-red-600"
            inputProps={{
              type: "radio",
              checked: isChecked,
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Visa card component
export const VisaCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`w-full px-4 py-3 mt-5 border border-purple-300 rounded-md cursor-pointer bg-lightPurple`}
      onClick={() => setIsChecked(true)}
    >
      <div className="flex justify-between space-x-2">
        <div className="flex space-x-3">
          <img
            src={VisaCardImg}
            alt="visa_card_icon"
            className="w-[46px] h-[32px]"
          />

          <div className="flex flex-col">
            <div className="flex-col space-y-5 fled">
              <div className="">
                <h1 className={`text-[15px] text-purple-800 font-[900px]`}>
                  Visa ending in 1234
                </h1>
                <p className={`text-[14px] text-purple-600 font-[400px]`}>
                  Expiry 06/2024
                </p>
              </div>

              <div className="flex space-x-3">
                <p className={`font-semibold text-[14px] text-purple-500`}>
                  Set default
                </p>
                <a
                  href="/edit"
                  className={`text-purple-700 text-[14px] font-medium`}
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <CustomInput
            id="card"
            className="focus:ring-purple-500 dark:focus:ring-purple-600"
            inputProps={{
              type: "radio",
              checked: isChecked,
            }}
          />
        </div>
      </div>
    </div>
  );
};
