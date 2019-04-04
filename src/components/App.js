import React from 'react'
import PostList from './PostList'
import posts from '../kindle.json'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container"> 
            <PostList posts={posts}/>
        </div>
    )
}

export default App