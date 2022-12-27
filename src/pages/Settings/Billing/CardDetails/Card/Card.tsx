import CustomInput from "../../../../../components/CustomInput/CustomInput";

interface CardProps {
  image: string;
  headingText: string;
  expiryDate: string;
  setCard: () => void;
  color: string;
  bgColor: string;
}

const Card = ({ image, headingText, expiryDate, color, bgColor, setCard }: CardProps) => {
  return (
    <div
      className={`w-full px-4 py-3 mt-5 border border-${color}-300 rounded-md cursor-pointer bg-${bgColor}`}
      onClick={setCard}
    >
      <div className="flex justify-between space-x-2">
        <div className="flex space-x-3">
          <img src={image} alt="visa_card_icon" className="w-[46px] h-[32px]" />

          <div className="flex flex-col">
            <div className="flex-col space-y-5 fled">
              <div className="">
                <h1 className={`text-[15px] text-${color}-800 font-[900px]`}>
                  {headingText}
                </h1>
                <p className={`text-[14px] text-${color}-600 font-[400px]`}>
                  {expiryDate}
                </p>
              </div>

              <div className="flex space-x-3">
                <p className={`font-semibold text-[14px] text-${color}-500`}>
                  Set default
                </p>
                <a
                  href="/edit"
                  className={`text-${color}-700 text-[14px] font-medium`}
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
  );
};

export default Card;
