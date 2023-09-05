import { extendTheme, ColorMode } from '@chakra-ui/react'
import "@fontsource/karla"
import "@fontsource/roboto"
import "@fontsource/teko"
import "@fontsource/orbitron"
import '@fontsource/kanit';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = { primary: 'Karla', 
                secondary: 'Orbitron',
                tertiary: 'Teko',
                quaternary: 'Monument Regular',
                quinary: 'Monument Bold',
                seninary: 'Kanit',
              }


const theme = extendTheme({
  
  styles: {
    global: (props: { colorMode: ColorMode } ) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'bgColor' : 'bgColor',
      },
      '.bg': {
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        right: '-50%',
        bottom: '-50%',
        width: '200%',
        height: '200vh',
        background: `transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0`,
        backgroundRepeat: 'repeat',
        animation: 'bg-animation .2s infinite',
        opacity: 0.7,
        visibility: 'visible',
      },
      '@keyframes bg-animation': {
        '0%': { transform: 'translate(0,0)' },
        '10%': { transform: 'translate(-5%,-5%)' },
        '20%': { transform: 'translate(-10%,5%)' },
        '30%': { transform: 'translate(5%,-10%)' },
        '40%': { transform: 'translate(-5%,15%)' },
        '50%': { transform: 'translate(-10%,5%)' },
        '60%': { transform: 'translate(15%,0)' },
        '70%': { transform: 'translate(0,10%)' },
        '80%': { transform: 'translate(-15%,0)' },
        '90%': { transform: 'translate(10%,5%)' },
        '100%': { transform: 'translate(5%,0)' },
      },
      '.bg-card': {
        backgroundImage: 'url(/images/sparkle.57c3794f.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: 'inherit',
        content: '""',
        height: '100%',
        left: '0',
        mixBlendMode: 'color-dodge',
        opacity: '0.7',
        PointerEvents: 'none',
        position: 'absolute',
        top: '0',
        width: '100%',
      },
      'h2, a': {
        color: props.colorMode === 'dark' ? '#d5ded7' : '#3a3a40',
      },
    }),
  },
  semanticTokens: {
    colors: {
      bgColor: {
        default: 'gray.100',
        _dark: 'gray.900',
      },
      textColor: {
        default: '#3a3a40',
        _dark: '#d5ded7'
      },
      heroGradientStart: {
        default: '#FEC763',
        _dark: '#7928CA',
      },
      heroGradientEnd: {
        default: '#FF61BE',
        _dark: '#03e9f4',
      },
      bgCardColor1: {
        default: 'gray.100',
        _dark: 'gray.900',
      },
      bgCardColor2: {
        default: 'gray.200',
        _dark: 'gray.800',
      },
      hoverColor: {
        default: '#FF61BE',
          _dark: '#04E0D9',
      },
    },
  },
  fonts,
  config,
})

export default theme
