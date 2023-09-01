import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function Magnetic({children}) {
    // Creating ref
    const ref = useRef(null)

    // Initializing state --> intialize the position of the div
    const [position, setPosition] = useState({x: 0, y: 0})

    const mouseMove = (event) => {
        // Getting the X and Y coordinates of the mouse pointer
        const {clientX, clientY} = event

        // Getting the dimensions of the target element reference
        const {width, height, left, top} = ref.current.getBoundingClientRect()
        // getting the center of the reference element
        const x = clientX - (left + width /2)
        const y = clientY - (top + height /2)

        // Set the position of the div according to the logic above
        setPosition({x, y})
    }

    // Reset position when the mouse leaves the element
    const mouseLeave = () => {
        setPosition({x: 0, y: 0})
    }

    // destructuring the x and y values from the position state
    const {x ,y} = position

    return (
        <motion.div 
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        ref={ref}
        animate={{x, y}}
        transition={{ type: "spring" }}
        >
            {children}
        </motion.div>
    )
}