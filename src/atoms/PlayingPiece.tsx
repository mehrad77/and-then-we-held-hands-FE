import React, { FC, useRef, useState } from 'react';
import { MeshProps, useFrame, Vector3 } from 'react-three-fiber';
import type { Mesh } from 'three';

interface PlayingPieceProps extends MeshProps {
  position: Vector3;
}

const PlayingPiece: FC<PlayingPieceProps> = ({ position, ...props }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]} position={position} >
      <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default PlayingPiece;