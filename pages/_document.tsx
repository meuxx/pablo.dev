import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <script
            key="gatsby-plugin-fathom"
            src="https://haddock.pablo.dev/script.js"
            included-domains="pablo.dev"
            site="XMVFXWIR"
            defer
          />
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
