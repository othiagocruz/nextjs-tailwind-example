
import BlockGraphic from '../public/block-graphic.jpg'
import Image from 'next/image'


/**
 * didnt know if the grid lines were supposed to be displayed
 * or if the designer forgot it on but implemented anyway
 * in here with some multiple background trickery
 */

export default function Markup() {
  return (
    <article id="markup">
      <div className="flex">
        <div className="flew-grow">
          <h2>
            markup
          </h2>
          <p>When ready for deployment, a static-site generator such as Astro or Next.js
            is used to compile the website. The end result is a collection of pre-rendered
            HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge
            Network.</p>
        </div>
        <span id="markup-cards"><Image src={BlockGraphic} alt="sliding cards" /></span>
      </div>
    </article>
  )
}