import React from "react";
import './RecentUsers.css';
export default function RecentUsersTable({ users }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>Recent Users</h2>
          <p className="subtitle">Manage and view user details</p>
        </div>
        <div className="card-actions">
          <input
            type="text"
            placeholder="Search users..."
            className="search-input"
          />
          <button className="filter-btn">Filters</button>
          <button className="add-btn">+ Add User</button>
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>
                <input type="radio" />
              </td>
              <td>
                <div className="user-name">
                  <span className="avatar">
                    {u.name
                      .split(" ")
                      .map(n => n[0])
                      .join("")}
                  </span>
                  {u.name}
                </div>
              </td>
              <td>{u.email}</td>
              <td>
                <span className="company">{u.company?.name}</span>
              </td>
              <td>{u.address?.city}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
