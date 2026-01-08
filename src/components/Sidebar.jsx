import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li className="active">Overview</li>
        <li>Users</li>
        <li>Posts</li>
        <li>Settings</li>
      </ul>

      <div className="sidebar-footer">
        <p>Pro Plan</p>
        <span>80% usage</span>
      </div>
    </aside>
  );
}
