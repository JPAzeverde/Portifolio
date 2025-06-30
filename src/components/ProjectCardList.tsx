import type { ProjectProps } from "@/types/projectProps";
import { StyledH4, StyledP } from "@/components";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { pxToRem } from "@/utils";

import styled from "styled-components";

const ProjectBox = styled.div<{ isLast?: boolean }>`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: ${(props) => `1px solid ${props.theme.borderBottomHeader}`};
`;


interface ProjectCardListProps {
  projects: ProjectProps[];
  title: string;
}

export function ProjectCardList({ projects,title }: ProjectCardListProps) {
  return (
    <Container>
      <Grid container spacing={{ xs: 2 }} sx={{mt: { xs:5}}}> 
        <StyledH4 className="mb-2">{title}</StyledH4>
        {projects.map((project, index) => (
            <Grid key={index} size={{ xs: 12 }}>
                <ProjectBox isLast={index === projects.length - 1}>
                    <a href={project.link} target="_blank">
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row", }, gap: 5, alignItems: { xs: "center", md: "flex-start" }, }}>
                            {project.image && (
                              <Box
                                  sx={{
                                    mb: { xs: 2, md: 0 },
                                    flexShrink: 0,
                                    width: 260,
                                    height: 180,
                                    overflow: "hidden",
                                    borderRadius: pxToRem(8),
                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                                  }}
                                  >
                                    <img
                                      src={project.image}
                                      alt={project.title}
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: 8,
                                        display: "block",
                                      }}
                                    />
                              </Box>
                            )}
                            <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                                <StyledH4 className="mb-1 mt-1 ellipsisH4">{project.title}</StyledH4>
                                <StyledP className="mb-2 ellipsisP">{project.description}</StyledP>
                            </Box>
                        </Box>
                    </a>
                </ProjectBox>
            </Grid>
        ))}
      </Grid>
    </Container>
  );
}
