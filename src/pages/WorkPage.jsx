import projects from "../data/projects"
import { useNavigate } from "react-router-dom";

export default function WorkPage() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/work/${id}`);
  };
  return (
    <div className="page-wrapper worksub">
      <header className="heading-wrapper">
        <h1 className="top-heading ">All Works</h1>
        <div className="heading-divider "></div>
      </header>
      <div className="work-grid">
        {projects.map((item) => (
          <div key={item.id} className="work-card" onClick={() => handleClick(item.id)}>
            <img src={item.image.preview} alt={item.title} className="work-image" />
            <div className="work-info">
              <h2>{item.title}</h2>
              <div className="work-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
