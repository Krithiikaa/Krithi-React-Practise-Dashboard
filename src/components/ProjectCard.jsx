export default function ProjectCard({ title, tag, desc }) {
  return (
    <div className="card projectCard">
      <div className="projectTop">
        <span className="tag">{tag}</span>
      </div>

      <h4 className="projectTitle">{title}</h4>
      <p className="muted">{desc}</p>

      <div className="projectActions">
        <button className="btnSmall" type="button">Details</button>
        <button className="btnSmallGhost" type="button">Repo</button>
      </div>
    </div>
  );
}
