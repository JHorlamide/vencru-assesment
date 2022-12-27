import PlusIcon from "../../../../assets/icons/plus_icon.png";
import { MasterCard, VisaCard } from "../CardDetails/Card/Card";

const CardDetails = () => {
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
