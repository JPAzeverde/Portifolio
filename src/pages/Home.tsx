import {
  Header,
  IntroSection,
  Footer,
  CardList,
  NewsSectionWrapper,
} from "@/components";

import type { CardNewsProps } from "@/types/cardNewsProps";
import type { ProjectProps } from "@/types/projectProps";

import { fetchNewsFromGoogleSheet } from "@/utils/fetchFromSheet";
import { fetchProjectsFromGoogleSheet } from "@/utils/fetchProjectsFromGoogleSheet";

import { useEffect, useState } from "react";
import { ProjectCardList } from "@/components/ProjectCardList";
import { useLanguage } from "@/context";

function Home() {
  const { language } = useLanguage(); // pegar o idioma do contexto
  const [latestNews, setLatestNews] = useState<CardNewsProps[]>([]);
  const [latestProjects, setLatestProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    // Buscar notícias
    fetchNewsFromGoogleSheet().then((data) => {
      const lastTwo = data.slice(-2).reverse();
      setLatestNews(lastTwo);
    });

    // Buscar projetos, com base no idioma atual
    const sheetName = `PROJECTS_DATA_${language}`;

    fetchProjectsFromGoogleSheet(sheetName)
      .then((data) => {
        setLatestProjects(data.slice().reverse());
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
      <NewsSectionWrapper>
        <CardList title="News" listData={latestNews} />
      </NewsSectionWrapper>
      <ProjectCardList title="Projetos" projects={latestProjects} />
      <Footer />
    </>
  );
}

export default Home;
