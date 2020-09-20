import '../styles/global.scss'
import { AppProps } from 'next/app'
import NavigationBar from "../components/navbar/NavigationBar";
import Footer from "../components/footer/Footer";
import PageContainer from "../components/pageContainer/PageContainer";

export function CleanCodeApp({ Component, pageProps }: AppProps) {
  return (<>
    <NavigationBar />
    <PageContainer>
      <Component {...pageProps} />
    </PageContainer>
    <Footer />
  </>
  )
}

export default CleanCodeApp
