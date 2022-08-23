import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import AppProvider from '../context'
import { theme  } from '../theme'
import dynamic from 'next/dynamic'

const newDesign = extendTheme(theme)
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={newDesign}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})
