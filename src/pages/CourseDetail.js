// src/pages/CourseDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, Star, Play, ShoppingCart, Heart, Check, FileText, Users, Award } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data - in real app, this would come from API
  const course = {
    id: 1,
    title: "AI Robotics for African Agriculture",
    subtitle: "Learn to design and implement AI-powered robotic solutions to transform agricultural practices across Africa.",
    category: "AI & Robotics",
    duration: "42 hours",
    level: "Intermediate",
    languages: "English, French",
    lastUpdated: "March 2023",
    rating: 4.7,
    totalRatings: 2348,
    students: 8921,
    instructor: {
      name: "Dr. Naledi Okoro",
      title: "AI Research Lead at Coral Reef Innovation Africa",
      rating: 4.8,
      students: 12547,
      courses: 8
    },
    price: 79.99,
    originalPrice: 129.99,
    features: [
      "42 hours of video content",
      "8 practical projects",
      "Certificate of completion",
      "Access on mobile and TV",
      "Lifetime access",
      "African case studies"
    ],
    curriculum: [
      {
        id: 1,
        title: "Introduction to AI in African Agriculture",
        lessons: 4,
        duration: "2h 15m",
        expanded: true,
        items: [
          { id: 1, title: "Course Overview & African Context", type: "video", duration: "25m", preview: true },
          { id: 2, title: "Current Challenges in African Agriculture", type: "video", duration: "35m" },
          { id: 3, title: "Case Study: Smart Farming in Kenya", type: "reading", duration: "45m" },
          { id: 4, title: "Quiz: Agricultural Challenges", type: "assessment", duration: "30m" }
        ]
      },
      {
        id: 2,
        title: "Robotics Fundamentals for Farming",
        lessons: 6,
        duration: "4h 30m",
        expanded: false,
        items: []
      },
      {
        id: 3,
        title: "Machine Learning for Crop Monitoring",
        lessons: 8,
        duration: "6h 15m",
        expanded: false,
        items: []
      }
    ],
    requirements: [
      "Basic programming knowledge (Python recommended)",
      "Understanding of high school mathematics",
      "Access to a computer with internet",
      "No prior AI or robotics experience required"
    ],
    reviews: {
      average: 4.7,
      total: 2348,
      breakdown: [
        { stars: 5, percentage: 75 },
        { stars: 4, percentage: 18 },
        { stars: 3, percentage: 5 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 }
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

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)', fontSize: '14px', marginBottom: '20px' }}>
          <Link to="/courses" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Courses</Link>
          <span>›</span>
          <Link to="/courses" style={{ color: 'var(--primary)', textDecoration: 'none' }}>AI & Robotics</Link>
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
                  {course.rating} ({course.totalRatings} ratings) • {course.students.toLocaleString()} students enrolled
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
                      This comprehensive course bridges the gap between artificial intelligence and robotics, specifically tailored for African agricultural challenges. You'll learn to develop intelligent systems that can monitor crops, predict yields, and automate labor-intensive processes – all while considering the unique environmental and economic contexts of African farming.
                    </p>

                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>What You'll Learn</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
                      {[
                        "Design AI systems for crop disease detection",
                        "Build autonomous robots for soil analysis",
                        "Implement predictive analytics for yield optimization",
                        "Develop IoT solutions for smallholder farmers"
                      ].map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <Check size={16} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>African Impact Focus</h4>
                    <p style={{ marginBottom: '25px', lineHeight: '1.7', color: 'var(--text)' }}>
                      This course emphasizes practical applications that address real African agricultural challenges. You'll work on projects that help smallholder farmers increase yields, reduce post-harvest losses, and adapt to climate change using affordable, locally-sourced technology.
                    </p>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div>
                    <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Course Content</h3>
                    <p style={{ marginBottom: '25px', color: 'var(--text-light)' }}>
                      {course.curriculum.length} modules • {course.duration} of content • 8 practical projects
                    </p>

                    {course.curriculum.map(module => (
                      <div key={module.id} className="glass-card" style={{ marginBottom: '25px', border: '1px solid var(--glass-border)', borderRadius: '15px', overflow: 'hidden' }}>
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
                              <Play size={14} />
                            </div>
                            <span style={{ fontWeight: '600' }}>{module.title}</span>
                          </div>
                          <div style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '14px' }}>
                            <span>{module.lessons} lessons</span>
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
                            <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Students</div>
                          </div>
                          <div>
                            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)' }}>{course.instructor.courses}</div>
                            <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Courses</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                      Dr. Naledi Okoro is a leading AI researcher specializing in agricultural technology for African contexts. With a PhD in Artificial Intelligence from University of Cape Town, she has spent the past decade developing practical AI solutions for smallholder farmers across East and West Africa.
                    </p>

                    <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                      Her work has been recognized by the African Union and featured in international publications. She leads the AI research team at Coral Reef Innovation Africa, where she focuses on making advanced technology accessible and affordable for African farmers.
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
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ width: '400px' }}>
            <div className="glass-card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
              <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)', borderRadius: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '48px' }}>
                🤖
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
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;