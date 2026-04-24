import {
    dirt,
    glass,
    grass,
    log,
    wood
} from './images'

import { TextureLoader, RepeatWrapping, NearestFilter } from 'three'

const dirtTexture = new TextureLoader().load(dirt)
const glassTexture = new TextureLoader().load(glass)
const grassTexture = new TextureLoader().load(grass)
const logTexture = new TextureLoader().load(log)
const woodTexture = new TextureLoader().load(wood)
const groundTexture = new TextureLoader().load(grass)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.repeat.set(100, 100)
groundTexture.magFilter = NearestFilter


export {
    dirtTexture,
    glassTexture,
    grassTexture,
    logTexture,
    woodTexture,
    groundTexture
}

