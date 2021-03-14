import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from '../../atoms/Box';
import BalanceBar from '../../molecules/BalanceBar';
import Board from '../../molecules/Board';
// import Plane from '../../atoms/Plane';

const GameBoard = (): JSX.Element => {
    return (
        <>
            <Suspense fallback={<>Loading</>}>
                <BalanceBar position={[0, -8, -10]} />
                <Board />
                <BalanceBar />
            </Suspense>
        </>
    )
}


const GameBoardWrapper = () => {
    const d = 8.25;
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            {/* 
                //@ts-ignore */}
            <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.5} position={[0, 50, 0]} />
            <directionalLight
                position={[-8, 20, 8]}
                shadow-camera-left={d * -1}
                shadow-camera-bottom={d * -1}
                shadow-camera-right={d}
                shadow-camera-top={d}
                shadow-camera-near={0.1}
                shadow-camera-far={1500}
                castShadow
            />
            <GameBoard />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Box position={[-1.2, 0, 0]} /> */}
            {/* <Box position={[1.2, 0, 0]} /> */}
        </Canvas>
    )
}

export default GameBoardWrapper;
