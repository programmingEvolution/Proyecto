import React from "react";
import PrivateRoute from "../components/PrivateRoute";
import RutaAsignada from "../components/RutaAsiganada";

import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <PrivateRoute>
    <div className="flex w-screen">
      <div className="flex flex-col md:flex-row flex-nowrap h-full w-full">
        <Sidebar />
      <RutaAsignada roleList={["Autorizado"]}>

        <main>{children}</main>
    </RutaAsignada>
      </div>
    </div>
    </PrivateRoute>
  );
};

export default Layout;
