import { QuouteFormDataProvider } from '@/contexts/quoute-form-data.context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <QuouteFormDataProvider>
    <Component {...pageProps} />
  </QuouteFormDataProvider>
}
