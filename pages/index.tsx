import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Tailwind is awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-black text-9xl">
          jamstack <span>101</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
      </main>

      <footer>
        This is a design test by Thiago Cruz Santos for Monogram.
        <span>❤️</span>
      </footer>
    </>
  )
}

export default Home
