import { AppProps } from 'next/app'
import React from 'react'
import ThemeContainer from '@/theme/theme-container'
import '@/styles/css/markdown-styles.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}
