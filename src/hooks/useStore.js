import { nanoid } from 'nanoid';
import { create } from 'zustand';

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [{
    key: nanoid(),
    position: [10, 0.5, 10],
    texture: 'dirt'
  }],

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