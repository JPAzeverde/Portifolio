import {
  Header,
  IntroSection,
  Footer,
  PortifolioSection
} from "@/components";

import type { ProjectProps } from "@/types/projectProps";

import { fetchProjectsFromGoogleSheet } from "@/utils/fetchProjectsFromGoogleSheet";

import { useEffect, useState } from "react";
import { ProjectCardList } from "@/components/ProjectCardList";
import { useLanguage } from "@/context";

function Home() {
  const { language } = useLanguage(); // pegar o idioma do contexto
  const [latestProjects, setLatestProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    // Buscar projetos, com base no idioma atual
    const sheetName = `PROJECTS_DATA_${language}`;

    fetchProjectsFromGoogleSheet(sheetName)
      .then((data) => {
        setLatestProjects(data.slice().reverse().slice(0, 4));

      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setLatestProjects([]); // ou manter os dados antigos
      });
  }, [language]);

  return (
    <>
      <Header />
      <IntroSection />
      <PortifolioSection />
      <ProjectCardList title="Projetos" projects={latestProjects} />
      <Footer />
    </>
  );
}

export default Home;
