import React from "react";
import PrivateRoute from "../components/PrivateRoute";

import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <PrivateRoute>
    <div className="flex w-screen">
      <div className="flex flex-col md:flex-row flex-nowrap h-full w-full">
        <Sidebar />

        <main>{children}</main>
      </div>
    </div>
    </PrivateRoute>
  );
};

export default Layout;
