import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// Public Components
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Auth
import Login from "./pages/Login";
 
// Admin Components
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProjectForm from "./pages/admin/AdminProjectForm";

// ✅ User Components (ADD THESE IMPORTS)
import UserLayout from "./pages/user/UserLayout";
import UserHome from "./pages/user/UserHome";
import Profile from "./pages/user/Profile";
import BookService from "./pages/user/BookService";
import History from "./pages/user/History";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * PUBLIC ROUTES WRAPPER
 */
const PublicRoutes: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      {/* ======================================= */}
      {/* 1. PUBLIC ROUTES */}
      {/* ======================================= */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>

      {/* ======================================= */}
      {/* 2. LOGIN */}
      {/* ======================================= */}
      <Route path="/login" element={<Login />} />

      {/* ======================================= */}
      {/* 3. ADMIN ROUTES (PROTECTED 🔐) */}
      {/* ======================================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="add" element={<AdminProjectForm />} />
        <Route path="edit/:id" element={<AdminProjectForm />} />
      </Route>

      {/* ======================================= */}
      {/* 4. USER ROUTES (PROTECTED 🔐) */}
      {/* ======================================= */}
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="book" element={<BookService />} />
        <Route path="history" element={<History />} />
      </Route>

      {/* ======================================= */}
      {/* 5. FALLBACK */}
      {/* ======================================= */}
      <Route path="*" element={<h1 className="text-center mt-20">404 Not Found</h1>} />
    </Routes>
  );
};

export default App;