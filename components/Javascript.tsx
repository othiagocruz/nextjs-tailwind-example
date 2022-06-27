import RetroComputer from "../public/retro-computer.png"
import SquigglyArrow from "../public/squiggly-arrow.png"
import Image from 'next/image'
import logos from '../public/falling-logos.svg'

/**
 * did some customized CSS styling for this one since
 * tailwind doesn't have a perspective helper
 */

export default function Javascript() {
  return (
    <>
      <article id="javascript">
        <h2>javascript</h2>
        <p>Statically generated pages are brought to life with client-side JavaScript
          libraries and frameworks, such as Algolia and Next.js.</p>
        <span id="retro-computer">
          <Image src={RetroComputer} width={810} height={808} alt="blip bop" />
        </span>
        <span id="squiggly-arrow">
          <Image src={SquigglyArrow} alt="squiggly arrow" />
        </span>
      </article>
      <span id="logos"><Image src={logos} alt="posting" /></span>
    </>
  )
}