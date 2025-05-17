import React from 'react';
import HeroSection from '../components/HeroSection';
import GamificationSection from '../components/GamificationSection';
import HowItWorks from '../components/HowItWorks';
import CoursePreview from '../components/CoursePreview';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <GamificationSection />
      <HowItWorks />
      <CoursePreview />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Home;