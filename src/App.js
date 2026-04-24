import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas>
          <Sky 
          sunPosition={[5, 1, 8]}
          distance={4500000}
          inclination={0}
          azimuth={0.25}
        />
        </Canvas>
      </div>
    </>
  );
}

export default App;
