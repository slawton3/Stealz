import { ChakraProvider } from "@chakra-ui/react"
import Script from 'next/script'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Stealz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Script
        id="gAnalyticsScriptTag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id='gAnalyticsConfig' strategy="lazyOnload">
        i
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
export default MyApp