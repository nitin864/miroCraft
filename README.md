# 🧱 microCraft

live: https://mirocraft.vercel.app/

A Minecraft-inspired 3D browser game built with React, Three.js, and React Three Fiber. Walk around a 3D world, place and remove blocks, switch textures, and save your world — all in the browser.

---

## 🎮 Demo

> Run locally — see setup instructions below.

---

## 🕹️ Controls

### Movement
| Key | Action |
|-----|--------|
| `W` | Move Forward |
| `S` | Move Backward |
| `A` | Move Left |
| `D` | Move Right |
| `Space` | Jump |

### Blocks
| Action | How |
|--------|-----|
| Place block | Left Click on a block face |
| Remove block | `Alt + Click` on a block |

### Texture Selection
| Key | Texture |
|-----|---------|
| `1` | Dirt |
| `2` | Grass |
| `3` | Glass |
| `4` | Wood |
| `5` | Log |

### Menu
| Button | Action |
|--------|--------|
| `Save` | Saves world to localStorage |
| `Reset` | Clears all blocks |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/microcraft.git
cd microcraft

# Install dependencies
npm install

# Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Click on the screen to lock your mouse pointer and start playing.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Cube.js           # Single block — handles click, place, remove logic
│   ├── Cubes.js          # Renders all blocks from store
│   ├── Ground.js         # Physics ground plane with click to place
│   ├── Player.js         # First person player with physics & movement
│   ├── FVP.js            # First person camera view
│   ├── TextureSelector.js # HUD showing active texture
│   └── Menu.js           # Save & Reset buttons
├── hooks/
│   ├── useKeyboard.js    # Tracks all keyboard inputs
│   └── useStore.js       # Zustand global state — cubes, texture, actions
├── images/
│   ├── textures.js       # Three.js texture loaders
│   ├── images.js         # Image imports for HUD
│   ├── dirt.jpg
│   ├── grass.jpg
│   ├── glass.png
│   ├── wood.png
│   └── log.jpg
├── App.js                # Root component — Canvas, Physics, Sky setup
└── App.css               # Global styles
```

---

## 🛠️ Tech Stack

| Library | Version | Purpose |
|---------|---------|---------|
| React | 19 | UI framework |
| Three.js | 0.184 | 3D rendering |
| @react-three/fiber | 9 | React renderer for Three.js |
| @react-three/drei | 10 | Helpers — Sky, PointerLockControls |
| @react-three/cannon | 6 | Physics engine — gravity, collisions |
| Zustand | 5 | Global state management |
| nanoid | 5 | Unique keys for each cube |

---

## ⚙️ How It Works

### Placing Blocks
Each cube has 6 faces. When you click a face, `faceIndex` tells which face was clicked. A new cube is placed adjacent to that face:

```
Face 0 → +X (right)
Face 1 → -X (left)
Face 2 → +Y (top)
Face 3 → -Y (bottom)
Face 4 → +Z (front)
Face 5 → -Z (back)
```

### Removing Blocks
Hold `Alt` and click any block to remove it.

### State Management
All cubes and active texture are stored in Zustand. Each cube has:
```js
{
  key: 'unique-id',   // nanoid
  pos: [x, y, z],    // position in 3D space
  texture: 'dirt'     // active texture at time of placement
}
```

### World Persistence
Clicking **Save** writes all cubes to `localStorage`. On next page load, the world is restored automatically.

---

## 📦 Available Scripts

```bash
npm start       # Run dev server at localhost:3000
npm run build   # Build for production
npm test        # Run tests
```

---

## 🐛 Known Issues / Debug Tips

- If blocks are not placing correctly, make sure `e.stopPropagation()` is present in click handlers to prevent event bubbling.
- Mouse pointer must be locked (click the screen) before controls work.
- If world doesn't load on refresh, check `localStorage` for `cubes` key.

---

## 🙌 Credits

Built with ❤️ using React Three Fiber ecosystem. 
