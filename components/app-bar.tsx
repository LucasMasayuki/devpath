import React from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import DrawerButton from '@/components/drawer-button'

const AppBar = (): JSX.Element => (
  <Box bgColor="primaryColor" w="100%" color="white" p={4} boxShadow="0px 0px 8px 2px #000000">
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
