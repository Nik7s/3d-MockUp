import React from 'react'
import {easing} from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame} from '@react-three/fiber';
import { Decal, useGLTF, useTexture} from '@react-three/drei';

const Model = () => {
  const snap = useSnapshot(state)
  return (
    <div>Model</div>
  )
}

export default Model