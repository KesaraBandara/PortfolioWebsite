import { useParams } from 'react-router-dom';
import { PROJECTS } from "../constants";

const Details = () => {
  const { id } = useParams();
  const project = PROJECTS.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-neutral-400 mb-4">{project.description}</p>
      <div className="mb-4">
        <iframe 
          width="560" 
          height="315" 
          src={project.link} 
          title={project.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <div>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Details;
