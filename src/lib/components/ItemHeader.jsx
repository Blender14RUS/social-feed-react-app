import React from 'react'
import ReactTimeAgo from 'react-time-ago/tooltip'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)

const spanStyle = {
    fontSize: '14px',
    color: 'grey',
}

export default function ItemHeader(props) {
    const time = new Date(props.publicationDate);
    return (
        <div>
            <span>
                <strong>
                    {props.name}
                </strong>
            </span>
            <span>&nbsp;</span>
            <span style={spanStyle}>
                @{props.login}
            </span>
            <span>&nbsp;&middot;&nbsp;</span>
            <small style={spanStyle}>
                <ReactTimeAgo date={time}/>
            </small>
        </div>
    )
}