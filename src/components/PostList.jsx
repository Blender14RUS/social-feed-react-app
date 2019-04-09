import React from 'react'
import Post from './Post'

const style = {
    listStyle: 'none',
}

export default function PostList({ posts }) {
    console.log(posts)
    const postElements = posts.map(post => 
        <li key={post.id} style={style}>
            <Post body={post.text} createTime={post.created_at} name={post.user.name} avatarURL={post.user.profile_image_url} login={post.user.screen_name}/>
        </li>
    )
    return (
        <ol>
            {postElements}
        </ol>
    )
    
}
