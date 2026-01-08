import { useMemo } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export default function UserGrowthChart({
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  values = [120, 180, 260, 240, 360, 480],
}) {
  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        data: values,
        borderColor: "#19b5fe",
        borderWidth: 3,
        tension: 0.45,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#19b5fe",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(25,181,254,0.35)");
          gradient.addColorStop(1, "rgba(25,181,254,0.02)");
          return gradient;
        },
      },
    ],
  }), [labels, values]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#94a3b8",
          font: { size: 12 },
        },
      },
      y: {
        display: false,
        grid: { drawBorder: false },
      },
    },
  }), []);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h4 style={styles.title}>User Growth</h4>
          <p style={styles.subtitle}>Last 6 months</p>
        </div>
        <span style={styles.icon}>📅</span>
      </div>

      <div style={{ height: "200px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "18px",
    padding: "18px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    width: "100%",
    maxWidth: "360px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
    color: "#0f172a",
  },
  subtitle: {
    margin: 0,
    fontSize: "13px",
    color: "#94a3b8",
  },
  icon: {
    fontSize: "18px",
    color: "#19b5fe",
  },
};
