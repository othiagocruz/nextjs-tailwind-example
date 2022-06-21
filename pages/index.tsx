import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Tailwind is awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white pb-[40rem]">
        <h1 className="font-black text-3xl sm:text-ultra text-dark-gray">
          jamstack <span className="text-transparent bg-cover bg-no-repeat bg-clip-text bg-pattern">101</span>
        </h1>
        <p className="font-light text-lg text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
        <img src="mouse-line.png" title="mouse line" />
      </section>
      <article className="max-w-[1397px] m-auto bg-pattern bg-fixed rounded-[3rem] pt-28 relative perspective flex h-[893px] bg-[position:-567px_-579px] items-center flex-col mt-[-40rem]">
        <h2 className="font-black text-3xl sm:text-ultra text-white">javascript</h2>
        <p className="text-white font-light text-lg max-w-xl mt-12 text-center">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <img src="retro-computer.png" className="absolute top-[28rem]" title="blip bop" />
        <img src="squiggly-arrow.png" className="absolute right-24 bottom-36" title="squiggly arrow" />
      </article>
      <img src="falling-logos.svg" className="m-auto -mt-48" />
      <article>
        <h2 className="font-black text-3xl sm:text-ultra text-white text-center">api</h2>
        <p className="text-2xl text-white">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
      </article>
      <footer className="flex flex-col items-center text-white">
        This is a design test by Thiago Cruz Santos for Monogram.
        <span>❤️</span>
      </footer>
    </main>
  )
}

export default Home
