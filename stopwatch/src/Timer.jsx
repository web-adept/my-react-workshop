import { useEffect, useState } from 'react'
import { formatter } from './formatter'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [runningStatus, setRunningStatus] = useState(false)

  useEffect(() => {
    let intervalId
    if (runningStatus)
      intervalId = setInterval(() => setSeconds((secs) => secs + 1), 1000)

    return () => clearInterval(intervalId)
  }, [runningStatus])

  if (seconds >= 60) {
    setMinutes((mins) => mins + 1)
    setSeconds(0)
  }

  if (minutes >= 60) {
    setHours((hours) => hours + 1)
    setSeconds(0)
    setMinutes(0)
  }

  const handleReset = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  return (
    <div className="timer-container">
      <div className="time">
        {formatter(hours)}:{formatter(minutes)}:{formatter(seconds)}
      </div>
      <button className="start" onClick={() => setRunningStatus(true)}>
        Start
      </button>
      <button className="stop" onClick={() => setRunningStatus(false)}>
        Stop
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default Timer
