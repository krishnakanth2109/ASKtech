import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash2, PlusCircle } from "lucide-react";

// Define the shape of your Product/Project data from MongoDB
interface Project {
  _id: string;
  title: string;
  category: string;
  tag: string;
  price: number;
  image: string;
  liveLink: string;
  description: string;
}

export default function AdminDashboard(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data: Project[] = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete a project
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    const token = sessionStorage.getItem("adminToken"); // Ensure token is passed

    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setProjects(projects.filter((project) => project._id !== id));
      } else {
        alert("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (loading) return <div className="text-gray-400">Loading projects...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-1">Manage your portfolio projects</p>
        </div>
        <Link
          to="/admin/add"
          className="flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] px-5 py-2.5 rounded-lg text-white font-medium hover:opacity-90 transition shadow-lg"
        >
          <PlusCircle size={20} /> Add New
        </Link>
      </div>

      {/* Projects Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-gray-300 font-semibold">Image</th>
                <th className="p-4 text-gray-300 font-semibold">Title</th>
                <th className="p-4 text-gray-300 font-semibold">Category</th>
                <th className="p-4 text-gray-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No projects found. Click "Add New" to create one.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project._id} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-16 h-12 object-cover rounded-lg border border-white/10"
                      />
                    </td>
                    <td className="p-4 font-medium">{project.title}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-[#06B6D4]/10 text-[#06B6D4] rounded-full text-xs">
                        {project.category}
                      </span>
                    </td>
                    <td className="p-4 flex gap-3 mt-2">
                      <Link
                        to={`/admin/edit/${project._id}`}
                        className="p-2 bg-[#4F46E5]/20 text-[#4F46E5] rounded-lg hover:bg-[#4F46E5]/40 transition"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/40 transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}