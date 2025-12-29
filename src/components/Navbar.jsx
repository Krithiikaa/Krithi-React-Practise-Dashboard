export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navLeft">
        <div className="brandDot" />
        <div className="brand">
          <div className="brandTitle">Krithiikaa</div>
          <div className="brandSub">Dashboard UI</div>
        </div>
      </div>

      <div className="navRight">
        <div className="searchWrap">
          <input
            className="search"
            placeholder="Search (UI only)..."
            aria-label="Search"
          />
        </div>

        <a
          className="iconBtn"
          href="https://github.com/Krithiikaa"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          GH
        </a>
        <a
          className="iconBtn"
          href="https://www.linkedin.com/in/krithikaa-rajkumaar/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          IN
        </a>
      </div>
    </header>
  );
}
