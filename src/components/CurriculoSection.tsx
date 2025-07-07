import { Box, Container, Grid } from "@mui/material";
import {GitIcon,InstagramIcon,LinkedInIcon, StyledH3,StyledH4, StyledP,WhatsAppIcon,IconWrapper, StyledButton, StyledH5} from "@/components";
import { pxToRem } from "@/utils";
import styled from "styled-components";
import { CardComponent } from "@/styled";
import { useLanguage } from "@/context";

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
  const { translations } = useLanguage();
  const baixarCurriculo = () => {
    const link = document.createElement("a")
    link.href = "/CV_JoaoPedroAzevedo.pdf"  // Caminho do seu arquivo na pasta public
    link.download = "CV_JoaoPedroAzevedo.pdf"  // Nome do arquivo ao baixar
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <Box className="bgSecundary" sx={{ py: 6 }}>
        <Container maxWidth="lg">
        
            <Grid container sx={{ textAlign: { xs: "center", sm: "start" }, mb: 5 }} spacing={1}>
                <Grid size={{ xs: 12, sm: 4, md:3 }}>
                    <img src="IMG_Perfil_Portifolio.jpg" alt="Foto João Pedro" style={{ maxWidth: "80%", objectFit: "cover", borderRadius: pxToRem(8)}}/>
                </Grid>
                <Grid
                    size={{ xs: 12, sm: 8,}}
                    sx={{
                    textAlign: { xs: "center", sm: "start" },
                    display: "flex",
                    justifyContent: "top",
                    flexDirection: "column",
                    mb: 5,
                    mt: 2,}}
                >
                    <StyledH3 className="mb-1">João Pedro Azevedo</StyledH3>
                    <StyledP>{translations.curriculum.location}</StyledP>
                    <StyledP>+55 (35) 99731-8190</StyledP>
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
                    href="https://github.com/JPAzeverde"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    size={26}
                    >
                        <GitIcon />
                    </IconWrapper>
                    <IconWrapper
                    href="https://www.instagram.com/jpazeverde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    size={26}
                    >
                    <InstagramIcon />
                    </IconWrapper>
                    <IconWrapper
                    href="https://www.linkedin.com/in/jpedro-azevedo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    size={26}
                    >
                    <LinkedInIcon />
                    </IconWrapper>
                    <IconWrapper
                    href="https://wa.me/seunumerowhatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    size={26}
                    >
                    <WhatsAppIcon />
                    </IconWrapper>
                </Grid>
            </Grid>

            <Grid container sx={{ textAlign: "start", justifyContent: "center", mb: 5 }} spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <StyledH3 className="mb-1">{translations.curriculum.summaryTitle}</StyledH3>
                    <StyledP className="mb-2">{translations.curriculum.summaryDescription}</StyledP>
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ mb: 5 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <HardSkilss>
                        <StyledH3 className="mb-2">{translations.curriculum.hardSkills}</StyledH3>
                        <Grid container spacing={2}>
                        {[
                            "HTML","CSS","SASS","JavaScript","TypeScript","React",
                            "Context API","Git","GitHub","E2E","Bootstrap","Python",
                            "Selenium","MySQL","Scrum","UI/UX","C#","Figma",
                        ].map((skill) => (
                            <Grid key={skill}>
                                <Chip>{skill}</Chip>
                            </Grid>
                        ))}
                        
                        </Grid>
                    </HardSkilss>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <StyledH3 className="mb-2">{translations.curriculum.softSkills}</StyledH3>
                    <Grid container spacing={2}>
                        {[
                        "Comunicação","Trabalho em equipe",
                        "Proatividade","Adaptabilidade",
                        "Resolução de problemas","Gestão do tempo",
                        ].map((skill) => (
                        <Grid key={skill}>
                            <Chip>{skill}</Chip>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <StyledH3 className="mb-2 mt-2">{translations.curriculum.experienceTitle}</StyledH3>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                {[ {
                    cargo: `${translations.curriculum.experience0.position}`,
                    periodo: `${translations.curriculum.experience0.period}`,
                    enterprise: `${translations.curriculum.experience0.enterprise}`,
                    descricao: `${translations.curriculum.experience0.description}`,
                    },
                    {
                    cargo: `${translations.curriculum.experience1.position}`,
                    periodo: `${translations.curriculum.experience1.period}`,
                    enterprise: `${translations.curriculum.experience1.enterprise}`,
                    descricao: `${translations.curriculum.experience1.description}`,
                    }
                ].map((exp, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }}>
                    <CardComponent>
                        <StyledH4 className="mb-1 title-experience">{exp.cargo}</StyledH4>
                        <StyledH5 className="mb-1">{exp.enterprise}</StyledH5>
                        <StyledP className="mb-1"><strong>{exp.periodo}</strong></StyledP>
                        <StyledP>{exp.descricao}</StyledP>
                    </CardComponent>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            
            <Grid container spacing={4}>

                 <Grid spacing={2} sx={{ mb: 2 }} size={{ xs: 12, md: 5 }}>
                    <StyledH3 className="mb-2">{translations.curriculum.certifications.title}</StyledH3>
                    {[ {
                        title: `${translations.curriculum.certifications.course0.title}`,
                        hours: `${translations.curriculum.certifications.course0.hours}`,
                        description: `${translations.curriculum.certifications.course0.description}`,
                        },
                        {
                        title: `${translations.curriculum.certifications.course1.title}`,
                        hours: `${translations.curriculum.certifications.course1.hours}`,
                        description: `${translations.curriculum.certifications.course1.description}`,
                        },
                        {
                        title: `${translations.curriculum.certifications.course2.title}`,
                        hours: `${translations.curriculum.certifications.course2.hours}`,
                        description: `${translations.curriculum.certifications.course2.description}`,
                        }
                    ].map((exp, index) => (
                        <Grid key={index} >
                            <StyledP className="ellipsisP"><strong>{exp.title}</strong> - {exp.hours}</StyledP>
                            <StyledP className="mb-1">{exp.description}</StyledP>
                        </Grid>
                    ))}
                </Grid>
  
                <Grid size={{ xs: 12, md: 4 }}  sx={{ mb: 2 }}>
                    <StyledH3 className="mb-2 border-bottom">{translations.curriculum.educationTitle}</StyledH3>
                    <StyledP>
                        <strong>{translations.curriculum.education.title}</strong> {translations.curriculum.education.date}
                    </StyledP>
                </Grid>

               
                <Grid size={{ xs: 12, md: 3 }}>
                    <StyledH3 className="mb-2 border-bottom">{translations.curriculum.languages.title}</StyledH3>
                    <StyledP className="mb-1">
                    <strong>{translations.curriculum.languages.portuguese.title}:</strong> {translations.curriculum.languages.portuguese.proficiency}
                    </StyledP>
                    <StyledP className="mb-1">
                    <strong>{translations.curriculum.languages.english.title}:</strong> {translations.curriculum.languages.english.proficiency}
                    </StyledP >
                    <StyledP className="mb-1">
                    <strong>{translations.curriculum.languages.spanish.title}:</strong> {translations.curriculum.languages.spanish.proficiency}
                    </StyledP>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StyledButton className="primary" onClick={baixarCurriculo}>{translations.homepage.downloadButton}</StyledButton>
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}
