import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [device, setDevice] = useState({
    isMobile: undefined,
    isTablet: undefined,
    isSDesktop: undefined,
    isMDesktop: undefined,
    isLDesktop: undefined,
  })
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    function handleResize() {
      let innerWidth = window.innerWidth
      // let innerHeight = window.innerHeight

      if (innerWidth < 576) {
        setDevice({ isMobile: true, isTablet: false, isSDesktop: false, isMDesktop: false, isLDesktop: false })
      } else if (innerWidth < 768) {
        setDevice({ isMobile: false, isTablet: true, isSDesktop: false, isMDesktop: false, isLDesktop: false })
      } else if (innerWidth > 991) {
        setDevice({ isMobile: false, isTablet: false, isSDesktop: true, isMDesktop: false, isLDesktop: false })
      } else if (innerWidth > 1199) {
        setDevice({ isMobile: false, isTablet: false, isSDesktop: false, isMDesktop: true, isLDesktop: false })
      } else if (innerWidth > 1280) {
        setDevice({ isMobile: false, isTablet: false, isSDesktop: false, isMDesktop: false, isLDesktop: true })
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
