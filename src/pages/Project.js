
import BtnGithub from '../components/btnGithub/BtnGithub';
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectList';

export default function Project() {
  const { id } = useParams();
  const { title, imgBig, skills, githubLink } = projects[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>

          <img src={imgBig} alt={title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>{skills}</p>
          </div>
          {githubLink && <BtnGithub githubLink={githubLink} />}
        </div>
      </div>
    </main>
  );
}
