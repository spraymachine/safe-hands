import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

function PuppyModel(props) {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}assets/myModel.glb`)
  return <primitive object={scene} {...props} />
}

useGLTF.preload(`${import.meta.env.BASE_URL}assets/myModel.glb`)

export function ModelViewer() {
  return (
    <div className="hero-visual">
      <div className="model-viewer">
        <Canvas camera={{ position: [2, 1.4, 2.2], fov: 45 }} shadows>
          <color attach="background" args={[0xf5f7f6]} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 5]} intensity={1.1} castShadow />
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.4} contactShadow shadows adjustCamera>
              <PuppyModel scale={1.3} />
            </Stage>
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.4} />
        </Canvas>
      </div>
    </div>
  )
}

