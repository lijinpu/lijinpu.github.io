import 'styles/globals.css'
import 'styles/highlighting.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Layout from 'components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default App
