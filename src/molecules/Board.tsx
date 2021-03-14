import React from 'react';
import { TextureLoader } from 'three';
import { useLoader, Vector3 } from 'react-three-fiber';
import PlayingPiece from '../atoms/PlayingPiece';

const Board = () => {

    const url = '/gameboard.svg';
    const texture = useLoader(TextureLoader, url);

    let theta = Math.PI / 16.0;
    let wheel_radius3 = 5.15;
    let wheel_radius2 = 3.69;
    let wheel_radius1 = 2;

    const playingPieces3: number[] = [];
    const playingPieces2: number[] = [];
    const playingPieces1: number[] = [];

    for (let i = 0; i <= 32; i++) {
        playingPieces3[i] = i;
    }
    for (let i = 0; i <= 16; i++) {
        playingPieces2[i] = i;
    }
    for (let i = 0; i <= 8; i++) {
        playingPieces1[i] = i;
    }
    return (
        <>
            <mesh position={[0, 0, -10]} scale={[1.5, 1.5, 1.5]}>
                <circleGeometry args={[4, 32]} />
                <meshBasicMaterial color="lightpink" map={texture} />
            </mesh>
            {playingPieces3.map((index) => <PlayingPiece position={[
                (Math.cos(index * theta) * wheel_radius3),
                (-1.0 * Math.sin(index * theta) * wheel_radius3),
                -9
            ]} />)}
            {playingPieces2.map((index) => <PlayingPiece position={[
                (Math.cos(index * theta * 2) * wheel_radius2),
                (-1.0 * Math.sin(index * theta * 2) * wheel_radius2),
                -9
            ]} />)}
            {playingPieces1.map((index) => <PlayingPiece position={[
                (Math.cos(index * theta * 4) * wheel_radius1),
                (-1.0 * Math.sin(index * theta * 4) * wheel_radius1),
                -9
            ]} />)}
        </>
    )
}

export default Board
