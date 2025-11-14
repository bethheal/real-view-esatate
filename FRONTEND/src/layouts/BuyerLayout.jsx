import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../pages/Home/auth/AuthProvider";

export default function BuyerLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Buyer Panel</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/buyer-dashboard"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/buyer/saved-properties"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Saved Properties
          </NavLink>

          <NavLink
            to="/buyer/profile"
            className={({ isActive }) =>
              `p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
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
            Welcome, {user?.firstName || "Buyer"}
          </h1>
        </header>

        <div className="bg-white shadow rounded-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
