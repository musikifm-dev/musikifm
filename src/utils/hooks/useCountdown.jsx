// import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { padTo2Digits } from 'utils/helpers'

export default function useCountdown(initialTime, interval = 1000) {
  const [time, setTime] = useState(initialTime)
  const [minutes, setMinutes] = useState(Math.floor(initialTime / 60))
  const [seconds, setSeconds] = useState(initialTime % 60)
  const [state, setState] = useState()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const countdown = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1)
        setSeconds(time % 60)
        setMinutes(Math.floor(time / 60))
        setState(`${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`)
      }
    }, interval)

    if (time === 0) return

    return () => clearInterval(countdown)
  }, [time])

  return {time, state}
}

useCountdown.PropTypes = {
  initialTime: PropTypes.number,
  interval: PropTypes.number,
}
