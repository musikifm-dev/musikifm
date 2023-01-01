import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [device, setDevice] = useState({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
  })
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    function handleResize() {
      let innerWidth = window.innerWidth

      if (innerWidth < 768) {
        setDevice({ isMobile: true, isTablet: false, isSDesktop: false, isMDesktop: false, isLDesktop: false })
      } else if (innerWidth < 1024) {
        setDevice({ isMobile: false, isTablet: true, isSDesktop: false, isMDesktop: false, isLDesktop: false })
      } else if (innerWidth > 1024) {
        setDevice({ isMobile: false, isTablet: false, isSDesktop: true })
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      handleResize && window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
    ...device,
  }
}
