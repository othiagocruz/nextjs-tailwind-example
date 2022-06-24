import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="light">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Language" content="en" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;900&display=swap" rel="stylesheet" />
        </Head>
        <body className="sm:bg-grid-lines bg-dark-gray bg-no-repeat bg-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument