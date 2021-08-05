/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Box, Code, Heading } from '@chakra-ui/react'
import { APP_NAME } from '@/lib/constants'

const IndexHeader = (): JSX.Element => (
  <Box
    d="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    h="md"
    backgroundColor="primaryColor"
  >
    <Heading as="h1" fontFamily="monospace">
      {APP_NAME}
    </Heading>
    <Code fontSize="md" mt="8" fontFamily="monospace">
      // Developer in eternal evolution
    </Code>
  </Box>
)

export default IndexHeader
