
import Project from '../components/project/Project';

import { projects } from '../helpers/projectList';

export default function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, i) => (
              <Project key={i} {...project} index={i}/>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
