"use client";

export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import {
  ArrowRightIcon,
  Clock,
  Edit,
  Eye,
  FileText,
  Plus,
  Target,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";



const Dashboard = () => {
  // const [recentProposals, setRecentProposals] = useState<Proposal[]>([]);
  const {proposals} = useSelector((state: RootState) => state.proposals);
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


  // useEffect(() => {
  //   const fetchRecentProposals = async () => {
  //     setIsLoading(true);
  //     const user = JSON.parse(localStorage.getItem("freeposal-user") || "");
  //     try {
  //       const response = await fetch(
  //         `/api/proposal/all-proposals?userId=${user.id}`,
  //         {
  //           credentials: "include",
  //         }
  //       );

  //       const res = await response.json();

  //       if (!res.success) {
  //         console.log("failed to fetch recent proposal");
  //         return;
  //       }

  //       setRecentProposals(res.proposals ?? []);
  //       localStorage.setItem("all-freeposals", JSON.stringify(res.proposals));
  //     } catch (error) {
  //       console.log("failed to fetch recent proposal", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchRecentProposals();
  // }, []);

  return (
    <div className="overflow-hidden w-full bg-secondary/50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back!
          </h1>
          <p className="text-secondary-foreground mb-6">
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
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">
                      {metric.title === "Proposals Generated"
                        ? proposals.length
                        : metric.value}
                    </p>
                    <p className="text-xs text-foreground mt-1">
                      {metric.subtitle}
                    </p>
                  </div>
                  <div
                    className={cn(
                      `w-12 h-12  rounded-lg flex items-center justify-center`,
                      metric.color === "purple"
                        ? "bg-purple-100": metric.color === "green" ? "bg-green-100"
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
        <div className="bg-background rounded-xl border border-border shadow-sm">
          <div
            className="p-6 border-b border-border w-full flex items-center justify-between"
            onClick={() => router.push("/dashboard/all-proposals")}
          >
            <h2 className="text-xl font-semibold text-foreground">
              Recent Proposals
            </h2>
            <Button variant={"ghost"}>
              View More <ArrowRightIcon />
            </Button>
          </div>
          <div className="w-full overflow-x-scroll">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary border-b border-border hover:bg-transparent">
                  <TableHead className="text-left py-3 px-6 font-medium text-foreground">
                    Proposal Title
                  </TableHead>
                  <TableHead className="text-left py-3 px-6 font-medium text-foreground">
                    Date Created
                  </TableHead>
                  <TableHead className="text-left py-3 px-6 font-medium text-foreground">
                    Length
                  </TableHead>
                  <TableHead className="text-left py-3 px-6 font-medium text-foreground">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!false
                  ? proposals?.slice().reverse().map((proposal) => (
                      <TableRow
                        key={proposal.id}
                        className="border-b  hover:bg-secondary/50"
                      >
                        <TableCell className="py-4 px-6">
                          <p className="w-max font-medium ">
                            {proposal.title}
                          </p>
                        </TableCell>
                        <TableCell className="py-4 px-6 ">
                          <p className="w-max">
                            {new Date(proposal.createdAt).toDateString()}
                          </p>
                        </TableCell>
                        <TableCell className="py-4 px-6 ">
                          <p className="w-max">
                            {proposal.proposal.length} Words
                          </p>
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <div className="flex space-x-2">
                            <button className="p-1 hover:bg-secondary rounded transition-colors">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1 hover:bg-secondary rounded transition-colors">
                              <Edit className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1 hover:bg-secondary rounded transition-colors">
                              <Trash2 className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  : Array.from({ length: 5 }).map((_, index) => (
                      <TableRow
                        key={index}
                        className="border-b  animate-pulse"
                      >
                        <TableCell className="py-4 px-6">
                          <div className="h-4 bg-secondary rounded w-40"></div>
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <div className="h-4 bg-secondary rounded w-32"></div>
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <div className="h-4 bg-secondary rounded w-24"></div>
                        </TableCell>
                        <TableCell className="py-4 px-6">
                          <div className="flex space-x-2">
                            <div className="w-6 h-6 bg-secondary rounded"></div>
                            <div className="w-6 h-6 bg-secondary rounded"></div>
                            <div className="w-6 h-6 bg-secondary rounded"></div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
