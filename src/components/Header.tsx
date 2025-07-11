import { Avatar, Box, Container, Menu, MenuItem } from "@mui/material";
import { pxToRem } from "@/utils";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { StyledButton } from "./StyledButtons";
import { useContext, useState } from "react";
import { AppThemeContext, useLanguage } from "@/context";
import MenuIcon from "@mui/icons-material/Menu";

// Estilos
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.borderBottomHeader};
`;

const LinksContainer = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: ${pxToRem(64)};
  gap: ${pxToRem(20)};
  color: #000000;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const MenuButton = styled(StyledButton)`
  display: none;

  @media (max-width: 1000px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const LanguageSwitcherContainer = styled.div`
  position: absolute;
  top: ${pxToRem(80)};
  right: ${pxToRem(10)};
  display: flex;
  gap: ${pxToRem(10)};
  @media (max-width: 1000px) {
    display: none;
  }
`;

export function Header() {
  const theme = useTheme();
  const themeContext = useContext(AppThemeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const { translations, setLanguage, language } = useLanguage();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <LanguageSwitcherContainer>
        {language !== "en" && (
          <StyledButton className="round" onClick={() => setLanguage("en")}>
            <img src="usa.png" alt="English" />
          </StyledButton>
        )}
        {language !== "es" && (
          <StyledButton className="round" onClick={() => setLanguage("es")}>
            <img src="espanha.png" alt="Español" />
          </StyledButton>
        )}
        {language !== "br" && (
          <StyledButton className="round" onClick={() => setLanguage("br")}>
            <img src="brasil.png" alt="Português" />
          </StyledButton>
        )}
      </LanguageSwitcherContainer>

      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            height: pxToRem(64),
          }}
        >
          <Link to="/">
            <Avatar alt="Avatar" src={theme.logo} sx={{ width: pxToRem(50), height: pxToRem(50) }} />
          </Link>

          <LinksContainer>
            <Link to="/project">{translations.projects.title}</Link>
            <Link to="/curriculo">{translations.curriculum.title}</Link>
            <a href="#FOOTER">{translations.contact.title}</a>

            <StyledButton className="round" onClick={themeContext?.toggleTheme} aria-label="Toggle theme">
              <img
                src={themeContext?.appTheme === "light" ? "/dark_theme.svg" : "/light_theme.svg"}
                alt={themeContext?.appTheme === "light" ? "Dark mode icon" : "Light mode icon"}
                style={{
                  width: "24px",
                  height: "24px",
                  filter: themeContext?.appTheme === "dark" ? "brightness(0) invert(1)" : "none",
                }}
              />
            </StyledButton>
          </LinksContainer>

          <MenuButton className="theme" onClick={handleMenuClick}>
            <MenuIcon />
          </MenuButton>

          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <StyledLink to="/project">{translations.projects.title}</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <StyledLink to="/curriculo">{translations.curriculum.title}</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#FOOTER" style={{ color: "#000000" }}>{translations.contact.title}</a>
            </MenuItem>
            <MenuItem
              onClick={() => {
                themeContext?.toggleTheme();
                handleMenuClose();
              }}
            >
              <img
                src={themeContext?.appTheme === "light" ? "/dark_theme.svg" : "/light_theme.svg"}
                alt={themeContext?.appTheme === "light" ? "Dark mode icon" : "Light mode icon"}
                style={{ width: "24px", height: "24px" }}
              />
            </MenuItem>
            <MenuItem>
                    {language !== "en" && (
                    <StyledButton className="round mr-2" onClick={() => setLanguage("en")}>
                        <img src="usa.png" alt="English" />
                    </StyledButton>
                    )}
                    {language !== "es" && (
                    <StyledButton className="round mr-2" onClick={() => setLanguage("es")}>
                        <img src="espanha.png" alt="Español" />
                    </StyledButton>
                    )}
                    {language !== "br" && (
                    <StyledButton className="round" onClick={() => setLanguage("br")}>
                        <img src="brasil.png" alt="Português" />
                    </StyledButton>
                    )}
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </StyledHeader>
  );
}
