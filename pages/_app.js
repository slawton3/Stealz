import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Script from 'next/script'
import Head from 'next/head'

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark"
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Stealz: Best Live Steam and Other Game Deals</title>
        <meta name="description" content="Stealz: The Best Live, New Steam and Other Platform Game Deals on the Internet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Script
        id="gAnalyticsScriptTag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id='gAnalyticsConfig' strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
export default MyApp