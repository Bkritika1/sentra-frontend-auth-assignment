import { Doughnut } from "react-chartjs-2";

export default function UsersByCompanyChart({ users }) {
  if (!users.length) return null;

  const companyCount = {};
  users.forEach(u => {
    if (u.company?.name) {
      companyCount[u.company.name] =
        (companyCount[u.company.name] || 0) + 1;
    }
  });

  return (
    <div className="chart-card">
      <h3>Users by Company</h3>

      <Doughnut
        key={JSON.stringify(companyCount)}   // ✅ FIX
        data={{
          labels: Object.keys(companyCount),
          datasets: [
            {
              data: Object.values(companyCount),
              backgroundColor: [
                "#13b6ec",
                "#a7f3d0",
                "#fde68a",
                "#fca5a5",
              ],
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
