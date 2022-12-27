import { useState } from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import VisaCard from "../../../../assets/images/visa_card.png";
import MasterCard from "../../../../assets/images/master_card.png";
import PlusIcon from "../../../../assets/icons/plus_icon.png";
import Card from "./Card/Card";
import { CARD_DETAILS } from "../../../../components/data";

const CardDetails = () => {
  const [masterCard, setMasterCard] = useState(false);

  const handleMasterCardChange = () => {
    setMasterCard(true);
  };

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
          {CARD_DETAILS.map((item) => (
            <Card
              image={item.image}
              color={item.color}
              bgColor={item.bgColor}
              setCard={() => console.log("I was clicked")}
              expiryDate={item.expiryDate}
              headingText={item.headingText}
            />
          ))}

          <div className="flex space-x-2 cursor-pointer">
            <img src={PlusIcon} alt="plus_icon" className="w-4 h-4" />
            <a href="/add-payment-method" className="text-[14px] text-gray-500">
              Add new payment method
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
