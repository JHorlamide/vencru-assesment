import AVATAR from "../../assets/images/avatar.png";
import logoutIcon from "../../assets/icons/logout_icon.png";

const AuthenticatedUser = () => {
  return (
    <div className="flex space-8">
      <div className="flex space-x-2">
        <div className="w-8 rounded-full">
          <img src={AVATAR} alt="avatar" className="" />
        </div>

        <div className="flex flex-col">
          <p className="text-[11px] font-semibold">Oliver Rhye</p>
          <p className="text-[10px] text-textColor">oliver@untitledui.com</p>
        </div>

        <a href="/logout">
          <img src={logoutIcon} alt="" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default AuthenticatedUser;
