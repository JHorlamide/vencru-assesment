import { SettingAndSupportNav } from "../data";
import SidebarNav from "../SidebarNav/SidebarNav";

const SupportAndSettings = () => {
  return (
    <div className="flex flex-col space-y-0">
      {SettingAndSupportNav.map(({ id, name, link, icon }) => (
        <SidebarNav key={id} name={name} link={link} icon={icon} />
      ))}
    </div>
  );
};

export default SupportAndSettings;
