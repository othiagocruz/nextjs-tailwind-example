import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import logos from '../public/falling-logos.svg'
import mouse from '../public/mouse-line.png'
import metrics from '../public/metrics.svg'
import RetroComputer from "../public/retro-computer.png"
import SquigglyArrow from "../public/squiggly-arrow.png"
import HeroGraphic from '../public/hero-graphic.png'
import BlockGraphic from '../public/block-graphic.jpg'

const Stage = dynamic(() => import('../components/Stage'), {
  loading: () => <span>Loading...</span>,
  ssr: false
})

const Home: NextPage = () => {
  return (
    <main className="relative">
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Tailwind is awesome!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="pb-[20rem] sm:pb-[40rem] pt-6 pl-4 sm:pl-28 sm:pt-32 bg-grid-lines bg-no-repeat bg-center bg-white ">
        <div className="flex relative m-auto max-w-[1397px] overflow-hidden">
          <div className='flex-grow'>
            <h1 className="font-black mb-4 text-5xl md:text-8xl lg:text-ultra">
              jamstack <span className="text-transparent bg-cover bg-no-repeat bg-clip-text bg-gradient-to-r from-[#ffbe86] to-[#cb799f]">101</span>
            </h1>
            <p className="font-light mb-6 ml-4 mr-4 sm:mb-16 sm:ml-14 sm:text-lg text-stone-500 max-w-[549px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
            <span className="block ml-32 sm:ml-60 animate-floater"><Image src={mouse} priority alt="mouse arrow" /></span>
          </div>
          <span className="w-[666px] absolute left-[45rem]"><Image src={HeroGraphic} priority alt="sliding cards" /></span>
        </div>
      </section>
      <article className="max-w-[1397px] h-[500px] m-auto bg-pattern bg-fixed rounded-[4.2rem] pt-10 sm:pt-12 lg:pt-28 relative perspective flex bg-[position:-1567px_-579px] sm:bg-[position:-567px_-579px] sm:h-[893px] items-center flex-col mt-[-20rem] sm:mt-[-40rem]">
        <h2 className="font-black text-5xl mb-12 sm:text-ultra text-white">javascript</h2>
        <p className="text-white font-light sm:text-lg max-w-xs sm:max-w-xl text-center">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <span className="top-[15rem] sm:top-[28rem] absolute mx-3 animate-wiggle"><Image src={RetroComputer} width={810} height={808} alt="blip bop" /></span>
        <span className="invisible sm:visible absolute right-3 sm:right-24 bottom-16 sm:bottom-36 animate-float"><Image src={SquigglyArrow} alt="squiggly arrow" /></span>
      </article>

      <span className="block text-center -mt-3 xl:-mt-48 animate-floater"><Image src={logos} priority alt="bunch of logos" /></span>

      <article className="text-center m-auto mb-32 md:mb-96 relative">
        <h2 className="font-black mb-12 text-5xl sm:text-ultra text-white text-center">api</h2>
        <p className="mb-5 sm:text-2xl max-w-[730px] m-auto text-white">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
        <Stage />
      </article>
      <article className="pt-56 sm:pt-[25rem] xl:pt-[55rem] sm:pb-[22rem] pl-4 sm:pl-28 bg-[length:29%,_contain,_auto,_101%] sm:bg-[length:auto,_contain,_auto,_101%] bg-[url('../public/toppled-blocks.svg'),_url('../public/wall-of-blocks.svg'),_url('../public/grid-lines.svg'),_url('../public/squiggly-dark.svg')] bg-[position:8%_85%,_bottom_center,_bottom_center,_-2px_-2px] bg-no-repeat bg-white">
        <div className="flex relative m-auto max-w-[1397px] h-[450px] sm:h-[873px] overflow-hidden">
          <div className="flew-grow">
            <h2 className="font-black text-5xl sm:text-ultra mb-6 sm:mb-16">
              markup
            </h2>
            <p className="sm:text-2xl text-neutral-700 max-w-[480px]">When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.</p>
          </div>
          <span className="w-[666px] absolute left-[45rem]"><Image src={BlockGraphic} priority alt="sliding cards" /></span>
        </div>

      </article>

      <article className="flex relative flex-col pb-24 sm:pb-56 sm:mx-9 xl:m-auto xl:-mt-[4rem] -mt-4 sm:-mt-[4rem] items-center rounded-[3rem] max-w-[1204px] bg-scores-gradient-2">
        <h2 className="mx-5 text-5xl sm:text-semi-ultra mt-8 sm:mt-32 font-black text-light-green text-center">top audit scores</h2>
        <Image src={metrics} priority className='animate-pulse' style={{ zIndex: '10' }} alt="metrics" />

        <p className="mx-5 mt-6 sm:m-x-0 sm:mt-0 sm:text-2xl z-10 max-w-[700px] text-mid-gray mb-9">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>
        <p className="mx-5 sm:m-x-0 sm:mt-0 sm:text-2xl z-10 max-w-[700px] text-mid-gray mb-9">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>
        <p className="mx-5 sm:m-x-0 sm:mt-0 sm:text-2xl z-10 max-w-[700px] text-mid-gray mb-9">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
        <span className="absolute z-0 rounded-[3rem] w-full h-full block bg-scores-gradient" />
      </article>
      <footer className="flex flex-col mt-40 mx-5 mb-20 items-center text-center text-white">
        <p>This is a design test by Thiago Cruz Santos for Monogram.</p>
        <p>Jam favicon created by <a className="underline" href="https://www.flaticon.com/free-icons/jam" rel="noreferrer" title="jam icons" target="_blank">Smashicons</a></p>
        <span className="text-[#FF069C] mt-4 text-4xl">❤</span>
      </footer>
    </main>
  )
}

export default Home
