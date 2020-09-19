import '../styles/globals.scss'
import { AppProps } from 'next/app'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PageContainer from "../components/pageContainer/PageContainer";

export function CleanCodeApp({ Component, pageProps }: AppProps) {
  return (<>
    <Navbar />
    <PageContainer>
      <Component {...pageProps} />
    </PageContainer>
    <Footer />
  </>
  )
}

export default CleanCodeApp
