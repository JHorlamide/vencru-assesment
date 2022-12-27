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

      {/* <div className="grid grid-cols-12"> */}
      <div className="flex">
        <div className="relative flex-shrink-0 w-[280px] hidden h-full bg-white md:block md:col-span-2">
          <Sidebar />
        </div>

        <div className="w-full h-full">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
