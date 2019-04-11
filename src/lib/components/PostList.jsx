import React from 'react'
import Post from './Post'

const style = {
    listStyle: 'none',
}

export default function PostList(props) {
    const postElements = props.Posts.map(post => 
        <li key={ post.id } style={ style }>
            <Post Body = { post.text } CreateTime = { post.created_at } Name = { post.user.name } AvatarURL = { post.user.profile_image_url } Login = { post.user.screen_name } />
        </li>
    )
    return (
        <ol>
            { postElements }
        </ol>
    )
    
}
