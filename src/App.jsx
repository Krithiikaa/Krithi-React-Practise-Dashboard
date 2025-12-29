import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatCard from "./components/StatCard.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  const projects = useMemo(
    () => [
      {
        title: "GPS Range Finder Dashboard",
        tag: "Dashboard",
        desc: "Real-time UI for GPS + sensor range visualization.",
      },
      {
        title: "Air Quality Dashboard Simulation",
        tag: "Data Viz",
        desc: "Interactive visualization UI for environmental data.",
      },
      {
        title: "Military Surveillance UI (v1/v2)",
        tag: "Systems UI",
        desc: "TypeScript dashboards for surveillance workflows.",
      },
      {
        title: "Predictive Hiring with AI",
        tag: "AI/ML",
        desc: "Python ML project for hiring prediction and analysis.",
      },
    ],
    []
  );

  return (
    <div className="app">
      <Sidebar active={active} onChange={setActive} />

      <div className="shell">
        <Navbar />

        <main className="content">
          <section className="hero">
            <div className="heroLeft">
              <div className="chip">Krithiikaa • CSE • Builder</div>
              <h1>
                About Me <span className="accent">Dashboard</span>
              </h1>
              <p className="muted">
                I build real-world inspired dashboards, system interfaces, and
                data-driven web apps. Focus areas: real-time UI, simulations,
                and AI-assisted tools.
              </p>

              <div className="ctaRow">
                <a
                  className="btnPrimary"
                  href="https://github.com/Krithiikaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
                <a
                  className="btnGhost"
                  href="https://www.linkedin.com/in/krithikaa-rajkumaar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="heroRight">
              <div className="profileCard">
                <div className="avatar" aria-hidden="true">
                  K
                </div>
                <div className="profileText">
                  <div className="nameRow">
                    <h2>Krithiikaa</h2>
                    <span className="pill">Open to Internships</span>
                  </div>
                  <p className="muted small">
                    Dashboards • Systems UI • AI/ML • Full-stack basics
                  </p>
                  <div className="miniGrid">
                    <div className="miniItem">
                      <div className="miniLabel">Focus</div>
                      <div className="miniValue">Real-time UI</div>
                    </div>
                    <div className="miniItem">
                      <div className="miniLabel">Stack</div>
                      <div className="miniValue">React + Vite</div>
                    </div>
                    <div className="miniItem">
                      <div className="miniLabel">Goal</div>
                      <div className="miniValue">High-impact SDE</div>
                    </div>
                    <div className="miniItem">
                      <div className="miniLabel">Style</div>
                      <div className="miniValue">Clean + usable</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glow" aria-hidden="true" />
            </div>
          </section>

          <section className="grid">
            <StatCard label="Primary Track" value="SDE / Full-Stack" hint="Backend + UI systems" />
            <StatCard label="Strength" value="Dashboards" hint="Data + visuals + UX" />
            <StatCard label="Tools" value="React • TS" hint="Vite workflow" />
            <StatCard label="Domain" value="AI • Security" hint="Surveillance / fintech interest" />
          </section>

          <section className="section">
            <div className="sectionHead">
              <h3>Featured Projects</h3>
              <p className="muted small">A few representative builds.</p>
            </div>

            <div className="projects">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </section>

          <footer className="footer">
            <span className="muted small">
              Built with React + Vite • Krithiikaa
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
