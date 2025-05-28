"use client";
import React, { useState } from "react";
import {
  FileText,
  Copy,
  Download,
  Save,
  RotateCcw,
  Wand2,
  X,
  Plus,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// interface ProposalVariation {
//   id: number;
//   title: string;
//   content: string;
//   style: string;
// }

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Generate Proposal
          </h1>
          <p className="text-gray-600">
            Create professional proposals with AI assistance - choose from 3
            unique variations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Proposal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Client Name */}
                <div className="space-y-2">
                  <Label htmlFor="clientName" className="text-sm font-medium">
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
                    className="h-11"
                  />
                </div>

                {/* Proposal Title */}
                <div className="space-y-2">
                  <Label
                    htmlFor="proposalTitle"
                    className="text-sm font-medium"
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
                    className="h-11"
                  />
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Services & Deliverables
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      value={serviceInput}
                      onChange={(e) => setServiceInput(e.target.value)}
                      placeholder="Add a service or deliverable"
                      onKeyDown={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addService())
                      }
                      className="flex-1"
                    />
                    <Button onClick={addService} size="sm" variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  {formData.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.services.map((service, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {service}
                          <button
                            onClick={() => removeService(service)}
                            className="ml-1 hover:bg-blue-100 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Goals */}
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-sm font-medium">
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
                    className="min-h-24"
                  />
                </div>

                {/* Tone */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Tone & Style</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["formal", "friendly", "persuasive", "professional"].map(
                      (tone) => (
                        <button
                          key={tone}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.tone === tone
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {tone.charAt(0).toUpperCase() + tone.slice(1)}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Template Selector */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Template (Optional)
                  </Label>
                  <Button
                    variant="outline"
                    onClick={() => setShowTemplateModal(true)}
                    className="w-full justify-start"
                  >
                    {formData.templateId
                      ? templates.find((t) => t.id === formData.templateId)
                          ?.name || "Choose Template"
                      : "Choose Template"}
                  </Button>
                </div>

                {/* Additional Instructions */}
                <div className="space-y-2">
                  <Label htmlFor="instructions" className="text-sm font-medium">
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
                    className="min-h-20"
                  />
                  <p className="text-xs text-gray-500">
                    Tip: Press ⌘/Ctrl + Enter to generate
                  </p>
                </div>

                {/* Generate Button */}
                <Button className="w-full bg-gradient-primary h-12 text-base font-semibold">
                  {false ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Generating 3 Variations...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5 mr-2" />
                      Generate 3 Proposals
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Panel */}
          <div>
            <Card className="shadow-lg border-0 bg-white min-h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-xl">
                      AI-Generated Proposals
                    </CardTitle>
                  </div>
                  {[1, 2, 3, 4].length > 0 && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Save className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {false ? (
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Creating 3 Unique Proposals
                      </h3>
                      <p className="text-gray-600">
                        Our AI is crafting proposals tailored to different
                        approaches...
                      </p>
                    </div>
                    <div className="space-y-4 animate-pulse">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border rounded-lg p-4">
                          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : [].length > 0 ? (
                  <div className="space-y-4">
                    {/* Proposal Selector */}
                    <div className="grid grid-cols-1 gap-3">
                      {[].map((proposal) => (
                        <button
                          key={proposal}
                          //   onClick={() => setSelectedProposal(proposal.id)}
                          className={`p-4 border rounded-lg text-left transition-all hover:border-blue-300 ${
                            1 === 1
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-1">
                                {/* {proposal.title} */}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {/* {proposal.style} */}
                              </p>
                            </div>
                            {1 === 1 && (
                              <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Selected Proposal Content */}
                    {1 && (
                      <div className="border-t pt-6">
                        <div className="prose prose-sm max-w-none">
                          <div className="whitespace-pre-wrap font-sans leading-relaxed"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No proposals yet
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form and click Generate to create 3 unique
                      AI-powered proposals
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Choose Template</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTemplateModal(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="p-4 border rounded-lg text-left hover:border-purple-500 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{template.name}</h3>
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
