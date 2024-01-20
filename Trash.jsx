import { memo } from "react"

const Trash = (props) =>{
    const {
        mashPosition,
        mashRotation,
        boxArgs,
        color
    } = props;

    return <>
        <mesh position={mashPosition} rotation={mashRotation}>
          <boxGeometry args={boxArgs} />
          <meshBasicMaterial color={color} />
        </mesh>
    </>
}
export default memo(Trash);