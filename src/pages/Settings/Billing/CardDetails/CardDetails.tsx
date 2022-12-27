import { useState } from "react";
import PlusIcon from "../../../../assets/icons/plus_icon.png";
import CustomBtn from "../../../../components/CustomBtn/CustomBtn";
import { MasterCard, VisaCard } from "../CardDetails/Card/Card";
import AddPaymentMethod from "./AddPaymentMethod/AddPaymentMethod";

const CardDetails = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="">
      <hr className="w-full" />

      <div className="flex flex-col pt-4 gap-x-0 md:grid md:grid-cols-12">
        <div className="col-span-4">
          <h1 className="text-[14px] font-[500px]">Card Details</h1>
          <p className="font-light text-textColor text-[16px]">
            Select default payment method?
          </p>
        </div>

        <div className="col-span-8 space-y-5">
          <VisaCard />
          <MasterCard />
          <AddPaymentMethod isOpen={isOpen} closeModal={closeModal} />

          <CustomBtn
            leftIcon={
              <img src={PlusIcon} alt="plus_icon" className="w-4 h-4 mt-1 mr-2" />
            }
            className="flex"
            onClick={openModal}
          >
            Add new payment method
          </CustomBtn>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
