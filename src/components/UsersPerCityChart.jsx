import { Bar } from "react-chartjs-2";

export default function UsersPerCityChart({ users }) {
  const cityCount = {};
  users.forEach(u => {
    cityCount[u.address?.city] =
      (cityCount[u.address?.city] || 0) + 1;
  });

  return (
    <div className="chart-card">
      <h3>Users per City</h3>
      <Bar
        data={{
          labels: Object.keys(cityCount),
          datasets: [{
            data: Object.values(cityCount),
            backgroundColor: "#13b6ec"
          }]
        }}
      />
    </div>
  );
}
