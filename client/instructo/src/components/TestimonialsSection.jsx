import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const TestimonialCard = ({ avatar, name, quote }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-indigo-500 mb-4">
        <ChatBubbleLeftRightIcon className="h-8 w-8 mx-auto" />
      </div>
      <p className="text-gray-700 italic mb-4 text-center">"{quote}"</p>
      <div className="flex items-center justify-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div className="text-left">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          {/* Optional: Add user role/title */}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: 'https://via.placeholder.com/150/a18aff/ffffff?Text=AJ',
      name: 'Alice Johnson',
      quote: 'This platform has completely transformed my learning experience. The gamified approach makes it so much more engaging and fun!',
    },
    {
      avatar: 'https://via.placeholder.com/150/8b5cf6/ffffff?Text=BW',
      name: 'Bob Williams',
      quote: 'The video previews are incredibly helpful, and I love earning badges as I progress. Highly recommended!',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-700">What Our Learners Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {/* Optional: Implement a carousel later */}
      </div>
    </section>
  );
};

export default TestimonialsSection;