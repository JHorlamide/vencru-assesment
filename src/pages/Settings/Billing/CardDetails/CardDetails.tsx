import CustomInput from "../../../../components/CustomInput/CustomInput";
import VisaCard from "../../../../assets/images/visa_card.png";
import MasterCard from "../../../../assets/images/master_card.png";
import PlusIcon from "../../../../assets/icons/plus_icon.png";


const CardDetails = () => {
  return (
    <section className="">
      <hr className="w-full" />

      <div className="flex flex-col pt-2 gap-x-0 md:grid md:grid-cols-12">
        <div className="col-span-4">
          <h1 className="text-[14px] font-[500px]">Card Details</h1>
          <p className="font-[14px] text-textColor text-[16px]">
            Select default payment method?
          </p>
        </div>

        <div className="col-span-8 space-y-5">
          {/* Visa Card */}
          <div className="w-full px-4 py-3 mt-5 border border-purple-300 rounded-md cursor-pointer bg-lightPurple">
            <div className="flex justify-between space-x-2">
              <div className="flex space-x-3">
                <img
                  src={VisaCard}
                  alt="visa_card_icon"
                  className="w-[46px] h-[32px]"
                />

                <div className="flex flex-col">
                  <div className="flex-col space-y-5 fled">
                    <div className="">
                      <h1 className="text-[15px] text-purple-800 font-[900px]">
                        Visa ending in 1234
                      </h1>
                      <p className="text-[14px] text-purple-600 font-[400px]">
                        Expiry 06/2024
                      </p>
                    </div>

                    <div className="flex space-x-3">
                      <p className="font-semibold text-[14px] text-purple-500">
                        Set default
                      </p>
                      <a
                        href="/edit"
                        className="text-purple-700 text-[14px] font-medium"
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
                  }}
                />
              </div>
            </div>
          </div>

          {/* Master Card */}
          <div className="w-full px-4 py-3 mt-5 bg-white border border-gray-300 rounded-md cursor-pointer">
            <div className="flex justify-between space-x-2">
              <div className="flex space-x-3">
                <img
                  src={MasterCard}
                  alt="visa_card_icon"
                  className="w-[46px] h-[32px]"
                />

                <div className="flex flex-col">
                  <div className="flex-col space-y-5 fled">
                    <div className="">
                      <h1 className="text-[15px] font-[900px]">
                        Mastercard ending in 1234
                      </h1>
                      <p className="text-[14px] text-gray-500 font-[400px]">
                        Expiry 06/2024
                      </p>
                    </div>

                    <div className="flex space-x-3">
                      <p className="font-semibold text-[14px] text-gray-500">
                        Set default
                      </p>

                      <a href="/edit" className="text-[14px] font-medium">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <CustomInput
                  id="card"
                  className="border-purple-700 focus:border-purple-800"
                  inputProps={{
                    type: "radio",
                  }}
                />
              </div>
            </div>
          </div>

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
