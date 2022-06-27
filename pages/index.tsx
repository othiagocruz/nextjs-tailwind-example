import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Javascript from '../components/Javascript'
import Api from '../components/Api'
import Markup from '../components/Markup'
import Scores from '../components/Scores'
import Image from 'next/image'
import logos from '../public/falling-logos.svg'


const Home: NextPage = () => {
  return (
    <main className="relative">
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Tailwind is awesome!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <Hero />
        <Javascript />
        <div id="logos"><Image layout="responsive" src={logos} alt="posting" /></div>
      </header>
      <Api />
      <Markup />
      <Scores />
      <footer className="flex flex-col mt-40 mx-5 mb-20 items-center text-center text-white">
        <p>This is a design test by Thiago Cruz Santos for Monogram.</p>
        <p>Jam favicon created by <a className="underline" href="https://www.flaticon.com/free-icons/jam" rel="noreferrer" title="jam icons" target="_blank">Smashicons</a></p>
        <span className="text-[#FF069C] mt-4 text-4xl">❤</span>
      </footer>
    </main>
  )
}

export default Home
