import { Box, Container, Grid } from "@mui/material";
import { StyledH4, StyledP, StyledSpan } from "@/components";
import { CardComponent } from "@/styled";
import type { CardNewsProps } from "@/types/cardNewsProps";
import { pxToRem } from "@/utils";
import { styled } from "styled-components";

export const NewsSectionWrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundSecundary};
  padding: ${pxToRem(40)} 0;

  @media (max-width: 600px) {
    padding: ${pxToRem(20)} 0;
  }
`;

interface CardListProps {
  listData: CardNewsProps[];
  title:string;
}

export function CardList({ listData, title }: CardListProps) {
  return (
    <Container>
      <StyledH4 className="mb-2">{title}</StyledH4>      
      <Grid container spacing={{ xs: 5, md: 5 }}>
      {listData.map((item, index) => (
        <Grid key={index} size={{xs:12,md:6}}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <CardComponent>
              <StyledH4 className="mb-2 ellipsisH4">{item.title}</StyledH4>
              <Box className="mb-2" sx={{ display: "flex", justifyContent: "space-between" }}>
                <StyledSpan>{item.date}</StyledSpan>
                <StyledSpan>{item.author}</StyledSpan>
              </Box>
              <StyledP className="mb-2 ellipsisP">{item.description}</StyledP>
            </CardComponent>
          </a>
        </Grid>
      ))}
    </Grid>
    </Container>
    
  );
}
