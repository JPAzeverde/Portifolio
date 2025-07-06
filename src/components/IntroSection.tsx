import { Grid, Container } from '@mui/material';
import { StyledH2, StyledP, StyledButton } from '@/components';
import { pxToRem } from '@/utils';
import { useLanguage } from "@/context";

export function IntroSection() {
  const baixarCurriculo = () => {
    const link = document.createElement("a")
    link.href = "/CV_JoaoPedroAzevedo.pdf"  // Caminho do seu arquivo na pasta public
    link.download = "CV_JoaoPedroAzevedo.pdf"  // Nome do arquivo ao baixar
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const { translations } = useLanguage();
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 10, md: 8, lg: 7 }}
          sx={{
            mt: { xs: pxToRem(80), md: pxToRem(200) },
            mb: { xs: pxToRem(60), md: pxToRem(100) },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <StyledH2 className="mb-1">
             {translations.homepage.title1}<br/>{translations.homepage.title2}
          </StyledH2>
          <StyledP className="mb-1">{translations.homepage.subtitle}</StyledP>
          <Grid
            size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
            sx={{ alignItems: 'flex-start' }}
          >
            <StyledButton className="primary" onClick={baixarCurriculo}>{translations.homepage.downloadButton}</StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
