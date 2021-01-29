import React from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import DrawerButton from '@/components/drawer-button'
import { BG_GRADIENT_COLOR } from '@/lib/constants'

const AppBar = (): JSX.Element => (
  <Box bgGradient={BG_GRADIENT_COLOR} w="100%" color="white" p={4}>
    <Flex>
      <Box p="2">
        <Heading size="md" fontWeight="bold">
          <Link as="/" href="/">
            DEVPATH
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <DrawerButton />
      </Box>
    </Flex>
  </Box>
)

export default AppBar
