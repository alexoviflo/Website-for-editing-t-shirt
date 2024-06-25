import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const BackDrop = () => {
  const shadows = useRef();

  return (
  <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10} // Corrected typo from 'scae' to 'scale'
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      
      <RandomizedLight 
        amount={4}
        radius={9} // Increase the radius for softer shadows
        intensity={2} // Adjust intensity to make it lighter
        ambient={0.2} // Adjust ambient to balance the scene
        position={[5, 5, -6]}
      />
      <RandomizedLight 
        amount={4}
        radius={5} // Increase the radius for softer shadows
        intensity={1} // Adjust intensity to make it lighter
        ambient={0.6} // Adjust ambient to balance the scene
        position={[-5, 5, -5]}
      />
    </AccumulativeShadows>
  )
}

export default BackDrop