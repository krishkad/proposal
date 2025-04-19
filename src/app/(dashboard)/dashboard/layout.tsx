import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <main className="w-full">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </main>
    </div>
  );
};

export default DashboardLayout;
