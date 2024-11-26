import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="flex h-screen bg-[#EBDFD7]">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#060606] text-white p-6">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>
        <nav>
          <button
            className={`w-full text-left px-4 py-3 mb-4 rounded-lg font-semibold ${
              activeTab === "users"
                ? "bg-[#FF6A3D] text-white"
                : "bg-[#2E2E40] text-[#A3A3A3] hover:bg-[#3A3A52]"
            }`}
            onClick={() => setActiveTab("users")}
          >
            User Management
          </button>
          <button
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
              activeTab === "roles"
                ? "bg-[#FF6A3D] text-white"
                : "bg-[#2E2E40] text-[#A3A3A3] hover:bg-[#3A3A52]"
            }`}
            onClick={() => setActiveTab("roles")}
          >
            Role Management
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-[#F2EAE5] shadow-lg rounded-lg p-6">
          {/* Content Area */}
          {activeTab === "users" ? <UserTable /> : <RoleTable />}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
