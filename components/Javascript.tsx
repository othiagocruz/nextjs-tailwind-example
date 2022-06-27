import RetroComputer from "../public/retro-computer.png"
import SquigglyArrow from "../public/squiggly-arrow.png"
import Image from 'next/image'

export default function Javascript() {
  return (
    <div id="wrapper">
      <article id="javascript">
        <h2>javascript</h2>
        <p>Statically generated pages are brought to life with client-side JavaScript
          libraries and frameworks, such as Algolia and Next.js.</p>
        <span id="retro-computer">
          <Image src={RetroComputer} layout="responsive" width={810} height={808} alt="blip bop" />
        </span>
        <span id="squiggly-arrow">
          <Image src={SquigglyArrow} layout="responsive" alt="squiggly arrow" />
        </span>
      </article>
    </div>
  )
}