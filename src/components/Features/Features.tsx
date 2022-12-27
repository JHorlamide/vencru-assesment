import FEATURE_IMAGE from "../../assets/images/feature_img.png";
import PLAY_BUTTON from "../../assets/images/play_button.png";

const Features = () => {
  return (
    <div className="flex flex-col h-64 px-3 py-2 space-y-3 bg-gray-100 rounded-md">
      <div className="flex flex-col space-y-1">
        <p className="font-[12px] semibold text-">New features available!</p>
        <p className="text-[12px] text-textColor">
          Check out the new dashboard view. Pages now loads faster.
        </p>
      </div>

      <div className="relative w-full rounded-md h-28">
        <img src={FEATURE_IMAGE} alt="feature_image" className="rounded-md" />
        <img
          src={PLAY_BUTTON}
          alt="play_icon"
          className="absolute bottom-0 w-10 cursor-pointer left-5"
        />
      </div>

      <div className="flex pt-5 space-x-5">
        <p className="text-[12px] text-textColor">Dismiss</p>
        <a href="/features" className="text-[12px] text-purple-500">
          What's new?
        </a>
      </div>
    </div>
  );
};

export default Features;
