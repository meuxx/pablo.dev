import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          {process.env.NODE_ENV === 'production' && (
            <script src="https://haddock.pablo.dev/script.js" included-domains="pablo.dev" site="XMVFXWIR" defer />
          )}
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
