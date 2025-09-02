"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sidebarLinks } from "@/constants/constants";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "./separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { SheetClose } from "./sheet";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-background">
        <h1 className="px-3 mt-2 text-2xl font-bold text-gradient-primary">
          <Link href={"/"}>Freeposal</Link>
        </h1>
      </SidebarHeader>
      <SidebarContent className="bg-background px-5">
        {/* We create a SidebarGroup for each parent. */}
        <div className="w-full mt-6 space-y-3">
          {sidebarLinks.map((links, i) => {
            return (
              <React.Fragment key={i}>
                {isMobile ? (
                  <SheetClose asChild>
                    <Button
                      key={i}
                      variant={"outline"}
                      onClick={() => router.push(links.path)}
                      className={cn(
                        "w-full !h-11 !px-5 shadow-none flex items-center justify-start gap-3 text-base rounded-xl hover:bg-gray-100 transition-all duration-150",
                        links.path === pathname
                          ? "border-[0.2px] border-primary text-primary bg-primary/5 hover:bg-primary/5 hover:text-primary "
                          : "bg-white border-white text-gray-700"
                      )}
                    >
                      <links.icon />
                      {links.label}
                    </Button>
                  </SheetClose>
                ) : (
                  <Button
                    // key={i}
                    variant={"outline"}
                    onClick={() => router.push(links.path)}
                    className={cn(
                      "w-full !h-11 !px-5 shadow-none flex items-center justify-start gap-3 text-base rounded-xl hover:bg-gray-100 transition-all duration-150",
                      links.path === pathname
                        ? "border-[0.2px] border-primary text-primary bg-primary/5 hover:bg-primary/5 hover:text-primary "
                        : "bg-white text-secondary-foreground"
                    )}
                  >
                    <links.icon />
                    {links.label}
                  </Button>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </SidebarContent>
      <SidebarRail />
      <Separator />
      <SidebarFooter className="h-16 px-5 bg-background">
        <div className="w-full h-full flex items-center justify-center gap-3">
          <Avatar className="w-[38px] h-[38px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-full -space-y-1.5">
            <p className="font-medium text-sm">User</p>
            <span className="text-xs">Pro Plan</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
