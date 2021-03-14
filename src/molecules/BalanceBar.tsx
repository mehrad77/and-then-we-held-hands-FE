import React, { FC, } from 'react'
import { TextureLoader } from 'three';
import { useLoader, } from 'react-three-fiber';

interface BalanceBarProps {
    position?: [number, number, number]
}

const BalanceBar: FC<BalanceBarProps> = ({ position = [0, -8, -10] }) => {

    const url = '/balance.svg';
    const texture = useLoader(TextureLoader, url);

    return (
        <>
            <mesh position={position}>
                <planeGeometry args={[6, 2]} />
                <meshBasicMaterial color="lightpink" map={texture} />
            </mesh>
        </>
    )
}

export default BalanceBar
