import HeroGraphic from '../public/hero-graphic.png'
import mouse from '../public/mouse-line.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <span id="mouse-arrow">
        <Image src={mouse} layout="responsive" alt="mouse arrow" />
      </span>
      <div>
        <h1>
          jamstack <span>101</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa,
          tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel
          pretium tempor ut dui vivamus sit.</p>
        <span id="sliding-cards">
          <Image layout="responsive" src={HeroGraphic} alt="sliding cards" />
        </span>
      </div>

    </section>
  )
}