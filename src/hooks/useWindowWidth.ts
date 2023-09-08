import { useLayoutEffect, useState } from "react"

export function useWindowWidth(): { windowWidth: number } {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useLayoutEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { windowWidth }
}
