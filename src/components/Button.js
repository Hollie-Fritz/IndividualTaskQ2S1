import React from 'react'

function Button({handleClick,children}) {
    console.log('rendering button - ', children)
    return(
        <button onClick={handleClick}>
            {children}
        </button>
    )
}
//React.memo is a higher order component that prevents a functional component
//from being rerendered if it's props or states do not change
export default React.memo(Button)