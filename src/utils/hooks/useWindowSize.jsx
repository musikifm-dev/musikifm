import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [device, setDevice] = useState({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
    is1366: undefined,
    is1600: undefined,
    is1789: undefined,
    is1920: undefined,
  })
  const [screen, setScreen] = useState({
    is1366: undefined,
    is1600: undefined,
    is1789: undefined,
    is1920: undefined,
  })
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    function handleResize() {
      let innerWidth = window.innerWidth

      if (innerWidth < 768) {
        setDevice({ isMobile: true, isTablet: false, isDesktop: false })
      } else if (innerWidth < 1024) {
        setDevice({ isMobile: false, isTablet: true, isDesktop: false })
      } else if (innerWidth > 1024) {
        setDevice({ isMobile: false, isTablet: false, isDesktop: true })
      }

      if (innerWidth > 1366 && innerWidth < 1600) {
        setScreen({ is1366: true, is1600: false, is1789: false, is1920: false })
      } else if (innerWidth > 1600 && innerWidth < 1789) {
        setScreen({ is1366: false, is1600: true, is1789: false, is1920: false })
      } else if (innerWidth > 1789 && innerWidth < 1920) {
        setScreen({ is1366: false, is1600: false, is1789: true, is1920: false })
      } else if (innerWidth > 1920) {
        setScreen({ is1366: false, is1600: false, is1789: false, is1920: true })
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
    ...screen,
  }
}
