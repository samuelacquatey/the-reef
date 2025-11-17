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
      title: "Intel Al Training Program for Teachers",
      description: "Practical AI training for Educators of the future. Learn how to leverage cutting-edge ai tools to make teaching faster, easier and more effective.",
      category: "Artificial Intelligence",
      level: "Basic Familiarity with laptops or phones",
      duration: "4h",
      students: 71,
      rating: 4.7,
      price: 249.99,
      originalPrice: 309.99,
      instructor: "Ms. Queen Mensah",
      image: "../../crialogo.png"
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