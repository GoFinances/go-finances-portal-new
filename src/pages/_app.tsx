import type { AppProps } from 'next/app'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { theme  } from '../theme'

const newDesign = extendTheme(theme)


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={newDesign}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
