"use client";
import React, { useState } from "react";
import { FileText, Wand2, X, Plus, Check, Sparkles, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { outreachTypes } from "@/constants/constants";

// interface ProposalVariation {
//   id: number;
//   title: string;
//   content: string;
//   style: string;
// }

// interface OutreachOutput {
//   type: string;
//   content: string;
// }

type OutreachType = "upwork" | "email" | "linkedin" | "twitter";
type ToneType = "formal" | "friendly" | "persuasive" | "professional";

const ProposalGenerator = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    proposalTitle: "",
    services: [] as string[],
    goals: "",
    tone: "professional" as
      | "formal"
      | "friendly"
      | "persuasive"
      | "professional",
    instructions: "",
    templateId: null as string | null,
  });
  const [selectedType, setSelectedType] = useState<OutreachType>("upwork");
  const [serviceInput, setServiceInput] = useState("");
  //   const [isGenerating, setIsGenerating] = useState(false);
  //   const [generatedProposals, setGeneratedProposals] = useState<
  //     ProposalVariation[]
  //   >([]);
  //   const [selectedProposal, setSelectedProposal] = useState<number | null>(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  //   const isFormValid =
  //     formData.clientName.trim() && formData.proposalTitle.trim();

  const addService = () => {
    if (
      serviceInput.trim() &&
      !formData.services.includes(serviceInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, serviceInput.trim()],
      }));
      setServiceInput("");
    }
  };

  const removeService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s !== service),
    }));
  };

  //   const generateProposalVariations = (): ProposalVariation[] => {
  //     const baseContent = {
  //       clientName: formData.clientName,
  //       proposalTitle: formData.proposalTitle,
  //       services: formData.services,
  //       goals:
  //         formData.goals ||
  //         "We will work closely with your team to achieve measurable outcomes that align with your business objectives.",
  //     };

  //     return [
  //       {
  //         id: 1,
  //         title: "Executive Summary Focus",
  //         style: "Concise and strategic",
  //         content: `# ${baseContent.proposalTitle}

  // **Client:** ${baseContent.clientName}

  // ## Executive Summary

  // We propose a comprehensive solution tailored specifically for ${
  //           baseContent.clientName
  //         }. Our approach combines industry best practices with innovative strategies to deliver exceptional results that exceed your expectations.

  // ## Core Services

  // ${baseContent.services.map((service) => `• ${service}`).join("\n")}

  // ## Strategic Objectives

  // ${baseContent.goals}

  // ## Investment & Timeline

  // **Phase 1:** Discovery & Planning (Week 1-2)
  // **Phase 2:** Implementation (Week 3-6)
  // **Phase 3:** Optimization & Launch (Week 7-8)

  // *Investment details will be provided upon approval of this proposal scope.*

  // ---

  // Ready to transform your vision into reality? Let's discuss the next steps.`,
  //       },
  //       {
  //         id: 2,
  //         title: "Detailed Technical Approach",
  //         style: "Comprehensive and methodical",
  //         content: `# ${baseContent.proposalTitle}

  // **Prepared for:** ${baseContent.clientName}
  // **Date:** ${new Date().toLocaleDateString()}

  // ## Project Overview

  // This proposal outlines a detailed approach to deliver exceptional value through strategic implementation of your requirements. Our methodology ensures measurable outcomes and sustainable growth.

  // ## Deliverables & Services

  // ${baseContent.services
  //   .map((service, index) => `**${index + 1}.** ${service}`)
  //   .join("\n")}

  // ## Project Goals & Success Metrics

  // ${baseContent.goals}

  // **Key Performance Indicators:**
  // • Project completion within timeline
  // • Quality assurance at every milestone
  // • Regular communication and updates
  // • Post-project support and optimization

  // ## Implementation Roadmap

  // **Week 1-2: Foundation**
  // - Initial consultation and requirement gathering
  // - Strategy development and planning
  // - Resource allocation and team assignment

  // **Week 3-6: Execution**
  // - Core implementation phase
  // - Regular progress reviews
  // - Quality testing and validation

  // **Week 7-8: Finalization**
  // - Final testing and optimization
  // - Documentation and handover
  // - Training and support setup

  // ## Investment Structure

  // Our flexible pricing model ensures you get maximum value for your investment. Detailed pricing will be provided based on the final project scope.

  // ---

  // *This proposal remains valid for 30 days. We're excited about the opportunity to partner with ${
  //           baseContent.clientName
  //         }.*`,
  //       },
  //       {
  //         id: 3,
  //         title: "Results-Driven Approach",
  //         style: "Outcome-focused and persuasive",
  //         content: `# ${baseContent.proposalTitle}

  // **Transforming ${baseContent.clientName}'s Vision into Reality**

  // ## Why Choose Our Solution?

  // Your success is our priority. We don't just deliver services—we deliver results that drive your business forward and create lasting impact.

  // ## What You'll Gain

  // ${baseContent.services.map((service) => `✓ ${service}`).join("\n")}

  // ## Your Goals, Our Mission

  // ${baseContent.goals}

  // **Our Commitment:**
  // - Transparent communication throughout the project
  // - Delivery that exceeds expectations
  // - Ongoing support for long-term success
  // - Measurable ROI on your investment

  // ## The Path Forward

  // **Immediate Impact (Week 1-2)**
  // Quick wins and foundational setup to show immediate value

  // **Core Transformation (Week 3-6)**
  // Deep implementation of core strategies and solutions

  // **Optimization & Growth (Week 7-8)**
  // Fine-tuning and preparation for sustained success

  // ## Your Investment

  // We believe in providing exceptional value. Our pricing reflects the quality and impact of our work, with flexible options to fit your budget.

  // ## Next Steps

  // Ready to get started? Here's what happens next:

  // 1. **Approve this proposal** - We'll send the detailed contract
  // 2. **Kick-off meeting** - We'll align on expectations and timeline
  // 3. **Project launch** - We begin delivering results immediately

  // ---

  // **Let's make ${baseContent.clientName} even more successful together.**

  // *Questions? We're here to help: [Contact Information]*`,
  //       },
  //     ];
  //   };

  const templates = [
    {
      id: "saas",
      name: "SaaS Platform",
      preview: "📱 Software as a Service proposal template",
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      preview: "📈 Marketing campaign proposal template",
    },
    {
      id: "design",
      name: "Design Services",
      preview: "🎨 Creative design project template",
    },
    {
      id: "consulting",
      name: "Business Consulting",
      preview: "💼 Strategic consulting template",
    },
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Client Name */}
                <div className="space-y-3">
                  <Label
                    htmlFor="clientName"
                    className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    Client Name *
                  </Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        clientName: e.target.value,
                      }))
                    }
                    placeholder="Enter client or company name"
                    className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                  />
                </div>

                {/* Proposal Title */}
                <div className="space-y-3">
                  <Label
                    htmlFor="proposalTitle"
                    className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    Proposal Title *
                  </Label>
                  <Input
                    id="proposalTitle"
                    value={formData.proposalTitle}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        proposalTitle: e.target.value,
                      }))
                    }
                    placeholder="e.g., Website Redesign & Development Project"
                    className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                  />
                </div>

                {/* Services */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Services & Deliverables
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      value={serviceInput}
                      onChange={(e) => setServiceInput(e.target.value)}
                      placeholder="Add a service or deliverable"
                      onKeyDown={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addService())
                      }
                      className="flex-1 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
                    />
                    <Button
                      onClick={addService}
                      size="icon"
                      className="h-12 w-12 px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-xl shadow-lg"
                    >
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>
                  {formData.services.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {formData.services.map((service, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {service}
                          <button
                            onClick={() => removeService(service)}
                            className="ml-1 hover:bg-blue-200 rounded-full p-1 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tone */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Tone & Style
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["formal", "friendly", "persuasive", "professional"].map(
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
                              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105"
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

              {/* Right Column */}
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

                {/* Template Selector */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Template (Optional)
                  </Label>
                  <Button
                    variant="outline"
                    onClick={() => setShowTemplateModal(true)}
                    className="w-full justify-start h-12 border-2 border-gray-200 hover:border-blue-500 rounded-xl transition-all duration-200"
                  >
                    {formData.templateId
                      ? templates.find((t) => t.id === formData.templateId)
                          ?.name || "Choose Template"
                      : "Choose Template"}
                  </Button>
                </div>

                {/* Additional Instructions */}
                <div className="space-y-3">
                  <Label
                    htmlFor="instructions"
                    className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    Additional Instructions
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
                    <span className="font-mono">⌘/Ctrl + Enter</span> to
                    generate
                  </p>
                </div>
              </div>
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
              <Button className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:to-purple-700 shadow-xl rounded-xl transition-all duration-200 transform hover:scale-105">
                {false ? (
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
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm min-h-[600px]">
          <CardHeader className="pb-6">
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
            {false ? (
              <div className="space-y-8">
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="animate-spin rounded-full h-10 w-10 border-3 border-blue-600 border-t-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Creating 3 Unique Proposals
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Our AI is crafting proposals tailored to different
                    approaches...
                  </p>
                </div>
                <div className="space-y-6 animate-pulse">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="border-2 border-gray-100 rounded-2xl p-6"
                    >
                      <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/3 mb-3"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mb-6"></div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : [1, 2, 3, 4].length > 0 ? (
              <div className="space-y-6">
                {/* Proposal Selector */}
                <div className="grid grid-cols-1 gap-4">
                  {[1, 2, 3, 4].map((proposal) => (
                    <button
                      key={proposal}
                      className={`p-6 border-2 rounded-2xl text-left transition-all duration-200 hover:scale-102 ${
                        1 === 1
                          ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg"
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">
                            {/* {proposal.title} */}
                          </h3>
                          <p className="text-sm text-gray-600 font-medium">
                            {/* {proposal.style} */}
                          </p>
                        </div>
                        {1 === 1 && (
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Proposal Content */}
                {1 && (
                  <div className="border-t-2 border-gray-100 pt-8">
                    <div className="prose prose-lg max-w-none">
                      <div className="whitespace-pre-wrap font-sans leading-relaxed">
                        {/* {renderProposalContent(
                          generatedProposals.find(
                            (p) => p.id === selectedProposal
                          )?.content || ""
                        )} */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Create Something Amazing?
                </h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                  Fill out the form and click Generate to create 3 unique
                  AI-powered proposals tailored to your needs
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Choose Template
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTemplateModal(false)}
                className="rounded-lg"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      templateId: template.id,
                    }));
                    setShowTemplateModal(false);
                  }}
                  className="p-6 border-2 border-gray-200 rounded-2xl text-left hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
                >
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600">{template.preview}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalGenerator;
