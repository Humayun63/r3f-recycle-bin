import React from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { memo } from 'react';
import Trash from '../Trash';

const RecycleBin = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach={'background'}/>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <group>
        {/* Top part of the recycle bin */}
        <mesh position={[0, 0.95, 0]}>
          <cylinderGeometry args={[1, 1, 2.03, 64, 1]} />
          <meshBasicMaterial color="silver" opacity={0.3} transparent />
        </mesh>

        {/* Middle part of the recycle bin */}
        <mesh position={[0, 0.956, 0]}>
          <cylinderGeometry args={[1, 1, 2, 64, 15]} />
          <meshBasicMaterial color="#000" opacity={0.7} transparent wireframe={true} />
        </mesh>
        {/* Bottom of the recylcel bin */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.1, 64, 1]} />
          <meshBasicMaterial color="silver" />
        </mesh>

        {/* Trash cubes */}
        <Trash 
          mashPosition={[0, 0.16, 0]}
          mashRotation={[0.78, 0.78, 0]}
          boxArgs={[0.1, 0.2, 0.2]}
          color="green"
        />

        <Trash 
          mashPosition={[-0.3, 0.16, 0]}
          mashRotation={[0.8, 0.8, 0]}
          boxArgs={[0.25, 0.25, 0.25]}
          color="orange"
        />

        <Trash 
          mashPosition={[0.3, 0.16, 0]}
          mashRotation={[0.89, 0.89, 0]}
          boxArgs={[0.2, 0.2, 0.2]}
          color="yellow"
        />

        <Trash 
          mashPosition={[0.2, 0.16, 0.2]}
          mashRotation={[1.05, 1.05, 0]}
          boxArgs={[0.15, 0.15, 0.15]}
          color="blue"
        />

        <Trash 
          mashPosition={[-0.2, 0.16, -0.2]}
          mashRotation={[0.5, 0.5, 0]}
          boxArgs={[0.18, 0.18, 0.18]}
          color="red"
        />
      </group>
    </>
  );
};

export default memo(RecycleBin);
