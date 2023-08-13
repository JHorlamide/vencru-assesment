import { NavLinkProps } from "../data";

const SidebarNav = ({ name, link, icon }: NavLinkProps) => {
  return (
    <div className="flex gap-4 px-2 py-1.5 hover:text-white hover:bg-gray-300 hover:rounded-md">
      <img src={icon} alt={icon} className="w-5 h-5 hover:text-white" />
      <a href={link}>{name}</a>
    </div>
  );
};

export default SidebarNav;
