import Sidemenu from "@/components/sidemenu";
import { sidebarConfig } from "@/config/sidebarConfig";
import React from "react";

const SidebarPage = () => {
  return (
    <div>
      <Sidemenu item={sidebarConfig} />
    </div>
  );
};

export default SidebarPage;
