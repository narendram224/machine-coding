import React from "react";
import SidebarItems from "./sidemenu-item";
import { SidebarConfigType } from "@/config/sidebarConfig";

const Sidemenu = ({ item }: { item: SidebarConfigType[] }) => {
  return (
    <nav className="w-72 h-screen bg-slate-50 rounded-sm p-3 px-4 border-gray-50 shadow-sm">
      {item?.map((sidebarMenu) => {
        return (
          <div key={sidebarMenu.label}>
            <SidebarItems {...sidebarMenu} />
          </div>
        );
      })}
    </nav>
  );
};

export default Sidemenu;
