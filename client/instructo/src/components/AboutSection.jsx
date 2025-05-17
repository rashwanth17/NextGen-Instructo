import React from "react";

export default function AboutSection() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-purple-600 text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="max-w-xl text-lg">
        We’re a team of passionate developers and educators building the future of
        learning through technology and design. 🎓💻
      </p>
    </section>
  );
}
