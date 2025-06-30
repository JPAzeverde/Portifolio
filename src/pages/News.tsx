import { useEffect, useState } from "react";
import { Header, Footer, CardList, NewsSectionWrapper } from "@/components";
import { fetchNewsFromGoogleSheet } from "@/utils/fetchFromSheet";
import type { CardNewsProps } from "@/types/cardNewsProps";

function News() {
  const [allNews, setAllNews] = useState<CardNewsProps[]>([]);

  useEffect(() => {
    fetchNewsFromGoogleSheet().then((data) => {
      const reversed = data.reverse(); // Exibe da mais recente para a mais antiga
      setAllNews(reversed);
    });
  }, []);

  return (
    <>
      <Header />
      <NewsSectionWrapper>
        <CardList title="News"  listData={allNews} />
      </NewsSectionWrapper>
      <Footer />
    </>
  );
}

export default News;
