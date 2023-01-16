import {useState} from 'react'
function HookCounter() {
    //state variable initialized to 0
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* method set count is capable of updating the state variable  */}
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter