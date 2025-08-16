"use client";

export const dynamic = "force-dynamic";
import { cn } from "@/lib/utils";
import { Clock, Edit, Eye, FileText, Plus, Target, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Proposal {
  id: string;
  type: "freelance" | "email";
  title: string;
  proposal: string;
  successRate: number;
  createdAt: Date;
  updatedAt: Date;
  // priority: "low" | "medium" | "high";
}

const Dashboard = () => {
  const [recentProposals, setRecentProposals] = useState<Proposal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const metrics = [
    {
      title: "Proposals Generated",
      value: "24",
      subtitle: "This week",
      icon: FileText,
      color: "blue",
    },
    {
      title: "Average Time",
      value: "2.3m",
      subtitle: "Generation time",
      icon: Clock,
      color: "green",
    },
    {
      title: "Most Used Template",
      value: "SaaS Pitch",
      subtitle: "12 times used",
      icon: Target,
      color: "purple",
    },
  ];

  // const recentProposals = [
  //   {
  //     id: 1,
  //     title: "SaaS Marketing Strategy for TechCorp",
  //     date: "2024-05-27",
  //     length: "2,400 words",
  //     status: "Completed",
  //   },
  //   {
  //     id: 2,
  //     title: "E-commerce Platform Proposal",
  //     date: "2024-05-26",
  //     length: "1,850 words",
  //     status: "Completed",
  //   },
  //   {
  //     id: 3,
  //     title: "Mobile App Development Brief",
  //     date: "2024-05-25",
  //     length: "3,200 words",
  //     status: "Completed",
  //   },
  //   {
  //     id: 4,
  //     title: "Digital Transformation Consulting",
  //     date: "2024-05-24",
  //     length: "2,800 words",
  //     status: "Draft",
  //   },
  // ];

  useEffect(() => {
    const fetchRecentProposals = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "/api/proposal/all-proposals?userId=c1f442f5-24a3-441a-ba17-50bebefb4542",
          {
            credentials: "include",
          }
        );

        const res = await response.json();

        if (!res.success) {
          console.log("failed to fetch recent proposal");
          return;
        }

        setRecentProposals(res.proposals);
        localStorage.setItem("all-freeposals", JSON.stringify(res.proposals));
      } catch (error) {
        console.log("failed to fetch recent proposal", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentProposals();
  }, []);

  return (
    <div className="w-full bg-secondary/50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600 mb-6">
            Ready to create your next winning proposal?
          </p>

          <button
            className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={() => router.push("/dashboard/generate")}
          >
            <Plus className="w-5 h-5 mr-2" />
            Generate New Proposal
          </button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {metric.title === "Proposals Generated"
                        ? recentProposals.length
                        : metric.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {metric.subtitle}
                    </p>
                  </div>
                  <div
                    className={cn(
                      `w-12 h-12  rounded-lg flex items-center justify-center`,
                      metric.color === "purple"
                        ? "bg-purple-100"
                        : `bg-${metric.color}-100`
                    )}
                  >
                    <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Start from Template
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Choose from our collection of proven proposal templates
            </p>
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              onClick={() => router.push("/dashboard/templates")}
            >
              Browse Templates
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Start Blank
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Create a completely custom proposal from scratch
            </p>
            <button
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Start Blank
            </button>
          </div>
        </div> */}

        {/* Recent Proposals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Proposals
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">
                    Proposal Title
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">
                    Date Created
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">
                    Length
                  </th>
                  {/* <th className="text-left py-3 px-6 font-medium text-gray-700">
                    Status
                  </th> */}
                  <th className="text-left py-3 px-6 font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentProposals !== undefined &&
                  !isLoading &&
                  recentProposals.map((proposal) => (
                    <tr
                      key={proposal.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-6">
                        <p className="w-max font-medium text-gray-900">
                          {proposal.title}
                        </p>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <p className="w-max">
                          {new Date(proposal.createdAt).toDateString()}
                        </p>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <p className="w-max">
                          {proposal.proposal.length} Words
                        </p>
                      </td>
                      {/* <td className="py-4 px-6">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          proposal.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {proposal.status}
                      </span>
                    </td> */}
                      <td className="py-4 px-6">
                        <div className="flex space-x-2">
                          <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                            <Trash2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
