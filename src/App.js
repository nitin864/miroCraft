
import './App.css';
import { Canvas } from '@react-three/fiber';
import { PointerLockControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
          <Sky 
          sunPosition={[5, 1, 8]}
          distance={4500000}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[5, 5, 5]} />
        <Physics >
          
          <Ground/>
        </Physics>
        </Canvas>
      </div>
    </>
  );
}

export default App;
