

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCards from "../components/StatCards";
import UsersPerCityChart from "../components/UsersPerCityChart";
import UserGrowthChart from "../components/UserGrowthChart";
import TodoList from "../components/TodoList";
import RecentUsersTable from "../components/RecentUsersTable";
import { fetchUsers } from "../services/api";
import './Dashboard.css';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div className="dashboard-layout">
      <Header />
      <div className="dashboard-body">
        <Sidebar />

        <main className="dashboard-content">
          <h2>Dashboard Overview</h2>
          <p className="sub-text">
            Welcome back! Here's what's happening with your data today.
          </p>

          <StatCards users={users} />

          <div className="chart-grid">
            <UsersPerCityChart users={users} />
            <UserGrowthChart />
            <TodoList />
          </div>



          <RecentUsersTable users={users} />
        </main>
      </div>
    </div>
  );
}
