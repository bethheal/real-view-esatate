import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../pages/Home/auth/AuthProvider";

export default function AgentLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Agent Panel</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/agent-dashboard"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/agent/add-property"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Add Property
          </NavLink>

          <NavLink
            to="/agent/manage-properties"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Manage Listings
          </NavLink>

          <NavLink
            to="/agent/profile"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Profile
          </NavLink>

          {/* Logout */}
          <button
            onClick={logout}
            className="mt-6 p-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-700">
            Welcome, {user?.firstName || "Agent"}
          </h1>
        </header>

        <div className="bg-white shadow rounded-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
