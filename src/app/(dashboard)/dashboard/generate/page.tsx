"use client";

export const dynamic = "force-dynamic";
import ProposalRenderer from "@/components/shared/ProposalRenderer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { outreachTypes } from "@/constants/constants";
import { Bot, FileText, Sparkles, Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type OutreachType = "freelance-proposal" | "email";
type ToneType = "professional & persuasive" | "friendly & persuasive";

const ProposalGenerator = () => {
  const [formData, setFormData] = useState({
    goals: "",
    tone: "friendly & persuasive" as
      | "professional & persuasive"
      | "friendly & persuasive",
    instructions: "",
  });
  const [selectedType, setSelectedType] =
    useState<OutreachType>("freelance-proposal");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProposals, setGeneratedProposals] = useState<string>("");

  useEffect(() => {
    const localJobDescription =
      localStorage.getItem("user-1st-jobDescription") || "";

    const jobDescription = localJobDescription
      ? JSON.parse(localJobDescription)
      : null;

    if (!jobDescription || jobDescription === null) return;
    console.log({ jobDescription });

    setFormData({
      ...formData,
      goals: jobDescription,
    });
  }, []);

  const router = useRouter();

  const generateProposal = async () => {
    setGeneratedProposals("");
    try {
      setIsGenerating(true);
      const response = await fetch("/api/proposal/generate-proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          outreachType: selectedType,
          clientNeeds: formData.goals,
          proposalTone: formData.tone,
          lengthPerference: "short",
          additional: formData.instructions,
        }),
      });

      const res = await response.json();

      if (!res.success) {
        toast.warning("failed to generate proposal");
        return;
      }
      router.push("#generated-proposal");
      setGeneratedProposals(res.data);
      toast.success("Proposal Generated successfully");
    } catch (error) {
      console.log(
        "[ERROR WHILE GENERATING PROPOSALS]: ",
        JSON.stringify(error)
      );
      toast.warning("failed to generate proposal");
    } finally {
      localStorage.removeItem("user-1st-jobDescription");
      setIsGenerating(false);
    }
  };

  return (
    // bg-gradient-to-br from-slate-50 via-white to-blue-50
    <div className="min-h-screen bg-secondary/50">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
            AI Outreach Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reach Smarter. Land Clients Faster. ⚡
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              Select Outreach Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outreachTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id as OutreachType)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedType === type.id
                        ? `border-blue-500 bg-gradient-to-r ${type.color} text-white shadow-xl`
                        : "border-gray-200 hover:border-blue-300 bg-white hover:shadow-lg"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mx-auto mb-3 ${
                        selectedType === type.id
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    />
                    <h3
                      className={`font-semibold text-lg ${
                        selectedType === type.id
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {type.label}
                    </h3>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Input Panel - Now at the top */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              Proposal Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Goals */}
                <div className="space-y-3">
                  <Label
                    htmlFor="goals"
                    className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    Goals & Problem Statement
                  </Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        goals: e.target.value,
                      }))
                    }
                    placeholder="Describe the main objectives and problems this proposal should address..."
                    className="min-h-32 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 resize-none"
                  />
                </div>

                {/* Tone */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Tone & Style
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["professional & persuasive", "friendly & persuasive"].map(
                      (tone) => (
                        <button
                          key={tone}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              tone: tone as ToneType,
                            }))
                          }
                          className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            formData.tone === tone
                              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                          }`}
                        >
                          {tone.charAt(0).toUpperCase() + tone.slice(1)}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Instructions */}
              <div className="space-y-3">
                <Label
                  htmlFor="instructions"
                  className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                >
                  Additional Instructions (Optional)
                </Label>
                <Textarea
                  id="instructions"
                  value={formData.instructions}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      instructions: e.target.value,
                    }))
                  }
                  placeholder="Any specific requirements, formatting preferences, or additional context..."
                  className="min-h-24 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 resize-none"
                />
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="font-mono">⌘/Ctrl + Enter</span> to generate
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-8"></div>
            </div>

            {/* Learning System Note */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-50 rounded-xl border border-purple-200 mt-8">
              <p className="text-sm text-purple-800 flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <strong>Real-time Learning:</strong> We improve your outreach
                with every edit you make.
              </p>
            </div>

            {/* Generate Button - Full width at bottom */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button
                className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:to-purple-700 shadow-xl rounded-xl transition-all duration-200 transform hover:scale-105"
                disabled={isGenerating}
                onClick={generateProposal}
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3" />
                    Generating 3 Variations...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6 mr-3" />
                    Generate 3 AI Proposals
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Output Panel - Now at the bottom */}
        {generatedProposals.length > 0 && (
          <Card
            id="generated-proposal"
            className="shadow-xl border-0 bg-white/80 backdrop-blur-sm min-h-[500px]"
          >
            <CardHeader className="">
              <div className="flex max-md:flex-col max-md:items-start items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                  <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    AI-Generated Proposals
                  </CardTitle>
                </div>
                {/* {[1, 2, 3, 4].length > 0 && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg hover:bg-blue-50"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg hover:bg-green-50"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg hover:bg-purple-50"
                  >
                    <Save className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg hover:bg-orange-50"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              )} */}
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full grid grid-cols-1">
                {generatedProposals.length > 0 && (
                  <div>
                    <ProposalRenderer proposalText={generatedProposals} />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProposalGenerator;
