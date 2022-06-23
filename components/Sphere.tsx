import { useRef } from 'react'
import { GradientTexture, Sphere as NativeSphere } from '@react-three/drei'
import { Mesh } from 'three'

export default function Box(props: typeof NativeSphere.arguments) {
  const mesh = useRef<Mesh>(null!)
  return (
    <NativeSphere
      args={[1, 64, 64]}
      {...props}
      ref={props.mesh}
      scale={[25, 25, 25]}
      rotation={[0, 0, 2]}
    >
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 0.8, 1]}
          colors={['#01a6dc', '#8801e4', '#f5cbe1']}
        />
      </meshBasicMaterial>
    </NativeSphere>


  )
}