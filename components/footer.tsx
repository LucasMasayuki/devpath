import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

const Footer = () => (
  <footer>
    <Box 
      bgGradient="linear(to-r, #EB3349, #F45C43)"
      h={50} 
      color="white"
      p={4}
    >
      <Flex direction="row">
        <Text>DevPath</Text>
        <Spacer />
        <Text>Created by Lucas Masayuki</Text>
      </Flex>
    </Box>
  </footer>
)

export default Footer
