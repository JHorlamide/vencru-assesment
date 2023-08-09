import React, { Fragment } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "./Navbar";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex">
        <div className="relative flex-shrink-0 w-[280px] hidden h-full bg-white md:block md:col-span-2">
          <Sidebar />
        </div>

        <div className="flex-1 w-full h-full overflow-y-auto">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
