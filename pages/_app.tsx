import '../styles/globals.scss'
import { AppProps } from 'next/app'

export function CleanCodeApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CleanCodeApp
