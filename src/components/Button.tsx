import { Button, ButtonProps, Container, Flex } from '@chakra-ui/react'

export function Btn(props: ButtonProps) {
  return (
    <Container
      maxW="container.lg"
      padding="10px"
      height="100%"
      flexWrap="wrap"
      
    >
      <Flex
        justifyContent="center"
      >
        <Button
          textDecor="none"
          letterSpacing="4px"
          justifyContent="center"
          display="inline-flex"
          padding="15px 20px"
          position="relative"
          variant='ghost'
          {...props} />
        </Flex>
    </Container>
  )
}