import React, {useReducer, useEffect} from 'react';
import axios from 'axios'

//declare variables as properties of a single object
//group related state variables together
const initialState = {
    loading: true,
    error: '',
    post: {}
}

//reducer function
//transitions grouped together
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return{
                loading: false,
                post: {},
                error:'something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    //returns pair of values: current state and dispatch method
    const [state, dispatch] = useReducer(reducer, initialState)
    //http call
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
         })
         .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
         })
    }, [])
    //^^ empty dependency array

    return (
        <div>
            {/* if busy loading the data then display 'loading' 
            else display post title*/}
            {state.loading ? 'loading' : state.post.title}
            {/* if error display error, else return null */}
            {state.error ? state.error : null}    
        </div>
    )
}

export default DataFetchingTwo