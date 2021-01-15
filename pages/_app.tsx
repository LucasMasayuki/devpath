import { AppProps } from 'next/app'
import React from 'react'
import ThemeContainer from '@/contexts/theme/ThemeContainer'
import '@/styles/css/markdown-styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}
