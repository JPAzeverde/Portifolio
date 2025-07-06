import { Avatar, Box, Container, Menu, MenuItem } from "@mui/material"
import { pxToRem } from "@/utils"
import { Link } from "react-router-dom"
import styled, { useTheme } from "styled-components"
import { StyledButton } from "./StyledButtons"
import { useContext, useState } from "react"
import { AppThemeContext, useLanguage  } from "@/context"
import MenuIcon from "@mui/icons-material/Menu"

// Importando imagens das bandeiras

const StyledHeader = styled.div`
    position: relative;
    border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.borderBottomHeader};
    width: 100%;
`

const LinksContainer = styled(Box)`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: ${pxToRem(64)};
    gap: ${pxToRem(20)};
    color: #000000;

    @media (max-width: 768px) {
        display: none;
    }
`

const MenuButton = styled(StyledButton)`
    display: none;

    @media (max-width: 768px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

const LanguageSwitcherContainer = styled.div`
  position: absolute;
  top: ${pxToRem(80)};
  right: ${pxToRem(10)};
  display: flex;
  gap: ${pxToRem(10)};

`

export function Header() {
    const theme = useTheme();
    const themeContext = useContext(AppThemeContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const menuOpen = Boolean(anchorEl)
    const { translations, setLanguage, language } = useLanguage();


    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <StyledHeader>
            <LanguageSwitcherContainer>
                {language !== "en" && (
                    <StyledButton className="language" onClick={() => setLanguage("en")}>
                        <img src="usa.png" alt="English" />
                    </StyledButton>
                )}

                {language !== "es" && (
                    <StyledButton className="language" onClick={() => setLanguage("es")}>
                        <img src="espanha.png" alt="Español" />
                    </StyledButton>
                )}

                {language !== "br" && (
                    <StyledButton className="language" onClick={() => setLanguage("br")}>
                        <img src="brasil.png" alt="Português" />
                    </StyledButton>
                )}
            </LanguageSwitcherContainer>



            <Container maxWidth="lg">
                <Box sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: pxToRem(64)
                }}>
                    <Link to='/'>
                        <Avatar alt="Avatar" src={theme.logo} sx={{ width: pxToRem(50), height: pxToRem(50) }} />
                    </Link>

                    <LinksContainer>
                        <Link to='/project'>{translations.projects.title}</Link>
                        <Link to='/curriculo'>{translations.curriculum.title}</Link>
                        <a href='#FOOTER'>{translations.contact.title}</a>
                        <Link to='/news'>News</Link>
                        <StyledButton className="theme" onClick={themeContext?.toggleTheme}>
                            {translations.theme}
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
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <StyledLink to='/project'>{translations.projects.title}</StyledLink>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <StyledLink to='/curriculo'>{translations.curriculum.title}</StyledLink>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <a href='#FOOTER' style={{ color: '#000000' }}>{translations.contact.title}</a>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <StyledLink to='/news'>News</StyledLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            themeContext?.toggleTheme()
                            handleMenuClose()
                        }}>
                            {translations.theme}
                        </MenuItem>
                    </Menu>
                </Box>
            </Container>
        </StyledHeader>
    )
}
