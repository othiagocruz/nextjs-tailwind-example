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
      <article className="max-w-[1397px] h-[500px] m-auto bg-pattern rounded-[4.2rem] pt-10 sm:pt-12 lg:pt-28 relative perspective flex bg-[position:-1567px_-579px] sm:bg-[position:-567px_-579px] sm:h-[893px] items-center flex-col mt-[-20rem] sm:mt-[-40rem]">
        <h2 className="font-black text-5xl mb-12 sm:text-ultra text-white">javascript</h2>
        <p className="text-white font-light sm:text-lg max-w-xs sm:max-w-xl text-center">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <span className="top-[15rem] sm:top-[28rem] absolute mx-3 animate-wiggle"><Image src={RetroComputer} width={810} height={808} alt="blip bop" /></span>
        <span className="invisible sm:visible absolute right-3 sm:right-24 bottom-16 sm:bottom-36 animate-float"><Image src={SquigglyArrow} alt="squiggly arrow" /></span>
      </article>
      <span className="block text-center -mt-3 xl:-mt-48 animate-floater"><Image src={logos} alt="posting" /></span>
    </>
  )
}