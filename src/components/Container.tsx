import { Box, Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Box
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    // old bg variation
    // bgGradient="linear(to-t, gray.70, gray.50)"
    // color="black"
    // _dark={{
    // bgGradient:"linear(to-t, gray.800, gray.900)",
    //   color: 'text',
    // }}
    transition="all 0.15s ease-out"
    {...props}
  />
)
