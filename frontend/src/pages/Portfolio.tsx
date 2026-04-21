// src/pages/Portfolio.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the shape of your Product data from MongoDB
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

export default function Portfolio(): JSX.Element {
  const [portfolioData, setPortfolioData] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);

  // Use the Vite environment variable
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch data from Node.js backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        const data: Project[] = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [API_URL]);

  // Dynamically generate categories based on fetched data
  const categories = ["All", ...Array.from(new Set(portfolioData.map((item) => item.category)))];

  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#06B6D4]"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-[#020617] min-h-screen text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>
        <p className="text-gray-400 mt-4">Showcasing our best website projects</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] text-white shadow-lg border-transparent"
                : "border-white/20 text-gray-300 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No projects found.</p>
        ) : (
          filteredData.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur hover:border-[#06B6D4]/40 transition-all"
            >
              {/* Image with Hover Effect */}
              <div className="relative group cursor-pointer overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-300" />
                
                {/* Center Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] flex items-center justify-center shadow-lg hover:scale-110 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                    </svg>
                  </a>
                </div>

                <span className="absolute top-3 right-3 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] text-xs px-3 py-1 rounded-full font-semibold shadow">
                  Live
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.price}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#4F46E5]/20 via-[#06B6D4]/20 to-[#10B981]/20 text-cyan-300 border border-[#06B6D4]/30">
                    {item.tag}
                  </span>
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent hover:underline"
                  >
                    Visit →
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}