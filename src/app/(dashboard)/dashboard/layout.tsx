import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <main className="w-full">
        <SidebarProvider>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </main>
    </div>
  );
};

export default DashboardLayout;
