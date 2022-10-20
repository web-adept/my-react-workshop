import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { formatter } from './formatter'

const time = {
  hours: Array.from(Array(25).keys()),
  minutes: Array.from(Array(61).keys()),
  seconds: Array.from(Array(61).keys()),
}

const Timer = () => {
  const [runningStatus, setRunningStatus] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // const hourSelect = useRef()

  useEffect(() => {
    let intervalId

    if (runningStatus) {
      intervalId = setInterval(() => {
        setSeconds((sec) => sec - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [runningStatus])

  if (seconds === -1) {
    setMinutes((min) => min - 1)
    setSeconds(59)
  }

  if (minutes === -1) {
    setHours((hour) => hour - 1)
    setMinutes(59)
    setSeconds(0)
  }

  if (hours === -1) {
    setMinutes(0)
    setHours(0)
    setSeconds(0)
    setRunningStatus(false)
  }

  const handleStart = (e) => {
    e.preventDefault()

    setRunningStatus(true)
    // hourSelect.current.value = 0
  }
  const handleStop = (e) => {
    e.preventDefault()

    setRunningStatus(false)
  }

  return (
    <>
      <div className="timer-container">
        {formatter(hours)}:{formatter(minutes)}:{formatter(seconds)}
      </div>

      <form className="form">
        <select
          id="hours"
          name="hours"
          onChange={(e) => setHours(e.target.value)}
        >
          {time.hours.map((el, i) => {
            return (
              <option key={i} value={el}>
                {formatter(el)}
              </option>
            )
          })}
        </select>
        <select
          // ref={hourSelect}
          id="minutes"
          name="minutes"
          onChange={(e) => setMinutes(e.target.value)}
        >
          {time.minutes.map((el, i) => {
            return (
              <option key={i} value={el}>
                {formatter(el)}
              </option>
            )
          })}
        </select>
        <select
          id="seconds"
          name="seconds"
          onChange={(e) => setSeconds(e.target.value)}
        >
          {time.seconds.map((el, i) => {
            return (
              <option key={i} value={el}>
                {formatter(el)}
              </option>
            )
          })}
        </select>
      </form>
      {!runningStatus ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
    </>
  )
}

export default Timer
