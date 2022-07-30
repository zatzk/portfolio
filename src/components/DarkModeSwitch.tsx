import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

export const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block',
                 //height: '30px',
        }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          style={{ display: 'inline-flex',
                   //height: '30px',
                   //paddingTop: '10px'
          }}
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('white', 'black')}
          icon={useColorModeValue(<MoonIcon color="black" />, <SunIcon color="white"/>)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
