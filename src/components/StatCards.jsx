import './StatCards.css';
export default function StatCards({ users }) {
  const companies = new Set(users.map(u => u.company?.name)).size;
  const cities = new Set(users.map(u => u.address?.city)).size;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Total Users</h4>
        <h2>{users.length}</h2>
      </div>

      <div className="stat-card">
        <h4>Active Users</h4>
        <h2>84%</h2>
      </div>

      <div className="stat-card">
        <h4>Companies</h4>
        <h2>{companies}</h2>
      </div>

      <div className="stat-card">
        <h4>Locations</h4>
        <h2>{cities}</h2>
      </div>
    </div>
  );
}
