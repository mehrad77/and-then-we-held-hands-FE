import React from 'react'
import { TextureLoader } from 'three';
import { useLoader, useThree } from 'react-three-fiber'

const Board = () => {


    const url = '/gameboard.svg';
    const texture = useLoader(TextureLoader, url);

    return (
        <mesh position={[0, 0, -10]}>
            <circleGeometry args={[6, 42]} />
            <meshBasicMaterial color="lightpink" map={texture} />
        </mesh>
    )
}

export default Board
