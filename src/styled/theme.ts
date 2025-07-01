import type { Theme } from "@/types/theme"

export const lightTheme: Theme = {
  backgroundPrimary: '#FFFFFF',
  backgroundSecundary: '#EDF7FA',
  colorPrimary: '#21243D',
  primaryHover:'#FF6464',
  colorSecundary: '#000000',
  avatar: 'JPA.png',
  borderBottomHeader: '#E0E0E0',
  shadow: '#000000',
  logo:'jpbaFundoClaro.png',
  buttons: {
    primaryColor: '#FFFFFF',
    primaryBackground: '#FF6464',
    primaryColorHover: '#FFFFFF',
    primaryBackgroundHover: '#E05A5A',
    themeColor: '#FFFFFF',
    themeBackground: '#000000',
    themeColorHover: '#000000',
    themeBackgroundHover: '#FFFFFF',
  },
  card: {
    background: '#FFFFFF',
    color:'#000000',
    span: '#000000',
  }
}

export const darkTheme: Theme = {
  backgroundPrimary: '#121212', 
  backgroundSecundary: '#1A1A1A',
  colorPrimary: '#FFFFFF',
  primaryHover:'#2196F3',
  colorSecundary: '#B0B0B0', 
  avatar: 'JPA.png',
  borderBottomHeader: '#2C2C2C',
  shadow: '#FFFFFF',
  logo:'jpbaFundoEscuro.png',
  buttons: {
    primaryColor: '#FFFFFF',
    primaryBackground: '#2196F3', 
    primaryColorHover: '#FFFFFF',
    primaryBackgroundHover: '#1976D2',
    themeColor: '#000000',
    themeBackground: '#FFFFFF',
    themeColorHover: '#FFFFFF',
    themeBackgroundHover: '#000000',
  },
  card: {
    background: '#FFFFFF',
    color:'#000000',
    span: '#000000',
  }
}