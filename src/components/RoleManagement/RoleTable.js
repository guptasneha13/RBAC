import React, { useState, useEffect } from "react";
import "../../styles/global.css"

function RoleTable() {
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [error, setError] = useState("");

  // Load roles from localStorage
  useEffect(() => {
    const savedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(savedRoles);
  }, []);

  // Save roles to localStorage
  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  // Handle Add/Edit Role
  const handleSaveRole = (role) => {
    if (!role.name || role.permissions.length === 0) {
      setError("Role name and permissions are required.");
      return;
    }

    if (editingRole) {
      setRoles((prev) =>
        prev.map((r) => (r.id === editingRole.id ? { ...role, id: r.id } : r))
      );
      setEditingRole(null);
    } else {
      setRoles((prev) => [...prev, { ...role, id: Date.now() }]);
    }
    setShowForm(false);
    setError(""); // Clear error on successful save
  };

  // Handle Delete Role
  const handleDelete = (id) => {
    const newRoles = roles.filter((r) => r.id !== id);
    setRoles(newRoles);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-xl rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Role Management</h2>
          <button
            className="bg-[#E65F2B] text-white font-semibold px-6 py-3 rounded-full shadow-lg  transition duration-300"
            onClick={() => setShowForm(true)}
          >
            {editingRole ? "Edit Role" : "Add Role"}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500 text-white p-4 mb-4 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Roles Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-gray-50 shadow-md rounded-lg">
            <thead className="bg-[#E65F2B] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Role Name</th>
                <th className="px-4 py-3 text-left">Permissions</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr
                  key={role.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition duration-200`}
                >
                  <td className="px-4 py-3 border">{role.name}</td>
                  <td className="px-4 py-3 border">
                    {role.permissions.join(", ")}
                  </td>
                  <td className="px-4 py-3 border flex gap-3">
                    <button
                      className="bg-[#E65F2B] text-white px-4 py-2 rounded-md transition"
                      onClick={() => {
                        setEditingRole(role);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#D398E7] text-white px-4 py-2 rounded-md transition"
                      onClick={() => handleDelete(role.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Role Form */}
        {showForm && (
          <RoleForm
            onClose={() => {
              setEditingRole(null);
              setShowForm(false);
            }}
            onSave={handleSaveRole}
            role={editingRole}
            error={error}
          />
        )}
      </div>
    </div>
  );
}

function RoleForm({ onClose, onSave, role, error }) {
  const predefinedPermissions = ["Read", "Write", "Delete"];
  const [name, setName] = useState(role?.name || "");
  const [permissions, setPermissions] = useState(role?.permissions || []);
  const [formError, setFormError] = useState("");

  const handleTogglePermission = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = () => {
    if (!name || permissions.length === 0) {
      setFormError("Role name and at least one permission are required.");
      return;
    }

    onSave({ name, permissions });
    setFormError(""); // Clear form-specific error on successful submit
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h3 className="text-xl font-bold mb-4">{role ? "Edit Role" : "Add Role"}</h3>
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Permissions</label>
          <div className="space-y-2">
            {predefinedPermissions.map((permission) => (
              <label
                key={permission}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={permissions.includes(permission)}
                  onChange={() => handleTogglePermission(permission)}
                  className="cursor-pointer"
                />
                <span>{permission}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {formError && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded">
            <strong>Error:</strong> {formError}
          </div>
        )}

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleTable;
