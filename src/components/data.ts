import homeIcon from "../assets/icons/home_icon.png";
import dashBoardIcon from "../assets/icons/dashboard_icon.png";
import projectIcon from "../assets/icons/project_icon.png";
import reportIcon from "../assets/icons/report_icon.png";
import settingIcon from "../assets/icons/setting_icon.png";
import supportIcon from "../assets/icons/support_icon.png";
import taskIcon from "../assets/icons/task_icon.png";
import userIcon from "../assets/icons/user_icon.png";
import ArrowDown from "../assets/icons/arrow_down.png";
import VisCard from "../assets/images/visa_card.png";
import MasterCard from "../assets/images/master_card.png";

export interface NavLinkProps {
  id?: number;
  name: string;
  link: string;
  icon: string;
}

export interface TableHeading {
  id: number;
  title: string;
  icon?: string;
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

export const TABLE_HEADING: TableHeading[] = [
  {
    id: 1,
    title: "Invoice",
    icon: ArrowDown
  },
  {
    id: 2,
    title: "Amount",
  },
  {
    id: 3,
    title: "Date",
  },
  {
    id: 4,
    title: "Status",
  },
  {
    id: 5,
    title: "Users on plan",
  },
]


export const testData = [
  {
    id: "Basic Plan – Dec 2022",
    name: 'USD $10.00',
    age: "Dec 1, 2022",
    email: 'john@example.com',
    img: "https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
  },

  {
    id: "Basic Plan – Dec 2022",
    name: 'USD $10.00',
    age: "Dec 1, 2022",
    email: 'jane@example.com',
    img: "https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
  },
];