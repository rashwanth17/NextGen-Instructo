import React, { useEffect, useState } from "react";
import axios from "axios";

function TeacherCourses({ teacherId }) {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    longDescription: "",
    modules: [""],
    videos: [{ id: "", title: "" }],
    imageUrl: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/courses/${teacherId}`);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModuleChange = (index, value) => {
    const updatedModules = [...formData.modules];
    updatedModules[index] = value;
    setFormData({ ...formData, modules: updatedModules });
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...formData.videos];
    updatedVideos[index][field] = value;
    setFormData({ ...formData, videos: updatedVideos });
  };

  const addModule = () => {
    setFormData({ ...formData, modules: [...formData.modules, ""] });
  };

  const addVideo = () => {
    setFormData({ ...formData, videos: [...formData.videos, { id: "", title: "" }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/api/courses", {
        teacherId,
        ...formData,
      });
      alert("✅ Course added!");
      setShowForm(false);
      fetchCourses(); // refresh list
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Add New Course"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input type="text" name="name" placeholder="Course Name" value={formData.name} onChange={handleInputChange} className="w-full border px-3 py-2" required />
          <input type="text" name="description" placeholder="Short Description" value={formData.description} onChange={handleInputChange} className="w-full border px-3 py-2" required />
          <textarea name="longDescription" placeholder="Detailed Description" value={formData.longDescription} onChange={handleInputChange} className="w-full border px-3 py-2" required />
          <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleInputChange} className="w-full border px-3 py-2" />

          <h3 className="font-semibold">Modules</h3>
          {formData.modules.map((module, index) => (
            <input key={index} type="text" value={module} onChange={(e) => handleModuleChange(index, e.target.value)} placeholder={`Module ${index + 1}`} className="w-full border px-3 py-2 mb-1" />
          ))}
          <button type="button" className="text-blue-600 underline" onClick={addModule}>+ Add Module</button>

          <h3 className="font-semibold">Videos</h3>
          {formData.videos.map((video, index) => (
            <div key={index} className="flex gap-2 mb-1">
              <input type="text" value={video.title} onChange={(e) => handleVideoChange(index, "title", e.target.value)} placeholder="Video Title" className="w-1/2 border px-3 py-2" />
              <input type="text" value={video.id} onChange={(e) => handleVideoChange(index, "id", e.target.value)} placeholder="YouTube ID" className="w-1/2 border px-3 py-2" />
            </div>
          ))}
          <button type="button" className="text-blue-600 underline" onClick={addVideo}>+ Add Video</button>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="border rounded p-4 shadow">
            <img src={course.imageUrl} alt="Course" className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherCourses;
