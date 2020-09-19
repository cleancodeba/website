import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import NavigationBar from "../components/navbar/NavigationBar";
import Footer from "../components/footer/Footer";

class CleanCodeDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="has-navbar-fixed-top">
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default CleanCodeDocument;
