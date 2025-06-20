// pages/_app.tsx
import { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { AnswersProvider } from '@/context/AnswersContext'

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-CVTNRH920P'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Load the gtag.js library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialize gtag */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}  
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Provide global Answers context and Layout */}
      <AnswersProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnswersProvider>
    </>
  )
}
