import { Box, Container, Grid } from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  StyledH3,
  StyledH4,
  StyledP,
  WhatsAppIcon,
  IconWrapper,
} from "@/components";
import { pxToRem } from "@/utils";
import styled from "styled-components";
import { CardComponent } from "@/styled";

const Chip = styled.span`
  background-color: ${(props) => props.theme.buttons.primaryBackground};
  color: white;
  padding: ${pxToRem(6)} ${pxToRem(12)};
  border-radius: ${pxToRem(20)};
  font-size: ${pxToRem(14)};
`;

const HardSkilss = styled.div`
  border-right: 2px solid ${(props) => props.theme.borderBottomHeader};
  padding-right: ${pxToRem(24)};

  @media (max-width: 900px) {
    border-right: none;
    padding-right: 0;
  }
`;


export function CurriculoSection() {
  return (
    <Box className="bgSecundary" sx={{ py: 6 }}>
        <Container maxWidth="lg">
        
            <Grid container sx={{ textAlign: "center", mb: 5 }} spacing={1}>
                <Grid size={{ xs: 12, sm: 4, md:3 }}>
                    <img src="IMG_Perfil_Portifolio.jpg" alt="Foto João Pedro" style={{ maxWidth: "100%", objectFit: "cover" }} />
                </Grid>
                <Grid
                    size={{ xs: 12, sm: 8, md:8 }}
                    sx={{
                    textAlign: { xs: "center", sm: "start" },
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    mb: 5,
                    }}
                >
                    <StyledH3 className="mb-1">João Pedro Brito de Azevedo</StyledH3>
                    <StyledP>24 anos, Lavras/MG</StyledP>
                    <StyledP>(35) 99731-8190</StyledP>
                    <StyledP>joaopzevedo@gmail.com</StyledP>
                </Grid>
                <Grid
                    size={{ xs: 2, sm: 2, md:1 }}
                    sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    justifyContent: "center",
                    margin:"auto",
                    gap: 1,
                    }}
                >
                    <IconWrapper
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    >
                        <FacebookIcon />
                    </IconWrapper>
                    <IconWrapper
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    >
                    <InstagramIcon />
                    </IconWrapper>
                    <IconWrapper
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    >
                    <LinkedInIcon />
                    </IconWrapper>
                    <IconWrapper
                    href="https://wa.me/seunumerowhatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    >
                    <WhatsAppIcon />
                    </IconWrapper>
                </Grid>
            </Grid>

            {/* Resumo Profissional */}
            <Grid container sx={{ textAlign: "start", justifyContent: "center", mb: 5 }} spacing={2}>
            <Grid size={{ xs: 12 }}>
                <StyledH3 className="mb-1">Resumo Profissional</StyledH3>
                <StyledP className="mb-2">
                Graduando em Ciência da Computação pela UFLA, com experiência em desenvolvimento
                web, análise de dados e automação de processos. Foco em UI/UX, responsividade, boas
                práticas e performance.
                </StyledP>
            </Grid>
            </Grid>

            {/* Habilidades Técnicas e Soft Skills */}
            <Grid container spacing={4} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
                <HardSkilss>
                    <StyledH3 className="mb-2">Habilidades Técnicas</StyledH3>
                    <Grid container spacing={2}>
                    {[
                        "HTML",
                        "CSS",
                        "SASS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Context API",
                        "Git",
                        "GitHub",
                        "E2E",
                        "Bootstrap",
                        "Python",
                        "Selenium",
                        "MySQL",
                        "Scrum",
                        "UI/UX",
                        "C#",
                        "Figma",
                    ].map((skill) => (
                        <Grid key={skill}>
                        <Chip>{skill}</Chip>
                        </Grid>
                    ))}
                    
                    </Grid>
                </HardSkilss>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <StyledH3 className="mb-2">Soft Skills</StyledH3>
                <Grid container spacing={2}>
                    {[
                    "Comunicação",
                    "Trabalho em equipe",
                    "Proatividade",
                    "Adaptabilidade",
                    "Resolução de problemas",
                    "Gestão do tempo",
                    ].map((skill) => (
                    <Grid key={skill}>
                        <Chip>{skill}</Chip>
                    </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
            <Grid container>
                <StyledH3 className="mb-2 mt-2">Experiência Profissional</StyledH3>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                    {
                    cargo: "Estagiário em Desenvolvimento Web – Unilavras",
                    periodo: "Dez/2024 – Atual",
                    descricao: "Desenvolvimento de páginas institucionais com React, TypeScript e Bootstrap. Responsividade, SEO e reuniões com marketing.",
                    },
                    {
                    cargo: "Analista de Dados – Solar Gun",
                    periodo: "Jan/2023 – Jun/2024",
                    descricao: "Automatização de análise de documentos técnicos com Python e preenchimento automático de planilhas.",
                    },
                    {
                    cargo: "Web Developer – Grupo Glorium",
                    periodo: "Jun/2023 – Dez/2023",
                    descricao: "Criação de sites responsivos com HTML, CSS (SASS), Bootstrap, JavaScript e PHP. Foco em acessibilidade e UX/UI.",
                    },
                    {
                    cargo: "Analista de Dados – Sol Nascente Energia Solar",
                    periodo: "Jan/2022 – Dez/2022",
                    descricao: "Análise de desempenho de usinas com BI e Excel. Elaboração de relatórios técnicos com insights para clientes.",
                    },
                ].map((exp, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }}>
                    <CardComponent>
                        <StyledH4 className="mb-1 ellipsisH4">{exp.cargo}</StyledH4>
                        <StyledP className="mb-1"><strong>{exp.periodo}</strong></StyledP>
                        <StyledP className="ellipsisP">{exp.descricao}</StyledP>
                    </CardComponent>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ mt: 4 }}>
  
                <Grid size={{ xs: 12, md: 4 }}>
                    <StyledH3 className="mb-2 border-bottom">Formação Acadêmica</StyledH3>
                    <StyledP className="mb-1">
                        <strong>Bacharelado em Ciência da Computação – UFLA</strong> (2022 – 2026)
                    </StyledP>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StyledH3 className="mb-2 border-bottom">Cursos e Certificações</StyledH3>
                    <StyledP className="mb-1">
                        <strong>Fundamentos de C# com Certificação Microsoft</strong> (20h)
                    </StyledP>
                    <StyledP className="mb-1">
                        <strong>LGPD</strong> (8h) • <strong>Segurança da Informação</strong> (10h)
                    </StyledP>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StyledH3 className="mb-2 border-bottom">Idiomas</StyledH3>
                    <StyledP>
                    <strong>Português:</strong> Nativo
                    </StyledP>
                    <StyledP>
                    <strong>Inglês:</strong> Avançado
                    </StyledP>
                    <StyledP>
                    <strong>Espanhol:</strong> Intermediário (leitura, escrita, fala) | Avançado (escuta)
                    </StyledP>
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}
