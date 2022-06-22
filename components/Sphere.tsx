import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere as NativeSphere } from '@react-three/drei'
import { Mesh } from 'three'


export default function Box(props: typeof NativeSphere.arguments) {
  const mesh = useRef<Mesh>(null!)

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <NativeSphere
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={active ? [3, 3, 3] : [2, 2, 2]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#2b6c76' : '#720b23'}
      />
    </NativeSphere>
  )
}