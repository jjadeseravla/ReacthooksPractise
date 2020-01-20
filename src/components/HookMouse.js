import React, {useState, useEffect} from 'react'

function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  //effect is called after every render unless you specify the
  //dependency array

  //add an event listener for the mouse event
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
  }, [])
  //want effect to be called once on initial render only so put []
  //this effect doesnt depent on any state or props
  //mimicked component did mount

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
