const items = [
  { name: "Dashboard", icon: "▣" },
  { name: "Projects", icon: "⚙" },
  { name: "Skills", icon: "⛭" },
  { name: "Contact", icon: "✉" },
];

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="sidebar">
      <div className="sideTop">
        <div className="sideLogo">K</div>
        <div>
          <div className="sideTitle">Krithiikaa</div>
          <div className="sideSub">Systems UI Builder</div>
        </div>
      </div>

      <nav className="sideNav">
        {items.map((it) => {
          const isActive = active === it.name;
          return (
            <button
              key={it.name}
              className={`sideItem ${isActive ? "active" : ""}`}
              onClick={() => onChange(it.name)}
              type="button"
            >
              <span className="sideIcon" aria-hidden="true">
                {it.icon}
              </span>
              <span>{it.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sideBottom">
        <div className="sideCard">
          <div className="sideCardTitle">Current Focus</div>
          <div className="sideCardText">
            Real-time dashboards, clean UI, strong fundamentals.
          </div>
        </div>

        <div className="sideMeta muted small">v1.0 • React + Vite</div>
      </div>
    </aside>
  );
}
