import React from "react";

export default function ContactSection() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-purple-600 to-purple-900 text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-6">Have questions? Want to collaborate?</p>
      <button className="bg-white text-purple-800 px-6 py-2 rounded-lg font-semibold hover:bg-purple-100 transition">
        Contact Us
      </button>
    </section>
  );
}
