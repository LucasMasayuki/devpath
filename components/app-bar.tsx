import React from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import DrawerButton from '@/components/drawer-button'

const AppBar = (): JSX.Element => (
  <Box bgGradient="linear(to-r, #EB3349, #F45C43)" w="100%" color="white" p={4}>
    <Flex>
      <Box p="2">
        <Link as="/" href="/">
          <Heading size="md" fontWeight="bold">
            DEVPATH
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <DrawerButton />
      </Box>
    </Flex>
  </Box>
)

export default AppBar
