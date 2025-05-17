import React from "react";

const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-yellow-500"];

const Slide = ({ title, description, bg }) => {
  return (
    <section
      className={`h-screen w-full flex flex-col justify-center items-center text-white text-center p-8 snap-start ${colors[bg % colors.length]}`}
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl">{description}</p>
    </section>
  );
};
    
export default Slide;
