import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logos from '../public/falling-logos.svg'
import mouse from '../public/mouse-line.png'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Tailwind is awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="pb-[40rem] bg-grid-lines bg-no-repeat bg-center bg-white ">
        <h1 className="font-black text-3xl sm:text-ultra">
          jamstack <span className="text-transparent bg-cover bg-no-repeat bg-clip-text bg-pattern">101</span>
        </h1>
        <p className="font-light text-lg text-stone-500 max-w-[549px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
        <Image src={mouse} priority />
      </section>
      <article className="max-w-[1397px] m-auto bg-pattern bg-fixed rounded-[3rem] pt-28 relative perspective flex h-[893px] bg-[position:-567px_-579px] items-center flex-col mt-[-40rem]">
        <h2 className="font-black text-3xl sm:text-ultra text-white">javascript</h2>
        <p className="text-white font-light text-lg max-w-xl mt-12 text-center">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <img src="retro-computer.png" className="absolute top-[28rem]" title="blip bop" />
        <img src="squiggly-arrow.png" className="absolute right-24 bottom-36" title="squiggly arrow" />
      </article>
      <span className="block text-center -mt-48"><Image src={logos} priority /></span>

      <article className="max-w-[730px] text-center m-auto">
        <h2 className="font-black mb-12 text-3xl sm:text-ultra text-white text-center">api</h2>
        <p className="text-2xl text-white">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
      </article>

      <article className="pb-[40rem] bg-[length:auto,_contain,_auto] bg-[url('../public/toppled-blocks.svg'),_url('../public/wall-of-blocks.svg'),_url('../public/grid-lines.svg')] bg-[position:100px_55%,_bottom_center,_bottom_center] bg-no-repeat bg-white ">
        <h2 className="font-black text-3xl sm:text-ultra">
          markup
        </h2>
        <p className="text-2xl text-neutral-700 max-w-[480px]">When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.</p>
      </article>
      <footer className="flex flex-col items-center text-white">
        This is a design test by Thiago Cruz Santos for Monogram.
        <span className="text-[#FF069C] text-4xl">❤</span>
      </footer>
    </main>
  )
}

export default Home
