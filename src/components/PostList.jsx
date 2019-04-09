import React from 'react'
import Post from './Post'

const style = {
    listStyle: 'none',
}

export default function PostList(props) {
    console.log(props.posts)
    const postElements = props.posts.map(post => 
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
