import React from "react";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

export default function Counter(props) {
    return (
        <div onClick={props.onClick}>
            <ol>
                <li className="li">
                    <Badge className="badge" badgeContent={props.countsNewPosts} max={10} color="primary">
                        <MailIcon />
                    </Badge>
                </li>
            </ol>
        </div>
    )
}