// src/pages/CourseContent.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, StepBack, StepForward, Captions, Settings, Brain, FileText, Download, MessageCircle, Edit, Check, ChevronDown, ChevronUp } from 'lucide-react';

const CourseContent = () => {
  const { courseId, lessonId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');
  const [aiExplanation, setAiExplanation] = useState('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [expandedModules, setExpandedModules] = useState([1, 2, 3]);

  // Mock data
  const courseData = {
    id: 1,
    title: "AI Robotics for African Agriculture",
    currentLesson: {
      id: 3,
      title: "Neural Networks for African Agriculture",
      module: "Module 4: AI Applications",
      duration: "32:20",
      description: "In this lesson, we explore how neural networks can be applied to solve agricultural challenges specific to Africa."
    },
    progress: 65,
    modules: [
      {
        id: 1,
        title: "Getting Started with React",
        expanded: true,
        lessons: [
          { id: 1, title: "Introduction to React", duration: "12:45", completed: true },
          { id: 2, title: "Setting Up Your Environment", duration: "18:30", completed: true },
          { id: 3, title: "Your First React Component", duration: "15:20", completed: true }
        ]
      },
      {
        id: 2,
        title: "JSX and Rendering",
        expanded: true,
        lessons: [
          { id: 4, title: "Understanding JSX", duration: "22:10", completed: true },
          { id: 5, title: "Rendering Elements", duration: "14:35", completed: true }
        ]
      },
      {
        id: 3,
        title: "Components and Props",
        expanded: true,
        lessons: [
          { id: 6, title: "Functional Components", duration: "16:45", completed: true },
          { id: 7, title: "Component Composition", duration: "19:20", completed: true },
          { id: 8, title: "React Components and Props", duration: "24:15", completed: false, current: true },
          { id: 9, title: "State and Lifecycle", duration: "28:30", completed: false }
        ]
      }
    ],
    resources: [
      { id: 1, title: "Components & Props Cheatsheet", type: "pdf", size: "2.4 MB" },
      { id: 2, title: "Starter Code Files", type: "code", size: "5.1 MB" },
      { id: 3, title: "Additional Reading", type: "links", size: "External Links" }
    ]
  };

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const getAIExplanation = () => {
    setIsLoadingAI(true);
    setAiExplanation('');
    
    // Simulate API call
    setTimeout(() => {
      setAiExplanation('Neural networks are computing systems inspired by the human brain. In this agricultural context, they can analyze images of crops to detect diseases, process sensor data to predict yields, and provide recommendations for optimal farming practices. The key advantage for African agriculture is that these systems can work with limited data and adapt to local conditions, making them ideal for smallholder farmers who may not have access to extensive historical data.');
      setIsLoadingAI(false);
    }, 2000);
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'pdf': return <FileText size={16} />;
      case 'code': return <Download size={16} />;
      case 'links': return <MessageCircle size={16} />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <div style={{ padding: '30px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {/* Video Player */}
            <div className="glass-card" style={{ marginBottom: '20px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'rgba(255, 255, 255, 0.9)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--primary)', 
                    fontSize: '30px', 
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={30} /> : <Play size={30} />}
                </div>
              </div>
              
              <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '22px', marginBottom: '5px' }}>{courseData.currentLesson.title}</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>{courseData.currentLesson.module} • Lesson {courseData.currentLesson.id} of 12</p>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button className="icon-btn">
                    <StepBack size={18} />
                  </button>
                  <button className="icon-btn">
                    <StepForward size={18} />
                  </button>
                  <button className="icon-btn">
                    <Captions size={18} />
                  </button>
                  <button className="icon-btn">
                    <Settings size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* AI Explanation */}
            <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(40, 180, 99, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '18px' }}>
                  <Brain size={18} />
                </div>
                <h3 style={{ fontSize: '18px' }}>Coral AI Assistant</h3>
              </div>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.5)', borderRadius: '15px', padding: '15px', marginBottom: '15px', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--glass-border)' }}>
                {aiExplanation ? (
                  <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>{aiExplanation}</p>
                ) : isLoadingAI ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)' }}>
                    <div className="spinner"></div>
                    AI is analyzing the content...
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-light)', textAlign: 'center', fontStyle: 'italic' }}>
                    Click the button below to get an AI-powered explanation of the current lesson content.
                  </p>
                )}
              </div>
              
              <button 
                className={`btn ${isLoadingAI ? 'btn-secondary' : 'btn-accent'}`}
                onClick={getAIExplanation}
                disabled={isLoadingAI}
              >
                <Brain size={18} />
                {isLoadingAI ? 'Processing...' : 'Get AI Explanation'}
              </button>
            </div>

            {/* Lesson Content */}
            <div className="glass-card" style={{ padding: '25px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={20} style={{ color: 'var(--primary)' }} />
                Lesson Content
              </h3>
              
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {['notes', 'transcript', 'resources'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '50px',
                      background: activeTab === tab ? 'var(--primary)' : 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid var(--glass-border)',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      color: activeTab === tab ? 'white' : 'var(--text)'
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTab === 'notes' && (
                <div>
                  <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>
                    In this lesson, we're exploring React components and props - the building blocks of any React application.
                  </p>
                  
                  <p style={{ marginBottom: '15px', fontWeight: '600' }}>Key Concepts:</p>
                  <ul style={{ marginLeft: '20px', marginBottom: '15px', lineHeight: '1.6' }}>
                    <li>Functional vs Class Components</li>
                    <li>Passing data with props</li>
                    <li>Prop validation with PropTypes</li>
                    <li>Default props</li>
                  </ul>

                  <p style={{ marginBottom: '15px', fontWeight: '600' }}>African Context:</p>
                  <p style={{ lineHeight: '1.7' }}>
                    These AI solutions are particularly valuable in Africa where smallholder farmers constitute the majority of agricultural production. By implementing neural networks, we can help increase food security and improve livelihoods.
                  </p>
                </div>
              )}

              {activeTab === 'resources' && (
                <div>
                  <ul style={{ listStyle: 'none' }}>
                    {courseData.resources.map(resource => (
                      <li key={resource.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--glass-border)' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(26, 82, 118, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                          {getResourceIcon(resource.type)}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '15px', marginBottom: '3px' }}>{resource.title}</h4>
                          <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                            {resource.type.toUpperCase()} • {resource.size}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Notes Section */}
            <div className="glass-card" style={{ padding: '25px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Edit size={20} style={{ color: 'var(--primary)' }} />
                My Notes
              </h3>
              <textarea 
                style={{ 
                  width: '100%', 
                  height: '150px', 
                  padding: '15px', 
                  borderRadius: '15px', 
                  border: '1px solid var(--glass-border)', 
                  background: 'rgba(255, 255, 255, 0.5)', 
                  resize: 'vertical', 
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                placeholder="Take notes here..."
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button className="btn btn-primary" style={{ padding: '8px 16px' }}>
                  Save Notes
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ width: '350px' }}>
            {/* Course Navigation */}
            <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '18px' }}>Course Content</h3>
                <span style={{ color: 'var(--text-light)', fontSize: '14px' }}>8/12 Lessons</span>
              </div>

              {courseData.modules.map(module => (
                <div key={module.id} style={{ marginBottom: '20px' }}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '12px 0', 
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--glass-border)'
                    }}
                    onClick={() => toggleModule(module.id)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(26, 82, 118, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '14px' }}>
                        <Play size={14} />
                      </div>
                      <span>{module.title}</span>
                    </div>
                    {expandedModules.includes(module.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>

                  {expandedModules.includes(module.id) && (
                    <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                      {module.lessons.map(lesson => (
                        <li 
                          key={lesson.id}
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            padding: '12px 0', 
                            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            background: lesson.current ? 'rgba(26, 82, 118, 0.1)' : 'transparent',
                            borderRadius: lesson.current ? '10px' : '0',
                            paddingLeft: lesson.current ? '10px' : '0',
                            color: lesson.current ? 'var(--primary)' : 'var(--text)'
                          }}
                        >
                          <div style={{ 
                            width: '20px', 
                            height: '20px', 
                            borderRadius: '50%', 
                            border: `2px solid ${lesson.completed ? 'var(--accent)' : 'var(--text-light)'}`,
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            background: lesson.completed ? 'var(--accent)' : 'transparent',
                            color: lesson.completed ? 'white' : 'transparent'
                          }}>
                            {lesson.completed && <Check size={10} />}
                          </div>
                          <span style={{ flex: 1, fontSize: '14px' }}>{lesson.title}</span>
                          <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Your Progress</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-light)' }}>{courseData.progress}% Complete</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(26, 82, 118, 0.2)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', borderRadius: '10px', width: `${courseData.progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CourseContent;