import { GradientTexture, Sphere as NativeSphere, Sparkles } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

/**
 * Sphere with gradient using react fiber. it needs 
 * some better lightning and maybe some smoke particles 
 * but couldn't get to it :P
 * 
 * for now using sparkle for glow.
 */


export default function Box(props: typeof NativeSphere.arguments) {
  const { size } = useThree();
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
      {size.width > 600 && <Sparkles color="white" position={[0, 0, 0]} size={3000} count={2} opacity={1} />}
    </NativeSphere>


  )
}