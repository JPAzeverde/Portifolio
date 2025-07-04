// Footer.tsx
import { Container, Grid } from '@mui/material';
import { FacebookIcon, IconWrapper, InstagramIcon, LinkedInIcon, StyledH4, StyledP, WhatsAppIcon } from './Typographies';

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
          }}
      >
          <IconWrapper
          href="https://www.facebook.com/profile.php?id=100008388519984"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          >
              <FacebookIcon />
          </IconWrapper>
          <IconWrapper
          href="https://www.instagram.com/jpazeverde/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          >
          <InstagramIcon />
          </IconWrapper>
          <IconWrapper
          href="https://www.linkedin.com/in/jpedro-azevedo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          >
          <LinkedInIcon />
          </IconWrapper>
          <IconWrapper
          href="https://wa.me/+5535997318190"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
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
