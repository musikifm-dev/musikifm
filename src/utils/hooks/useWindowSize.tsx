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
      // let innerHeight = window.innerHeight

      if (innerWidth < 576) {
        setDevice({ isMobile: true, isTablet: false, isDesktop: false })
      } else if (innerWidth < 768) {
        setDevice({ isMobile: false, isTablet: true, isDesktop: false })
      } else if (innerWidth > 992) {
        setDevice({ isMobile: false, isTablet: false, isDesktop: true })
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
