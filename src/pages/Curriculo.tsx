import { useEffect, useState } from "react";
import { Container } from "@mui/material";

import { Header, Footer, ProjectCardList, CurriculoSection } from "@/components";
import type { ProjectProps } from "@/types/projectProps";
import { fetchProjectsFromGoogleSheet } from "@/utils/fetchProjectsFromGoogleSheet";

export default function CurriculoPage() {
  const [featuredProject, setFeaturedProject] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetchProjectsFromGoogleSheet().then((data) => {
      
        setFeaturedProject([data[data.length - 1]]);      
    });
  }, []);

  return (
    <>
      <Header />
      <CurriculoSection />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <ProjectCardList title="Meu último projeto" projects={featuredProject} />
      </Container>
      <Footer />
    </>
  );
}
