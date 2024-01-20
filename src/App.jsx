import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { memo } from "react"
import RecycleBin from './RecycleBin'

const App = (props) =>{
  return <>
    <Suspense fallback="hello world">
      <Canvas shadows>
		<RecycleBin />
      </Canvas>
    </Suspense>
  </>
}

export default memo(App);