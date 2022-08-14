import { extendTheme } from '@chakra-ui/react'
import "@fontsource/karla"
import "@fontsource/roboto"

const fonts = { primary: 'karla', 
                secondary: 'roboto bold' }


const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#D941B6',
      },
      heroGradientEnd: {
        default: '#03e9f4',
        _dark: '#fbec8f',
      },
      bgCardColor1: {
        default: 'gray.100',
        _dark: '#292929',
      },
      bgCardColor2: {
        default: 'gray.200',
        _dark: '#292929',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
})

export default theme
