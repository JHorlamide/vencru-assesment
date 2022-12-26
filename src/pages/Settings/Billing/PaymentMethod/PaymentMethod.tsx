import CustomInput from "../../../../components/CustomInput/CustomInput";
import MailIcon from "../../../../assets/icons/mail_icon.png";

const PaymentMethod = () => {
  return (
    <section>
      <div className="pb-2 space-y-1 md:pb-0">
        <h1 className="text-[18px] font-[500px]">Payment method</h1>
        
        <p className="font-[400px] text-textColor text-[14px] md:text-[16px]">
          Update your billing details and address
        </p>
      </div>

      <hr className="w-full" />

      <div className="flex flex-col pt-2 gap-x-0 md:grid md:grid-cols-12">
        <div className="col-span-4">
          <h1 className="text-[14px] font-[500px]">Contact email</h1>
          <p className="font-[14px] text-textColor text-[16px]">
            Where should invoices be sent?
          </p>
        </div>

        <div className="flex flex-col col-span-8 pt-5 space-y-3 md:mt-0">
          <form
            onSubmit={() => console.log("Submitted")}
            className="flex flex-col space-y-3 md:space-y-8"
          >
            <div className="flex space-x-1">
              <CustomInput
                id="email"
                className="w-[16px] h-[16px] focus:border-purple-500"
                inputProps={{
                  type: "radio",
                }}
              />

              <div className="flex flex-col">
                <label htmlFor="email" className="text-[14px]">
                  Send to my account email
                </label>

                <small className="text-[14px] text-textColor">
                  oliva@untitledui.com
                </small>
              </div>
            </div>

            <div className="flex space-x-1">
              <CustomInput
                id="name"
                className="w-[16px] h-[16px] focus:border-purple-500"
                inputProps={{
                  type: "radio",
                  value: "",
                  checked: true,
                }}
              />

              <div className="flex flex-col">
                <label htmlFor="name" className="text-[14px]">
                  Send to an alternative email
                </label>
                <CustomInput
                  id="email"
                  className="relative text-[16px] font-[400px] text-gray-900 w-full py-1.5 border border-gray300 px-8 rounded-md"
                  inputProps={{
                    type: "text",
                    placeholder: "Enter you email",
                    value: "billing@untitiledui.com",
                    onChange: () => console.log("Submitted"),
                  }}
                />

                <img
                  src={MailIcon}
                  alt="mail-icon"
                  className="absolute mt-8 ml-2"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
