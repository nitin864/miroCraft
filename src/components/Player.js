import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

export const Player = () => {
    const { camera } = useThree()
    useEffect(() => {
        camera.lookAt(0, 0, 0)
    }, [])

    return null
}