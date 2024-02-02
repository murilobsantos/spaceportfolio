import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus Projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Portfolio Next.js Moderno"
          description="Apenas uma amostra do que esta por vir, um tema totalmente novo e ambicioso!!"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Cartões de site interativos"
          description="Explore meu portfolio e descubra uma coleção cativante de cards de sites interativos, destacando minha versatilidade e habilidades criativas além do tema espacial principal."
        />
        <ProjectCard
          src="/operaweb.png"
          title="Site com tema espacial"
          description="Meu portfolio temático sobre o espaço é uma jornada fascinante pelo cosmos, 
          unindo estética futurista e funcionalidade moderna.
          Da terra ao espaço, convidei você a explorar e descobrir o extraordinário."
        />
      </div>
    </div>
  );
};

export default Projects;
