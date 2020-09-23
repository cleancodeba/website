import '../styles/global.scss'
import { AppProps } from 'next/app'
import NavigationBar from "../components/navbar/NavigationBar";
import Footer from "../components/footer/Footer";
import PageContainer from "../components/pageContainer/PageContainer";
import {Router} from "next/router";
import {GTMPageView} from "../components/utils/gtm";
import {useEffect} from "react";

export function CleanCodeApp({ Component, pageProps }: AppProps) {

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
