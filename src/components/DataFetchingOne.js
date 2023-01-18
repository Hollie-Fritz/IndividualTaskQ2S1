import React, {useState, useEffect} from 'react';
import axios from 'axios'

function DataFetchingOne() {
    //loading flag
    const [loading, setLoading] = useState(true)
    //error message
    const [error, setError] = useState('')
    //hold the post from API endpoint
    const [post, setPost] = useState({})
    
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
         })
         .catch(error => {
            setLoading(false)
            setPost({})
            setError('something went wrong')
         })
    }, [])
    //^^ empty dependency array
    return (
        <div>
            {/* if busy loading the data then display 'loading' 
            else display post title*/}
            {loading ? 'loading' : post.title}
            {/* if error display error, else return null */}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne;