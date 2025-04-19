import { Button } from "@/components/ui/button";
import { invoices } from "@/constants/constants";
import { ClockIcon, FilterIcon, PlusCircleIcon } from "lucide-react";
import { FaRegFileLines } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OverView() {
  return (
    
      <div className="bg-secondary/50  flex-1 flex-col gap-4 py-4">
        <div className="max-w-wrapper h-full flex flex-col gap-4 px-4 md:px-8">
          <div className="w-full py-10">
            <h1 className="text-4xl font-bold">Welcome to your dashboard</h1>
            <p className="text-lg mt-2.5">
              Create and manage your professional proposals and emails
            </p>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="w-full h-28 rounded-xl bg-gradient-primary shadow-sm hover:shadow-md p-5 flex items-center justify-start gap-6">
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
            <div className="w-full h-28 rounded-xl bg-background shadow-sm hover:shadow-md p-5 flex items-center justify-start gap-6">
              <div className="w-max-h-max">
                <FaRegFileLines className="w-10 h-10 shrink-0 text-blue-400" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold">Use Template</h3>
                <p className="">Start from a template</p>
              </div>
            </div>
            <div className="w-full h-28 rounded-xl bg-background shadow-sm hover:shadow-md p-5 flex items-center justify-start gap-6">
              <div className="w-max-h-max">
                <ClockIcon className="w-10 h-10 shrink-0 text-yellow-400" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold">View Recent</h3>
                <p className="">Continue where you left off</p>
              </div>
            </div>
          </div>

          <div className=" flex-1 rounded-xl bg-white mt-6 shadow-md p-5">
            <div className="w-full flex justify-between items-center">
              <div className="w-full">
                <h2 className="text-xl font-semibold">
                  Recent Proposals & Emails
                </h2>
                <p className="">Your most recently created proposals</p>
              </div>
              <Button variant={"outline"} className="max-md:hidden">
                <PlusCircleIcon className="w-4 h-4 shrink-0 inline-flex mr-0.5" />{" "}
                New Proposal
              </Button>
            </div>
            <div className="w-full mt-4">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>

          <div className=" flex-1 rounded-xl bg-white mt-6 shadow-md p-5">
            <div className="w-full flex justify-between items-center">
              <div className="w-full">
                <h2 className="text-xl font-semibold">Get Inspired</h2>
                <p className="">
                  Browse successful proposals from the community
                </p>
              </div>
              <Button variant={"outline"} className="max-md:hidden">
                <FilterIcon className="w-4 h-4 shrink-0 inline-flex mr-0.5" />{" "}
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}
