import { extendTheme } from '@chakra-ui/react'
import "@fontsource/karla"
import "@fontsource/roboto"
import "@fontsource/jetbrains-mono"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = { primary: 'Karla', 
                secondary: 'JetBrains Mono'
              }


const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'bgColor' : 'bgColor',
      },
      'h2, a': {
        color: props.colorMode === 'dark' ? '#d5ded7' : '#242430',
      },
    }),
  },
  semanticTokens: {
    colors: {
      bgColor: {
        default: 'gray.50',
        _dark: 'gray.900',
      },
      textColor: {
        default: '#000',
        _dark: '#FFF'
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
        _dark: 'gray.800',
      },
      bgCardColor2: {
        default: 'gray.200',
        _dark: 'gray.900',
      },
      hoverColor: {
        default: '#0F5',
          _dark: '#04E0D9',
      },
    },
  },
  fonts,
})

export default theme
