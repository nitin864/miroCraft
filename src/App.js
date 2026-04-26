
import './App.css';
import { Canvas } from '@react-three/fiber';
import { PointerLockControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FVP';
import { Cubes } from './components/Cubes';
import { TextureSelector } from './components/TextureSelector';
import { Menu } from './components/Menu';
 

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ position: [1,1,1], fov: 60 }}>
          
          <PointerLockControls/>
          <Sky 
          sunPosition={[5, 1, 8]}
          distance={4500000}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[5, 5, 5]} />
        <FPV/>
        <Physics >
          <Ground/>
          <Cubes/>
          <Player/>
        </Physics>
        </Canvas>
         <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        color: 'white',
        fontSize: '14px',
        fontFamily: 'monospace',
        opacity: 0.7
      }}>
        Made by Nitin
      </div>
      </div>
    </>
  );
}

export default App;
