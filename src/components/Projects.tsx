import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full py-4 flex flex-col gap-2">
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
