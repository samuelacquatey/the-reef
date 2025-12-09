import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Plus, Trash, Save } from 'lucide-react';

const AdminUpload = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        category: 'ai',
        level: 'Beginner',
        price: '',
        originalPrice: '',
        instructor: '',
        image: '', // URL or path
        modules: []
    });

    const [currentModule, setCurrentModule] = useState({ title: '', lessons: [] });
    const [currentLesson, setCurrentLesson] = useState({ title: '', duration: '', videoFile: null });
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const handleCourseChange = (e) => {
        setCourseData({ ...courseData, [e.target.name]: e.target.value });
    };

    const handleLessonChange = (e) => {
        setCurrentLesson({ ...currentLesson, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setCurrentLesson({ ...currentLesson, videoFile: e.target.files[0] });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const addLesson = () => {
        if (!currentLesson.title || !currentLesson.videoFile) {
            alert('Please provide lesson title and video file');
            return;
        }
        setCurrentModule({
            ...currentModule,
            lessons: [...currentModule.lessons, currentLesson]
        });
        setCurrentLesson({ title: '', duration: '', videoFile: null });
    };

    const addModule = () => {
        if (!currentModule.title || currentModule.lessons.length === 0) {
            alert('Please provide module title and at least one lesson');
            return;
        }
        setCourseData({
            ...courseData,
            modules: [...courseData.modules, currentModule]
        });
        setCurrentModule({ title: '', lessons: [] });
    };

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData, config);
            return data; // Returns the file path
        } catch (error) {
            console.error('File upload error', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        setMessage('');

        try {
            // 1. Upload course image if provided
            let imageUrl = courseData.image;
            if (imageFile) {
                imageUrl = await uploadFile(imageFile);
            }

            // 2. Upload all video files
            const modulesWithUploads = await Promise.all(courseData.modules.map(async (mod) => {
                const lessonsWithUploads = await Promise.all(mod.lessons.map(async (lesson) => {
                    if (lesson.videoFile) {
                        const videoUrl = await uploadFile(lesson.videoFile);
                        return {
                            title: lesson.title,
                            duration: lesson.duration || '00:00',
                            videoUrl: videoUrl
                        };
                    }
                    return lesson;
                }));
                return { ...mod, lessons: lessonsWithUploads };
            }));

            // 3. Submit course data with image URL
            const finalCourseData = { ...courseData, modules: modulesWithUploads, image: imageUrl };

            await axios.post(`${process.env.REACT_APP_API_URL}/api/courses`, finalCourseData);

            setMessage('Course created successfully!');
            setCourseData({
                title: '',
                description: '',
                category: 'ai',
                level: 'Beginner',
                price: '',
                originalPrice: '',
                instructor: '',
                image: '',
                modules: []
            });
            setImageFile(null);
        } catch (error) {
            setMessage('Error creating course: ' + (error.response?.data?.message || error.message));
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="container" style={{ padding: '40px 0' }}>
            <div className="glass-card" style={{ padding: '30px' }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Upload New Course</h2>

                {message && (
                    <div style={{
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '5px',
                        background: message.includes('Error') ? '#ffebee' : '#e8f5e9',
                        color: message.includes('Error') ? '#c62828' : '#2e7d32'
                    }}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <input className="form-control" name="title" placeholder="Course Title" value={courseData.title} onChange={handleCourseChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                        <input className="form-control" name="instructor" placeholder="Instructor Name" value={courseData.instructor} onChange={handleCourseChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                        <select className="form-control" name="category" value={courseData.category} onChange={handleCourseChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
                            <option value="ai">Artificial Intelligence</option>
                            <option value="robotics">Robotics</option>
                            <option value="programming">Programming</option>
                            <option value="iot">Internet of Things</option>
                        </select>
                        <select className="form-control" name="level" value={courseData.level} onChange={handleCourseChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        <input className="form-control" type="number" name="price" placeholder="Price" value={courseData.price} onChange={handleCourseChange} required style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                        <input className="form-control" type="number" name="originalPrice" placeholder="Original Price" value={courseData.originalPrice} onChange={handleCourseChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    </div>

                    <textarea className="form-control" name="description" placeholder="Course Description" value={courseData.description} onChange={handleCourseChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', marginBottom: '20px', minHeight: '100px' }} />

                    {/* Course Image Upload */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--primary)' }}>
                            Course Thumbnail Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ddd',
                                cursor: 'pointer'
                            }}
                        />
                        {imageFile && (
                            <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Upload size={14} />
                                Selected: {imageFile.name}
                            </p>
                        )}
                        <p style={{ marginTop: '5px', fontSize: '12px', color: 'var(--text-light)' }}>
                            Recommended: 800x600px, JPG or PNG, max 2MB
                        </p>
                    </div>

                    {/* Module Builder */}
                    <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Add Modules & Lessons</h3>

                        <div style={{ marginBottom: '15px' }}>
                            <input
                                placeholder="Module Title (e.g., Introduction)"
                                value={currentModule.title}
                                onChange={(e) => setCurrentModule({ ...currentModule, title: e.target.value })}
                                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                            />

                            <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
                                <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>Add Lesson to Module</h4>
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                    <input placeholder="Lesson Title" name="title" value={currentLesson.title} onChange={handleLessonChange} style={{ flex: 1, padding: '8px' }} />
                                    <input placeholder="Duration (e.g. 10:00)" name="duration" value={currentLesson.duration} onChange={handleLessonChange} style={{ width: '100px', padding: '8px' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px' }}>Video File</label>
                                    <input type="file" accept="video/*" onChange={handleFileChange} />
                                </div>
                                <button type="button" onClick={addLesson} className="btn btn-secondary" style={{ fontSize: '12px', padding: '5px 10px' }}>
                                    <Plus size={12} /> Add Lesson
                                </button>

                                {/* List added lessons for current module */}
                                {currentModule.lessons.length > 0 && (
                                    <ul style={{ marginTop: '10px', fontSize: '12px' }}>
                                        {currentModule.lessons.map((l, idx) => (
                                            <li key={idx}>{l.title} ({l.videoFile?.name})</li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <button type="button" onClick={addModule} className="btn btn-primary" style={{ marginTop: '15px' }}>
                                Add Module to Course
                            </button>
                        </div>

                        {/* List added modules */}
                        {courseData.modules.length > 0 && (
                            <div style={{ marginTop: '20px' }}>
                                <h4>Course Structure Preview:</h4>
                                {courseData.modules.map((m, idx) => (
                                    <div key={idx} style={{ padding: '10px', background: '#e3f2fd', marginBottom: '5px', borderRadius: '5px' }}>
                                        <strong>{m.title}</strong> ({m.lessons.length} lessons)
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-accent" disabled={uploading} style={{ width: '100%', padding: '15px', fontSize: '16px' }}>
                        {uploading ? 'Uploading Course...' : 'Create Course'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminUpload;
