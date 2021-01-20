import React from 'react'

// 1. import `ChakraProvider` component and `extendTheme`
import { extendTheme, ChakraProvider, CSSReset, } from '@chakra-ui/react'

import theme from '../../styles/theme'

// 2. declare your configuration, these are the defaults
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

// 3. extend the theme
const customTheme = extendTheme({ theme, config })

// eslint-disable-next-line react/prop-types
const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    {children}
  </ChakraProvider>
)

export default ThemeContainer