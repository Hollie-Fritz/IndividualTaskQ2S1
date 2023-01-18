import React, {useState, useMemo} from 'react'

function Counter() {
    //counter variables
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    
    //don't calculate this when counterTwo is called on because of optimization
    const isEven = useMemo(() => {
        let i = 0
        while(i<2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    



    return (
        <div>
            <div>
                <button onClick={incrementOne}>
                    Count One - {counterOne}
                </button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>
                    Count Two - {counterTwo}
                </button>
            </div>
            
        </div>
    )
}

export default Counter