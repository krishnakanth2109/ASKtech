// src/components/AdminLayout.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PlusCircle, LogOut, Home } from "lucide-react";

export default function AdminLayout(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // UPDATED: Check sessionStorage to match the Login page
    const token = sessionStorage.getItem("adminToken");
    
    if (!token) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    // UPDATED: Remove token from sessionStorage on logout
    sessionStorage.removeItem("adminToken"); 
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#020617] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
            Admin Panel
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link 
            to="/admin" 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              location.pathname === "/admin" 
                ? "bg-[#06B6D4]/20 text-[#06B6D4]" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link 
            to="/admin/add" 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              location.pathname === "/admin/add" 
                ? "bg-[#06B6D4]/20 text-[#06B6D4]" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <PlusCircle size={20} /> Add Project
          </Link>
          <Link 
            to="/" 
            target="_blank" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <Home size={20} /> View Website
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout} 
            className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> 
      </main>
    </div>
  );
}