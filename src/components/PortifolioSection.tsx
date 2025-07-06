import type { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { useLanguage } from "@/context";
import { StyledH3, StyledP } from "./Typographies";

type Props = {
  children?: ReactNode;
};

export function PortifolioSection({ children }: Props) {
  const { translations } = useLanguage();
  return (
    <Box className="bgSecundary" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <StyledH3 className="mb-2">{translations.about.title}</StyledH3>
        <StyledP
          className="mb-2 fz-18"
          dangerouslySetInnerHTML={{
            __html: translations.about.description1,
          }}
        />
        <StyledP
        className="mb-1 fz-18"
          dangerouslySetInnerHTML={{
            __html: translations.about.description1,
          }}
        />
        {children}
      </Container>
    </Box>
  );
}
