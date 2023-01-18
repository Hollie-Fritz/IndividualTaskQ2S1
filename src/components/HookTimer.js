import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const[timer, setTimer] = useState(0)
    const intervalRef = useRef()

    //set timer
    //mimic the function of didMount and willUnmount
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            // clean up
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
           Hook Timer - {timer} 
           <button onClick={() => clearInterval(intervalRef.current)} >Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer