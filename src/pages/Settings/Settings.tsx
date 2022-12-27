import { Fragment } from "react";
import Layout from "../../components/Layout/Layout";
import { Tab } from "@headlessui/react";
import { TAB_ITEM } from "../../components/data";
import MyDetails from "./MyDetails/MyDetails";
import Profile from "./Profile/Profile";
import Billing from "./Billing/Billing";
import Password from "./Password/Password";
import Team from "./Team/Team";
import Plan from "./Plan/Plan";
import Notification from "./Notification/Notification";
import Integrations from "./Integrations/Integrations";
import API from "./API/API";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Settings = () => {
  return (
    <Fragment>
      <Layout>
        <div className="px-6 py-5 space-y-5 md:py-8">
          <div className="space-y-1">
            <h1 className="text-[24px] md:text-[30px] font-[500px]">
              Settings
            </h1>
            <p className="font-light text-textColor text-[16px]">
              Manage your team and preferences here.
            </p>
          </div>

          <Tab.Group defaultIndex={5}>
            <Tab.List className="flex overflow-x-scroll md:overflow-x-hidden no-scrollbar">
              <div className="flex border border-gray-300 divide-x-2 rounded-md">
                {TAB_ITEM.map(({ id, title }) => (
                  <Tab
                    key={id}
                    className={({ selected }) =>
                      classNames(
                        "px-3 py-2 whitespace-nowrap w-fit text-gray-700",
                        selected ? "bg-gray-100 focus:outline-gray-200" : ""
                      )
                    }
                  >
                    {title}
                  </Tab>
                ))}
              </div>
            </Tab.List>

            <Tab.Panels className={"w-full block"}>
              <Tab.Panel>
                <MyDetails />
              </Tab.Panel>

              <Tab.Panel>
                <Profile />
              </Tab.Panel>

              <Tab.Panel>
                <Password />
              </Tab.Panel>

              <Tab.Panel>
                <Team />
              </Tab.Panel>

              <Tab.Panel>
                <Plan />
              </Tab.Panel>

              <Tab.Panel>
                <Billing />
              </Tab.Panel>

              <Tab.Panel>
                <Notification />
              </Tab.Panel>

              <Tab.Panel>
                <Integrations />
              </Tab.Panel>

              <Tab.Panel>
                <API />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Settings;
