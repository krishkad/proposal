import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "sonner";
import ReduxProviderInt from "@/redux/redux-provider-int";
import { cookies } from "next/headers";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { proposals } = await getData();


  return (
    <ReduxProviderInt proposal={proposals}>
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
    </ReduxProviderInt>
  );
};

export default DashboardLayout;

const getData = async () => {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.toString();

    const fetchOptions: RequestInit = {
      method: "GET",
      headers: {
        Cookie: cookie,
      },
      cache: "no-store",
    };

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const fetchProposalUrl = `${BASE_URL}/api/proposal/all-proposals`;

    const [proposal] = await Promise.all([
      fetch(fetchProposalUrl, fetchOptions),
    ]);

    const [proposal_res] = await Promise.all([proposal.json()]);

    const proposal_data = proposal_res.success ? proposal_res.data : [];

    return { proposals: proposal_data };
  } catch (error) {
    console.log("error while getting data: ", error);
    return { proposals: [] };
  }
};
