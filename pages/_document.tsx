import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          {/* <link rel="preload" href="/fonts/SourceSansPro-Regular-latin.woff2" as="font" type="font/woff2" /> */}
          {/* <link rel="preload" href="/fonts/SourceSansPro-Bold-latin.woff2" as="font" type="font/woff2" /> */}
          <link rel="preload" href="/img/background.png" as="image" />
          <script src="https://haddock.pablo.dev/script.js" included-domains="pablo.dev" site="XMVFXWIR" defer />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
