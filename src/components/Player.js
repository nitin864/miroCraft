import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector2, Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"
 
const jump_force = 5

export const Player = () => {
   
    const actions  =  useKeyboard()
     
  
    const { camera } = useThree()
    useEffect(() => {
        camera.lookAt(0, 0, 0)
    }, [])

    const [ref,api] = useSphere(() => ({
        mass:1,
        type:'Dynamic',
        position:[0,1,0]
    }))

    const vel = useRef([0,1,0])
    useEffect(()=>{
        api.velocity.subscribe((v)=> vel.current = v)
    }, [api.velocity])

    const pos = useRef([0,0,0])
    useEffect(()=>{
        api.position.subscribe((p)=> pos.current = p)
    }, [api.position])

    useFrame(() => {
        
		camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        if(actions.jump && Math.abs(vel.current[1]) < 0.05){
            api.velocity.set(vel.current[0], jump_force,vel.current[0])
        }
    })

    return(
        <mesh ref={ref}></mesh>
    )
}