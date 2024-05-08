"use client";
import { SidebarConfigType } from "@/config/sidebarConfig";
import React, { useState } from "react";

const SidebarItems = ({ label, isFolder, children }: SidebarConfigType) => {
  const [isExpanded, setisExpanded] = useState(false);
  return (
    <div>
      <a
        href="#"
        className="p-1 w-full inline-block px-2 mb-2 cursor-pointer hover:bg-indigo-100 rounded "
        style={
          isExpanded
            ? { color: "white", background: "indigo" }
            : { color: "black" }
        }
        onClick={() => {
          setisExpanded(!isExpanded);
        }}
      >
        {label}
        {isFolder ? <span>{">"}</span> : null}
      </a>
      {Array.isArray(children) && isExpanded
        ? children.map((sideMenu) => {
            return (
              <div key={sideMenu.label} className="pl-4">
                <SidebarItems {...sideMenu} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SidebarItems;
