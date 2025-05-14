import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-5"
    >
      <h1 className="text-3xl font-bold text-center mb-10 text-purple-400 sci-fi-font">
        🚀 Proiectele Mele
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
