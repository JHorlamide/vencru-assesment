import { Logo } from "../Layout/Navbar";
import Search from "../Search/Search";
import SidebarNav from "../SidebarNav/SidebarNav";
import SupportAndSettings from "../SupportAndSettings/SupportAndSettings";
import Features from "../Features/Features";
import AuthenticatedUser from "../AuthenticatedUser/AuthenticatedUser";
import { NAV_LINKS } from "../data";

const Sidebar = () => {
  return (
    <div className="w-1/2 md:w-1/5 bg-white px-3 py-4 space-y-3 h-screen fixed top-0 left-0">
      <div className="space-y-3">
        <Logo />

        {/* Search Component */}
        <Search />
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col space-y-1">
        {NAV_LINKS.map(({ id, name, link, icon }) => (
          <SidebarNav key={id} name={name} link={link} icon={icon} />
        ))}
      </div>

      {/* Setting & Support */}
      <SupportAndSettings />

      {/* Feature */}
      <Features />

      <hr className="w-full" />

      {/* Authenticated User */}
      <AuthenticatedUser />
    </div>
  );
};

export default Sidebar;
