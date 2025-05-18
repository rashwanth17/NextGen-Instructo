import React from 'react';

const CourseOverview = ({ description }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Course Overview</h2>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      {/* You can add more overview details here if needed */}
    </div>
  );
};

export default CourseOverview;