import { useEffect, useState } from "react";
import { fetchProjectsFromGoogleSheet } from "@/utils/fetchProjectsFromGoogleSheet";
import { ProjectCardList } from "@/components/ProjectCardList";
import { Footer, Header } from "@/components";
import type { ProjectProps } from "@/types/projectProps";

function Project() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetchProjectsFromGoogleSheet().then((data) => {
      setProjects(data.slice().reverse()); // todos invertidos do último para o primeiro
    });
  }, []);

  return (
    <>
      <Header />
      <ProjectCardList  title="Projetos" projects={projects} />
      <Footer />
    </>
  );
}

export default Project;
