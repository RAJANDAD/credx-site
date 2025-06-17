import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">About CREDX</h1>
        <p className="text-lg text-slate-300 mb-6">
          CREDX is a modern credit platform built to empower users in the U.S. with a smarter, safer, and more rewarding way to manage their credit. Inspired by CRED’s revolution in India, we bring best-in-class financial technology tailored for the American market.
        </p>
        <p className="text-lg text-slate-300 mb-6">
          Founded by <strong>Mr. Dadi</strong>, CREDX was born out of a vision to simplify the credit ecosystem. We believe your credit should work for you — not against you.
        </p>
        <p className="text-lg text-slate-300 mb-6">
          Our mission is simple: <em>to unlock the power of credit for every responsible user</em>. We combine AI, automation, and world-class design to create a product that protects your money, improves your score, and gives you rewards.
        </p>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Meet the Team</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li><strong>Mr. Dadi</strong> – Founder & CEO</li>
          <li>Chief Product Officer – Coming Soon</li>
          <li>VP of Engineering – Coming Soon</li>
        </ul>
      </div>
    </div>
  );
}
