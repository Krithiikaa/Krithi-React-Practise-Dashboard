export default function StatCard({ label, value, hint }) {
  return (
    <div className="card statCard">
      <div className="statLabel">{label}</div>
      <div className="statValue">{value}</div>
      <div className="muted small">{hint}</div>
    </div>
  );
}
