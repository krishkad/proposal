import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ClockIcon, PlusCircleIcon } from "lucide-react";
import { FaRegFileLines } from "react-icons/fa6";

export default function OverView() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
      </header>
      <div className="bg-secondary/50  flex-1 flex-col gap-4 py-4">
        <div className="max-w-wrapper h-full flex flex-col gap-4 px-4 md:px-8">
          <div className="w-full py-10">
            <h1 className="text-4xl font-bold">Welcome to your dashboard</h1>
            <p className="text-lg mt-2.5">
              Create and manage your professional proposals and emails
            </p>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="w-full h-32 rounded-xl bg-gradient-primary shadow-md p-5 flex items-center justify-start gap-6">
              <div className="w-max-h-max">
                <PlusCircleIcon className="w-10 h-10 shrink-0 text-white" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold text-white">
                  Create New Proposal
                </h3>
                <p className="text-white">Start From scratch</p>
              </div>
            </div>
            <div className="w-full h-32 rounded-xl bg-background shadow-md p-5 flex items-center justify-start gap-6">
              <div className="w-max-h-max">
                <FaRegFileLines className="w-10 h-10 shrink-0 text-blue-400" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold">Use Template</h3>
                <p className="">Start from a template</p>
              </div>
            </div>
            <div className="w-full h-32 rounded-xl bg-background shadow-md p-5 flex items-center justify-start gap-6">
              <div className="w-max-h-max">
                <ClockIcon className="w-10 h-10 shrink-0 text-yellow-400" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold">View Recent</h3>
                <p className="">Continue where you left off</p>
              </div>
            </div>
          
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-white md:min-h-min mt-6 shadow-md" />
        </div>
      </div>
    </SidebarInset>
  );
}
