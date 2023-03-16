import { extendTheme } from '@chakra-ui/react'
import "@fontsource/karla"
import "@fontsource/roboto"
import "@fontsource/jetbrains-mono"

const fonts = { primary: 'Karla', 
                secondary: 'JetBrains Mono'
              }


const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#7928CA',
      },
      heroGradientEnd: {
        default: '#03e9f4',
        _dark: '#03e9f4',
      },
      bgCardColor1: {
        default: 'gray.100',
        _dark: '#292929',
      },
      bgCardColor2: {
        default: 'gray.200',
        _dark: '#292929',
      },
      hoverColor: {
        default: '#0F5',
          _dark: '#04E0D9',
      },
    },
    // boxShadow: {
    //   shBox: {
    //     default: '0 0 5px #D941B6, 0 0 25px #D941B6, 0 0 50px #D941B6, 0 0 200px #D941B6',
    //     _dark: '0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4',
    //   },
    // },
    radii: {
      button: '12px',
    },
  },
  fonts,
})

export default theme
