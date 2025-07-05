import { Avatar, Box, Container, Menu, MenuItem } from "@mui/material"
import { pxToRem } from "@/utils"
import { Link } from "react-router-dom"
import styled, { useTheme } from "styled-components"
import { StyledButton } from "./StyledButtons"
import { useContext, useState } from "react"
import { AppThemeContext } from "@/context/AppThemeContext"
import MenuIcon from "@mui/icons-material/Menu"

// Importando imagens das bandeiras

const StyledHeader = styled.div`
    position: relative;
    border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.borderBottomHeader};
    margin-bottom: ${pxToRem(37)};
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

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <StyledHeader>
            {/* Botões de idioma */}
            <LanguageSwitcherContainer>
                <StyledButton className="language">
                    <img src="usa.png" alt="English" />
                </StyledButton>
                <StyledButton className="language">
                    <img src="espanha.png" alt="Español" />
                </StyledButton>
                <StyledButton className="language">
                    <img src="brasil.png" alt="portuguese" />
                </StyledButton>
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
                        <Link to='/project'>Projetos</Link>
                        <Link to='/curriculo'>Currículo</Link>
                        <a href='#FOOTER'>Contato</a>
                        <Link to='/news'>News</Link>
                        <StyledButton className="theme" onClick={themeContext?.toggleTheme}>
                            Tema
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
                            <StyledLink to='/project'>Projetos</StyledLink>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <StyledLink to='/curriculo'>Currículo</StyledLink>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <a href='#FOOTER' style={{ color: '#000000' }}>Contato</a>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <StyledLink to='/news'>News</StyledLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            themeContext?.toggleTheme()
                            handleMenuClose()
                        }}>
                            Tema
                        </MenuItem>
                    </Menu>
                </Box>
            </Container>
        </StyledHeader>
    )
}
