import HeroGraphic from '../public/hero-graphic.png'
import mouse from '../public/mouse-line.png'
import Image from 'next/image'

/**
 * hero graphic wont show bellow md breakpoint, didnt found
 * any pleasant combination for mobile display.
 */

export default function Hero() {
  return (
    <section className="pb-[20rem] sm:pb-[40rem] pt-6 pl-4 sm:pl-28 sm:pt-32 bg-grid-lines bg-no-repeat bg-center bg-white ">
      <div className="flex relative m-auto max-w-[1397px] overflow-hidden">
        <div className='flex-grow'>
          <h1 className="font-black mb-4 text-5xl md:text-8xl lg:text-ultra">
            jamstack <span className="text-transparent bg-cover bg-no-repeat bg-clip-text bg-gradient-to-r from-[#ffbe86] to-[#cb799f]">101</span>
          </h1>
          <p className="font-light mb-6 ml-4 mr-4 sm:mb-16 sm:ml-14 sm:text-lg text-stone-500 max-w-[549px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
          <span className="block ml-32 sm:ml-60 animate-floater"><Image src={mouse} priority alt="mouse arrow" /></span>
        </div>
        <span className="w-[666px] absolute left-[45rem]"><Image src={HeroGraphic} alt="sliding cards" /></span>
      </div>
    </section>
  )
}