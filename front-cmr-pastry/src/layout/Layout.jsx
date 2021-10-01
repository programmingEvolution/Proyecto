import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen">
      <div className="flex flex-col md:flex-row flex-nowrap h-full w-full">
        <Sidebar />

        <main className="flex w-full   items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
