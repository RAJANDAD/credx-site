import React from "react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">We're Here to Help</h1>

        <p className="text-lg text-slate-300 mb-6 text-center">
          Whether you're having issues with your account, payment, or app features—our support team is just a message away.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Chat with Us</h2>
            <p className="text-slate-300">
              Open the in-app chat 24/7 to connect instantly with our bot or a live agent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Email Support</h2>
            <p className="text-slate-300">
              Email us at <a href="mailto:support@credx.co" className="underline text-blue-400">support@credx.co</a> and we’ll respond within 24 hours.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Help Center</h2>
            <p className="text-slate-300">
              Visit our FAQ and documentation portal <a href="/help" className="underline text-blue-400">here</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          © 2025 CREDX Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
}