import { Link, Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      
      {/* Sidebar */}
      <div className="w-64 bg-white/5 border-r border-white/10 p-5">
        <h2 className="text-xl font-bold mb-6 text-indigo-400">User Panel</h2>

        <nav className="space-y-3">
          <Link to="/user" className="block hover:text-indigo-400">Dashboard</Link>
          <Link to="/user/profile" className="block hover:text-indigo-400">Profile</Link>
          <Link to="/user/book" className="block hover:text-indigo-400">Book Service</Link>
          <Link to="/user/history" className="block hover:text-indigo-400">History</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}