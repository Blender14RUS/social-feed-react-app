import React, {PureComponent} from 'react'

export default class Post extends PureComponent{
    render() {
        const {post} = this.props
        const body = (<section className="card-text">{post.text}}</section>)
        const create_time = (<section>{new Date(post.created_at).toLocaleString()}</section>)
        const name = (<section>{post.user.name}</section>)
        return (
            <div className="card">
                <div className="card-header">
                    <strong>{name}</strong>
                    <time className="card-subtitle text-muted">{create_time}</time>
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div>
        )
    }

}
