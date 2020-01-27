import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState([]) //initialise posts with []
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
      setIdFromButtonClick(id)
    }

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //get request returns a promise
        .then(res => {
          console.log(res);
          setPost(res.data) //update the posts state variable and render in the UI
        })
        .catch(err => {
          console.log(err);
        })
    }, [idFromButtonClick]) //we depend on the idFromButtonClick for it to change
    //we can get a single post by passing in the id chosen by the user

//state variable that will only change on a button click

    return (
      <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={handleClick}> Fetch Post</button>
        <div>{post.title}</div>
      </div>
    )
  }

export default DataFetching

//toggledisplay unmounts the component from the DOM
