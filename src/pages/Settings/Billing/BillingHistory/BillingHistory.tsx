import React from "react";
import CustomBtn from "../../../../components/CustomBtn/CustomBtn";
import DownloadIcon from "../../../../assets/icons/download_icon.png";

const BillingHistory = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 md:justify-between md:space-y-0 md:flex-row">
        <h1 className="text-[18px] font-[500px]">Billing history</h1>
        <CustomBtn
          leftIcon={
            <img src={DownloadIcon} alt="download_icon" className="pt-1 pr-2" />
          }
          className="flex px-3 py-2 space-x-2 bg-white border border-gray-300 rounded-md w-fit"
        >
          Download all
        </CustomBtn>
      </div>
    </div>
  );
};

export default BillingHistory;
