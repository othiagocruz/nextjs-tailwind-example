
import BlockGraphic from '../public/block-graphic.jpg'
import Image from 'next/image'


/**
 * didnt know if the grid lines were supposed to be displayed
 * or if the designer forgot it on but implemented anyway
 * in here with some multiple background trickery
 */



export default function Markup() {
  return (
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
  )
}