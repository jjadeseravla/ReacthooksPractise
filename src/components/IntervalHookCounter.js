import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
      setCount(count + 1)
    }

    useEffect(() => {
      const interval = setInterval(tick, 1000)
      //replicates componentWillUnmount for the clean up
      return () => {
        clearInterval(interval)
      }
    }, [count])
    //useEffect fires after every render, so if you only want it to fire
    //once you give [] as second argument so its like componentDidMount
    //so interval is only set up once after initial render


    return (
      <div>
        {count}
      </div>
    )
  }

export default IntervalHookCounter
