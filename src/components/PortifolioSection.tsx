import { Box, Container, Grid } from "@mui/material";
import { useLanguage } from "@/context";
import { StyledH3, StyledP } from "./Typographies";
import { pxToRem } from "@/utils";


export function PortifolioSection() {
  const { translations } = useLanguage();
  return (
    <Box className="bgSecundary" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <StyledH3 className="mb-2">{translations.about.title}</StyledH3>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }} sx={{ display: 'flex', height: '100%', minHeight: '300px', justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, alignItems:'center' }}>
             <Box
              component="img"
              src="IMG_Perfil_Portifolio.jpg"
              alt="Foto João Pedro"
              sx={{
                width: { xs: '100%', sm: '60%', md: '100%' },
                objectFit: 'cover',
                borderRadius: pxToRem(8),
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 12 , md: 7, lg: 7 }}>
            <StyledP className="mb-1 mt-1">{translations.about.description1}</StyledP>
            <StyledP className="mb-1">{translations.about.description2}</StyledP>
            <StyledP className="mb-1">{translations.about.description3}</StyledP>
            <StyledP className="mb-2">{translations.about.description4}</StyledP>
          </Grid>

        </Grid>
        
        

      </Container>
    </Box>
  );
}
