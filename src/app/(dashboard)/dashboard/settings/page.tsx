"use client";
export const dynamic = "force-dynamic";

import React from "react";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Download,
  Trash2,
  LogOutIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Settings = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      const response = await fetch("/api/auth/sign-out", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const res = await response.json();

      if (!res.success) {
        console.log("ERROR WHILE LOGING OUT");
        return;
      }
      if (res.success) {
        Promise.resolve().then(() => {
          localStorage.removeItem("freeposal-user");
        });
        Promise.resolve().then(() => {
          localStorage.removeItem("freeposal-user");
        });
        Promise.resolve().then(() => {
          router.refresh();
        });
      }
    } catch (error) {
      console.log("ERROR WHILE LOGING OUT", error);
    }
  };
  return (
    <div className="w-full bg-secondary/50">
      <div className=" p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-secondary-foreground">
            Manage your account and application preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-background rounded-xl border  shadow-sm">
            <div className="p-6 border-b ">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-foreground" />
                <h2 className="text-xl font-semibold text-foreground">
                  Profile Settings
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-3 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-3 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  defaultValue="Your Company Inc."
                  className="w-full px-3 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Resume Section */}
          <ResumeSection />

          {/* Notification Settings */}
          <div className="bg-background rounded-xl border  shadow-sm">
            <div className="p-6 border-b ">
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-2 text-foreground" />
                <h2 className="text-xl font-semibold text-foreground">
                  Notifications
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-secondary-foreground">
                    Email Notifications
                  </p>
                  <p className="text-sm text-accent-foreground">
                    Get notified when proposals are generated
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-secondary-foreground">Weekly Reports</p>
                  <p className="text-sm text-accent-foreground">
                    Receive weekly usage and performance reports
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-secondary-foreground">Product Updates</p>
                  <p className="text-sm text-accent-foreground">
                    Stay informed about new features and improvements
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-background rounded-xl border bshadow-sm">
            <div className="p-6 border-b ">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-accent-foreground" />
                <h2 className="text-xl font-semibold text-secondary-foreground">
                  Security
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Change Password
                </button>
              </div>
              <div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>
          </div>

          {/* Billing Settings */}
          <div className="bg-background rounded-xl border shadow-sm">
            <div className="p-6 border-b ">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-accent-foreground" />
                <h2 className="text-xl font-semibold text-secondary-foreground">
                  Billing & Subscription
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-secondary-foreground">Current Plan</p>
                  <p className="text-sm text-accent-foreground">Pro Plan - $29/month</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Manage Plan
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-secondary-foreground">Usage This Month</p>
                  <p className="text-sm text-accent-foreground">
                    24 proposals generated
                  </p>
                </div>
                <span className="text-sm text-green-600 font-medium">
                  80% remaining
                </span>
              </div>
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="bg-background rounded-xl border shadow-sm">
            <div className="p-6 border-b ">
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2 text-accent-foreground" />
                <h2 className="text-xl font-semibold text-secondary-foreground">
                  Data & Privacy
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export Your Data
              </button>
              <button className="text-red-600 hover:text-red-700 font-medium flex items-center">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </button>
            </div>
          </div>
          {/* LOG OUT */}
          <div className="bg-background rounded-xl border shadow-sm">
            <div className="p-6 border-b ">
              <div className="flex items-center">
                <LogOutIcon className="w-5 h-5 mr-2 text-accent-foreground" />
                <h2 className="text-xl font-semibold text-secondary-foreground">Log out</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <DeleteDialog handleLogOut={handleLogOut} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import { Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function ResumeSection() {
  return (
    <div className="bg-background rounded-xl border  shadow-sm">
      <div className="p-6 border-b ">
        <div className="flex items-center">
          <Briefcase className="w-5 h-5 mr-2 text-foreground" />
          <h2 className="text-xl font-semibold text-foreground">Resume</h2>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="work-name">Work Name</Label>
            <Input
              id="work-name"
              placeholder="Enter your work name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="work-email">Work Email</Label>
            <Input
              id="work-email"
              type="email"
              placeholder="Enter your work email"
              className="mt-1"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe your professional background"
            rows={4}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Project Links</Label>
          <div className="space-y-2 mt-1">
            <Input type="url" placeholder="Enter project link" />
            <Input type="url" placeholder="Enter another project link" />
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 hover:text-blue-800"
            >
              + Add another project link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { AlertTriangle } from "lucide-react";

function DeleteDialog({ handleLogOut }: { handleLogOut: () => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="text-red-600 hover:text-red-700 font-medium flex items-center cursor-pointer"
          
        >
          <LogOutIcon className="w-4 h-4 mr-2" />
          Log Out
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md rounded-xl border  bg-secondary shadow-sm">
        <DialogHeader className="border-b  pb-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <DialogTitle className="text-xl  font-semibold">
              Confirm Log Out
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="py-4 text-secondary-foreground">
          Are you sure you want to Log Out? 
        </div>

        <DialogFooter className="flex justify-end gap-2 pt-4 border-t ">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={() => handleLogOut()}>
            Log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
