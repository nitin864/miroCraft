import { nanoid } from 'nanoid';
import { create } from 'zustand';

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [{
    key: nanoid(),
    position: [2, 0.5, 0],
    texture: 'dirt'
  },
  {
    key: nanoid(),
    position: [1, 0.5, 0],
    texture: 'wood'
  }
],

  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          position: [x, y, z],
          texture: prev.texture
        }
      ]
    }))
  },

  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {}
}))