import { Canvas } from '@react-three/fiber'
import { Float, Html, OrbitControls, Sparkles } from '@react-three/drei'
import Sphere from '../components/Sphere'
import Supabase from "../public/supabase.png"
import Prismic from '../public/prismic.svg'
import Image from 'next/image'

export default function Stage() {
  return (
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
  )
}