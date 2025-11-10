// src/pages/Quiz.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { courseId } = useParams();
  
  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <h1>Quiz Page - Course ID: {courseId}</h1>
        <p>This page will show the assessment interface.</p>
      </div>
    </div>
  );
};

export default Quiz;