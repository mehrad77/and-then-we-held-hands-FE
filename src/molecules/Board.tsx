import React from 'react'
import { TextureLoader } from 'three';
import { useLoader, useThree } from 'react-three-fiber'

const Board = () => {
    const {
        gl,              
      } = useThree();

    //   console.log({camera});

    const url = '/gameboard.svg';
    const texture = useLoader(TextureLoader, url)
    return (
        <mesh position={[0, 0, -10]} scale={[0.5,0.5,0.5]}>
            <circleGeometry args={[16,128]} />
            <meshBasicMaterial color="lightpink" map={texture} />
        </mesh>
    )
}

export default Board
