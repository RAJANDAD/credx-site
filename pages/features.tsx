\import React from "react";
import { CheckCircle } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Unified Credit Hub",
      description: "Link and manage all your cards and credit lines with real-time insights.",
    },
    {
      title: "Smart Bill Payments",
      description: "Set up one-tap auto-pay with overdraft protection and due reminders.",
    },
    {
      title: "AI Fraud Detection",
      description: "We monitor anomalies and hidden fees to keep your money safe.",
    },
    {
      title: "Instant Credit Approval",
      description: "Get approved for short-term credit lines in under 2 minutes.",
    },
    {
      title: "Rewards & Cashback",
      description: "Earn every time you pay a bill—redeem via our in-app store.",
    },
    {
      title: "P2P Lending",
      description: "Borrow or lend money securely with smart matching and risk scores.",
    },
    {
      title: "Secure by Design",
      description: "256-bit encryption, MFA, and secure cloud infrastructure.",
    },
    {
      title: "Real Support, 24/7",
      description: "Talk to a bot—or a human. We’re always here for you.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">All Features</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-slate-900 p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-400 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-1">{feature.title}</h2>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
