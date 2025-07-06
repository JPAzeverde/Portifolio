import { useEffect, useState } from "react";
import { fetchProjectsFromGoogleSheet } from "@/utils/fetchProjectsFromGoogleSheet";
import { ProjectCardList } from "@/components/ProjectCardList";
import { Footer, Header } from "@/components";
import type { ProjectProps } from "@/types/projectProps";
import { useLanguage } from "@/context";

function Project() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    const sheetName = `PROJECTS_DATA_${language}`;

    fetchProjectsFromGoogleSheet(sheetName).then((data) => {
      setProjects(data.slice().reverse());
    }).catch((err) => {
      console.error("Erro ao buscar dados:", err);
      setProjects([]); // ou mantenha os antigos
    });
  }, [language]);

  return (
    <>
      <Header />
      <ProjectCardList title="Projetos" projects={projects} />
      <Footer />
    </>
  );
}

export default Project;
