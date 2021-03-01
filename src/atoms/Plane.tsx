import React, { FC } from 'react'
import { MeshProps } from 'react-three-fiber'

const Plane:FC<MeshProps> = (props) => {
    return (
        <mesh {...props} receiveShadow>
          <planeBufferGeometry args={[500, 500, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      )
}

export default Plane
