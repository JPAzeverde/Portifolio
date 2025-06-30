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
import { fetchProjectsFromGoogleSheet } from "@/utils/fetchProjectsFromGoogleSheet"; // seu arquivo

import { useEffect, useState } from "react";
import { ProjectCardList } from "@/components/ProjectCardList";

function Home() {
  const [latestNews, setLatestNews] = useState<CardNewsProps[]>([]);
  const [latestProjects, setLatestProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetchNewsFromGoogleSheet().then((data) => {
      const lastTwo = data.slice(-2).reverse();
      setLatestNews(lastTwo);
    });

    fetchProjectsFromGoogleSheet(3).then((data) => {
      setLatestProjects(data.reverse());
    });
  }, []);

  return (
    <>
      <Header />
      <IntroSection />
      <NewsSectionWrapper>
        <CardList title="News" listData={latestNews} />
      </NewsSectionWrapper>
      <ProjectCardList  title="Projetos" projects={latestProjects} />
      <Footer />
    </>
  );
}

export default Home;
