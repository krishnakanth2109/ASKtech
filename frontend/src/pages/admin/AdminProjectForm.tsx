// src/pages/admin/AdminProjectForm.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Define the shape of our form state
interface ProjectFormData {
  title: string;
  category: string;
  tag: string;
  price: number | string;
  image: string;
  liveLink: string;
  description: string;
}

export default function AdminProjectForm(): JSX.Element {
  const navigate = useNavigate();
  // id will be present in the URL if we are editing
  const { id } = useParams<{ id: string }>(); 
  const isEditMode = Boolean(id);

  // Use the Vite environment variable
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    category: "",
    tag: "",
    price: 0,
    image: "",
    liveLink: "",
    description: "",
  });

  const [loading, setLoading] = useState<boolean>(isEditMode);
  const [saving, setSaving] = useState<boolean>(false);

  // If in Edit Mode, fetch the existing project data
  useEffect(() => {
    if (isEditMode) {
      const fetchSingleProject = async () => {
        try {
          const response = await fetch(`${API_URL}/api/products/${id}`);
          const data: ProjectFormData = await response.json();
          setFormData(data);
        } catch (error) {
          console.error("Error fetching project:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSingleProject();
    }
  }, [id, isEditMode, API_URL]);

  // Handle typing in inputs and textareas safely
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle the form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    const token = sessionStorage.getItem("token");

    // Determine URL and Method based on Add vs Edit
    const url = isEditMode
      ? `${API_URL}/api/products/${id}`
      : `${API_URL}/api/products`;
      
    const method = isEditMode ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(formData),
});

      if (response.ok) {
        navigate("/admin"); // Go back to dashboard on success
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving project:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-gray-400">Loading project data...</div>;

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent mb-8">
        {isEditMode ? "Edit Project" : "Add New Project"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur space-y-6">
        
        {/* Title & Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Category (e.g. E-Commerce)</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
            />
          </div>
        </div>

        {/* Tag & Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Tag (e.g. ReactJS)</label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Price (Optional)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
            />
          </div>
        </div>

        {/* Image & Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Live Demo URL</label>
            <input
              type="text"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#06B6D4] transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="px-6 py-3 rounded-lg font-medium bg-white/5 hover:bg-white/10 transition text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] text-white hover:opacity-90 transition shadow-lg disabled:opacity-50"
          >
            {saving ? "Saving..." : isEditMode ? "Update Project" : "Save Project"}
          </button>
        </div>
      </form>
    </div>
  );
}