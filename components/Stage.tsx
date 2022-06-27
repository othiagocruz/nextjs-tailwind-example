import { Canvas, useThree } from '@react-three/fiber'
import { Float, Html, OrbitControls } from '@react-three/drei'
import Sphere from '../components/Sphere'
import Supabase from "../public/supabase.png"
import Prismic from '../public/prismic.svg'
import Image from 'next/image'

/**
 * simple stage component for housing the canvas for the webgl marble, 
 * can also load it with ssr: false for better performance. [edit]: switched to 
 * react suspense.
 * 
 * logos positioning was adapted from original idea, tried to make the html elements
 * follow the sphere geometry like in figma but i need some more time to do this. sSettled to
 * a marble like appearance.
 */

export default function Stage() {
  return (
    <section id="stage">
      <Canvas camera={{ position: [0, 0, 49] }} style={{ margin: "0 auto", height: "100%" }}>
        <Float
          position={[0, 1.1, 0]}
          floatingRange={[0, 2.5]}
          speed={5}
        >
          <Sphere />
          <Html
            transform
            distanceFactor={10}
            rotation={[0, 0.1, 0.25]}
            position={[-2, 11, 10]}>
            <Image src={Prismic} layout="fixed" width={800} height={300} alt="Prismic" />
          </Html>
          <Html
            transform
            distanceFactor={10}
            rotation={[-0.2, 0, -0.25]}
            position={[3, -8, 10]}>
            <Image
              src={Supabase} layout="fixed" width={800} height={200} alt="Supabase" />
          </Html>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </section>
  )
}