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

// This is sample data.
// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Getting Started",
//       url: "#",
//       items: [
//         {
//           title: "Installation",
//           url: "#",
//         },
//         {
//           title: "Project Structure",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Building Your Application",
//       url: "#",
//       items: [
//         {
//           title: "Routing",
//           url: "#",
//         },
//         {
//           title: "Data Fetching",
//           url: "#",
//           isActive: true,
//         },
//         {
//           title: "Rendering",
//           url: "#",
//         },
//         {
//           title: "Caching",
//           url: "#",
//         },
//         {
//           title: "Styling",
//           url: "#",
//         },
//         {
//           title: "Optimizing",
//           url: "#",
//         },
//         {
//           title: "Configuring",
//           url: "#",
//         },
//         {
//           title: "Testing",
//           url: "#",
//         },
//         {
//           title: "Authentication",
//           url: "#",
//         },
//         {
//           title: "Deploying",
//           url: "#",
//         },
//         {
//           title: "Upgrading",
//           url: "#",
//         },
//         {
//           title: "Examples",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "API Reference",
//       url: "#",
//       items: [
//         {
//           title: "Components",
//           url: "#",
//         },
//         {
//           title: "File Conventions",
//           url: "#",
//         },
//         {
//           title: "Functions",
//           url: "#",
//         },
//         {
//           title: "next.config.js Options",
//           url: "#",
//         },
//         {
//           title: "CLI",
//           url: "#",
//         },
//         {
//           title: "Edge Runtime",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Architecture",
//       url: "#",
//       items: [
//         {
//           title: "Accessibility",
//           url: "#",
//         },
//         {
//           title: "Fast Refresh",
//           url: "#",
//         },
//         {
//           title: "Next.js Compiler",
//           url: "#",
//         },
//         {
//           title: "Supported Browsers",
//           url: "#",
//         },
//         {
//           title: "Turbopack",
//           url: "#",
//         },
//       ],
//     },
//   ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-white">
        <h1 className="px-3 mt-2 text-2xl font-bold text-gradient-primary">
          <Link href={"/"}>Freeposal</Link>
        </h1>
      </SidebarHeader>
      <SidebarContent className="bg-white px-5">
        {/* We create a SidebarGroup for each parent. */}
        <div className="w-full mt-6 space-y-3">
          {sidebarLinks.map((links, i) => {
            return (
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
            );
          })}
        </div>
      </SidebarContent>
      <SidebarRail />
      <Separator />
      <SidebarFooter className="h-16 px-5 bg-white">
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
