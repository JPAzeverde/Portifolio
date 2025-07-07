// Footer.tsx
import { Container, Grid } from '@mui/material';
import { GitIcon, IconWrapper, InstagramIcon, LinkedInIcon, StyledH4, StyledP, WhatsAppIcon } from './Typographies';

export function Footer() {
  return (
    <Container id="FOOTER">
      <Grid container spacing={0} justifyContent="center" alignItems="center" className="mb-2 mt-2">
        <Grid size={{ xs:12}}  sx={{textAlign:"center"}}>
          <StyledH4 className='mb-1'>Contato</StyledH4>
        </Grid>
        <Grid
          size={{ xs:12}}
          sx={{
          textAlign: "center",
          display: "flex",
          flexDirection:"row",
          justifyContent: "center",
          margin:"auto",
          gap: 1,
          mb:6
          }}
      >
          <IconWrapper
          href="https://github.com/JPAzeverde"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          size={60}
          >
              <GitIcon />
          </IconWrapper>
          <IconWrapper
          href="https://www.instagram.com/jpazeverde/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          size={60}
          >
          <InstagramIcon />
          </IconWrapper>
          <IconWrapper
          href="https://www.linkedin.com/in/jpedro-azevedo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          size={60}
          >
          <LinkedInIcon />
          </IconWrapper>
          <IconWrapper
          href="https://wa.me/+5535997318190"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          size={60}
          >
          <WhatsAppIcon />
          </IconWrapper>
      </Grid>
        <Grid size={{xs:12}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <StyledP className='mt-1'>Copyright ©2025 All rights reserved</StyledP>
        </Grid>
      </Grid>
    </Container>
  );
}
