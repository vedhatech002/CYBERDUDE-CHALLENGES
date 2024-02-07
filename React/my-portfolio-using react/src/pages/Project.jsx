import { ProjectCard } from "../component/ProjectCard";
import data from "../data/data.json";
export const Project = () => {
  return (
    <main className="mx-16 mt-16">
      <h1 className="text-2xl text-slate-400 font-['Inter'] font-semibold">
        My Projects
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {data?.projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </main>
  );
};
