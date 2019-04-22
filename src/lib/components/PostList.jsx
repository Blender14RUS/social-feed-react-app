import React from 'react'
import Post from './Post'

export default function PostList(props) {
    const postElements = props.posts.map(post => 
        <li key={post.id} className="li">
            <Post {...post} />
        </li>
    )
    return (
        <ol>
            {postElements}
        </ol>
    )
}