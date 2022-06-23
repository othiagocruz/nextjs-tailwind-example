import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logos from '../public/falling-logos.svg'
import mouse from '../public/mouse-line.png'
import metrics from '../public/metrics.svg'
import { Canvas } from '@react-three/fiber'
import { Float, Html, OrbitControls, Sparkles } from '@react-three/drei'
import Sphere from '../components/Sphere'
import RetroComputer from "../public/retro-computer.png"
import SquigglyArrow from "../public/squiggly-arrow.png"
import Supabase from "../public/supabase.png"
import Prismic from '../public/prismic.svg'

const Home: NextPage = () => {
  return (
    <main className="relative">
      <Head>
        <title>jamstack 101</title>
        <meta name="description" content="Tailwind is awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="pb-[40rem] bg-grid-lines bg-no-repeat bg-center bg-white ">
        <h1 className="font-black text-3xl sm:text-ultra">
          jamstack <span className="text-transparent bg-cover bg-no-repeat bg-clip-text bg-gradient-to-r from-[#ffbe86] to-[#cb799f]">101</span>
        </h1>
        <p className="font-light text-lg text-stone-500 max-w-[549px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
        <Image src={mouse} priority alt="mouse arrow" />
      </section>
      <article className="max-w-[1397px] m-auto bg-pattern bg-fixed rounded-[3rem] pt-28 relative perspective flex h-[893px] bg-[position:-567px_-579px] items-center flex-col mt-[-40rem]">
        <h2 className="font-black text-3xl sm:text-ultra text-white">javascript</h2>
        <p className="text-white font-light text-lg max-w-xl mt-12 text-center">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <span className="top-[28rem] absolute"><Image src={RetroComputer} width={810} height={808} alt="blip bop" /></span>
        <span className="absolute right-24 bottom-36"><Image src={SquigglyArrow} alt="squiggly arrow" /></span>
      </article>

      <span className="block text-center -mt-48"><Image src={logos} priority alt="bunch of logos" /></span>

      <article className="max-w-[914px] text-center m-auto mb-96">
        <h2 className="font-black mb-12 text-3xl sm:text-ultra text-white text-center">api</h2>
        <p className="text-2xl max-w-[730px] m-auto text-white">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
        <Canvas camera={{ position: [0, 0, 52] }} style={{ width: "1024px", height: "1280px", position: "absolute", margin: "0 auto" }}>
          <Float
            position={[0, 1.1, 0]}
            floatingRange={[0, 2.5]}
            speed={5}
          >
            <Sparkles color="white" size={3000} opacity={0.4} />
            <Sphere position={[0, 0, 0]} />
            <Html transform distanceFactor={10} rotation={[0, 0.1, 0.25]} position={[-2, 11, 10]}><Image src={Prismic} width={800} height={300} alt="Prismic" /></Html>
            <Html transform distanceFactor={10} rotation={[-0.2, 0, -0.25]} position={[3, -8, 10]}><Image src={Supabase} alt="Supabase" /></Html>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </article>

      <article className="pt-[50rem] pb-[40rem] bg-[length:auto,_contain,_auto,_101%] bg-[url('../public/toppled-blocks.svg'),_url('../public/wall-of-blocks.svg'),_url('../public/grid-lines.svg'),_url('../public/squiggly-dark.svg')] bg-[position:100px_55%,_bottom_center,_bottom_center,_-2px_-2px] bg-no-repeat bg-white">
        <h2 className="font-black text-3xl sm:text-ultra">
          markup
        </h2>
        <p className="text-2xl text-neutral-700 max-w-[480px]">When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.</p>
      </article>

      <article className="flex relative mix-blend-normal flex-col pb-56 m-auto -mt-[4rem] items-center rounded-[3rem] max-w-[1204px] bg-scores-gradient-2">
        <h2 className="text-semi-ultra mt-32 font-black text-light-green text-center">top audit scores</h2>
        <Image src={metrics} priority style={{ zIndex: '10' }} alt="metrics" />

        <p className="text-2xl z-10 max-w-[700px] text-mid-gray mb-9">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>
        <p className="text-2xl z-10 max-w-[700px] text-mid-gray mb-9">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>
        <p className="text-2xl z-10 max-w-[700px] text-mid-gray mb-9">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</p>
        <span className="absolute z-0 rounded-[3rem] w-full h-full block bg-scores-gradient" />
      </article>
      <footer className="flex flex-col mt-40 mb-20 items-center text-white">
        <p>This is a design test by Thiago Cruz Santos for Monogram.</p>
        <p>Jam favicon created by <a className="underline" href="https://www.flaticon.com/free-icons/jam" rel="noreferrer" title="jam icons" target="_blank">Smashicons</a></p>
        <span className="text-[#FF069C] mt-4 text-4xl">❤</span>
      </footer>
    </main>
  )
}

export default Home
