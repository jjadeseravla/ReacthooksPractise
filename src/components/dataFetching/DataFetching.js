import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]) //initialise posts with []

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts') //get request returns a promise
        .then(res => {
          console.log(res);
          setPosts(res.data) //update the posts state variable and render in the UI
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    return (
      <div>
        <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
        </ul>
      </div>
    )
  }

export default DataFetching

//toggledisplay unmounts the component from the DOM
