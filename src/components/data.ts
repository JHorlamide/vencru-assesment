import homeIcon from "../assets/icons/home_icon.png";
import dashBoardIcon from "../assets/icons/dashboard_icon.png";
import projectIcon from "../assets/icons/project_icon.png";
import reportIcon from "../assets/icons/report_icon.png";
import settingIcon from "../assets/icons/setting_icon.png";
import supportIcon from "../assets/icons/support_icon.png";
import taskIcon from "../assets/icons/task_icon.png";
import userIcon from "../assets/icons/user_icon.png";

export interface NavLinkProps {
  id?: number;
  name: string;
  link: string;
  icon: string;
}

export const NAV_LINKS: Array<NavLinkProps> = [
  {
    id: 1,
    name: "Home",
    link: "/home",
    icon: homeIcon,
  },
  {
    id: 2,
    name: "Dashboard",
    link: "/dashboard",
    icon: dashBoardIcon,
  },
  {
    id: 3,
    name: "Projects",
    link: "/projects",
    icon: projectIcon,
  },
  {
    id: 4,
    name: "Tasks",
    link: "/tasks",
    icon: taskIcon,
  },
  {
    id: 5,
    name: "Reporting",
    link: "/reporting",
    icon: reportIcon,
  },
  {
    id: 6,
    name: "Users",
    link: "/users",
    icon: userIcon,
  },
];

export const SettingAndSupportNav: Array<NavLinkProps> = [
  {
    id: 1,
    name: "Support",
    link: "/support",
    icon: supportIcon,
  },
  {
    id: 2,
    name: "Setting",
    link: "/setting",
    icon: settingIcon,
  },
];

export const TAB_ITEM = [
  {
    id: 1,
    title: "My details",
  },
  {
    id: 2,
    title: "Profile",
  },
  {
    id: 3,
    title: "Password",
  },
  {
    id: 4,
    title: "Team",
  },

  {
    id: 5,
    title: "Plan",
  },

  {
    id: 6,
    title: "Billing",
  },
  {
    id: 7,
    title: "Notification",
  },
  {
    id: 8,
    title: "Integration",
  },
  {
    id: 9,
    title: "API",
  },
];

// export const TAB_PANEL: Array<ITabPanel> = [
//   {
//     id: 1,
//     TabItem: MyDetails,
//   },
//   {
//     id: 2,
//     TabItem: Profile,
//   },
//   {
//     id: 3,
//     TabItem: Password,
//   },
//   {
//     id: 4,
//     TabItem: Team,
//   },
//   {
//     id: 5,
//     TabItem: Plan,
//   },
//   {
//     id: 6,
//     TabItem: Billing,
//   },
//   {
//     id: 7,
//     TabItem: Notification,
//   },
//   {
//     id: 8,
//     TabItem: Integrations,
//   },
//   {
//     id: 9,
//     TabItem: API,
//   },
// ];