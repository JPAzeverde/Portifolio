import { Grid, Container } from '@mui/material';
import { StyledH2, StyledP, StyledButton } from '@/components';
import { pxToRem } from '@/utils';

export function IntroSection() {
  const baixarCurriculo = () => {
    const link = document.createElement("a")
    link.href = "/CV_JoaoPedroAzevedo.pdf"  // Caminho do seu arquivo na pasta public
    link.download = "CV_JoaoPedroAzevedo.pdf"  // Nome do arquivo ao baixar
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
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
            Olá, eu sou João Pedro <br /> Desenvolvedor Front-End
          </StyledH2>
          <StyledP className="mb-1">
            Atuo com React, TypeScript, JavaScript, HTML, CSS e Python, criando sites responsivos e eficientes. Tenho experiência em desenvolvimento front-end, automação de processos e boas práticas de UI/UX. Busco sempre entregar soluções de qualidade e com foco no usuário.
          </StyledP>
          <Grid
            size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
            sx={{ alignItems: 'flex-start' }}
          >
            <StyledButton className="primary" onClick={baixarCurriculo}>Download Currículo</StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
