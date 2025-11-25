// src/pages/CourseDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, Star, Play, ShoppingCart, Heart, Check, FileText, Users, Award, Smartphone, BookOpen, PenTool, Image, Settings, Shield } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Updated course data based on the new structure
  const course = {
    id: 1,
    title: "FUTURE-READY TEACHER (Mobile Edition)",
    subtitle: "4-Hour Practical AI Training for Ghanaian Teachers - Designed for teachers with either a mobile phone or a laptop, limited data, and non-digital materials.",
    category: "AI Education",
    duration: "2 hours",
    level: "Beginner - Mobile Phone or Laptop",
    languages: "English",
    lastUpdated: "January 2024",
    rating: 4.8,
    totalRatings: 156,
    students: 423,
    instructor: {
      name: "Coral Reef Innovation Team",
      title: "AI Education Specialists",
      rating: 4.8,
      students: 423,
      courses: 12
    },
    price: 49.99,
    originalPrice: 99.99,
    features: [
      "2 hours of practical video content",
      "Mobile-first AI workflows",
      "Certificate of completion",
      "Access on mobile and laptop",
      "Low-data usage techniques",
      "Ghanaian curriculum-focused",
      "Ready-to-use teaching materials",
      "Lifetime access to updates"
    ],
    curriculum: [
      {
        id: 1,
        title: "Welcome & Warm-up",
        lessons: 1,
        duration: "10m",
        expanded: true,
        items: [
          { id: 1, title: "AI for Teachers: It's About Your Phone, Not Computers", type: "video", duration: "5m", preview: true },
          { id: 2, title: "Live Demo: Textbook Photo to Lesson Plan", type: "video", duration: "5m", preview: true }
        ]
      },
      {
        id: 2,
        title: "AI From Your Phone or Laptop: The Basics",
        lessons: 4,
        duration: "10m",
        expanded: false,
        items: [
          { id: 1, title: "Setting Up AI Apps (ChatGPT/Gemini/Copilot)", type: "video", duration: "3m" },
          { id: 2, title: "Taking Perfect Textbook Photos for AI", type: "video", duration: "2m" },
          { id: 3, title: "Low-Data Usage Strategies", type: "reading", duration: "3m" },
          { id: 4, title: "Organizing AI Outputs on Your Device", type: "video", duration: "2m" }
        ]
      },
      {
        id: 3,
        title: "Photo-to-Lesson Notes Workflow",
        lessons: 3,
        duration: "25m",
        expanded: false,
        items: [
          { id: 1, title: "Capturing Textbook Content Effectively", type: "video", duration: "5m" },
          { id: 2, title: "Generating Simplified Lesson Notes", type: "video", duration: "8m" },
          { id: 3, title: "Creating Ghana-Specific Examples & Activities", type: "video", duration: "12m" }
        ]
      },
      {
        id: 4,
        title: "Photo-to-Assessments Workflow",
        lessons: 2,
        duration: "20m",
        expanded: false,
        items: [
          { id: 1, title: "Generating 20+ Questions from Any Topic", type: "video", duration: "10m" },
          { id: 2, title: "Creating MCQs, True/False, and Structured Questions", type: "video", duration: "10m" }
        ]
      },
      {
        id: 5,
        title: "Photo-to-Marking Workflow",
        lessons: 3,
        duration: "20m",
        expanded: false,
        items: [
          { id: 1, title: "Grading Handwritten Work with AI", type: "video", duration: "7m" },
          { id: 2, title: "Personalized Student Feedback Generation", type: "video", duration: "8m" },
          { id: 3, title: "Creating Remediation Activities", type: "video", duration: "5m" }
        ]
      },
      {
        id: 6,
        title: "AI for Teaching Materials",
        lessons: 4,
        duration: "20m",
        expanded: false,
        items: [
          { id: 1, title: "Creating Posters with Canva AI", type: "video", duration: "5m" },
          { id: 2, title: "Generating Flashcards & Visual Aids", type: "video", duration: "5m" },
          { id: 3, title: "Creating Localized Reading Passages", type: "video", duration: "5m" },
          { id: 4, title: "Science Diagrams & Educational Stories", type: "video", duration: "5m" }
        ]
      },
      {
        id: 7,
        title: "Classroom Management AI",
        lessons: 3,
        duration: "10m",
        expanded: false,
        items: [
          { id: 1, title: "Behavior Management Plans", type: "video", duration: "4m" },
          { id: 2, title: "Icebreakers & Group Activities", type: "video", duration: "3m" },
          { id: 3, title: "Parent Communication & Differentiation", type: "video", duration: "3m" }
        ]
      },
      {
        id: 8,
        title: "Ethics, Accuracy, and Safety",
        lessons: 2,
        duration: "10m",
        expanded: false,
        items: [
          { id: 1, title: "Fact-Checking & Avoiding Over-Reliance", type: "video", duration: "5m" },
          { id: 2, title: "Data Privacy with Student Information", type: "video", duration: "5m" }
        ]
      },
      {
        id: 9,
        title: "Final Practical Challenge",
        lessons: 1,
        duration: "10m",
        expanded: false,
        items: [
          { id: 1, title: "Real Task Completion: Your Week's Teaching Materials", type: "assessment", duration: "10m" }
        ]
      }
    ],
    requirements: [
      "Mobile phone (Android/iOS) or laptop",
      "Basic familiarity with smartphone apps",
      "Limited data connection sufficient",
      "Non-digital teaching materials (textbooks, notes)",
      "No prior AI experience required"
    ],
    reviews: {
      average: 4.8,
      total: 156,
      breakdown: [
        { stars: 5, percentage: 82 },
        { stars: 4, percentage: 14 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 0 }
      ]
    }
  };

  const toggleModule = (moduleId) => {
    const updatedCurriculum = course.curriculum.map(module => 
      module.id === moduleId ? { ...module, expanded: !module.expanded } : module
    );
    // In real app, you'd update state
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video': return <Play size={14} />;
      case 'reading': return <FileText size={14} />;
      case 'assessment': return <Award size={14} />;
      default: return <Play size={14} />;
    }
  };

  const getModuleIcon = (moduleId) => {
    switch (moduleId) {
      case 1: return <Smartphone size={14} />;
      case 2: return <Settings size={14} />;
      case 3: return <BookOpen size={14} />;
      case 4: return <PenTool size={14} />;
      case 5: return <FileText size={14} />;
      case 6: return <Image size={14} />;
      case 7: return <Users size={14} />;
      case 8: return <Shield size={14} />;
      case 9: return <Award size={14} />;
      default: return <Play size={14} />;
    }
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)', fontSize: '14px', marginBottom: '20px' }}>
          <Link to="/courses" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Courses</Link>
          <span>›</span>
          <Link to="/courses" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Teacher Training</Link>
          <span>›</span>
          <span>{course.title}</span>
        </div>

        <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start' }}>
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {/* Course Header */}
            <div style={{ marginBottom: '30px' }}>
              <span style={{ display: 'inline-block', padding: '6px 15px', background: 'rgba(26, 82, 118, 0.1)', color: 'var(--primary)', borderRadius: '50px', fontSize: '14px', fontWeight: '600', marginBottom: '15px' }}>
                {course.category}
              </span>
              <h1 style={{ fontSize: '36px', lineHeight: '1.2', marginBottom: '15px', color: 'var(--primary)' }}>{course.title}</h1>
              <p style={{ fontSize: '18px', color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '20px' }}>{course.subtitle}</p>
              
              <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '14px' }}>
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '14px' }}>
                  <User size={16} />
                  <span>{course.level}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '14px' }}>
                  <FileText size={16} />
                  <span>{course.languages}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '14px' }}>
                  <Calendar size={16} />
                  <span>{course.lastUpdated}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
                <div style={{ display: 'flex', color: '#f1c40f' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(course.rating) ? '#f1c40f' : 'none'} />
                  ))}
                </div>
                <span style={{ color: 'var(--text-light)', fontSize: '14px' }}>
                  {course.rating} ({course.totalRatings} ratings) • {course.students.toLocaleString()} teachers enrolled
                </span>
              </div>

              {/* Instructor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>{course.instructor.name}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>{course.instructor.title}</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="glass-card">
              <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)' }}>
                {['overview', 'curriculum', 'instructor', 'reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '20px 30px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontWeight: '600',
                      borderBottom: `3px solid ${activeTab === tab ? 'var(--primary)' : 'transparent'}`,
                      background: 'none',
                      border: 'none',
                      color: activeTab === tab ? 'var(--primary)' : 'var(--text)'
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div style={{ padding: '30px' }}>
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Course Description</h3>
                    <p style={{ marginBottom: '25px', lineHeight: '1.7', color: 'var(--text)' }}>
                      This revolutionary 2-hour training transforms how Ghanaian teachers approach their daily work. Using just a mobile phone or laptop, you'll learn practical AI workflows that instantly reduce your workload while enhancing student engagement. No technical background required - we focus on what works in real Ghanaian classrooms.
                    </p>

                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>What You'll Achieve</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
                      {[
                        "Create complete lesson plans from textbook photos",
                        "Generate assessments and mark student work instantly",
                        "Design engaging teaching materials on your phone",
                        "Save 10+ hours weekly on preparation and marking",
                        "Master low-data AI usage for limited connectivity",
                        "Create Ghana-specific educational content"
                      ].map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <Check size={16} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Perfect For Ghanaian Teachers</h4>
                    <p style={{ marginBottom: '25px', lineHeight: '1.7', color: 'var(--text)' }}>
                      Specifically designed for the Ghanaian educational context, this course addresses real challenges faced by teachers: limited time, scarce resources, and the need for engaging, locally-relevant content. Walk away with your next week's teaching materials already prepared during the workshop.
                    </p>

                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Takeaway Resources</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      {[
                        "AI PROMPTS FOR GH TEACHERS PDF (mobile-friendly)",
                        "Folder of ready materials created during workshop",
                        "Certificate of Future-Ready Teacher Completion",
                        "Access to Ghana Teacher AI Support Community"
                      ].map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <Check size={16} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div>
                    <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Program Breakdown (2 Hours)</h3>
                    <p style={{ marginBottom: '25px', color: 'var(--text-light)' }}>
                      {course.curriculum.length} modules • {course.duration} of practical content • Mobile-first approach
                    </p>

                    {course.curriculum.map(module => (
                      <div key={module.id} className="glass-card" style={{ marginBottom: '15px', border: '1px solid var(--glass-border)', borderRadius: '15px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            padding: '20px', 
                            background: 'rgba(255, 255, 255, 0.5)', 
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                          onClick={() => toggleModule(module.id)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(26, 82, 118, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '14px' }}>
                              {getModuleIcon(module.id)}
                            </div>
                            <div>
                              <div style={{ fontWeight: '600' }}>{module.title}</div>
                              <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                                {module.lessons} lesson{module.lessons !== 1 ? 's' : ''}
                              </div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '14px' }}>
                            <span>{module.duration}</span>
                          </div>
                        </div>
                        
                        {module.expanded && module.items.length > 0 && (
                          <div style={{ maxHeight: '500px', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                            {module.items.map(lesson => (
                              <div key={lesson.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px', borderBottom: '1px solid var(--glass-border)', transition: 'all 0.2s' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(26, 82, 118, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '12px', flexShrink: 0 }}>
                                  {getLessonIcon(lesson.type)}
                                </div>
                                <div style={{ flex: 1 }}>
                                  <div style={{ fontWeight: '500', marginBottom: '3px' }}>{lesson.title}</div>
                                  <div style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '12px' }}>
                                    <span>{lesson.type}</span>
                                    <span>{lesson.duration}</span>
                                    {lesson.preview && <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Preview</span>}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Instructor Tab */}
                {activeTab === 'instructor' && (
                  <div>
                    <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                      <div>
                        <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>{course.instructor.name}</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '15px' }}>{course.instructor.title}</p>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                          <div>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>{course.instructor.rating}</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Instructor Rating</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>{course.instructor.students.toLocaleString()}</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Teachers Trained</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>{course.instructor.courses}</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Courses</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                      The Coral Reef Innovation Team consists of experienced educators and AI specialists who have trained over 400 Ghanaian teachers in practical AI applications. Our approach focuses on immediate, tangible benefits that teachers can implement the very next day in their classrooms.
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                      We understand the unique challenges faced by Ghanaian educators - from limited resources to large class sizes. Our training is specifically designed to work within these constraints while dramatically reducing teacher workload and improving student outcomes.
                    </p>

                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Our Philosophy</h4>
                    <p style={{ lineHeight: '1.7' }}>
                      "AI should work for teachers, not the other way around. We believe every Ghanaian teacher deserves tools that make their work easier, their teaching more effective, and their impact greater - all using the technology they already have in their pockets."
                    </p>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div>
                    <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                      <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '15px', minWidth: '150px' }}>
                        <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--primary)', lineHeight: '1' }}>{course.reviews.average}</div>
                        <div style={{ display: 'flex', color: '#f1c40f', margin: '10px 0', justifyContent: 'center' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill={i < Math.floor(course.reviews.average) ? '#f1c40f' : 'none'} />
                          ))}
                        </div>
                        <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>{course.reviews.total} reviews</div>
                      </div>
                      <div style={{ flex: 1 }}>
                        {course.reviews.breakdown.map((item, index) => (
                          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <div style={{ width: '80px', fontSize: '14px', color: 'var(--text-light)' }}>
                              {item.stars} stars
                            </div>
                            <div style={{ flex: 1, height: '8px', background: 'rgba(26, 82, 118, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', background: 'var(--primary)', borderRadius: '10px', width: `${item.percentage}%` }}></div>
                            </div>
                            <div style={{ width: '40px', fontSize: '14px', color: 'var(--text-light)', textAlign: 'right' }}>
                              {item.percentage}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sample Reviews */}
                    <div style={{ marginTop: '30px' }}>
                      <h4 style={{ marginBottom: '20px', color: 'var(--primary)' }}>What Ghanaian Teachers Say</h4>
                      <div style={{ display: 'grid', gap: '20px' }}>
                        {[
                          {
                            name: "Grace A., Accra",
                            rating: 5,
                            comment: "This training changed my teaching life! I now create lesson plans in minutes instead of hours. The photo-to-lesson workflow is magical."
                          },
                          {
                            name: "Kwame B., Kumasi",
                            rating: 5,
                            comment: "As someone who's not tech-savvy, I was skeptical. But this course made AI so simple. My marking time has been cut by 70%!"
                          },
                          {
                            name: "Ama C., Tamale",
                            rating: 4,
                            comment: "Perfect for our rural school with limited internet. The low-data techniques really work. My students love the new materials I create."
                          }
                        ].map((review, index) => (
                          <div key={index} className="glass-card" style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                              <div style={{ fontWeight: '600' }}>{review.name}</div>
                              <div style={{ display: 'flex', color: '#f1c40f' }}>
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={14} fill={i < review.rating ? '#f1c40f' : 'none'} />
                                ))}
                              </div>
                            </div>
                            <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>"{review.comment}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ width: '400px' }}>
            <div className="glass-card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
              <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)', borderRadius: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '48px' }}>
                📱
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--primary)', marginBottom: '5px' }}>
                  ${course.price}
                  <span style={{ fontSize: '18px', color: 'var(--text-light)', textDecoration: 'line-through', marginLeft: '10px' }}>
                    ${course.originalPrice}
                  </span>
                  <span style={{ background: 'var(--accent)', color: 'white', padding: '3px 10px', borderRadius: '50px', fontSize: '12px', fontWeight: '600', marginLeft: '10px' }}>
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>One-time payment • Lifetime access</div>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '25px' }}>
                {course.features.map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: 'var(--text-light)' }}>
                    <Check size={16} style={{ color: 'var(--accent)' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/learn/${course.id}/1`} className="btn btn-primary" style={{ marginBottom: '15px' }}>
                <ShoppingCart size={18} />
                Enroll Now
              </Link>
              <button className="btn btn-secondary">
                <Heart size={18} />
                Add to Wishlist
              </button>

              <div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '14px', marginTop: '15px' }}>
                 Certificate included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;