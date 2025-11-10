// src/pages/CourseCatalog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Cpu, Brain, Code, Wifi, Factory } from 'lucide-react';

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', icon: Cpu },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain },
    { id: 'robotics', name: 'Robotics', icon: Cpu },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'iot', name: 'Internet of Things', icon: Wifi },
    { id: 'automation', name: 'Industrial Automation', icon: Factory }
  ];

  const courses = [
    {
      id: 1,
      title: "AI Robotics for African Agriculture",
      description: "Learn to design and implement AI-powered robotic solutions to transform agricultural practices across Africa.",
      category: "ai",
      level: "Intermediate",
      duration: "42h",
      students: 8921,
      rating: 4.7,
      price: 79.99,
      originalPrice: 129.99,
      instructor: "Dr. Naledi Okoro",
      image: "🌱"
    },
    {
      id: 2,
      title: "Industrial Automation & Smart Manufacturing",
      description: "Master automation technologies for African manufacturing industries with practical, locally-relevant projects.",
      category: "automation",
      level: "Advanced",
      duration: "36h",
      students: 5432,
      rating: 4.8,
      price: 89.99,
      originalPrice: 149.99,
      instructor: "Eng. Chukwu",
      image: "🏭"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Build strong foundations in machine learning with African case studies and real-world applications.",
      category: "ai",
      level: "Beginner",
      duration: "28h",
      students: 12457,
      rating: 4.6,
      price: 49.99,
      originalPrice: 79.99,
      instructor: "Dr. Adebayo",
      image: "🧠"
    },
    {
      id: 4,
      title: "IoT Solutions for Smart Cities",
      description: "Design and implement IoT systems for African urban challenges including energy, transportation, and infrastructure.",
      category: "iot",
      level: "Intermediate",
      duration: "32h",
      students: 6789,
      rating: 4.5,
      price: 69.99,
      originalPrice: 99.99,
      instructor: "Dr. Mensah",
      image: "🏙️"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '10px' }}>Course Catalog</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '18px' }}>
            Discover cutting-edge AI and robotics courses tailored for African innovation
          </p>
        </div>

        {/* Filters and Search */}
        <div className="glass-card" style={{ padding: '25px', marginBottom: '30px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Filter size={20} />
              <span style={{ fontWeight: '600' }}>Filter by:</span>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '8px 16px' }}
                >
                  <category.icon size={16} />
                  {category.name}
                </button>
              ))}
            </div>

            <div className="search-bar" style={{ marginLeft: 'auto' }}>
              <Search size={18} className="icon" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div style={{ display: 'grid', gap: '30px' }}>
          {filteredCourses.map(course => (
            <div key={course.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: '200px', background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '48px', flexShrink: 0 }}>
                {course.image}
              </div>
              
              <div style={{ padding: '25px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(26, 82, 118, 0.1)', color: 'var(--primary)', borderRadius: '50px', fontSize: '12px', fontWeight: '600', marginBottom: '10px' }}>
                      {categories.find(cat => cat.id === course.category)?.name}
                    </span>
                    <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary)' }}>{course.title}</h3>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.5', marginBottom: '15px' }}>{course.description}</p>
                  </div>
                  
                  <div style={{ textAlign: 'right', minWidth: '120px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary)', marginBottom: '5px' }}>
                      ${course.price}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                      ${course.originalPrice}
                    </div>
                    <div style={{ background: 'var(--accent)', color: 'white', padding: '2px 8px', borderRadius: '50px', fontSize: '12px', fontWeight: '600', marginTop: '5px' }}>
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '20px', color: 'var(--text-light)', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div>⏱️</div>
                      <span>{course.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div>👤</div>
                      <span>{course.level}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div>⭐</div>
                      <span>{course.rating} ({course.students} students)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div>🎓</div>
                      <span>{course.instructor}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-secondary" style={{ padding: '8px 16px' }}>
                      ❤️
                    </button>
                    <Link to={`/course/${course.id}`} className="btn btn-primary" style={{ padding: '8px 20px' }}>
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
            <Search size={48} style={{ marginBottom: '20px', opacity: 0.5 }} />
            <h3 style={{ marginBottom: '10px' }}>No courses found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;