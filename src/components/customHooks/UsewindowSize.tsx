import React, { useEffect, useState } from 'react'

export interface Size {
    width: number | undefined
    height: number | undefined
}

const UsewindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });  

  useEffect(() => {
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height:window.innerHeight,
        })
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize); //return cleanup function is not runnning on first rendering, only on the next render
  },[])

  return windowSize;
}

export default UsewindowSize