// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetail from './pages/CourseDetail';
import CourseContent from './pages/CourseContent';
import Quiz from './pages/Quiz';
import AdminUpload from './pages/AdminUpload'; // Added import
import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/learn/:courseId/:lessonId" element={<CourseContent />} />
            <Route path="/quiz/:courseId" element={<Quiz />} />
            <Route path="/admin/upload" element={<AdminUpload />} /> {/* Added route */}
          </Routes>
        </main>
        <ChatWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;