"use client";

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
        router.push("/sign-in");
        localStorage.removeItem("freeposal-user");
      }
    } catch (error) {
      console.log("ERROR WHILE LOGING OUT", error);
    }
  };
  return (
    <div className="w-full bg-secondary/50">
      <div className=" p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account and application preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Profile Settings
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  defaultValue="Your Company Inc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Notifications
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    Email Notifications
                  </p>
                  <p className="text-sm text-gray-600">
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
                  <p className="font-medium text-gray-900">Weekly Reports</p>
                  <p className="text-sm text-gray-600">
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
                  <p className="font-medium text-gray-900">Product Updates</p>
                  <p className="text-sm text-gray-600">
                    Stay informed about new features and improvements
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">
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
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Billing & Subscription
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Current Plan</p>
                  <p className="text-sm text-gray-600">Pro Plan - $29/month</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Manage Plan
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Usage This Month</p>
                  <p className="text-sm text-gray-600">
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
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">
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
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Log out</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <button
                className="text-red-600 hover:text-red-700 font-medium flex items-center cursor-pointer"
                onClick={handleLogOut}
              >
                <LogOutIcon className="w-4 h-4 mr-2" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
