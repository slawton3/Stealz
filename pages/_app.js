import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react"
import Script from 'next/script'
import Head from 'next/head'

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Stealz: Best Live Steam and Other Game Deals</title>
        <meta name="description" content="Stealz: The Best Live, New Steam and Other Platform Game Deals on the Internet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script defer data-domain="stealz.pro" src="https://plausible.io/js/plausible.js"></script>
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
export default MyApp