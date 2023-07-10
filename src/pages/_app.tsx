import { Header } from '@/components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider, cacheExchange, createClient, fetchExchange } from 'urql'

const client = createClient({
  url: 'http://localhost:8080/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider value={client}>
          <Header />
          <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}