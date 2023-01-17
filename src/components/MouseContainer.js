import React, {useState} from 'react';
import HookMouse from './HookMouse';

function MouseContainer(props) {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}> toggle display</button>
            {display && <HookMouse/>}
        </div>
    );
}

export default MouseContainer;