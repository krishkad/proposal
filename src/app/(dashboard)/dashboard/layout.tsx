import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <main className="w-full">
        <SidebarProvider>
          <AppSidebar className="!bg-white" />
          <SidebarInset>
            <header className="flex h-16 sticky top-0 bg-white z-30 shrink-0 items-center justify-between gap-2 border-b px-4">
              {/* <div className="max-w-7xl h-full mx-auto flex items-center justify-between gap-2"> */}
                <SidebarTrigger className="-ml-1" />
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              {/* </div> */}
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </main>
    </div>
  );
};

export default DashboardLayout;
