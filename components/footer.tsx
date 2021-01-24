import React from 'react'
import { Box, Flex, Grid, GridItem, Icon, IconButton, Link, Spacer, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = (): JSX.Element => (
  <footer>
    <Box bgGradient="linear(to-r, #EB3349, #F45C43)" color="white" p={4}>
      <Flex direction="row">
        <Text>DEVPATH</Text>
        <Spacer />
        <Text>Created by Lucas Masayuki</Text>
      </Flex>

      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colStart={6} colEnd={6}>
          <Link href="https://github.com/LucasMasayuki" isExternal>
            <IconButton variant="none" aria-label="My personal github" icon={<Icon as={FaGithub} />} size="lg" />
          </Link>
          <Link href="https://br.linkedin.com/in/lucas-tamaribuchi" isExternal>
            <IconButton variant="none" aria-label="My Linkedin" icon={<Icon as={FaLinkedin} />} size="lg" />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  </footer>
)

export default Footer
