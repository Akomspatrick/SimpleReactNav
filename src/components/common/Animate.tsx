import Box from '@mui/material/Box';
import React, { useEffect } from 'react'

function Animate({sx, ...props}: any) {
    const [translateY, setTranslateY] = React.useState(1000)
    const [opacity, setOpacity] = React.useState(0)
    useEffect(() => { 
        const timeout = setTimeout(() => {
            setTranslateY(0)
            setOpacity(1)
        }, 1000);

        return () => {
            clearTimeout(timeout)
        }

    }, [])
 
    if (props.type === "fade") {
        return (
            <Box sx={{
                ...sx,
                transition: "opacity 1s ease",
                opacity: opacity,
                transitionDelay: props.delay+"s" || "unset",
            }}>
                {props.children}
          </Box>
              )
    }


  return (
      <Box sx={{
            ...sx,
            transition: "transform 1s ease,opacity 2s ease",
            transitionDelay: props.delay+"s" || "unset",
            transform: `translateY(${translateY}px)`,
            opacity: opacity,
        
      }}>
          {props.children   }
    </Box>
  )
}

export default Animate