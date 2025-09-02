import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "sonner";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <main className="w-full">
        <SidebarProvider>
          <AppSidebar className="!bg-background" />
          <SidebarInset className="">
            <div className="w-full flex-1 relative">
              <header className="flex h-16 sticky top-0 bg-background z-30 shrink-0 items-center justify-between gap-2 border-b px-4">
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
            </div>
          </SidebarInset>
        </SidebarProvider>
      </main>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default DashboardLayout;
