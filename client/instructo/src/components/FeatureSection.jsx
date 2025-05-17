import React from "react";

export default function FeatureSection() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-white text-purple-800 text-center px-4">
      <h2 className="text-4xl font-bold mb-6">Smart Features</h2>
      <ul className="space-y-4 text-lg max-w-md">
        <li>🧠 AI-Based Notes Summarizer</li>
        <li>📅 Smart Scheduling and Notifications</li>
        <li>📈 Performance Analytics Dashboard</li>
      </ul>
    </section>
  );
}
