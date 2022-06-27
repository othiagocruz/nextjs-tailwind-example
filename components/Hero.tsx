import HeroGraphic from '../public/hero-graphic.png'
import mouse from '../public/mouse-line.png'
import Image from 'next/image'

/**
 * hero graphic wont show bellow md breakpoint, didnt found
 * any pleasant combination for mobile display.
 */

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex">
        <div className="flex-grow">
          <h1>
            jamstack <span>101</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa,
            tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel
            pretium tempor ut dui vivamus sit.</p>
          <span id="mouse-arrow"><Image src={mouse} priority alt="mouse arrow" /></span>
        </div>
        <span id="sliding-cards"><Image src={HeroGraphic} alt="sliding cards" /></span>
      </div>
    </section>
  )
}