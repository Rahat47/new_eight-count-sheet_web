import { isValidMotionProp, motion } from "framer-motion"
import { forwardRef } from "@chakra-ui/react"

export const createMotionElement = (Element) => {

    if (!Element) {
        throw new Error("Element is required")
    }

    const MotionElement = motion.custom(
        forwardRef((props, ref) => {
            const chakraProps = Object.fromEntries(
                // do not pass framer props to DOM element
                Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
            )
            return <Element ref={ref} {...chakraProps} />
        }),
    )

    return MotionElement
}