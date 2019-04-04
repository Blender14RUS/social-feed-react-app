import React, {Component} from 'react'

class Post extends Component{
    render() {
        const {post} = this.props
        const body = (<section className="card-text">{post.text}}</section>)
        const time = (<section>{post.created_at}</section>)
        const name = (<section>{post.user.name}</section>)
        return (
            <div className="card">
                <div className="card-header">
                    <strong>{name}</strong>
                    <time className="card-subtitle text-muted">{(new Date()).toDateString(time)}</time>
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div>
        )
    }

}

export default Post