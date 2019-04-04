import React from 'react'
import Post from '../Post'
import './style.css'

export default function PostList({ posts }) {
    const postElements = posts.map(post => 
        <li key= {post.id} className="post-list_li">
            <Post post = {post}/>
        </li>
    )
    return (
        <ul>
            {postElements}
        </ul>
    )
    
}