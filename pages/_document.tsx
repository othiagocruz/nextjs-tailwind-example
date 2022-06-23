import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Language" content="en" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;900&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-grid-lines bg-dark-gray bg-no-repeat bg-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument