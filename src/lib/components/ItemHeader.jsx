import React from 'react'
import Moment from 'moment'
import '../style.css'

export default function ItemHeader(props) {
    const time = Moment(new Date(props.publicationDate)).format('DD/MM/YYYY h:mm');
    return (
        <div>
            <span>
                <strong>
                    {props.name}
                </strong>
            </span>
            <span>&nbsp;</span>
            <span className="span">
                @{props.login}
            </span>
            <span>&nbsp;&middot;&nbsp;</span>
            <small className="span">
                {time}
            </small>
        </div>
    )
}